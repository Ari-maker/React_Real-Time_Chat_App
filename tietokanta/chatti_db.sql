-- --------------------------------------------------------
-- Verkkotietokone:              127.0.0.1
-- Palvelinversio:               10.6.4-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Versio:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for chatti_db
CREATE DATABASE IF NOT EXISTS `chatti_db` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `chatti_db`;

-- Dumping structure for taulu chatti_db.chat
CREATE TABLE IF NOT EXISTS `chat` (
  `viesti_id` int(11) NOT NULL AUTO_INCREMENT,
  `vastaanottaja_id` int(11) DEFAULT NULL,
  `lahettaja_id` int(11) DEFAULT NULL,
  `sisalto` text DEFAULT NULL,
  `paivamaara` datetime DEFAULT NULL,
  PRIMARY KEY (`viesti_id`),
  KEY `vastaanottaja_id` (`vastaanottaja_id`),
  KEY `lahettaja_id` (`lahettaja_id`)
) ENGINE=InnoDB AUTO_INCREMENT=831 DEFAULT CHARSET=latin1;

-- Tietojen vientiä ei oltu valittu.

-- Dumping structure for taulu chatti_db.kaverilista
CREATE TABLE IF NOT EXISTS `kaverilista` (
  `kaveri_id` int(11) NOT NULL AUTO_INCREMENT,
  `vastaanottaja_id` int(11) NOT NULL DEFAULT 0,
  `lahettaja_id` int(11) NOT NULL DEFAULT 0,
  `hyvaksytty` int(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`kaveri_id`),
  KEY `vastaanottaja_id` (`vastaanottaja_id`),
  KEY `lahettaja_id` (`lahettaja_id`),
  CONSTRAINT `FK_kaverilista_kayttaja` FOREIGN KEY (`vastaanottaja_id`) REFERENCES `kayttaja` (`kayttaja_id`),
  CONSTRAINT `FK_kaverilista_kayttaja_2` FOREIGN KEY (`lahettaja_id`) REFERENCES `kayttaja` (`kayttaja_id`)
) ENGINE=InnoDB AUTO_INCREMENT=394 DEFAULT CHARSET=latin1;

-- Tietojen vientiä ei oltu valittu.

-- Dumping structure for taulu chatti_db.kayttaja
CREATE TABLE IF NOT EXISTS `kayttaja` (
  `kayttaja_id` int(11) NOT NULL AUTO_INCREMENT,
  `sahkoposti` varchar(255) DEFAULT NULL,
  `salasana` varchar(60) DEFAULT NULL,
  `kuva` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`kayttaja_id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=latin1;

-- Tietojen vientiä ei oltu valittu.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
