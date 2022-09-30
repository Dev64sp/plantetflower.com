<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\Annonce;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            // the visible title at the top of the page and the content of the <title> element
            // it can include these placeholders:
            //   %entity_name%, %entity_as_string%,
            //   %entity_id%, %entity_short_id%
            //   %entity_label_singular%, %entity_label_plural%
            ->setPageTitle('index', 'Utilisateurs')
    
            ->setPageTitle('new', fn () => new \DateTime('now') > new \DateTime('today 13:00') ? 'Nouvel Utilisateurs' : 'Nouvel Utilisateur')
            // in DETAIL and EDIT pages, the closure receives the current entity
            // as the first argument
            ->setPageTitle('detail', fn (User $user) => (string) $user)
            ->setPageTitle('edit', fn (User $user) => sprintf('Modifer<b>%s</b>', $user->getFirstName()))
    
            // the help message displayed to end users (it can contain HTML tags)
            ->setHelp('edit', '...')
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->setDisabled(),
            TextField::new('firstName','Prénom'),
            TextField::new('lastName','Nom'),
            TextField::new('email','Email'),
            ChoiceField::new('roles')->allowMultipleChoices()->setChoices([
                'Administrateur' => 'ROLE_ADMIN',
                'Utilisateur' => 'ROLE_USER'
            ]),
            TextField::new('status', 'Statut'),
            // ImageField::new('image')->setUploadDir('public/uploads/profils')->setBasePath('uploads/profils')->setUploadedFileNamePattern('[randomhash].[extension]'),
            DateTimeField::new('createdAt','Crée le'),
        ];
    }

    // public function configureFilters(Filters $filters): Filters 
    // {
    //     return $filters;
            
    // }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            // ...
            ->remove(Crud::PAGE_INDEX, Action::NEW)
        ;
    }
}
