<?php

namespace App\Controller\Admin;

use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;
use App\Entity\Annonce;
use App\Entity\Category;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\HttpKernel\KernelInterface;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
        return $this->redirect($adminUrlGenerator->setController(UserCrudController::class)->generateUrl());
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Plant & Flower - Dashboard');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');

        yield MenuItem::section('Utilisateurs');
        yield MenuItem::subMenu('Utilisateurs', 'fa-solid fa-users')->setSubItems([
              MenuItem::linkToCrud('Créer un utilisateur', 'fas fa-plus-circle', User::class)->setAction(Crud::PAGE_NEW),
              MenuItem::linkToCrud('Voir les utilisateurs', 'fas fa-eye', User::class),
        ]);

        yield MenuItem::section('Annonces');
        yield MenuItem::subMenu('Annonces', 'fa-solid fa-basket-shopping')->setSubItems([
              MenuItem::linkToCrud('Créer une annonce', 'fas fa-plus-circle', Annonce::class)->setAction(Crud::PAGE_NEW),
              MenuItem::linkToCrud('Voir les annonces', 'fas fa-eye', Annonce::class),
        ]);

        yield MenuItem::section('Catégories');
        yield MenuItem::subMenu('Catégories', 'fa-solid fa-bars')->setSubItems([
              MenuItem::linkToCrud('Créer une catégorie', 'fas fa-plus-circle', Category::class)->setAction(Crud::PAGE_NEW),
              MenuItem::linkToCrud('Voir les catégories', 'fas fa-eye', Category::class),
        ]);
    }
}
