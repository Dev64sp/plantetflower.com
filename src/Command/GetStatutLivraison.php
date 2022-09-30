<?php
namespace App\Command;

use App\Repository\AnnonceRepository;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Attribute\AsCommand;
use nusoap_client;
use App\Service\ApiMondial;
use App\Service\ApiPayOut;
use App\Service\ApiWallet;
use App\Service\ApiIban;


class GetStatutLivraison extends Command
{
    private $ApiMondial;

    protected static $defaultName = 'app:mondial:statut';

    public function __construct(ApiMondial $ApiMondial, ApiPayOut $ApiPayOut,ApiWallet $ApiWallet, ApiIban $ApiIban)
    {
        $this->ApiMondial = $ApiMondial;
        $this->ApiPayOut = $ApiPayOut;
        $this->ApiWallet = $ApiWallet;
        $this->ApiIban = $ApiIban;

        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setDescription('Vérification des livraisons Mondial Relay')
            ->addOption('dry-run', null, InputOption::VALUE_NONE, 'Dry run')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $livraison = $this->ApiMondial->getStatusTracing($this->ApiPayOut, $this->ApiWallet, $this->ApiIban);

        $io->success(sprintf($livraison));

        return 0;
    }
}
