<?php

namespace App\Controller;

use App\Data\filtre;
use App\Entity\Image;
use App\Entity\Annonce;
use App\Form\ContactType;
use App\Form\SearchAnnonceType;
use App\Form\FiltreFormType;
use App\Service\CallApiService;
use App\Repository\AnnonceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\HttpKernel\KernelInterface;
use App\Service\ApiPayOut;
use App\Service\ApiWallet;
use App\Service\ApiIban;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\User;
use App\MailJet\Mail;
use App\Service\ApiUser;
use App\Form\ForgetPasswordForm;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use App\Security\AppCustomAuthenticator;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use \Mailjet\Resources;
use SymfonyCasts\Bundle\VerifyEmail\VerifyEmailHelperInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;


class HomeController extends AbstractController
{
  private $entityManager;
  private $annonceRepository;

  public function __construct(ManagerRegistry $managerRegistry,EntityManagerInterface $entityManager,ApiPayOut $ApiPayOut, ApiWallet $ApiWallet, ApiIban $ApiIban, AnnonceRepository $annonceRepository, KernelInterface $kernel)
  {   
    $this->annonceRepository = $annonceRepository;
    $this->entityManager = $entityManager;
    $this->managerRegistry = $managerRegistry;


    $this->isExpired();
    $this->tracingLivraison($kernel,$ApiPayOut,$ApiWallet,$ApiIban);
  }
      // requete de tracing des livraisons a param??trer sur serveur (cron ou windows tache) avec commande => symfony console app:annonce:tracing
  function tracingLivraison(KernelInterface $kernel,ApiPayOut $ApiPayOut,ApiWallet $ApiWallet, ApiIban $ApiIban)
  {
      $application = new Application($kernel);
      $application->setAutoExit(false);
      $annonces = $this->annonceRepository->findAll();

      $input = new ArrayInput([
          'command' => 'app:annonce:tracing',
      ]);

      // You can use NullOutput() if you don't need the output
      $output = new BufferedOutput();
      $application->run($input, $output);

      // return the output, don't use if you used NullOutput()
      $content = $output->fetch();
      // return new Response(""), if you used NullOutput()

      // Si pas de livraison on ne fait rien
      if ($content == '[OK] Livraisons effectu??es "0"') {

        } else {
        // Si livraison on envoie la requete de transaction
          foreach($annonces as $annonce) {
            if(($annonce->getStatutLivraison() == true) && ($annonce->getToken() != '')) {
              $idAcheteur = intval($annonce->getAcheteur());
              $BuyerIdMango = $idAcheteur;
              $BuyerWallet = $ApiWallet->getWallet($BuyerIdMango);
              $BuyerWalletId = $BuyerWallet['Id'];
              $SellerId = $annonce->getUser()->getIdMangoPay();
              $SellerWallet = $ApiWallet->getWallet($SellerId);
              $SellerBankAccount = $ApiIban->GetLastBankAccount($SellerId);
              $Transfer = $ApiPayOut->Transfer($BuyerIdMango, $SellerId, $BuyerWalletId, $SellerWallet['Id'], $annonce->getPriceOrigin());
              if($Transfer->Status === "ERROR"){
                return $this->redirectToRoute('errors', [
                  'ResultCode' => $Transfer->ResultCode
                ]);
              } else if($Transfer->Status === "SUCCEEDED") {
                $PayOut = $ApiPayOut->PayOut($SellerId, $SellerWallet['Id'], $SellerBankAccount['Id'], $annonce->getPriceOrigin());
    
                if($PayOut->Status === "ERROR") {
                  return $this->redirectToRoute('errors', [
                    'ResultCode' => $PayOut->ResultCode
                  ]);
                }
              $annonce->setStatutLivraison(false);
              $annonce->setStatus("delivered");

              $entityManager = $this->managerRegistry->getManager();
              $entityManager->persist($annonce);
              $entityManager->flush();
      
            }}}
        }
  }

  function isExpired() {
    $annonces = $this->annonceRepository->findAll();
    $today = new \DateTime();
    
    foreach($annonces as $annonce) {
      if($annonce->getSold() == false) {
        $diff = $annonce->getDateExpiration()->diff($today);

        if($diff->invert == 0){
          $this->annonceRepository->remove($annonce);
          $this->entityManager->flush();
        } 
      } else {
        $todayStr = $annonce->getDateExpiration()->format("Y/m/d");
        $todayTime = strtotime($todayStr);
        $dateTime = strtotime("+5 day", $todayTime);

        if($today->format("Y-m-d") == date("Y-m-d", $dateTime)) {
          $this->annonceRepository->remove($annonce);
          $this->entityManager->flush();
        }
      }
    }
  }   

