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
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use VictorPrdh\RecaptchaBundle\Form\ReCaptchaType;

use App\Service\ApiUser;

use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormEvent;

class PaymentNotRegistered extends AbstractType
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
      ->add('sexe')
      ->add('email')
      ->add('buy', SubmitType::class)
      ->add('lastname')
      ->add('firstname')
      ->add('birthday', DateType::class, [
        'required' => true,
        'label' => 'Date de naissance',
        'placeholder' => [
            'year' => 'Année', 'month' => 'Mois', 'day' => 'Jour',
        ],
        'format' => 'yyyyMMdd',
        'years' => range(date('Y'), date('Y') - 100),
      ])
      ->add('address')
      ->add('address2', TextType::class, [
        'required' => false,
      ])
      ->add('zipcode')
      ->add('nationality', CountryType::class)
      ->add('city')
      ->add('telephone')
      ->add('lastNameDifferent', TextType::class, [
        'required' => false,
      ])
      ->add('firstNameDifferent', TextType::class, [
        'required' => false,
      ])
      ->add('addressDifferent', TextType::class, [
        'required' => false,
      ])
      ->add('addressDifferent2', TextType::class, [
        'required' => false,
      ])
      ->add('zipCodeDifferent', TextType::class, [
        'required' => false,
      ])
      ->add('cityDifferent', TextType::class, [
        'required' => false,
      ])
      ->add('streetnumber', HiddenType::class, [
        'data' => ''
      ])
      ->add('captcha', ReCaptchaType::class)
      ;
  }
    /**
     * @return string
     */
  public function getBlockPrefix()
  {
      return '';
  }
}