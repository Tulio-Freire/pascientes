CREATE DATABASE `pacientes` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

-- pacientes.newtable definition

CREATE TABLE `newtable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(300) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `UF` varchar(2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `NewTable_un` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;