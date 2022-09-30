<?php

namespace App\Repository;

use App\Data\Filtre;
use App\Entity\Annonce;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;
use Knp\Component\Pager\PaginatorInterface;
use Knp\Component\Pager\Pagination\PaginationInterface;


/**
 * @method Annonce|null find($id, $lockMode = null, $lockVersion = null)
 * @method Annonce|null findOneBy(array $criteria, array $orderBy = null)
 * @method Annonce[]    findAll()
 * @method Annonce[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnnonceRepository extends ServiceEntityRepository
{

    private const TRACING_MONDIAL_HOUR = 6;


    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        $this->paginator = $paginator;
        parent::__construct($registry, Annonce::class);
    }

    /**
     * Recherche les annonces en fonction du formulaire
     * @return void 
     */
    public function search($title = null){
        $query = $this->createQueryBuilder('a');
        // $query->where('a.active = true');
        if($title != null){
            $query->andWhere('MATCH_AGAINST(a.title) AGAINST (:title boolean)>0')
                ->setParameter('title', $title);
        }
        // if($categorie != null){
        //     $query->leftJoin('a.categories', 'c');
        //     $query->andWhere('c.id = :id')
        //         ->setParameter('id', $categorie);
        // }
        ;
       
        return $query->getQuery()->getResult();
    }

     /**
     * Retourne toutes les dernières annonces
     * @return void 
     */
    public function getLastAnnonces(){
        
        return $this->createQueryBuilder('a')
        ->orderBy('a.created_at', 'DESC')
        ->setMaxResults(8)
        ->getQuery()
        ->getResult();
    }

     /**
     * Retourne le nombre d'annonces
     * @return void 
     */
    public function getTotalAnnonces(){
        $query = $this->createQueryBuilder('a')
            ->select('COUNT(a)');
    
        return $query->getQuery()->getSingleScalarResult();
    }

     /**
     * Returne toutes les annonces par page
     * @return void 
     */
    public function getPaginatedAnnonces($page, $limit){
        $query = $this->createQueryBuilder('a');

        $query->orderBy('a.created_at')
            ->setFirstResult(($page * $limit) - $limit)
            ->setMaxResults($limit)
        ;
        return $query->getQuery()->getResult();
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(Annonce $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(Annonce $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }


    /**
     * Recherche les annonces en fonction du statut de livraison
     * @return void 
     */
    public function searchByLivraison($statutLivraison = null){
        $query = $this->createQueryBuilder('a');
        if($statutLivraison != null){
            $query->andWhere('MATCH_AGAINST(a.statutLivraison) AGAINST (:statutLivraison boolean)=0')
                ->setParameter('statutLivraison', $statutLivraison);
        }
       
        return $query->getQuery()->getResult();
    }

    public function countLivred()
    {
        $count = $this->findByExpNumberField();
        $co = count($count);
        return $co;
    }
    
    public function findByExpNumberField()
    {

        return $this->createQueryBuilder('a')
            ->Where('a.statutLivraison = 1')
            ->orderBy('a.id', 'DESC')
            ->setMaxResults(40)
            ->getQuery()
            ->getResult()
        ;
    }


    /**
     * Récupère les produits en lien avec une recherche
     * @return PaginationInterface
     */
    public function findSearch(Filtre $search): PaginationInterface
    {

        $query = $this
            ->createQueryBuilder('a')
            ->select('c', 'a')
            ->join('a.category', 'c');

        if (!empty($search->q)) {
            $query = $query
                ->andWhere('a.title LIKE :q')
                ->setParameter('q', "%{$search->q}%");
        }

        if (!empty($search->min)) {
            $query = $query
                ->andWhere('a.priceTotal >= :min')
                ->setParameter('min', $search->min);
        }

        if (!empty($search->max)) {
            $query = $query
                ->andWhere('a.priceTotal <= :max')
                ->setParameter('max', $search->max);
        }

        if (!empty($search->shipment)) {
            $query = $query
                ->andWhere('a.shipment = 1');
        }

        if (!empty($search->categories)) {
            $query = $query
                ->andWhere('c.id IN (:category)')
                ->setParameter('category', $search->categories);
        }
        if (empty($search->sold)) {
            $query = $query
                ->andWhere('a.sold = false');
        }

        $query = $query->getQuery();

        return $this->paginator->paginate(
            $query,
            $search->page,
            8   
        );

    }

/**
     * Récupère le prix minimum et maximum correspondant à une recherche
     * @return integer[]
     */
    public function findMinMax(Filtre $search): array
    {
        $results = $this->getSearchQuery($search, true)
            ->select('MIN(a.priceTotal) as min', 'MAX(a.priceTotal) as max')
            ->getQuery()
            ->getScalarResult();
        return [round($results[0]['min'],-2), round($results[0]['max'],-2)];
    }

    private function getSearchQuery(Filtre $search, $ignorePrice = false): QueryBuilder
    {
        $query = $this
            ->createQueryBuilder('a')
            ->select('c', 'a')
            ->join('a.category', 'c');

        if (!empty($search->q)) {
            $query = $query
                ->andWhere('a.title LIKE :q')
                ->setParameter('q', "%{$search->q}%");
        }

        if (!empty($search->min) && $ignorePrice === false) {
            $query = $query
                ->andWhere('a.priceTotal >= :min')
                ->setParameter('min', $search->min);
        }

        if (!empty($search->max) && $ignorePrice === false) {
            $query = $query
                ->andWhere('a.priceTotal <= :max')
                ->setParameter('max', $search->max);
        }

        if (!empty($search->shipment)) {
            $query = $query
                ->andWhere('a.shipment = 1');
        }

        if (!empty($search->categories)&& $ignorePrice === false) {
            $query = $query
                ->andWhere('c.id IN (:category)')
                ->setParameter('category', $search->categories);
        }
        return $query;
    }
    /*
    public function findOneBySomeField($value): ?Annonce
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
