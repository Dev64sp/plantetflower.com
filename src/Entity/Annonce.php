<?php

namespace App\Entity;

use App\Repository\AnnonceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=AnnonceRepository::class)
 * @ORM\Table(name="annonce", indexes={@ORM\Index(columns={"title"}, flags={"fulltext"})})
 */
class Annonce
{

  const DEVISE = 'eur';

  /**
   * @ORM\Id
   * @ORM\GeneratedValue
   * @ORM\Column(type="integer")
   */
  private $id;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $description;

  /**
   * @ORM\Column(type="boolean")
   */
  private $shipment;

    /**
   * @ORM\Column(type="boolean")
   */
  private $statutLivraison;

  /**
   * @ORM\Column(type="float")
   */
  private $priceOrigin;

  /**
   * @ORM\Column(type="float")
   */
  private $priceTotal;

  /**
   * @ORM\Column(type="date")
   */
  private $created_at;

  /**
   * @ORM\Column(type="boolean")
   */
  private $plantPot;

  /**
   * @ORM\Column(type="date")
   */
  private $dateExpiration;

  /**
   * @ORM\Column(type="boolean")
   */
  private $sold;

  /**
   * @ORM\Column(type="string", length=255)
   */
  private $poids;

  /**
   * @ORM\Column(type="string", length=255)
   */
  private $title;

    /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $token;

  /**
   * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="annonces")
   * @ORM\JoinColumn(nullable=false)
   */
  private $category;

  /**
   * @ORM\OneToMany(targetEntity=Image::class, mappedBy="annonce", orphanRemoval=true, cascade={"persist"})
   */
  private $images;

  /**
   * @ORM\ManyToOne(targetEntity=User::class, inversedBy="annonces")
   * @ORM\JoinColumn(nullable=false)
   */
  private $user;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $acheteur;

  /**
   * @ORM\Column(type="string", length=255)
   */
  private $Ville;

  /**
   * @ORM\Column(type="string", length=255)
   */
  private $expAddress;

  /**
   * @ORM\Column(type="string", length=255)
   */
  private $expZipCode;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $expRelId;

  /**
  * @ORM\Column(type="string", length=255, nullable=true)
  */
  private $expNumber;

  /**
  * @ORM\Column(type="string", length=400, nullable=true)
  */
  private $etiquetteURL;

    /**
  * @ORM\Column(type="string", length=400, nullable=true)
  */
  private $Tracing_url;

  /**
   * @ORM\Column(type="string", length=255)
   */
  private $status;

  public function getId(): ?int
  {
    return $this->id;
  }

  public function getDescription(): ?string
  {
    return $this->description;
  }

  public function setDescription(?string $description): self
  {
    $this->description = $description;

    return $this;
  }

  public function getShipment(): ?bool
  {
    return $this->shipment;
  }

  public function setShipment(bool $shipment): self
  {
    $this->shipment = $shipment;

    return $this;
  }
  

  public function getStatutLivraison(): ?bool
  {
    return $this->statutLivraison;
  }

  public function setStatutLivraison(bool $statutLivraison): self
  {
    $this->statutLivraison = $statutLivraison;

    return $this;
  }

  public function getPriceOrigin(): ?float
  {
    return $this->priceOrigin;
  }

  public function setPriceOrigin(float $priceOrigin): self
  {
    $this->priceOrigin = $priceOrigin;

    return $this;
  }

  public function getPriceTotal(): ?float
  {
    return $this->priceTotal;
  }

  public function setPriceTotal(float $priceTotal): self
  {
    $this->priceTotal = $priceTotal;

    return $this;
  }

  public function getCreatedAt(): ?\DateTimeInterface
  {
    return $this->created_at;
  }

  public function setCreatedAt(\DateTimeInterface $created_at): self
  {
    $this->created_at = $created_at;

    return $this;
  }

  public function getPlantPot(): ?bool
  {
    return $this->plantPot;
  }

