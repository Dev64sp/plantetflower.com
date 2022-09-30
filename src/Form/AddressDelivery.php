<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddressDelivery extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('streetnumber', null, [
                'required' => true,
            ])
            ->add('address', null, [
                'required' => true,
            ])
            ->add('zipcode', null, [
                'required' => true,
            ])
            ->add('city', null, [
                'required' => true,
            ])
            ->add('phonenumber', null, [
                'required' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([]);
    }
}