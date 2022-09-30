<?php

namespace App\Controller;

use DateTime;
use App\Entity\User;
use App\Form\UserForm;
use App\Entity\Annonce;
use App\Service\ApiIban;
use App\Service\ApiMondial;
use App\Service\ApiUser;
use App\Service\ApiPayIn;
use App\Service\ApiPayOut;
use App\Service\ApiWallet;
use App\Form\RegistrationCard;
use App\Service\ApiKYCDocument;
use App\Form\InformationFormType;
use App\Form\PaymentNotRegistered;
use App\Repository\UserRepository;
use App\Repository\AnnonceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use App\MailJet\Mail;
use App\Form\ForgetPasswordForm;
use App\Form\RegistrationFormType;
use App\Security\AppCustomAuthenticator;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use \Mailjet\Resources;
use SymfonyCasts\Bundle\VerifyEmail\VerifyEmailHelperInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Doctrine\Persistence\ManagerRegistry;


class ProfilController extends AbstractController
{
  /**
   * @var UserRepository
   * @var EntityManagerInterface
   */
  private $userRepository;
  private $annonceRepository;
  private $entityManager;
  private $client;

  public function __construct(ManagerRegistry $managerRegistry,UserRepository $userRepository, AnnonceRepository $annonceRepository, EntityManagerInterface $entityManager, HttpClientInterface $httpClient){
    $this->userRepository = $userRepository;
    $this->annonceRepository = $annonceRepository;
    $this->entityManager = $entityManager;
    $this->client = $httpClient;
    $this->managerRegistry = $managerRegistry;
  

    $this->isExpired();
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
   * @Route("/profil", name="profil")
   */
  public function index(Request $request, ApiIban $ApiIban, ApiUser $ApiUser, ApiKYCDocument $ApiKYCDoc): Response
  {
    $ResultMango ="";
    $user = $this->getUser();
    $annonces = $this->annonceRepository->findAll();
    $annonce = $this->managerRegistry->getRepository(Annonce::class)->findAll();
    $IdMangoPay = $user->getIdMangopay();
    $form = $this->createForm(InformationFormType::class);
    $form->handleRequest($request);
                        // acheteur
    if($user->getStatus() !== "") {
      $KYCStatus = $ApiKYCDoc->GetKYCDocumentById($IdMangoPay);
      if($KYCStatus === false) {
        $StatusKYC = "TO_ASK";
      } else if($KYCStatus['Type'] === "IDENTITY_PROOF"){
        if($KYCStatus['Status'] === "VALIDATION_ASKED") {
          $StatusKYC = "VALIDATION_ASKED";
        } else if($KYCStatus['Status'] === "VALIDATED") {
          $StatusKYC = "VALIDATED";
        } else if($KYCStatus['Status'] === "REFUSED") {
          if($KYCStatus['RefusedReasonType'] === "DOCUMENT_UNREADABLE") {
          } else if($KYCStatus['RefusedReasonType'] === "DOCUMENT_NOT_ACCEPTED") {
            $StatusKYC = "REFUSED_DOCUMENT_NOT_ACCEPTED";
          } else if($KYCStatus['RefusedReasonType'] === "DOCUMENT_HAS_EXPIRED") {
            $StatusKYC = "REFUSED_DOCUMENT_HAS_EXPIRED";
          } else if($KYCStatus['RefusedReasonType'] === "DOCUMENT_INCOMPLETE") {
            $StatusKYC = "REFUSED_DOCUMENT_INCOMPLETE";
          } else if($KYCStatus['RefusedReasonType'] === "DOCUMENT_MISSING") {
            $StatusKYC = "REFUSED_DOCUMENT_MISSING";
          } else if($KYCStatus['RefusedReasonType'] === "DOCUMENT_DOES_NOT_MATCH_USER_DATA") {
            $StatusKYC = "REFUSED_DOCUMENT_DOES_NOT_MATCH_USER_DATA";
          } else if($KYCStatus['RefusedReasonType'] === "SPECIFIC_CASE") {
            $StatusKYC = "REFUSED_SPECIFIC_CASE";
          } else if($KYCStatus['RefusedReasonType'] === "DOCUMENT_FALSIFIED") {
            $StatusKYC = "REFUSED_DOCUMENT_FALSIFIED";
          } else if($KYCStatus['RefusedReasonType'] === "UNDERAGE_PERSON") {
            $StatusKYC = "REFUSED_UNDERAGE_PERSON";
          }
        }
      }
    } else {
      $StatusKYC = "";
    }
    $recto = $form['KYCrecto']->getData();
    $verso = $form['KYCverso']->getData();
    if($form->isSubmitted() && $form->isValid()){
      $ApiIban->NewIban($form['IBAN']->getData(), $form['BIC']->getData(), $user);

      $KycDocument = $ApiKYCDoc->NewKYCDocument($user->getIdMangopay(), $recto->getPathname(), $verso->getPathname());
      $ResultMango = $ApiKYCDoc->SubmitKYCDocument($user->getIdMangopay(), $KycDocument);
      return $this->render('profil/index.html.twig', [
        'user' => $user,
        'annonce' => $annonce,
        'infoForm' => $form->createView(),
        'KycStatus' => $KYCStatus['Status'],
        'errorMessages' => $ResultMango->RefusedReasonMessage,
        'message' => 'vos informations ont bien été transmises...elles sont en cours de traitement par mangopay.',
        'verso' => $verso->getPathname(),
        'recto' => $recto->getPathname()
      ]);
    };
 $verso = $recto = "";
    return $this->render('profil/index.html.twig', [
      'user' => $user,
      'annonce' => $annonce,
      'infoForm' => $form->createView(),
      'KycStatus' => $StatusKYC,
      'errorMessages' => $ResultMango,
      'message' => '',
      'verso' => $verso,
      'recto' => $recto

    ]);
  }

  /**
   * @Route("/editInfos", name="profil_edit")
   */
  public function modifyMyInformations(Request $request, UserPasswordHasherInterface $userPasswordHasher, ApiUser $ApiUser): Response
  {
    // on récupère le formulaire
    $user = $this->getUser();
    $MangoPayId = $user->getIdMangopay();
    $form= $this->createForm(UserForm::class, $user);
    $form->handleRequest($request);

    // si le formulaire a été soumis

    if($form->isSubmitted() && $form->isValid()){
      $MangoPayEdited = $ApiUser->EditProfil($user, $form);

      // on récupère l'image
      $images = $form->get('image')->getData();

      if($images){
        // on génére un nv nom de fichier
        $fichier = md5(uniqid()) . '.' . $images->guessExtension();

        // on copie le fichier dans le dossier uploads
        $images->move(
            $this->getParameter('images_directory'),
            $fichier
        );

        $user->setImage(
            $fichier
        );
      }

      $password = $form -> get('plainPassword')->getData();
      
      if($password){
        $user -> setPassword(
          $userPasswordHasher->hashPassword(
          $user,
          $form->get('plainPassword')->getData()
          )
        );
      }
      // on enregistre l'appart dans la BDD
      $manager = $this->managerRegistry->getManager();

      // cela est inutile puisque l'objet provient dejà de la BDD
      // $manager->persist($appartements);
      $manager->flush();
  
      // $message=appartement modifié;
      return $this->redirectToRoute('profil');
  
    }

    $formView= $form->createView();

    // on rend la vue
    return $this->render('profil/editInformations.html.twig', [
      'form'=>$formView
    ]);
  }    
  
  /**
   * @Route("/myInfos", name="informations")
   */
  public function myInformations(): Response
  {
    return $this->render('profil/myInformations.html.twig', [
      'controller_name' => 'ProfilController',
    ]);
  }

  /**
   * @Route("/myPurchases", name="purchases")
   */
  public function myPurchases(ApiMondial $ApiMondial): Response
  {
    return $this->render('profil/myPurchases.html.twig', [
      'controller_name' => 'ProfilController',
    ]);
  }

  /**
   * @Route("/payment/{id}", name="payment")
   * @param int $id
   */
  public function payment(Security $security, Request $request, ApiUser $ApiUser, ApiWallet $ApiWallet, ApiMondial $ApiMondial, $id): Response
  {
    $annonce = $this->annonceRepository->findOneBy(['id' => $id]);
    $Seller = $this->managerRegistry->getRepository(User::class)->findAll();

    if($annonce->getSold() == true)
    {
      $this->addFlash('error', 'Cette annonce a déjà été vendue');
      return $this->redirectToRoute('profil');
    }
  
    // verification si l'utilisateur est enregisté ou pas
    if($this->getUser()) {
      $Buyer = $this->getUser();
      if ($Buyer == $annonce->getUser())
      {
        $this->addFlash('error', 'Vous ne pouvez pas acheter votre propre annonce');
        return $this->redirectToRoute('profil');
      }
      $BuyerId = $Buyer->getIdMangopay();

      $form = $this->createForm(RegistrationCard::class);
      $form->handleRequest($request); 

      if($form->isSubmitted() && $form->isValid()) {  
        // Verification que la carte existe 
        $Card = $ApiUser->GetCardByNumber($BuyerId, $form['cardNumber']->getData());
        $shipment = $form['parcelshopAddress']->getData();
        
              // si shipment on peut proposer la livraison mondial relay et creer une etiquette

        if ($shipment) {
        $etiquette = $ApiMondial->createEtiquette($security, $annonce, $form['parcelshopAddress']->getData(), $form['parcelshopId']->getData());
        if($Card) {
          return $this->redirectToRoute('redirection_payment', [
            // card === true ça signifie que la carte existe déjà sur le compte de MangoPay
            'card' => true,
            'cardId' => $Card['Id'],
            'annonceId' => $annonce->getId(),
            'annoncePriceTotal' => $annonce->getPriceTotal(),
            'annoncePriceOrigin' => $annonce->getPriceOrigin(),
            'buyerId' => $BuyerId,
            'etiquette' => $etiquette,
            'annoncePoids' => $annonce->getPoids(),
            'ship'=> true,
          ]);
        } else if ($Card === false){
          // Si la carte n'existe pas, il commence l'enregistration de la carte et la passe 
          // à l'étape suivante
          $Registration = $ApiUser->Registration($BuyerId);
          $response = $ApiUser->Data($Registration, $form);
          $content = $response->getContent();

          if (str_contains($content, 'errorCode=')) {
            $code = preg_replace('/[^0-9]/', '', $content);
            return  $this->redirectToRoute('errors', [
              'ResultCode' =>  $code,
            ]);
          }

          return $this->redirectToRoute('redirection_payment', [
            // card === false ça signifie que la carte est en train d'etre créée
            'card' => false,
            'cardRegId' => $Registration->Id,
            'registrationData' => $content,
            'annoncePriceOrigin' => $annonce->getPriceOrigin(),
            'annoncePriceTotal' => $annonce->getPriceTotal(),
            'annonceId' => $annonce->getId(),
            'etiquette' => $etiquette,
            'annoncePoids' => $annonce->getPoids(),
            'ship'=> true,
          ]);
        }
      } else {
        if($Card) {
          return $this->redirectToRoute('redirection_payment', [
            // card === true ça signifie que la carte existe déjà sur le compte de MangoPay
            'card' => true,
            'cardId' => $Card['Id'],
            'annonceId' => $annonce->getId(),
            'annoncePriceTotal' => $annonce->getPriceTotal(),
            'annoncePriceOrigin' => $annonce->getPriceOrigin(),
            'buyerId' => $BuyerId,
            'annoncePoids' => $annonce->getPoids(),
            'ship'=> false,
          ]);
        } else if ($Card === false){
          // Si la carte n'existe pas, il commence l'enregistration de la carte et la passe 
          // à l'étape suivante
          $Registration = $ApiUser->Registration($BuyerId);
          $response = $ApiUser->Data($Registration, $form);
          $content = $response->getContent();

          if (str_contains($content, 'errorCode=')) {
            $code = preg_replace('/[^0-9]/', '', $content);
            return  $this->redirectToRoute('errors', [
              'ResultCode' =>  $code,
            ]);
          }

          return $this->redirectToRoute('redirection_payment', [
            // card === false ça signifie que la carte est en train d'etre créée
            'card' => false,
            'cardRegId' => $Registration->Id,
            'registrationData' => $content,
            'annoncePriceOrigin' => $annonce->getPriceOrigin(),
            'annoncePriceTotal' => $annonce->getPriceTotal(),
            'annonceId' => $annonce->getId(),
            'annoncePoids' => $annonce->getPoids(),
            'ship'=> false,
          ]);
        }
      }
      } 
    } else {
      $form = $this->createForm(PaymentNotRegistered::class);
      $form->handleRequest($request);
      
      if($form->isSubmitted() && $form->isValid()) {
        $User = $ApiUser->GetUserByEmail($form['email']->getData());
        // Si l'utilisateur n'est pas enregistré dans le site, il faut verifier si, dans le site 
        // de MangoPay, l'utilisateur (le mail répéré depuis le formulaire) existe dans notre
        // Dashboard et l'utiliser
        if($User) {
          $Wallet = $ApiWallet->GetWallet($User['Id']);
          $form = $this->createForm(RegistrationCard::class);
          $form->handleRequest($request); 
          $shipment = $form['parcelshopAddress']->getData();
          $Card = $ApiUser->GetCardByNumber($User['Id'], $form['cardNumber']->getData());

              // si shipment on peut proposer la livraison mondial relay et creer une etiquette
          if ($shipment) { 
          $etiquette = $ApiMondial->createEtiquette($security, $annonce, $form['parcelshopAddress']->getData(), $form['parcelshopId']->getData());
          // Verification de la carte
          if($Card) {
            return $this->redirectToRoute('redirection_payment', [
              // card === true ça signifie que la carte existe déjà sur le compte de MangoPay
              'card' => true,
              'cardId' => $Card['Id'],
              'annonceId' => $annonce->getId(),
              'annoncePriceTotal' => $annonce->getPriceTotal(),
              'annoncePriceOrigin' => $annonce->getPriceOrigin(),
              'buyerId' => $User['Id'],
              'walletId' => $Wallet['Id'],
              'etiquette' => $etiquette,
              'annoncePoids' => $annonce->getPoids(),
              
            ]);
          } else if($Card === false) {
            $Registration = $ApiUser->Registration($User['Id']);
            $response = $ApiUser->Data($Registration, $form);
            $content = $response->getContent();
            
            if (str_contains($content, 'errorCode=')) {
              $code = preg_replace('/[^0-9]/', '', $content);
              return  $this->redirectToRoute('errors', [
                'ResultCode' =>  $code,
              ]);
            }

            return $this->redirectToRoute('redirection_payment', [
              // card === false ça signifie que la carte est en train d'etre créée
              'card' => false,
              'cardRegId' => $Registration->Id,
              'registrationData' => $content,
              'annonceId' => $annonce->getId(),
              'annoncePriceTotal' => $annonce->getPriceTotal(),
              'annoncePriceOrigin' => $annonce->getPriceOrigin(),
              'buyerId' => $User['Id'],
              'walletId' => $Wallet['Id'],
              'etiquette' => $etiquette,
              'annoncePoids' => $annonce->getPoids(),
             
            ]);
          }  else {
            if($Card) {
              return $this->redirectToRoute('redirection_payment', [
                // card === true ça signifie que la carte existe déjà sur le compte de MangoPay
                'card' => true,
                'cardId' => $Card['Id'],
                'annonceId' => $annonce->getId(),
                'annoncePriceTotal' => $annonce->getPriceTotal(),
                'annoncePriceOrigin' => $annonce->getPriceOrigin(),
                'buyerId' => $BuyerId,
                'annoncePoids' => $annonce->getPoids(),
                
              ]);
            } else if ($Card === false){
              // Si la carte n'existe pas, il commence l'enregistration de la carte et la passe 
              // à l'étape suivante
              $Registration = $ApiUser->Registration($BuyerId);
              $response = $ApiUser->Data($Registration, $form);
              $content = $response->getContent();
    
              if (str_contains($content, 'errorCode=')) {
                $code = preg_replace('/[^0-9]/', '', $content);
                return  $this->redirectToRoute('errors', [
                  'ResultCode' =>  $code,
                ]);
              }
    
              return $this->redirectToRoute('redirection_payment', [
                // card === false ça signifie que la carte est en train d'etre créée
                'card' => false,
                'cardRegId' => $Registration->Id,
                'registrationData' => $content,
                'annoncePriceOrigin' => $annonce->getPriceOrigin(),
                'annoncePriceTotal' => $annonce->getPriceTotal(),
                'annonceId' => $annonce->getId(),
                'annoncePoids' => $annonce->getPoids(),
                
              ]);
            }
          }
        }
        } else {
          // En cas que l'utilisateur (de MangoPay) n'existe pas, il faut en créer un
          $ProfilMango = $ApiUser->NewProfil($form);
          $Wallet = $ApiWallet->NewWallet($ProfilMango->Id);
          $Registration = $ApiUser->Registration($ProfilMango->Id);
          
          $response = $ApiUser->Data($Registration, $form);
          $content = $response->getContent();
          if (str_contains($content, 'errorCode=')) {
            $code = preg_replace('/[^0-9]/', '', $content);
            return  $this->redirectToRoute('errors', [
              'ResultCode' =>  $code,
            ]);
          }

          return $this->redirectToRoute('redirection_payment', [
            // card === false ça signifie que la carte est en train d'etre créée
            'card' => false,
            'cardRegId' => $Registration->Id,
            'registrationData' => $content,
            'annoncePriceOrigin' => $annonce->getPriceOrigin(),
            'annoncePriceTotal' => $annonce->getPriceTotal(),
            'annonceId' => $annonce->getId(),
            'buyerId' => $ProfilMango->Id,
            'walletId' => $Wallet->Id,
            'annoncePoids' => $annonce->getPoids(),
           
          ]);
        }
      }
    }
    
    return $this->render('home/payment.html.twig', [
      'form' => $form->createView(),
      'annonceTitle' => $annonce->getTitle(),
      'annoncePrice' => $annonce->getPriceTotal(),
      'annoncePoids' => $annonce->getPoids(),
      'shipment' => $annonce->getShipment(),
      'user' => $this->getUser()
    ]);
  }

  /**
   * @Route("/redirection-payment", name="redirection_payment")
   */
  public function redirectionPayment(ApiUser $ApiUser, ApiWallet $ApiWallet, ApiPayIn $ApiPayIn, ApiPayOut $ApiPayOut, ApiIban $ApiIban, Request $request, MailerInterface $mailer, TokenGeneratorInterface $tokenGenerator): Response
  {
    // Verifier que l'utilisateur existe pour pouvoir transmettre les bonnes données dans tous 
    // les cas
    if($this->getUser()) {
      $Buyer = $this->getUser();
      $BuyerIdMango = $Buyer->getIdMangoPay();
      $BuyerWallet = $ApiWallet->getWallet($BuyerIdMango);
      $BuyerWalletId = $BuyerWallet['Id'];
    } else {
      $BuyerIdMango = $_GET['buyerId'];
      $BuyerWalletId = $_GET['walletId'];
      $Buyer = $ApiUser->GetUserById($_GET['buyerId']);
    }
    // Prendre tous les infos nécéssaire pour faire les differents actions pour le payement
    $annonce = $this->annonceRepository->find($_GET['annonceId']);
    $user = $this->managerRegistry->getRepository(User::class)->findAll();
    $shipment = $_GET['ship'];
    $SellerId = $annonce->getUser()->getIdMangoPay();
    $SellerWallet = $ApiWallet->getWallet($SellerId);
    $SellerBankAccount = $ApiIban->GetLastBankAccount($SellerId);

    // Verifier si la carte existait déjà ou c'est le première étape pour créer la carte
    // Si la carte est au premier étape, il faut la créer et faire les actions de payement
    if($_GET['card'] == false) {
      $registrationCard = $ApiUser->RegistrationCard($_GET['cardRegId'], $_GET['registrationData']);
     
      // Verifier si l'enregistrement a eu des erreurs
      if($registrationCard->Status === 'ERROR') {
        return $this->redirectToRoute('errors', [
          'ResultCode' => $registrationCard->ResultCode,
        ]);
      } else {
      // Si l'enregistrement n'a pas eu d'êtats d'erreur, alors on procède avec le payement
        // Le PayIn est l'ajoute de l'argent au "portefeuille" d'utilisateur MangoPay
        // Le PayOut est le prelevement de l'argent de "portefeuille" à utilisateur MangoPay
        $PayIn = $ApiPayIn->PayIn($BuyerWalletId, $BuyerIdMango, $_GET['annoncePoids'], $shipment, $registrationCard->CardId, $_GET['annoncePriceOrigin'], false);
      
        // Si le payin donne de code d'erreur alors il me derigera sur la page des erreurs en donnant le numero du code
        if($PayIn->Status === "FAILED") {
          return $this->redirectToRoute('errors', [
            'ResultCode' => $PayIn->ResultCode
          ]);
        } else if($PayIn->Status === "SUCCEEDED") {
        // Si le PayIn a succès alors il faut changer l'êtat de l'annonce en question de "pas vendu"
        // à "vendu" et ajouter les informations de l'annonce chez chaque acteur
          // $Transfer = $ApiPayOut->Transfer($BuyerIdMango, $SellerId, $BuyerWalletId, $SellerWallet['Id'], $_GET["annoncePriceOrigin"]);

          // if($Transfer->Status === "ERROR"){
          //   return $this->redirectToRoute('errors', [
          //     'ResultCode' => $Transfer->ResultCode
          //   ]);
          // } else if($Transfer->Status === "SUCCEEDED") {
          //   $PayOut = $ApiPayOut->PayOut($SellerId, $SellerWallet['Id'], $SellerBankAccount['Id'], $_GET['annoncePriceOrigin']);

          //   if($PayOut->Status === "ERROR") {
          //     return $this->redirectToRoute('errors', [
          //       'ResultCode' => $PayOut->ResultCode
          //     ]);
          //   } else if($PayOut->Status === "CREATED") {
              $annonce->setSold(true);
              $annonce->setAcheteur($BuyerIdMango);
              $this->entityManager->persist($annonce);
              $this->entityManager->flush();
              $Seller = $annonce->getUser();

              // Verifier quelle clé a le nom complet du vendeur
              if(empty($Seller->getFullName())){
                $SellerFullName = $Seller->getFirstName() . ' ' . $Seller->getLastName();
              } else {
                $SellerFullName = $Seller->getFullName();
              }
              
              // Verifier que l'utiisateur soit connecté
              if($this->getUser()) {
                // Verifier quelle clé a le nom complet du acheteur
                if(empty($Buyer->getFullName())) {
                  $BuyerFullName = $Buyer->getFirstName() . ' ' . $Buyer->getLastName();
                } else {
                  $BuyerFullName = $Buyer->getFullName();
                }
      
                $Purchase = [
                  'title' => $annonce->getTitle(),
                  'price' => $_GET['annoncePriceTotal'],
                  'paymentDate' => date('d/m/Y'),
                  'seller' => $SellerFullName,
                  'buyer' => $BuyerFullName,
                  'etiquette' => $annonce->getEtiquetteURL(),
                  'tracing' => $annonce->getTracingURL(),
                  'expNumber' => $annonce->getExpNumber(),
                ];
                
                $Purchases = $Buyer->getMyPurchases();
                $Purchases[] = $Purchase;
    
                $Buyer->setMyPurchases($Purchases);
    
                $Sale = [
                  'title' => $annonce->getTitle(),
                  'price' => $_GET['annoncePriceTotal'],
                  'paymentDate' => date('d/m/Y'),
                  'seller' => $SellerFullName,
                  'buyer' => $BuyerFullName,
                  'etiquette' => $annonce->getEtiquetteURL(),
                  'tracing' => $annonce->getTracingURL(),
                  'expNumber' => $annonce->getExpNumber(),
                ];
                $Sales = $Seller->getMySales();
                $Sales[] = $Sale;
    
                $Seller->setMySales($Sales);
                $this->entityManager->persist($Buyer);
                $this->entityManager->persist($Seller);
                $this->entityManager->flush();
              } else {
                $mySale = [
                  'title' => $annonce->getTitle(),
                  'price' => $_GET['annoncePriceTotal'],
                  'paymentDate' => date('d/m/Y'),
                  'seller' => $SellerFullName,
                  'buyer' => $Buyer['Name'],
                  'etiquette' => $annonce->getEtiquetteURL(),
                  'tracing' => $annonce->getTracingURL(),
                  'expNumber' => $annonce->getExpNumber(),
                ];
      
                $Sales = $Seller->getMySales();
                $Sales[] = $Sale;
    
                $Seller->setMySales($Sales);
                $this->entityManager->persist($Seller);
                $this->entityManager->flush();
                
                return $this->redirectToRoute('app_homepage');
              }
          // }
          // }
        }
      } 
    } else if ($_GET['card'] == 1) {
      $PayIn = $ApiPayIn->PayIn($BuyerWalletId, $BuyerIdMango,  $_GET['annoncePoids'], $shipment,$_GET['cardId'], $_GET['annoncePriceOrigin'], true);
       //dd($PayIn);

      if($PayIn->Status === "FAILED") {
        return $this->redirectToRoute('errors', [
          'ResultCode' => $PayIn->ResultCode
        ]);
      } else if($PayIn->Status === "SUCCEEDED") {
        // $Transfer = $ApiPayOut->Transfer($BuyerIdMango, $SellerId, $BuyerWalletId, $SellerWallet['Id'], $_GET["annoncePriceOrigin"]);
        // if($Transfer->Status === "ERROR"){
        //   return $this->redirectToRoute('errors', [
        //     'ResultCode' => $Transfer->ResultCode
        //   ]);
        // } else if($Transfer->Status === "SUCCEEDED") {
        //   $PayOut = $ApiPayOut->PayOut($SellerId, $SellerWallet['Id'], $SellerBankAccount['Id'], $_GET['annoncePriceOrigin']);
        //   if($PayOut->Status === "ERROR") {
        //     return $this->redirectToRoute('errors', [
        //       'ResultCode' => $PayOut->ResultCode
        //     ]);
        //   } else if($PayOut->Status === "CREATED") {
            $annonce->setSold(true);
            $annonce->setAcheteur($BuyerIdMango);
            $this->entityManager->persist($annonce);
            $this->entityManager->flush();
            $Seller = $annonce->getUser();
    
            if(empty($Seller->getFullName())){
              $SellerFullName = $Seller->getFirstName() . ' ' . $Seller->getLastName();
            } else {
              $SellerFullName = $Seller->getFullName();
            }
            
            if($this->getUser()) {
              if(empty($Buyer->getFullName())){
                $BuyerFullName = $Buyer->getFirstName() . ' ' . $Buyer->getLastName();
              } else {
                $BuyerFullName = $Buyer->getFullName();
              }
      
              $Purchase = [
                'title' => $annonce->getTitle(),
                'price' => $_GET['annoncePriceTotal'],
                'paymentDate' => date('d/m/Y'),
                'seller' => $SellerFullName,
                'buyer' => $BuyerFullName,
                'etiquette' => $annonce->getEtiquetteURL(),
                'tracing' => $annonce->getTracingURL(),
                'expNumber' => $annonce->getExpNumber(),
              ];

              $Purchases = $Buyer->getMyPurchases();
              $Purchases[] = $Purchase;          

              $Buyer->setMyPurchases($Purchases);

              $Sale = [
                'title' => $annonce->getTitle(),
                'price' => $_GET['annoncePriceTotal'],
                'paymentDate' => date('d/m/Y'),
                'seller' => $SellerFullName,
                'buyer' => $BuyerFullName,
                'etiquette' => $annonce->getEtiquetteURL(),
                'tracing' => $annonce->getTracingURL(),
                'expNumber' => $annonce->getExpNumber(),
              ];
      
              $Sales = $Seller->getMySales();
              $Sales[] = $Sale;

              $Seller->setMySales($Sales);
              $this->entityManager->persist($Buyer);
              $this->entityManager->persist($Seller);
              $this->entityManager->flush();
            } else {
              $Sale = [
                'title' => $annonce->getTitle(),
                'price' => $_GET['annoncePriceTotal'],
                'paymentDate' => date('d/m/Y'),
                'seller' => $SellerFullName,
                'buyer' => $Buyer['Name'],
                'etiquette' => $annonce->getEtiquetteURL(),
                'tracing' => $annonce->getTracingURL(),
                'expNumber' => $annonce->getExpNumber(),
              ];
      
              $Sales = $Seller->getMySales();
              $Sales[] = $Sale;

              $Seller->setMySales($Sales);
              $this->entityManager->persist($Buyer);
              $this->entityManager->persist($Seller);
              $this->entityManager->flush();

              return $this->redirectToRoute('app_homepage');
            }
          //  }
        //  }
      } 
    }
    if ($annonce->getEtiquetteURL() !== null)
    {

            // Mail du lien etiquette mondial relay envoyer au vendeur

      $email = (new TemplatedEmail())
        ->from('plantetflower@gmail.com')
        ->to($annonce->getUser()->getEmail())
        //->cc('dev64splatoon@gmail.com')
        //->bcc('bcc@example.com')
        //->replyTo('fabien@example.com')
        //->priority(Email::PRIORITY_HIGH)
        ->subject('Une personne a acheté votre plante')
        // path of the Twig template to render
        ->htmlTemplate('emails/sendEtiquette.html.twig')
    
        // pass variables (name => value) to the template
        ->context([
          'expiration_date' => new \DateTime('+7 days'),
          'username' => $annonce->getUser()->getFirstName(),
          'expNumber' => $annonce->getExpNumber(),
          'etiquette' => $annonce->getEtiquetteURL(),
          'title' => $annonce->getTitle()
        ]);

        $mailer->send($email);


            // Mail du lien tracing mondial relay envoyer à l'acheteur

        $email = (new TemplatedEmail())
        ->from('plantetflower@gmail.com')
        ->to($annonce->getUser()->getEmail())
        //->bcc('bcc@example.com')
        //->replyTo('fabien@example.com')
        //->priority(Email::PRIORITY_HIGH)
        ->subject('Vous avez acheté une plante')
        // path of the Twig template to render
        ->htmlTemplate('emails/sendLienTracingMondial.html.twig')
    
        // pass variables (name => value) to the template
        ->context([
          'expiration_date' => new \DateTime('+7 days'),
          'username' => $this->getUser()->getFirstName(),
          'expNumber' => $annonce->getExpNumber(),
          'tracing' => $annonce->getTracingURL(),
          'title' => $annonce->getTitle()
        ]);
        $mailer->send($email);
        $token = $tokenGenerator->generateToken();
        $annonce->setToken($token);
        $this->entityManager->persist($annonce);
        $this->entityManager->flush();
    }
    else
    {
            // Mail remise en main propre envoyer au vendeur

      $email = (new TemplatedEmail())
        ->from('plantetflower@gmail.com')
        ->to($annonce->getUser()->getEmail())
        //->cc('cc@example.com')
        //->bcc('bcc@example.com')
        //->replyTo('fabien@example.com')
        //->priority(Email::PRIORITY_HIGH)
        ->subject('Une personne a acheté votre plante')
        // path of the Twig template to render
        ->htmlTemplate('emails/rmp-mail.html.twig')
    
        // pass variables (name => value) to the template
        ->context([
          'expiration_date' => new \DateTime('+7 days'),
          'username' => $annonce->getUser()->getFirstName(),
          'mail' => $this->getUser()->getEmail(),
          'title' => $annonce->getTitle(),
          'dest' => 'vendeur'
        ]);
        $mailer->send($email);

            // Mail remise en main propre envoyer à l'acheteur
        $token = $tokenGenerator->generateToken();
        $annonce->setToken($token);
        $this->entityManager->persist($annonce);
        $this->entityManager->flush();
        
        $email = (new TemplatedEmail())
        ->from('plantetflower@gmail.com')
        ->to($this->getUser()->getEmail())
        //->cc('cc@example.com')
        //->bcc('bcc@example.com')
        //->replyTo('fabien@example.com')
        //->priority(Email::PRIORITY_HIGH)
        ->subject('Merci pour votre achat, vous pouvez joindre le vendeur')
        // path of the Twig template to render
        ->htmlTemplate('emails/rmp-mail.html.twig')
    
        // pass variables (name => value) to the template
        ->context([
          'expiration_date' => new \DateTime('+7 days'),
          'username' => $this->getUser()->getFirstName(),
          'mail' => $annonce->getUser()->getEmail(),
          'title' => $annonce->getTitle(),
          'dest' => 'acheteur',
          'link' => $token
        ]);
    }
    $mailer->send($email);
    return $this->render('profil/redirectionPayment.html.twig', [
      'controller_name' => 'ProfilController',
      'etiquette' => $annonce->getEtiquetteURL(),
      'tracing' => $annonce->getTracingURL(),
      'expNumber' => $annonce->getExpNumber(),
    ]);
  }

  public function expeditionData(Request $request, User $user)
  {
    $User = $this->getUser();
    $expedition = $User->getSex();
    $expedition = $User->getPhoneNumber();


    dd($expedition);
  }

  public function destinationData(Request $request, User $user)
  {
    $User = $this->getUser();
    $destination = $User->getSex();
    $destination = $User->getPhoneNumber();
  }



/**
   * @Route("/payment-validation/{token}", name="payment_validation")
   * @param string $token
   */

  public function paymentValidation($token) 
  {
    $annonce = $this->annonceRepository->findOneBy(['token' => $token]);
    $annonce->setStatutLivraison(true);
    $annonce->setToken("");

    $this->entityManager->persist($annonce);
    $this->entityManager->flush();

    return $this->redirectToRoute('app_homepage');
  }
}