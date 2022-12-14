<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use App\Entity\User;
use Symfony\Component\OptionsResolver\OptionsResolver;


class InformationFormType extends AbstractType
{
  public function buildForm(FormBuilderInterface $builder, array $options): void
  {
    $builder
      ->add('IBAN', TextType::class, [
        'required' => true,
        'label' => false,
        'label_attr' => [
          'class' => 'iban-text'
        ]
      ])
      ->add('BIC',  TextType::class, [
        'required' => true,
        'label' => false,
        'label_attr' => [
          'class' => 'bic-text'
        ]
      ])
      ->add('KYCrecto', FileType::class, [
        'required' => true,
        'label' => "+ Recto",
        'label_attr' => [
          'class' => 'btn-upload'
        ]
      ])
      ->add('KYCverso', FileType::class, [
        'required' => true,
        'label' => "+ Verso",
        'label_attr' => [
          'class' => 'btn-upload'
        ]
      ])
      ->add('send', SubmitType::class, [
        'label' => 'Valider vos informations'
      ])
    ;
  }

  /*public function configureOptions(OptionsResolver $resolver): void
     {
    $resolver->setDefaults([
      'data_class' => User::class,
  ]);
     }*/
}