  /**
   * @Route("/", name="app_homepage")
   * @param Annonce $annonce
   */
  public function index(AnnonceRepository $annoncesRepository, Request $request, PaginatorInterface $paginator): Response
  {
    $limit = 10;
    $page = (int)$request->query->get("page", 1);

    $total = $annoncesRepository->getTotalAnnonces();
    $lastAnnonces = $annoncesRepository->getLastAnnonces();
    $images = $this->managerRegistry->getRepository(Image::class)->findAll();

    $annoncesAll = $this->managerRegistry->getRepository(Annonce::class)->findAll();
  
    $form = $this->createForm(SearchAnnonceType::class);
    // $search = $form->handleRequest($request);
    $form->handleRequest($request);
    
    $annonces = [];

    if ($form->isSubmitted() && $form->isValid()) {
      // On recherche les annonces correspondant aux mots cl??s
      // $annonce = $annoncesRepository->search(
      //   $search->get('title')->getData()
      // )
      $title = $form->get('title')->getData();

      if ($title != "") {
        $annonces =  $this->managerRegistry->getRepository(Annonce::class)->findBy(['title'=>$title]);
      } else {
        // $annonces = $this->managerRegistry->getRepository(Annonce::class)->findAll();
        $annonces = $annoncesRepository->getPaginatedAnnonces($page, $limit);
      }
    }

    // $annonces = $paginator->paginate(
    //     $annonces, /* query NOT result */
    //     $request->query->getInt('page', 1),
    //     6
    // );
      
    return $this->render('home/index.html.twig', [
      'controller_name' => 'HomeController',
      'annonces' => $annonces,
      'lastAnnonces' => $lastAnnonces,
      'annoncesAll' => $annoncesAll,
      'total' => $total,
      'limit' => $limit, 
      'page' => $page,
      'form' => $form->createView(),
      'images' => $images
    ]);
  }

  /**
   * @Route("/contact", name="contact")
   */
  public function contact(Request $request,MailerInterface $mailer, VerifyEmailHelperInterface $verifyEmailHelper): Response
  {
    $form = $this->createForm(ContactType::class);
    $form->handleRequest($request);

    if($form->isSubmitted() && $form->isValid()) {

      $user = $form->get('name')->getData();
      $mail = $form->get('email')->getData();
      $object = $form->get('subject')->getData();
      $message = $form->get('message')->getData();
        // do anything else you need here, like send an email
      
            // creation du mail
        $email = (new TemplatedEmail())
        ->from($mail)
        -> to('dev64splatoon@gmail.com')
  
        //->cc('cc@example.com')
        ->bcc('dev64splatoon@gmail.com')
        //->replyTo('fabien@example.com')
        //->priority(Email::PRIORITY_HIGH)
        ->subject('Message re??u!')
        // path of the Twig template to render
        ->htmlTemplate('emails/message.html.twig')
  
        // pass variables (name => value) to the template
        ->context([
            'expiration_date' => new \DateTime('+7 days'),
            'user' => $user ,
            'message' => $message,
            'object' => $object,
            'mail' => $mail,
        ]);
  
        $mailer->send($email);
  
        return $this->render('home/contact.html.twig', [
          'form' => $form->createView(),
          'message' => 'Votre message est envoy??! Nous vous r??pondrons d??s que possible.'
        ]);
    
      };

    return $this->render('home/contact.html.twig', [
      'form' => $form->createView(),
      'message' => ''
    ]);
  }

  /**
   * @Route("/about", name="about")
   */
  public function about(): Response
  {
    return $this->render('home/about.html.twig', [
      'controller_name' => 'HomeController',
    ]);
  }

    /**
   * @Route("/products", name="products")
   */
  public function products(AnnonceRepository $annoncesRepository, Request $request, PaginatorInterface $paginator): Response
  {

    $data = new filtre();
    $data->page = $request->get('page', 1);
    $form = $this->createForm(FiltreFormType::class, $data);
    $form->handleRequest($request);
    $totalAnnonces = $annoncesRepository->getTotalAnnonces();
    $images = $this->managerRegistry->getRepository(Image::class)->findAll();


    [$min,$max] = $annoncesRepository->findMinMax($data);

    $annonces = $annoncesRepository->findSearch($data);
    $totalAnnonces = count($annonces);

    return $this->render('home/produits.html.twig', [
      'controller_name' => 'HomeController',
      'annonces' => $annonces,
      'total' => $totalAnnonces,
      'form' => $form->createView(),
      'images' => $images,
      'min' => $min,
      'max' => $max
    ]);
  }

