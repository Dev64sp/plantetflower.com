<?php
namespace App\Controller;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GoogleController extends AbstractController
{
  /**
   * Link to this controller to start the "connect" process
   *
   * @Route("/connect/google", name="connect_google")
   * @param ClientRegistry $clientRegistry
   * @return \Symfony\Component\HttpFoundation\RedirectResponse
   */
  public function connectAction(ClientRegistry $clientRegistry)
  {
    return $clientRegistry
      ->getClient('google')
      ->redirect([], [
        'prompt' => 'consent',
      ]);
  }

  /**
   * After going to Google, you're redirected back here
   * because this is the "redirect_route" you configured
   * in config/packages/knpu_oauth2_client.yaml
   *
   * @Route("/connect/google/check", name="connect_google_check")
   * @param Request $request
   * @return JsonResponse|\Symfony\Component\HttpFoundation\RedirectResponse
   */
  public function connectCheckAction(Request $request, ClientRegistry $clientRegistry)
  {
    if(!$this->getUser()) {
      return $this->redirectToRoute('app_register');
    } else {
      return $this->redirectToRoute('app_homepage');
    }
  }
}