<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220802121613 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE annonce CHANGE ville ville VARCHAR(255) NOT NULL, CHANGE exp_address exp_address VARCHAR(255) NOT NULL, CHANGE exp_zip_code exp_zip_code VARCHAR(255) NOT NULL, CHANGE status status VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user ADD is_verified TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE annonce CHANGE ville ville VARCHAR(255) DEFAULT NULL, CHANGE exp_address exp_address VARCHAR(255) DEFAULT NULL, CHANGE exp_zip_code exp_zip_code VARCHAR(255) DEFAULT NULL, CHANGE status status VARCHAR(255) DEFAULT \'not sold\' NOT NULL');
        $this->addSql('ALTER TABLE user DROP is_verified');
    }
}
