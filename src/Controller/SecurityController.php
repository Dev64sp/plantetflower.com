<?php

namespace App\Controller;

use App\Entity\User;
use App\MailJet\Mail;
use App\Service\ApiUser;
use App\Service\ApiWallet;
use App\Form\ForgetPasswordForm;
use App\Form\RecaptchaFormType;
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
use SymfonyCasts\Bundle\VerifyEmail;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class SecurityController extends AbstractController
{
  /**
   * @Route("/login", name="app_login")
   */
  public function login(AuthenticationUtils $authenticationUtils): Response
  {
    if ($this->getUser()) {
      //return $this->redirectToRoute('target_path');
    }

    // get the login error if there is one
    $error = $authenticationUtils->getLastAuthenticationError();
    // last username entered by the user
    $lastUsername = $authenticationUtils->getLastUsername();
    $form = $this->createForm(RecaptchaFormType::class);
    
    return $this->render('security/login.html.twig', [
      'form' => $form->createView(),
      'last_username' => $lastUsername, 
      'error' => $error
    ]);
  }
     /**
   * @Route("/login/{mail}", name="app_send")
   * @param string $mail
   * 
   */
  public function resendMail(AuthenticationUtils $authenticationUtils,Request $request, MailerInterface $mailer, VerifyEmailHelperInterface $verifyEmailHelper, UserRepository $userRepository): Response
  {
    $mail = $request->get('mail');
    var_dump($mail);
    $user = $userRepository->findOneBy( [
      'email'=>$mail]);
          // get the login error if there is one
    $error = $authenticationUtils->getLastAuthenticationError();
    // last username entered by the user
    $lastUsername = $authenticationUtils->getLastUsername();
    if (!$user) {
      return $this->render('registration/pasInscrit.html.twig', ['mail' => $lastUsername]);

    }

      $signatureComponents = $verifyEmailHelper->generateSignature(
        'app-verify-mail',
        $user->getId(),
        $user->getEmail(),
        array ('token' => $user->getToken(),'id'=>$user->getId(), 'mail' =>$user->getEmail())
        );
        $email = (new TemplatedEmail())
        ->from('plantetflower@gmail.com')
        ->to('dev64splatoon@gmail.com')
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
        ]);
  
      $mailer->send($email);
  
      return $this->render('registration/resend_verify_email.html.twig', [
          'controller_name' => 'RegistrationController',
      ]);

  }

  

  /**
   * @Route("/logout", name="app_logout")
   */
  public function logout(): void
  {
    throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
  }
}
