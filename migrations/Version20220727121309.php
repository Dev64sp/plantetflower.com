<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220727121309 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE annonce ADD status VARCHAR(255) NOT NULL, CHANGE ville ville VARCHAR(255) NOT NULL, CHANGE exp_address exp_address VARCHAR(255) NOT NULL, CHANGE exp_zip_code exp_zip_code VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE annonce DROP status, CHANGE ville ville VARCHAR(255) DEFAULT NULL, CHANGE exp_address exp_address VARCHAR(255) DEFAULT NULL, CHANGE exp_zip_code exp_zip_code VARCHAR(255) DEFAULT NULL');
    }
}