  public function setPlantPot(bool $plantPot): self
  {
    $this->plantPot = $plantPot;

    return $this;
  }

  public function getDateExpiration(): ?\DateTimeInterface
  {
    return $this->dateExpiration;
  }

  public function setDateExpiration(\DateTimeInterface $dateExpiration): self
  {
    $this->dateExpiration = $dateExpiration;

    return $this;
  }

  public function getSold(): ?bool
  {
    return $this->sold;
  }

  public function setSold(bool $sold): self
  {
    $this->sold = $sold;

    return $this;
  }

  public function getPoids(): ?string
  {
    return $this->poids;
  }

  public function setPoids(string $poids): self
  {
    $this->poids = $poids;

    return $this;
  }

  public function getTitle(): ?string
  {
    return $this->title;
  }

  public function setTitle(string $title): self
  {
    $this->title = $title;

    return $this;
  }

  public function getToken(): ?string
  {
    return $this->token;
  }

  public function setToken(string $token): self
  {
    $this->token = $token;

    return $this;
  }

  public function getCategory(): ?Category
  {
    return $this->category;
  }

  public function setCategory(?Category $category): self
  {
    $this->category = $category;

    return $this;
  }

  public function __construct()
  {
    $this->createdAt = new \DateTimeImmutable();
    $this->images = new ArrayCollection();
  }

  /**
   * @return Collection<int, Image>
   */
  public function getImages(): Collection
  {
    return $this->images;
  }

  public function addImage(Image $image): self
  {
    if (!$this->images->contains($image)) {
      $this->images[] = $image;
      $image->setAnnonce($this);
    }

    return $this;
  }

  public function removeImage(Image $image): self
  {
    if ($this->images->removeElement($image)) {
      // set the owning side to null (unless already changed)
      if ($image->getAnnonce() === $this) {
        $image->setAnnonce(null);
      }
    }

    return $this;
  }

  public function getUser(): ?User
  {
    return $this->user;
  }

  public function setUser($user): self
  {
    $this->user = $user;

    return $this;
  }

  public function getAcheteur()
  {
    return $this->acheteur;
  }

  public function setAcheteur($acheteur)
  {
    $this->acheteur = $acheteur;

    return $this;
  }

  public function getVille(): ?string
  {
    return $this->Ville;
  }

  public function setVille(string $Ville): self
  {
    $this->Ville = $Ville;

    return $this;
  }

  public function getExpAddress(): ?string
  {
      return $this->expAddress;
  }

  public function setExpAddress(string $expAddress): self
  {
      $this->expAddress = $expAddress;

      return $this;
  }

  public function getExpZipCode(): ?string
  {
      return $this->expZipCode;
  }

  public function setExpZipCode(string $expZipCode): self
  {
      $this->expZipCode = $expZipCode;

      return $this;
  }

  public function getExpRelId(): ?string
  {
      return $this->expRelId;
  }

  public function setExpRelId(string $expRelId): self
  {
      $this->expRelId = $expRelId;

      return $this;
  }

  public function getExpNumber(): ?string
  {
      return $this->expNumber;
  }

  public function setExpNumber(string $expNumber): self
  {
      $this->expNumber = $expNumber;

      return $this;
  }

  public function getEtiquetteURL(): ?string
  {
      return $this->etiquetteURL;
  }

  public function setEtiquetteURL(string $etiquetteURL): self
  {
      $this->etiquetteURL = $etiquetteURL;

      return $this;
  }

  public function getTracingUrl(): ?string
  {
      return $this->Tracing_url;
  }

  public function setTracingUrl(string $Tracing_url): self
  {
      $this->Tracing_url = $Tracing_url;

      return $this;
  }

  public function getStatus(): ?string
  {
      return $this->status;
  }

  public function setStatus(string $status): self
  {
      $this->status = $status;

      return $this;
  }
}