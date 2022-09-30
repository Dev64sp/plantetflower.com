<?php

namespace App\Controller;

use App\Entity\User;
use App\MailJet\Mail;
use App\Service\ApiUser;
use App\Service\ApiWallet;
use App\Form\ForgetPasswordForm;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use App\Repository\AnnonceRepository;
use App\Security\AppCustomAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class RegistrationController extends AbstractController
{
  /**
   * @var UserRepository
   */
  private $userRepository;

  public function __construct(EntityManagerInterface $entityManager, AnnonceRepository $annonceRepository, UserRepository $userRepository)
  {
    $this->userRepository = $userRepository;

  }   

  /**
   * @Route("/register", name="app_register")
   * @Route("/user/{id}/edit", name="app_edit")
   */
  public function register(User $user = null, Request $request, UserPasswordHasherInterface $userPasswordHasher, 
  UserAuthenticatorInterface $userAuthenticator, AppCustomAuthenticator $authenticator, EntityManagerInterface $entityManager, 
  TokenGeneratorInterface $tokenGenerator, ApiUser $ApiUser, ApiWallet $ApiWallet,MailerInterface $mailer, VerifyEmailHelperInterface $verifyEmailHelper): Response
  {
    if(!$user) {
      $user = new User();
    }


    $form = $this->createForm(RegistrationFormType::class, $user);
    $form->handleRequest($request);

    if($form->isSubmitted() && $form->isValid()) {
      // encode the plain password
      $user->setPassword(
          $userPasswordHasher->hashPassword(
              $user,
              $form->get('plainPassword')->getData()
          )
        );

      $ApiUser->NewProfil($form);
      $user->setIdMangopay($ApiUser->userMangoPay->Id);
      $ApiWallet->NewWallet($ApiUser->userMangoPay->Id);

      // $user->setToken($this->generateToken());
      $user->setToken($this->generateToken());
      $entityManager->persist($user);
      $entityManager->flush();
      // do anything else you need here, like send an email

          // création d'une signature personnalisé pour un envoir de mail de verification
      $signatureComponents = $verifyEmailHelper->generateSignature(
                'app-verify-mail',
                $user->getId(),
                $user->getEmail(),
                array ('token' => $user->getToken(),'id'=>$user->getId(), 'mail' =>$user->getEmail())
      );

      $url =$signatureComponents->getSignedUrl();

          // creation du mail
      $email = (new TemplatedEmail())
      ->from('plantetflower@gmail.com')
      // ->to('dev64splatoon@gmail.com')
      ->to($form->get('email')->getData())

      //->cc('cc@example.com')
      //->bcc('bcc@example.com')
      //->replyTo('fabien@example.com')
      //->priority(Email::PRIORITY_HIGH)
      ->subject('Valider votre inscription!')
      // path of the Twig template to render
      ->htmlTemplate('emails/signup.html.twig')

      // pass variables (name => value) to the template
      ->context([
          'expiration_date' => new \DateTime('+7 days'),
          'username' => $user->getFirstName() ,
          'message' => $signatureComponents->getSignedUrl(),
          'url' => $url,
      ]);

      $mailer->send($email);


      // Utilisation de l'API Mailjet pour vérifier l'email
      /*$mj = new \Mailjet\Client(getenv('MJ_APIKEY_PUBLIC'), getenv('MJ_APIKEY_PRIVATE'),true,['version' => 'v3']);
      $body = [
      'IsExcludedFromCampaigns' => "false",
      'Name' => $form->get('firstname')->getData()." ".$form->get('lastname')->getData(),
      'Email' => $form->get('email')->getData()
      ];
      $response = $mj->post(Resources::$Contact, ['body' => $body]);
      $response->success();
      var_dump($response->getStatus());*/

      return $this->redirectToRoute('app-verify');
  
    };

    return $this->render('registration/register.html.twig', [
        'registrationForm' => $form->createView(),
        'editMode' => $user->getId() !== null,
    ]);
  }

  /**
   * @Route("/verify", name="app-verify")
   */
  public function verify(): Response
  {
    return $this->render('registration/confirmationInscription.html.twig', [
        'controller_name' => 'RegistrationController',
    ]);
  }

  /**
   * @Route("/verify/{id}", name="app-verify-mail")
   * @param int $id
   */
              // verification de la signature mail
  public function verifyUserEmail(Request $request,EntityManagerInterface $entityManager, VerifyEmailHelperInterface $verifyEmailHelper, UserRepository $userRepository): Response
  {
    $id = $request->get('id');
    $user = $userRepository->find($id);

    if (!$user) {
        throw $this->createNotFoundException();
    }
    try {
      $verifyEmailHelper->validateEmailConfirmation(
          $request->getUri(),
          $user->getId(),
          $user->getEmail()
      );
  } catch (VerifyEmailExceptionInterface $e) {
    $this->addFlash('error', $e->getReason());
    return $this->redirectToRoute('app_register');
  }

  $user->setIsVerified(true);
  $entityManager->persist($user);
  $entityManager->flush();
  return $this->redirectToRoute('app_login');
  
  }

 
  /**
   * @return string
   * @throws \Exception
   */
  private function generateToken()
  {
    return rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '=');
  }
}