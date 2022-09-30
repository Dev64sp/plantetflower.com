<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Constraints\NotBlank;
use Symfony\Component\Constraints\Email;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use VictorPrdh\RecaptchaBundle\Form\ReCaptchaType;

class ChangePasswordType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', RepeatedType::class,[
                'type' => EmailType::class,
                'required' => true,
                /*'constraints' => [
                    new NotBlank(),
                    new Email()
                ],*/
                'first_options' => [
                    'label' => false,
                    'attr' => ['placeholder' => 'Entrez votre adresse e-mail*'],
                ],
                
                'second_options' => [
                    'label' => false,
                    'attr' => ['placeholder' => 'Confirmez votre adresse e-mail*'],
                ]
            ])
            ->add('captcha', ReCaptchaType::class)

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}
