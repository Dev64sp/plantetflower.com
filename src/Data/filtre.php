<?php

namespace App\Data;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
class filtre {
    
    /**
     * @var int
     */
    public $page ;

    /**
     * @var string
     */
    public $q = '';


      /**
   * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="annonces")
   * @ORM\JoinColumn(nullable=false)
   */
    public $categories;

    /**
     * @var null|float
     */
    public $max;

    /**
     * @var null|float
     */
    public $min;

    /**
     * @var boolean
     */
    public $shipment;

            /**
     * @var boolean
     */
    public $sold = 0;

}