  /**
   * @Route("/validationinscription", name="validationescription")
   */
  public function signup2(): Response
  {
    return $this->render('home/signup2.html.twig', [
      'controller_name' => 'HomeController',
    ]);
  }

  /**
   * @Route("/validationpaiement", name="validationpaiement")
   */
  public function validation(): Response
  {
    return $this->render('home/validation.html.twig', [
      'controller_name' => 'HomeController',
    ]);
  }

  /**
   * @Route("/mentionslegales", name="mentionslegales")
   */
  public function mentions(): Response
  {
    return $this->render('home/mentions.html.twig', [
      'controller_name' => 'HomeController',
    ]);
  }

  /**
   * @Route("/faq", name="faq")
   */
  public function faq(): Response
  {
    return $this->render('home/faq.html.twig', [
      'controller_name' => 'HomeController',
    ]);
  }

  /**
   * @Route("/cgu", name="cgu")
   */
  public function cgu(): Response
  {
    return $this->render('cgu/cgu.html.twig', [
      'controller_name' => 'HomeController',
    ]);
  }

  /**
    * @Route("/error404", name="error404")
    */
  public function error404(): Response
  {
    return $this->render('error404/error404.html.twig', [
      'controller_name' => 'HomeController'
    ]);
  }

  /**
    * @Route("/errors", name="errors")
    */
  public function error(): Response
  {
    $Code = $_GET['ResultCode'];

    $Messages = [
      '001999' => [
        'Error' => '001999',
        'Message' => 'Erreur d\une op??ration g??n??rale.',
        'MoreInfo' => '<p>Un accident ou un probl??me de connexion est survenu et a ferm?? toutes les transactions.</p>' 
      ],
      '001013' => [
        'Error' => '001013',
        'Message' => 'Montant de transaction non valide',
        'MoreInfo' => '<p>La banque de l\'utilisateur a rejet?? la transaction. Les utilisateurs doivent contacter leur banque pour plus d\'informations.</p>'        
      ],
      '001034' => [
        'Error' => '001034',
        'Message' => 'L\'utilisateur a laiss?? la session de paiement s\'expirer sans payer.',
        'MoreInfo' => '<p>L\'utilisateur ?? laisser la session s\'expirer dans la page de paiement.</p><p>Donc le PayIn Web a failli.</p>'        
      ],
      '101001' => [
        'Error' => '101001',
        'Message' => 'L\'utilisateur n\'a pas compl??t?? la transaction.',
        'MoreInfo' => '
          <p>L\'utilisateur n\'a pas saisi certaines des informations obligatoires.</p>
          <p>Tous les champs devraient ??tre compl??t?? pendant les premi??res minutes du paiement.</p>'        
      ],
      '105101' => [
        'Error' => '105101',
        'Message' => 'Num??ro de la carte n\'est pas valide.',
        'MoreInfo' => '
          <p>Le num??ro de la carte saisi ne correspond pas au num??ro r??elle de la carte.</p>
          <p>Le paiement n\'a pas ??t?? effectu??.</p>'        
      ],
      '105102' => [
        'Error' => '105102',
        'Message' => 'Le nom du propri??taire de la carte n\'est pas valide.',
        'MoreInfo' => '<p>Le nom du propri??taire de la carte saisi ne correspond pas au nom r??elle du propri??taire de la carte.</p>'        
      ],
      '105103' => [
        'Error' => '105103',
        'Message' => 'Le code PIN n\'est pas valide.',
        'MoreInfo' => '
          <p>Le Num??ro d\'Identification Personnel n\'est pas valide.</p>
          <p>L\'utilisateur devrait contr??ler les informations de la carte et r??essayer.</p>'        
      ],
      '105104' => [
        'Error' => '105104',
        'Message' => 'Le format du PIN n\'est pas valide.',
        'MoreInfo' => '
          <p>Le format du Num??ro d\'Identification Personnel n\'est pas valide.</p>
          <p>L\'utilisateur devrait contr??ler les informations de la carte et r??essayer.</p>'        
      ],
      '101101' => [
        'Error' => '101101',
        'Message' => 'Transaction refus?? par la banque (N\'honore pas)',
        'MoreInfo' => '
          <p>L\'erreur "N\'honore pas" est un message depuis la banque.</p>
          <p>Vous pouvez le recevoir pour diff??rentes raisons:</p>
          <ul>
            <li>Le montant maximal d??pens?? par mois a ??t?? atteint sur cette carte;</li>
            <li>Le montant maximal d??pens?? sur internet par mois a ??t?? atteint sur cette carte;</li>
            <li>Il n\'y a plus de fonds sur cette carte.</li>
          </ul>'        
      ],
      '101102' => [
        'Error' => '101102',
        'Message' => 'Transaction refus?? par la banque (Limite du montant)',
        'MoreInfo' => '
          <p>Vous aurez cet erreur si l\'utilisateur a atteint la limite du montant de la banque.</p>
          <p>Peut ??tre pour:</p>
          <ul>
            <li>Le montant pr??autoris?? atteint;</li>
            <li>Le montant maximal d??pens?? par mois a ??t?? atteint sur cette carte;</li>
            <li>Le montant maximal d??pens?? sur internet par mois a ??t?? atteint sur cette carte.</li>
          </ul>'        
      ],
      '101103' => [
        'Error' => '101103',
        'Message' => 'Transaction refus?? par le terminal',
        'MoreInfo' => '
          <p>Le refus du terminal peut ??tre connect?? ?? la carte de l\'utilisateur.</p>
          <p>L\'utilisateur devrait essayer d\'utiliser une m??thode de paiement ou une carte diff??rente.</p>'        
      ],
      '101104' => [
        'Error' => '101104',
        'Message' => 'Transaction refus?? par la banque (La limite de la carte est atteinte',
        'MoreInfo' => ''        
      ],
      '101105' => [
        'Error' => '101105',
        'Message' => 'La carte a expir??e',
        'MoreInfo' => ''        
      ],
      '101106' => [
        'Error' => '101106',
        'Message' => 'La carte n\'est pas active',
        'MoreInfo' => '<p>La carte n\'est pas active selon la banque et donc ne peut pas ??tre utilis??e</p>'        
      ],
      '101110' => [
        'Error' => '101110',
        'Message' => 'Le paiement a ??t?? refus??',
        'MoreInfo' => '
          <p>En raison d\'un probl??me le virement bancaire a ??t?? refus?? ou annul??. </p>
          <p>Veuillez essayer ?? nouveau, s\'il vous pla??t.</p>'        
      ],
      '101111' => [
        'Error' => '101111',
        'Message' => 'Num??ro maximal de tentatives atteint.',
        'MoreInfo' => '<p>Trop de tentatives pour la m??me transaction.</p>'        
      ],
      '101112' => [
        'Error' => '101112',
        'Message' => 'Montant maximal d??pass??',
        'MoreInfo' => '<p>Il s\'agit d\'une limite de carte sur le montant d??pens??.</p>'        
      ],
      '101113' => [
        'Error' => '101113',
        'Message' => 'Utilisations maximales d??pass??es',
        'MoreInfo' => '
          <p>Tentatives maximales avec cette carte atteint.</p>
          <p>Veuillez essayer ?? nouveau apr??s 24 heures.</p>'        
      ],
      '101115' => [
        'Error' => '101115',
        'Message' => 'Limite de d??bit d??pass??e.',
        'MoreInfo' => '<p>Il s\'agit de la limitation du montant d??pens??.</p>'        
      ],
      '101116' => [
        'Error' => '101116',
        'Message' => 'Limite de montant',
        'MoreInfo' => '
          <p>Le nombre de transaction quotidienne autoris?? a ??t?? d??pass??.</p>
          <p>Veuillez nous contacter pour r??gler le num??ro de transaction quotidienne.</p>'   
      ],
      '002996' => [
        'Error' => '002996',
        'Message' => 'Bloqu?? en raison de limitations du Solde de l\'Utilisateur (Montant Maximum D??tenu atteint)',
        'MoreInfo' => ''        
      ],
      '101199' => [
        'Error' => '101199',
        'Message' => 'Transaction refus??',
        'MoreInfo' => '
          <p>La transaction a ??t?? refus?? par la banque.</p>
          <p>Veuillez contacter votre banque pour avoir plus d\'informations sur le sujet.</p>'        
      ],
      '001599' => [
        'Error' => '001599',
        'Message' => 'Erreur de traitement du jeton',
        'MoreInfo' => '<p>Le jeton n\'a pas ??t?? cr???? car il y avait un probl??me - veuillez regarder si tous les param??tres ont ??t?? bien saisis.</p>'        
      ],
      '105299' => [
        'Error' => '105299',
        'Message' => 'Erreur de saisie du jeton',
        'MoreInfo' => '
          <p>Il s\'agit d\'une erreur qui signifie que MangoPay a re??u une erreur pendant la soumission du jeton ?? la banque.</p>
          <p>Souvent l\'erreur est retourn?? car il y a trop de temps entre la requ??te de la registration de la carte et la premi??re action fait avec cette carte.</p>
          <p>Tout ?? fait, vous avez maximum 20 minutes pour cr??er le premier Pre-auth ou PayIn.</p>'        
      ],
      '105202' => [
        'Error' => '105202',
        'Message' => 'Num??ro de la carte : format non valide',
        'MoreInfo' => '<p>Cet erreur est retourn?? si le format du num??ro de la carte est erron?? (dans la registration de la carte).</p>'        
      ],
      '105203' => [
        'Error' => '105203',
        'Message' => 'Date d\'expiration : manquant ou format non valide',
        'MoreInfo' => '<p>Cet erreur est retourn?? si la date d\'expiration est erron?? (dans la registration de la carte).</p>.'        
      ],
      '105206' => [
        'Error' => '105206',
        'Message' => 'Donn??e de l\'enregistrement : format non valide',
        'MoreInfo' => '
          <p>Cet erreur est retourn?? si la donn??e envoy??e au serveur du jeton n\'est pas correcte.</p>
          <p>Vous pouvez obtenir cet erreur lorsque vous essayez de modifier l\'Objet de l\'Enregistrement de la Carte avec la Donn??e de l\'Enregistrement (obtenue depuis le serveur du jeton (tokenisation)).</p>'        
      ],
      '02625' => [
        'Error' => '02625',
        'Message' => 'Num??ro de la carte n\'est pas valide.',
        'MoreInfo' => ''        
      ],
      '02626' => [
        'Error' => '02626',
        'Message' => 'Date n\'est pas valide. Utilis?? le format MMAA',
        'MoreInfo' => ''        
      ],
      '02627' => [
        'Error' => '02627',
        'Message' => 'Num??ro CVX n\'est pas valide.',
        'MoreInfo' => ''        
      ],
      '02101' => [
        'Error' => '02101',
        'Message' => 'Erreur Interne',
        'MoreInfo' => '
          <p>Il y a un probl??me dans le serveur du jeton (tokenisation) (c??t?? PSP).</p> 
          <p>Veuillez nous contacter pour r??soudre ce probl??me.</p>'        
      ],
      '09102' => [
        'Error' => '09102',
        'Message' => 'Compte est bloqu?? ou inactif',
        'MoreInfo' => ''        
      ],
      '01902' => [
        'Error' => '01902',
        'Message' => 'Cette carte n\'est pas active',
        'MoreInfo' => ''        
      ],
      '02624' => [
        'Error' => '02624',
        'Message' => 'Carte expir??e',
        'MoreInfo' => ''        
      ],
      '09104' => [
        'Error' => '09104',
        'Message' => 'Certificat client d??sactiv??',
        'MoreInfo' => ''        
      ],
      '02631' => [
        'Error' => '02631',
        'Message' => 'Retard d??pass??',
        'MoreInfo' => '<p>Trop de temps pris lors de la cr??ation de l\'objet de l\'Enregistrement de la Carte ?? la soumission des Details de la Carte dans le Serveur du Jeton(tokenisation)<./p>'        
      ],
      '001596' => [
        'Error' => '001596',
        'Message' => 'Une requ??te HTTP ??tait bloqu??e par l\'antivirus de l\'Utilisateur',
        'MoreInfo' => '<p>Le jeton depuis la ligne de paiement ?? failli en raison d\'un appel HTTP ??tant bloqu?? par un antivirus, plugin ou extension - par exemple, on sait que ??a passe avec Kaspersky si l\'option "Safe Money" est activ??e</p>'        
      ],
      '105204' => [
        'Error' => '105204',
        'Message' => 'Erreur du format de CVX',
        'MoreInfo' => '<p>Le CVX est manquant ou avec une longueur qui n\'est pas correct.</p>'        
      ],
      '105203' => [
        'Error' => '105203',
        'Message' => 'Erreur de date de p??remption pass??e ou erreur de format de la date d\'expiration.',
        'MoreInfo' => '<p>La date d\'expiration saisi est pass??.</p>'        
      ],
      '105202' => [
        'Error' => '105202',
        'Message' => 'Erreur du format du num??ro de la carte',
        'MoreInfo' => '<p>Le num??ro de la carte n\'a pas le format valide.</p>'        
      ],
      '008999' => [
        'Error' => '008999',
        'Message' => 'Erreur de politique de fraude',
        'MoreInfo' => ''        
      ],
      '008001' => [
        'Error' => '008001',
        'Message' => 'Carte contrefaite.',
        'MoreInfo' => '
          <p>Fausse carte d??tect??e par la banque.</p>
          <p>L\'Utilisateur dois contacter sa banque pour d??bloquer la situation.</p>'        
      ],
      '008002' => [
        'Error' => '008002',
        'Message' => 'Carte Perdue.',
        'MoreInfo' => '
          <p>Une erreur de "carte perdue" est une r??gle port??e par la banque en raison de trop paiement (ou tentatives).</p>
          <p>Veuillez choisir une autre carte, celle-ci sera d??sactiv?? (le jour apr??s).</p>
          <p>En production, la carte est bloqu?? pour la journ??e ou consid??r??e comme frauduleuse par la banque.</p>'        
      ],
      '008003' => [
        'Error' => '008003',
        'Message' => 'Carte Vol??e.',
        'MoreInfo' => '
          <p>Un erreur de "carte vol??e" est une r??gle port??e par la banque en raison de trop de paiement (ou tentatives).</p>
          <p>Veuillez choisir une autre carte, celle-ci sera d??sactiv?? (le jour apr??s).</p>
          <p>En production, la carte est bloqu?? pour la journ??e ou consid??r??e comme frauduleuse par la banque.</p>'
      ],
      '008004' => [
        'Error' => '008004',
        'Message' => 'Le Bin de la carte n\'est pas autoris??.',
        'MoreInfo' => '
          <p>Cette carte a ??t?? bloqu??e par le service des fraudes de MangoPay.</p>
          <p>Veuillez nous contacter ou utiliser une carte diff??rente.</p>'        
        ],
        '008005' => [
          'Error' => '008005',
          'Message' => 'Violation de s??curit??.',
          'MoreInfo' => '
          <p>Cette carte a un comportement anormal et a ??t?? bloqu??e par le service des fraudes de MangoPay.</p>
          <p>Veuillez nous contacter ou utiliser une carte diff??rente.</p>'       
      ],
      '008006' => [
        'Error' => '008006',
        'Message' => 'Suspicion de fraude par la banque.',
        'MoreInfo' => '
          <p>Cette carte a un comportement anormal et a ??t?? bloqu??e par le service des fraudes de MangoPay.</p>
          <p>Veuillez nous contacter ou utiliser une carte diff??rente.</p>'        
      ],
      '008007' => [
        'Error' => '008007',
        'Message' => 'Opposition sur compte bancaire (Temporaire).',
        'MoreInfo' => '
          <p>Cette carte a ??t?? temporairement bloqu??e par MangoPay.</p>
          <p>Veuillez essayer plus tard, s\'il vous pla??t.</p>'        
      ],
      '008500' => [
        'Error' => '008500',
        'Message' => 'Transaction bloqu??e par la politique de fraude.',
        'MoreInfo' => '
          <p>Ce paiement ne se conforme pas avec notre politique d\'anti-fraude.</p>
          <p>Veuillez nous contacter afin de r??soudre ce probl??me.</p>'        
      ],
      '008501' => [
        'Error' => '008501',
        'Message' => 'Transaction refus??e en raison de pays bloqu??.',
        'MoreInfo' => '<p>Le PayOut ne peut pas ??tre effectu?? car le pays cibl?? n\'est pas autoris??e.</p>'        
      ],
      '008502' => [
        'Error' => '008502',
        'Message' => 'Transaction refus??e en raison d\'IBAN bloqu??.',
        'MoreInfo' => '<p>Le PayOut ne peut pas ??tre effectu?? car le compte bancaire cibl?? n\'est pas autoris??.</p>'        
      ],
      '008503' => [
        'Error' => '008503',
        'Message' => 'Transaction refus??e en raison du BIC bloqu??.',
        'MoreInfo' => '<p>Le PayOut ne peut pas ??tre effectu?? car la banque cibl?? n\'est pas autoris??e.</p>'        
      ],
      '008504' => [
        'Error' => '008504',
        'Message' => 'Montant de la transaction d??passe le montant autoris??.',
        'MoreInfo' => ''        
      ],
      '008505' => [
        'Error' => '008505',
        'Message' => 'Num??ro de transaction accept?? d??passe le num??ro de la limite de vitesse r??gl??e.',
        'MoreInfo' => '
          <p>Les carte de cr??dit/d??bit sont limit??es de 10 paiement par jour pour des raisons de s??curit??.</p>
          <p>Veuillez essayer ?? nouveau dans 24 heures.</p>'
      ],
      '008506' => [
        'Error' => '008506',
        'Message' => 'Adresse IP du Pays non autoris??.',
        'MoreInfo' => ''        
      ],
      '008507' => [
        'Error' => '008507',
        'Message' => 'Valeur cumulatif des transactions d??pass??.',
        'MoreInfo' => ''        
      ],
      '008508' => [
        'Error' => '008508',
        'Message' => 'Pays ??metteur de carte non autoris??.',
        'MoreInfo' => ''        
      ],
      '008509' => [
        'Error' => '008509',
        'Message' => 'Num??ro de cartes permises est d??pass??.',
        'MoreInfo' => ''        
      ],
      '008510' => [
        'Error' => '008510',
        'Message' => 'Num??ro de clients par carte est d??pass??.',
        'MoreInfo' => ''        
      ],
      '008512' => [
        'Error' => '008512',
        'Message' => 'Localisation IP diff??rente du pays ??metteur de carte.',
        'MoreInfo' => ''        
      ],
      '008514' => [
        'Error' => '008514',
        'Message' => 'BIN de la Carte non autoris??.',
        'MoreInfo' => ''        
      ],
      '008600' => [
        'Error' => '008600',
        'Message' => 'Portefeuille digital bloqu?? par la politique de fraude.',
        'MoreInfo' => ''        
      ],
      '008700' => [
        'Error' => '008700',
        'Message' => 'Utilisateur bloqu?? par la politique de fraude.',
        'MoreInfo' => '
          <p>Cet utilisateur ne se conforme pas avec les r??gles d\'anti-fraude de MangoPay.</p>
          <p>Veuillez nous contacter pour r??soudre ce probl??me.</p>'        
      ],
      '009103' => [
        'Error' => '009103',
        'Message' => 'Erreur de configuration PSP.',
        'MoreInfo' => ''        
      ],
      '009199' => [
        'Error' => '009199',
        'Message' => 'Erreur technique PSP.',
        'MoreInfo' => '
          <p>Ce code d\'erreur est retourn?? dans les cas suivants:</p>
          <ul>
            <li>La carte n\'est pas support?? par MangoPay;</li>
            <li>Le montant est plus grand que le maximum autoris?? par transaction;</li>
            <li>L\'op??ration ne convient pas aux pr??f??rences de votre compte MangoPay</li>
            <li>L\'utilisation d\???une carte d\'essaie non-3DSecure pour un paiement qui demande 3DSecure.</li>
          </ul>'        
      ],
      '009499' => [
        'Error' => '009499',
        'Message' => 'Erreur technique de la banque.',
        'MoreInfo' => '
          <p>La banque a refus?? le paiement pour des raisons inconnues.</p>
          <p>L\'utilisateur est pri?? de contacter sa banque pour plus d\'informations.</p>'        
      ],
      '009999' => [
        'Error' => '009999',
        'Message' => 'Erreur technique.',
        'MoreInfo' => ''        
      ],
      '009999' => [
        'Error' => '009999',
        'Message' => 'D??lai d\'expiration de la PSP, veuillez r??essayer plus tard.',
        'MoreInfo' => ''        
      ],
      '101202' => [
        'Error' => '101202',
        'Message' => 'Giropay non pris en charge.',
        'MoreInfo' => '<p>La banque de l\'utilisateur ne supporte pas les paiements faits avec Giropay.</p>'        
      ],
      '121999' => [
        'Error' => '121999',
        'Message' => 'Erreur de retrait g??n??tique.',
        'MoreInfo' => ''        
      ],
      '121001' => [
        'Error' => '121001',
        'Message' => 'Le virement bancaire a ??t?? refus??.',
        'MoreInfo' => '
          <p>Le virement bancaire a ??t?? refus?? par MGP ou annul?? par l\'utilisateur.</p>
          <p>Vous devrez nous contacter pour vous d??bloquer de cette situation et permettre le virement bancaire vers MGP</p>'        
      ],
      '121002' => [
        'Error' => '121002',
        'Message' => 'L\'auteur n\'est pas le propri??taire du portefeuille.',
        'MoreInfo' => ''        
      ],
      '121004' => [
        'Error' => '121004',
        'Message' => 'Cas sp??cifique : veuillez nous contacter, s\il vous pla??t.',
        'MoreInfo' => ''        
      ],
      '121005' => [
        'Error' => '121005',
        'Message' => 'Refus?? en raison de la Politique de Fraude.',
        'MoreInfo' => ''        
      ],
      '121006' => [
        'Error' => '121006',
        'Message' => 'Le compte bancaire associ?? n\'est pas actif.',
        'MoreInfo' => ''        
      ],
      '121007' => [
        'Error' => '121007',
        'Message' => 'L\'auteur n\'est pas le propri??taire du compte bancaire.',
        'MoreInfo' => ''        
      ],
      '002998' => [
        'Error' => '002998',
        'Message' => 'Bloqu?? en raison des limitations KYC du propri??taire du compte bancaire (Montant maximum d??bit?? ou cr??dit?? atteint).',
        'MoreInfo' => '<p>Le compte bancaire a besoin d\'avoir la v??rification KYC.</p>'        
      ],
      '002999' => [
        'Error' => '002999',
        'Message' => 'Bloqu?? en raison des limitations KYC d\'utilisateur d??bit?? (Montant maximum d??bit?? ou cr??dit?? atteint).',
        'MoreInfo' => '<p>Un des utilisateurs qui a contribu?? au d??bit du portefeuille doit ??tre v??rifi?? par KYC.</p>'        
      ],
      '130001' => [
        'Error' => '130001',
        'Message' => 'Le param??tre du client est configur?? incorrectement pour un paiement instantan??.',
        'MoreInfo' => ''        
      ],
      '130003' => [
        'Error' => '130003',
        'Message' => 'L\'utilisateur n\'a pas la v??rification KYC.',
        'MoreInfo' => ''        
      ],
      '130004' => [
        'Error' => '130004',
        'Message' => 'L\'utilisateur est bloqu?? par la politique de fraude de MangoPay.',
        'MoreInfo' => ''        
      ],
      '130006' => [
        'Error' => '130006',
        'Message' => 'Erreur technique; Veuillez essayer plus tard.',
        'MoreInfo' => ''        
      ],
      '130007' => [
        'Error' => '130007',
        'Message' => 'La banque de destination n\'est pas accessible.',
        'MoreInfo' => ''        
      ],
      '130008' => [
        'Error' => '130008',
        'Message' => 'Identificateur de transaction double.',
        'MoreInfo' => '<p>Paiement instantan??s sont limit??s ?? un paiement instantan?? du m??me montant au m??me compte bancaire par 24 heures.</p>'        
      ],
      '130009' => [
        'Error' => '130009',
        'Message' => 'L\'IBAN de destination n\'est pas valide.',
        'MoreInfo' => ''        
      ],
      '130010' => [
        'Error' => '130010',
        'Message' => 'Erreur op??rationnel g??n??rique.',
        'MoreInfo' => ''        
      ]
    ];

    for($i = 0; $i < count($Messages); $i++) {
      if($Code == $Messages[$Code]) {
        $Message = $Messages[$Code];
      }
    }

    foreach($Messages as $Message) {
      if($Code == $Message['Error']) {
        $ErrorMessage = $Message['Message'];
        $ErrorInfos = $Message['MoreInfo'];
      }
    };

    return $this->render('error404/errors.html.twig', [
      'controller_name' => 'HomeController',
      'ErrorCode' => $Code,
      'ErrorMessage' => $ErrorMessage,
      'ErrorInfos' => $ErrorInfos
    ]);
  }

  /**
   * @Route("/recapinscription", name="recapinscription")
   */
  public function recap(): Response
  {
    return $this->render('home/recap.html.twig', [
      'controller_name' => 'HomeController',
    ]);
  }

  /**
   * @Route("/logout", name="app_logout")
   */
  public function logout(): Response
  {
    return $this->redirectToRoute('app_homepage');
  }

  /**
   * @Route("/test", name="test", methods=("GET", "POST"))
   */
  /*public function rest_expedition(Request $request): Response
  {
    return $this->render('home/test.html.twig');
  }*/

}