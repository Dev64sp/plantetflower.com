<?php
namespace App\Command;

use App\Repository\AnnonceRepository;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\HttpKernel\KernelInterface;
use App\Service\ApiPayOut;
use App\Service\ApiWallet;
use App\Service\ApiIban;



class TracingMondial extends Command
{
    private $annonceRepository;

    protected static $defaultName = 'app:annonce:tracing';

    public function __construct(AnnonceRepository $annonceRepository)
    {
        $this->annonceRepository = $annonceRepository;

        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setDescription('Vérification des livraisons')
            ->addOption('dry-run', null, InputOption::VALUE_NONE, 'Dry run')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $count = $this->annonceRepository->countLivred();


        $io->success(sprintf('Livraisons effectuées "%d" .', $count));

        return 0;
    }
}
