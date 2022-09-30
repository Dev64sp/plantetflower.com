<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\FormError;
use App\Repository\UserRepository;
use App\Repository\AnnonceRepository;
use App\Repository\CategoryRepository;
use App\Repository\ImageRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Form\CreateAnnonceType;
use App\Entity\Annonce;
use App\Entity\User;
use App\Entity\Image;
use App\Entity\Category;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\HttpKernel\KernelInterface;
use Doctrine\Persistence\ManagerRegistry;

class AnnonceController extends AbstractController
{
  /**
   * @var UserRepository
   * @var EntityManagerInterface
   */
  private $userRepository;
  private $entityManager;
  
  public function __construct(ManagerRegistry $managerRegistry,UserRepository $userRepository, EntityManagerInterface $entityManager, AnnonceRepository $annonceRepository, CategoryRepository $categoryRepository, ImageRepository $imageRepository){
    $this->userRepository = $userRepository;
    $this->entityManager = $entityManager;
    $this->annonceRepository = $annonceRepository;
    $this->categoryRepository = $categoryRepository;
    $this->imageRepository = $imageRepository;
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
   * @Route("/new-annonce", name="create_annonce")
   */
  public function createAnnonce(Request $request): Response
  {
    $annonce = new Annonce();
    
    $form = $this->createForm(CreateAnnonceType::class);
    $form->handleRequest($request);

    if($form->isSubmitted()) {
      $images = $form->get('images')->getData();
      if(count($images) > 3) { 
        $form->addError(new FormError("Trop d'images")); 
      }elseif(count($images) < 1) {
        $form->addError(new FormError("Vous devez upload au minimum 1 image"));
      }
      
      if($form->isValid()) {
        foreach($images as $image) {
          $fichier = md5(uniqid()) . '.' . $image->guessExtension();

          //on copie le fichier dans le dossier uploads
          $image->move(
              $this->getParameter('annonces_directory'),
              $fichier
          );
          $img = new Image();
          $img->setName($fichier);
          $annonce->addImage($img);
        }
          
        // récupérer les données du form
        $description = $form->get('description')->getData();
        $shipment = $form->get('shipment')->getData();
        $plantPot = $form->get('plantPot')->getData();
        $preUpperVille = $form->get('ville')->getData();
        $postUpperVille = strtoupper($preUpperVille);

        if($description) {
          $annonce->setDescription($description);
        }

        if($plantPot) {
          $annonce->setPlantPot(true);
        } else {
          $annonce->setPlantPot(false);
        }

        if($shipment) {
          $annonce->setShipment(true);
        } else {
          $annonce->setShipment(false);
        }

        $annonce->setPriceOrigin($form->get('priceOrigin')->getData());
        $annonce->setDateExpiration($form->get('dateExpiration')->getData());
        $annonce->setTitle($form->get('title')->getData());
        $annonce->setCategory($form->get('category')->getData());
        $annonce->setPoids($form->get('poids')->getData());
        $annonce->setSold(false);
        $annonce->setStatutLivraison(false);
        
        if($form->get('ville')->getData()!=null) {
          $annonce->setVille($postUpperVille);
        };
        $annonce->setUser($this -> getUser());
        $annonce->setCreatedAt(new \DateTime());
        $annonce->setExpAddress($form->get('expAddress')->getData());
        $annonce->setExpZipCode($form->get('expZipCode')->getData());
        $annonce->setStatutLivraison(false);
        $expRelID = $form->get('expRelId')->getData();
        if ($expRelID != ''){
          $annonce->setExpRelId($form->get('expRelId')->getData());
        } 
        $annonce->setStatus("not sold");
        $OriginPrice = $annonce->getPriceOrigin();
        $fixFees = 0.7;
      $percentPrice = $OriginPrice * 0.12 ;
      $TotalPrice = round($OriginPrice + $fixFees + $percentPrice, 3);
     

      $modPrice = fmod($TotalPrice,1); //Pour obtenir le rest et déterminer l'arrondi correspondant avec les conditions ci dessous
        $PreFinal = "";
        
        
        if($modPrice > 0 && $modPrice <0.5){
          $PreFinal = round($TotalPrice,0) + 0.5;
        }else if($modPrice >= 0.5 && $modPrice <1 ){
          $PreFinal = round($TotalPrice,0);
        }
        $totalFees = $PreFinal - $TotalPrice + $fixFees + $percentPrice;
        $commissionSite = $totalFees-(0.018 *$PreFinal +0.18);
        $a = array($PreFinal, $TotalPrice,$totalFees, $commissionSite);
        $annonce->setPriceTotal($PreFinal);

        $entityManager = $this->managerRegistry->getManager();
        $entityManager->persist($annonce);
        $entityManager->flush();
        // do anything else you need here, like send an email

        return $this->redirectToRoute("profil");
      }
    }
    
    return $this->render('home/createAnnonce.html.twig', [
      'CreateAnnonceForm' => $form->createView(),
    ]);
  }

  /**
   * @Route("/delete/{id}", name="delete_annonce")
   * @param Annonce $annonce
   */
  public function deleteAnnonce(Annonce $annonce, AnnonceRepository $annonceRepository): Response
  { 
    if($this->getUser() == $annonce->getUser())
    {
      $annonceRepository= $this->managerRegistry->getManager();
      $annonceRepository->remove($annonce);
      $annonceRepository->flush();
    }
    else
    {
      $this->addFlash('error', 'Vous ne pouvez pas supprimer les annonces des autres utilisateurs');
    }

    return $this->redirectToRoute('profil');
  }

  /**
   * @Route("/annonce/{id}", name="annonce")
   * @param int $id
   */
  public function annonce($id): Response
  {
    $annonce = $this->annonceRepository->findOneBy(['id' => $id]);
    $category = $this->managerRegistry->getRepository(Category::class)->findAll();
    $user = $this->managerRegistry->getRepository(User::class)->findAll();
    $image = $this->managerRegistry->getRepository(Image::class)->findAll();
    $nom = $annonce->getCategory()->getContent();
    $prenomauteur = $annonce->getUser()->getFirstName();
    $userAnnonce = $annonce->getUser();
    $nomauteur = $annonce->getUser()->getLastName();
    $img = $annonce->getImages();
    //$userProfil = $this->getUser();
    $userProfil = $user[0];

    $annoncesNotSold = [];

    foreach($userAnnonce->getAnnonces() as $annonceOfUser) {
      if($annonceOfUser->getSold() == false) {
        $annoncesNotSold[] = $annonceOfUser;
      }
    }

    return $this->render('home/annonce.html.twig', [
      'controller_name' => 'AnnonceController',
      'annonce' => $annonce,
      'category' => $nom,
      'prenomauteur' => $prenomauteur,
      'nomauteur' => $nomauteur,
      'image' => $img,
      'userAnnonce' => $userAnnonce,
      'annoncesNotSold' => $annoncesNotSold,
      'user' => $userProfil,
    ]);
  }
  
  /**
   * @Route("/edit/{id}", name="edit_annonce")
   * @param Annonce $annonce
   */
  public function editAnnonce(Annonce $annonce, Request $request): Response
  {
    if($this->getUser() != $annonce->getUser())
    {
      $this->addFlash('error', 'Vous ne pouvez pas modifier les annonces des autres utilisateurs');
      return $this->redirectToRoute('profil');
    }
    $form = $this->createForm(CreateAnnonceType::class, $annonce);
    $form->handleRequest($request);

     // si le formulaire a été soumis

    if($form->isSubmitted() && $form->isValid()){
      $images = $form->get('images')->getData();
      if(count($images) > 3) { 
        $form->addError(new FormError("Trop d'images")); 
      }elseif(count($images) < 1) {
        $form->addError(new FormError("Vous devez upload au minimum 1 image"));
      }
      $currentImages = $annonce->getImages();
      if((count($currentImages) + count($images)) > 3)
      {
        $imagesToDelete = count($currentImages) + count($images) - 3;
        for ($i = 0; $i < $imagesToDelete; $i++)
        {
          $annonce->removeImage($currentImages[$i]);
        }
      }
      foreach($images as $image) {
        $fichier = md5(uniqid()) . '.' . $image->guessExtension();

        //on copie le fichier dans le dossier uploads
        $image->move(
            $this->getParameter('annonces_directory'),
            $fichier
        );
        $img = new Image();
        $img->setName($fichier);

        $annonce->addImage($img);
      }
        
      // récupérer les données du form
      $description = $form->get('description')->getData();
      $shipment = $form->get('shipment')->getData();
      $plantPot = $form->get('plantPot')->getData();

      if($description) {
        $annonce->setDescription($description);
      }

      if($plantPot) {
        $annonce->setPlantPot(true);
      } else {
        $annonce->setPlantPot(false);
      }

      if($shipment) {
        $annonce->setShipment(true);
      } else {
        $annonce->setShipment(false);
      }

      $annonce->setPriceOrigin($form->get('priceOrigin')->getData());
      $annonce->setDateExpiration($form->get('dateExpiration')->getData());
      $annonce->setTitle($form->get('title')->getData());
      $annonce->setCategory($form->get('category')->getData());
      $annonce->setPoids($form->get('poids')->getData());
      $annonce->setSold(false);
      $annonce->setStatutLivraison(false);
      $preUpperVille = $form->get('ville')->getData();
      $postUpperVille = strtoupper($preUpperVille);
      if($form->get('ville')->getData()!=null) {
        $annonce->setVille($postUpperVille);
      }

      $annonce->setUser($this->getUser());
      $annonce->setCreatedAt(new \DateTime());
      $annonce->setExpAddress($form->get('expAddress')->getData());
      $annonce->setExpZipCode($form->get('expZipCode')->getData());
      $expRelID = $form->get('expRelId')->getData();
      if ($expRelID != ''){
        $annonce->setExpRelId($form->get('expRelId')->getData());
      }
      $annonce->setStatus("not sold");
      $OriginPrice = $annonce->getPriceOrigin();
        
      $fixFees = 0.7;
      $percentPrice = $OriginPrice * 0.12 ;
      $TotalPrice = round($OriginPrice + $fixFees + $percentPrice, 3);
     

      $modPrice = fmod($TotalPrice,1); //Pour obtenir le rest et déterminer l'arrondi correspondant avec les conditions ci dessous
        $PreFinal =""; 
        
        
        if($modPrice > 0 && $modPrice <0.5){
          $PreFinal = round($TotalPrice,0) + 0.5;
        }else if($modPrice >= 0.5 && $modPrice <1 ){
          $PreFinal = round($TotalPrice,0);
        }
        $totalFees = $PreFinal - $TotalPrice;
        $commissionSite = $totalFees-(0.018 *$PreFinal +0.18);
        $a = array($PreFinal, $TotalPrice,$totalFees, $commissionSite);

      // dd($FinalPrice);

      $annonce->setPriceTotal($PreFinal);

      $entityManager = $this->managerRegistry->getManager();
      $entityManager->persist($annonce);
      $entityManager->flush();
      // do anything else you need here, like send an email

      return $this->redirectToRoute("profil");
    }

    $formView= $form->createView();

    return $this->render('home/editAnnonce.html.twig', [
      'form' => $formView,
      'images' => $annonce->getImages()
    ]);
  }

  /**
   * @Route("/order-confirmation/{expNumber}", name="confirm_order")
   * @param int $expNumber
   */
  public function confirmOrder($expNumber)
  {
    $annonce = $this->annonceRepository->findOneBy(['expNumber' => $expNumber]);
    $annonce->setStatus("validated");
    $entityManager = $this->managerRegistry->getManager();
    $entityManager->persist($annonce);
    $entityManager->flush();
    return $this->redirect($annonce->getEtiquetteURL());
    return $this->render('home/sellConfirmationRedirection.html.twig');
    
  }

  public function count() {
    $qb = $this -> annonceRepository ->createQueryBuilder('t');
    return $qb
      ->select('count(t.id)')
      ->where("t.user_id = ")
      ->getQuery()
      ->useQueryCache(true)
      ->useResultCache(true, 3600)
      ->getSingleScalarResult();
  }

}