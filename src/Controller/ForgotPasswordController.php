<?php
namespace App\Controller;

use App\Entity\User;
use App\Form\ChangePasswordType;
use App\Form\ResetPasswordType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\MailJet\Mail;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;

class ForgotPasswordController extends AbstractController
{
  /**
   * @var UserRepository
   * @var EntityManagerInterface
   */
  private $entityManager;
  private $userRepository;
  

  public function __construct(ManagerRegistry $managerRegistry,EntityManagerInterface $entityManager, UserRepository $userRepository){
      $this->entityManager = $entityManager;
      $this->userRepository = $userRepository;
      $this->managerRegistry = $managerRegistry;

  }


  /**
   * @Route("/forgot_password/", name="forgot_password")
   */
  public function sendMailforgotPassword(Request $request, UserRepository $userRepository, TokenGeneratorInterface $tokenGenerator, MailerInterface $mailer): Response{
      $form = $this->createForm(ChangePasswordType::class);
      $form->handleRequest($request);

      if ($form->isSubmitted() && $form->isValid()) {

          //on cherche si un utilisateur a cet email
          $user = $this -> userRepository -> findOneBy([
              'email' => $form['email'] -> getData()
          ]);

          //Si l'utilisateur n'existe pas
          if(!$user) {
              //on renvoie un message flash
              $this-> addFlash('danger', 'Cette email n\'existe pas');
              return  $this-> redirectToRoute('forgot_password');
          }

          //on genere un token
          $user -> setToken($tokenGenerator ->generateToken());
          $this -> entityManager -> flush();
          

          $userName= $user->getUserName();
          
          $email = (new TemplatedEmail())
              ->from('plantetflower@gmail.com')
              ->to($form->get('email')->getData())
              //->cc('cc@example.com')
              //->bcc('bcc@example.com')
              //->replyTo('fabien@example.com')
              //->priority(Email::PRIORITY_HIGH)
              ->subject('Réinitialisation de votre mot de passe')
              // path of the Twig template to render
              ->htmlTemplate('emails/resetPassword.html.twig')
    
              // pass variables (name => value) to the template
              ->context([
                  'expiration_date' => new \DateTime('+7 days'),
                  'username' => $user->getFirstName() ,
                  'token' => $user->getToken()
              ]);
    
          $mailer->send($email);

          $this -> addFlash('success', 'Un e-mail de réinitialisation de mot de passe vous a été envoyé');
          return $this -> redirectToRoute('app_login');

      }
      return $this->render('registration/mdpOublie.html.twig', [
          'ForgotPasswordform'=>$form->createView(),
      ]);
  }

  /**
   * @Route("/forgot_password/reset/{tokenPassword}", name="forgot_password_reset")
   * @param string $tokenPassword
   */
  public function resetPassword(string $tokenPassword, Request $request, UserPasswordHasherInterface $userPasswordHasher) :Response
  {
    //on cherche si un utilisateur a un tokenPassword
    $user = $this->userRepository->findOneBy(['token' => $tokenPassword]);

    //on crée le formulaire
    $form = $this->createForm(ResetPasswordType::class);
    $form->handleRequest($request);
    
    //si il existe un utilisateur avec un tokenpassword
    if(!$user) {
      $this->addFlash('error', 'Ce compte n\'existe pas');
    }

    if($form->isSubmitted() && $form->isValid()) {
      $password = $form->get('plainPassword')->getData();
      $user->setToken(null);
      $user->setPassword(
        $userPasswordHasher->hashPassword(
          $user,
          $form->get('plainPassword')->getData()
        )
      );
      $em = $this->managerRegistry->getManager();
      $em->flush();
      $this->addFlash('success', 'Mot de passe modifié !');
      return $this->redirectToRoute('app_login');
    }

    return $this->render('registration/mdpOublieStep2.html.twig', [
        'ResetPasswordform'=>$form->createView(),
    ]);
  }
}