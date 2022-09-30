<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @UniqueEntity(fields={"email"}, message="There is already an account with this email")
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
  /**
   * @ORM\Id
   * @ORM\GeneratedValue
   * @ORM\Column(type="integer")
   */
  private $id;

  /**
   * @ORM\Column(type="string", length=180, unique=true)
   */
  private $email;

  /**
   * @ORM\Column(type="json")
   */
  private $roles = [];

  /**
   * @var string The hashed password
   * @ORM\Column(type="string", nullable=true)
   */
  private $password;

  /**
   * @ORM\Column(type="boolean")
   */
  private $isVerified = false;

  /** 
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $Fullname;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $Image;

  /**
   * @ORM\Column(type="date_immutable")
   */
  #[Gedmo\Timestampable(on: 'create')]
  private $createdAt;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $GoogleID;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $FacebookID;


  public function __construct()
  {
    $this->createdAt = new \DateTimeImmutable();
    $this->annonces = new ArrayCollection();
  }

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $firstName;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $lastName;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $address;

    /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $address2;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $phoneNumber;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $status;

  /**
   * @ORM\Column(type="array", nullable=true)
   */
  private $myPurchases = [];

  /**
   * @ORM\Column(type="array", nullable=true)
   */
  private $mySales = [];

  /**
   * @ORM\Column(type="integer", nullable=true)
   */
  private $pointsPurchase;

  /**
   * @ORM\Column(type="integer", nullable=true)
   */
  private $pointsSale;

  /**
   * @ORM\Column(type="integer", nullable=true)
   */
  private $rate;

  /**
   * @ORM\Column(type="boolean", nullable=true)
   */
  private $verified;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $sex;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $streetNumber;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $zipCode;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $city;

  /**
   * @ORM\Column(type="date", nullable=true)
   */
  private $birthday;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $token;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $nationality;
  
  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $tokenPassword;

  /**
   * @ORM\OneToMany(targetEntity=Annonce::class, mappedBy="user", orphanRemoval=true)
   */
  private $annonces;

  /**
   * @ORM\Column(type="string", length=255, nullable=true)
   */
  private $idMangopay;

  public function getId(): ?int
  {
    return $this->id;
  }

  public function getEmail(): ?string
  {
    return $this->email;
  }

  public function setEmail(string $email): self
  {
    $this->email = $email;

    return $this;
  }

  /**
   * A visual identifier that represents this user.
   *
   * @see UserInterface
   */
  public function getUserIdentifier(): string
  {
    return (string) $this->email;
  }

  /**
   * @deprecated since Symfony 5.3, use getUserIdentifier instead
   */
  public function getUsername(): string
  {
    return (string) $this->email;
  }

  /**
   * @see UserInterface
   */
  public function getRoles(): array
  {
    $roles = $this->roles;
    // guarantee every user at least has ROLE_USER
    $roles[] = 'ROLE_USER';

    return array_unique($roles);
  }

  public function setRoles(array $roles): self
  {
    $this->roles = $roles;

    return $this;
  }

  /**
   * @see PasswordAuthenticatedUserInterface
   */
  public function getPassword(): ?string
  {
    return $this->password;
  }

  public function setPassword(string $password): self
  {
    $this->password = $password;

    return $this;
  }

  /**
   * Returning a salt is only needed, if you are not using a modern
   * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
   *
   * @see UserInterface
   */
  public function getSalt(): ?string
  {
    return null;
  }

  /**
   * @see UserInterface
   */
  public function eraseCredentials()
  {
    // If you store any temporary, sensitive data on the user, clear it here
    // $this->plainPassword = null;
  }

  public function getFirstName(): ?string
  {
    return $this->firstName;
  }

  public function setFirstName(string $firstName): self
  {
    $this->firstName = $firstName;

    return $this;
  }

  public function getFullname(): ?string
  {
    return $this->Fullname;
  }

  public function setFullname(?string $Fullname): self
  {
    $this->Fullname = $Fullname;

    return $this;
  }

  public function getLastName(): ?string
  {
    return $this->lastName;
  }

  public function setLastName(string $lastName): self
  {
    $this->lastName = $lastName;

    return $this;
  }

  public function getImage(): ?string
  {
    return $this->Image;
  }

  public function setImage(?string $Image): self
  {
    $this->Image = $Image;

    return $this;
  }

  public function getAddress(): ?string
  {
    return $this->address;
  }

  public function setAddress(string $address): self
  {
    $this->address = $address;

    return $this;
  }

  public function getAddress2(): ?string
  {
    return $this->address2;
  }

  public function setAddress2(string $address2): self
  {
    $this->address2 = $address2;

    return $this;
  }

  public function getCreatedAt(): ?\DateTimeImmutable
  {
    return $this->createdAt;
  }

  public function setCreatedAt(\DateTimeImmutable $createdAt): self
  {
    $this->createdAt = $createdAt;

    return $this;
  }

  public function getPhoneNumber(): ?string
  {
    return $this->phoneNumber;
  }

  public function setPhoneNumber(string $phoneNumber): self
  {
    $this->phoneNumber = $phoneNumber;

    return $this;
  }

  public function getGoogleID(): ?string
  {
    return $this->GoogleID;
  }

  public function setGoogleID(?string $GoogleID): self
  {
    $this->GoogleID = $GoogleID;

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

  public function getFacebookID(): ?string
  {
    return $this->FacebookID;
  }

  public function setFacebookID(?string $FacebookID): self
  {
    $this->FacebookID = $FacebookID;

    return $this;
  }

  public function getMyPurchases(): ?array
  {
    return $this->myPurchases;
  }

  public function setMyPurchases(?array $myPurchases): self
  {
    $this->myPurchases = $myPurchases;

    return $this;
  }

  public function getMySales(): ?array
  {
    return $this->mySales;
  }

  public function setMySales(?array $mySales): self
  {
    $this->mySales = $mySales;

    return $this;
  }

  public function getPointsPurchase(): ?int
  {
    return $this->pointsPurchase;
  }

  public function setPointsPurchase(?int $pointsPurchase): self
  {
    $this->pointsPurchase = $pointsPurchase;

    return $this;
  }

  public function getPointsSale(): ?int
  {
    return $this->pointsSale;
  }

  public function setPointsSale(?int $pointsSale): self
  {
    $this->pointsSale = $pointsSale;

    return $this;
  }

  public function getRate(): ?int
  {
    return $this->rate;
  }

  public function setRate(?int $rate): self
  {
    $this->rate = $rate;

    return $this;
  }

  public function getSex(): ?string
  {
    return $this->sex;
  }

  public function setSex(string $sex): self
  {
    $this->sex = $sex;

    return $this;
  }

  public function getVerified(): ?bool
  {
    return $this->verified;
  }

  public function setVerified(bool $verified): self
  {
    $this->verified = $verified;

    return $this;
  }

  public function getStreetNumber(): ?string
  {
    return $this->streetNumber;
  }

  public function setStreetNumber(?string $streetNumber): self
  {
    $this->streetNumber = $streetNumber;

    return $this;
  }

  public function getZipCode(): ?string
  {
    return $this->zipCode;
  }

  public function setZipCode(?string $zipCode): self
  {
    $this->zipCode = $zipCode;

    return $this;
  }

  public function getCity(): ?string
  {
    return $this->city;
  }

  public function setCity(?string $city): self
  {
    $this->city = $city;

    return $this;
  }

  public function getBirthday(): ?\DateTimeInterface
  {
    return $this->birthday;
  }

  public function setBirthday(?\DateTimeInterface $birthday): self
  {
    $this->birthday = $birthday;

    return $this;
  }

  public function getToken(): ?string
  {
    return $this->token;
  }

  public function setToken(?string $token): self
  {
    $this->token = $token;

    return $this;
  }

  public function getNationality(): ?string
  {
    return $this->nationality;
  }

  public function setNationality(?string $nationality): self
  {
    $this->nationality = $nationality;

    return $this;
  }

  public function getTokenPassword(): ?string
  {
    return $this->tokenPassword;
  }

  public function setTokenPassword(?string $tokenPassword): self
  {
    $this->tokenPassword = $tokenPassword;

    return $this;
  }

  /**
   * @return Collection<int, Annonce>
   */
  public function getAnnonces(): Collection
  {
    return $this->annonces;
  }

  public function addAnnonce(Annonce $annonce): self
  {
    if (!$this->annonces->contains($annonce)) {
      $this->annonces[] = $annonce;
      $annonce->setUser($this);
    }

    return $this;
  }

  public function removeAnnonce(Annonce $annonce): self
  {
    if ($this->annonces->removeElement($annonce)) {
      // set the owning side to null (unless already changed)
      if ($annonce->getUser() === $this) {
        $annonce->setUser(null);
      }
    }

    return $this;
  }

  public function getIdMangopay(): ?string
  {
    return $this->idMangopay;
  }

  public function setIdMangopay(?string $idMangopay): self
  {
    $this->idMangopay = $idMangopay;

    return $this;
  }

  public function getIsVerified(): ?bool
  {
      return $this->isVerified;
  }
  
  public function setIsVerified(bool $isVerified): self
  {
      $this->isVerified = $isVerified;
      return $this;
  }

  public function __toString(): string 
  {
    return $this->getEmail();
  }
}