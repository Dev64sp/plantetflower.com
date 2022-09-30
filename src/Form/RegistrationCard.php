<?php

namespace App\Form;


use App\Entity\PaymentMethod;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use VictorPrdh\RecaptchaBundle\Form\ReCaptchaType;

use App\Service\ApiUser;

use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormEvent;

class RegistrationCard extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'property_path' => '[name]'
            ])
            ->add('cardNumber', TextType::class, [
                'property_path' => '[cardNumber]'
            ])
            ->add('cardExpirationDate', TextType::class, [
                'property_path' => '[cardExpirationDate]'
            ])
            ->add('cardCvx', TextType::class, [
                'property_path' => '[cardCvx]'
            ])
            ->add('data', HiddenType::class, [
                'property_path' => '[data]'
            ])
            ->add('accessKeyRef', HiddenType::class, [
                'property_path' => '[accessKeyRef]'
            ])
            ->add('parcelshopAddress', HiddenType::class, [
                'property_path' => '[parcelshopAddress]'
            ])
            ->add('parcelshopId', HiddenType::class, [
                'property_path' => '[parcelshopId]'
            ])
            ->add('buy', SubmitType::class)
        ;
    }
    /**
     * @return string
     */
    public function getBlockPrefix()
    {
        return '';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // 'data_class' => PaymentMethod::class,
        ]);
    }
}
