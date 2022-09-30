<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use VictorPrdh\RecaptchaBundle\Form\ReCaptchaType;

class UserForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('image', FileType::class, [
                'label' => false,
                'mapped'=>false,
                'required'=>false
            ])
            ->add('lastname', TextType::class,array (
                'constraints' => array(
                    new NotBlank(), 
                    new Regex(array(
                        'pattern' => '/^[a-zA-Z_\-\'., \/]{0,32}$/',
                        'message' => 'Votre Nom ne doit pas contenir de chiffre et avoir 32 caractères au maximum : {{ value }}'
                        )
                    ),
                ))
            )
            ->add('firstname', TextType::class,array (
                'constraints' => array(
                    new NotBlank(), 
                    new Regex(array(
                        'pattern' => '/^[a-zA-Z_\-\'., \/]{0,32}$/',
                        'message' => 'Votre Prénom ne doit pas contenir de chiffre et avoir 32 caractères au maximum : {{ value }}'
                        )
                    ),
                )))
                ->add('streetnumber', TextType::class,array (
                    'constraints' => array(
                        new NotBlank(), 
                        new Regex(array(
                            'pattern' => '/^[0-9a-zA-Z_\-\'., \/]{0,32}$/',
                            'message' => 'Votre Numéro de rue n\'est pas valide : {{ value }}'
                            )
                        ),
                    )))
                ->add('address', TextType::class,array (
                    'constraints' => array(
                        new NotBlank(), 
                        new Regex(array(
                            'pattern' => '/^[0-9a-zA-Z_\-\'., \/]{0,32}$/',
                            'message' => 'Votre adresse ne doit pas dépasser 32 caractères, veuillez remplir le complément d\'adresse ci-dessous : {{ value }}'
                            )
                        ),
                    )))
                ->add('address2', TextType::class,array (
                    'constraints' => array(
                        new Regex(array(
                            'pattern' => '/^[0-9a-zA-Z_\-\'., \/]{0,32}$/',
                            'message' => 'Votre complément d\'adresse ne doit pas dépasser 32 caractères : {{ value }}'
                            )
                        ),
                    ),
                    'required'=>false
                    ))
                ->add('zipcode', TextType::class,array (
                    'constraints' => array(
                        new NotBlank(), 
                        new Regex(array(
                            'pattern' => '/^[0-9@]{1}[0-9]{4}$/',
                            'message' => 'Votre code postale n\'est pas valide : {{ value }}'
                            )
                        ),
                    )))
            ->add('city', TextType::class,array (
                'constraints' => array(
                    new NotBlank(), 
                    new Regex(array(
                        'pattern' => '/^[a-zA-Z_\-\' ]{2,26}$/',
                        'message' => 'Votre ville ne doit pas dépasser 26 caractères : {{ value }}'
                        )
                    ),
                )))
            ->add('phonenumber', TextType::class,array (
                'constraints' => array(
                    new NotBlank(), 
                    new Regex(array(
                        'pattern' => '/^((00|\+)33|0)[0-9][0-9]{8}$/',
                        'message' => 'Votre numéro de téléphone n\'est pas valide : {{ value }}'
                        )
                    ),
                )))
            ->add('sex', ChoiceType::class, [
                'placeholder' => 'Civilité',
                'choices' => [
                    'Monsieur' => 'M',
                    'Madame' => 'MME',
                ]
            ])
            ->add('status', ChoiceType::class, [
                'placeholder' => 'Vous souhaiteriez être...',
                'choices'=>[
                    'vendeur'  => 'vendeur',
                    'acheteur' => 'acheteur',
                    'acheteur/vendeur'=>'acheteur/vendeur',
                ]
            ])
            ->add('email', TextType::class,array (
                'label' => false,
                'constraints' => array(
                    new NotBlank(), 
                    new Regex(array(
                        'pattern' => '/^[\w\-\.\@_]{7,70}$/',
                        'message' => 'Votre {{ label }} n\'est pas valide : {{ value }}'
                        )
                    ),
                )), null, array('label' => false))            ->add('plainPassword', PasswordType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'required' => false,
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Votre mot de passe doit comporter {{ limit }} caractères minimum',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
            //->add('captcha', ReCaptchaType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
