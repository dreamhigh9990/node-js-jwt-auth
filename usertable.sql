/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.4.8-MariaDB : Database - testdb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `users` */

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `balance` int(11) DEFAULT NULL,
  `free_balance` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`name`,`email`,`gender`,`birthday`,`balance`,`free_balance`,`password`,`createdAt`,`updatedAt`) values 
(1,'sdafsdf','dsafs','','female','2023-03-06',NULL,NULL,NULL,'2023-03-06 12:43:47','2023-03-06 12:43:47'),
(2,'Jenis',NULL,'jenis@gmail.com',NULL,NULL,0,0,'$2a$08$w2/WeiwWwvSD/4cutDIqIuEJ/KBd2feeQXDPG.7Gg124gFZHCzVNO','2023-03-06 12:54:06','2023-03-06 12:54:06'),
(3,'KevinJones',NULL,'KevinJones@gmail.com',NULL,NULL,0,0,'$2a$08$SQydz342/n.f2Vd2xJBozuFA8HVcRk2KyQWzIcbcGv1QEVTCINAWm','2023-03-06 13:13:09','2023-03-06 13:13:09'),
(4,'guard@gmail.com',NULL,'guard@gmail.com',NULL,NULL,0,0,'$2a$08$evQCB5iIb4eyJkxTaCvXGuAfxGh2vhERi.8QKLhtRWy1TxsSZ12dK','2023-03-07 01:20:20','2023-03-07 01:20:20'),
(5,'myfriend',NULL,'admin@gmail.com',NULL,NULL,0,0,'$2a$08$VkEl9s1Bqo9tjAhrs4wnFe5CxwOx../GAPANOfxEJjdmQBn9aKe7e','2023-03-07 02:26:45','2023-03-07 02:26:45'),
(6,'aaa',NULL,'q@gmail.com',NULL,NULL,0,0,'$2a$08$8pcjOAWQaaaMSqz7S/TlGugaxF3/Uomy088FSBrawERfHU0p3n6fu','2023-03-07 02:46:55','2023-03-07 02:46:55'),
(8,'hhc0910','Will Han','hhc0910@gmail.com',NULL,NULL,0,0,'$2a$08$PSUx3cCgQmCx.EVoqh9Z7.aWUYWRrBWB6XdEeVxlL3HOEIklafDTe','2023-03-07 09:23:02','2023-03-07 09:23:02'),
(9,'KevinJones@gmail.com','Kevin Jones','KevinJones@gmail.com@gmail.com',NULL,NULL,0,0,'$2a$08$fqnfVQwzijpvrRmq.xqgVOjSE091Xu6ul/FVU5mu2gKuHMbQwk64e','2023-03-07 13:27:21','2023-03-07 13:27:21'),
(10,'jenis@gmail.com','Jenis','jenis@gmail.com@gmail.com',NULL,NULL,0,0,'$2a$08$qEin77OprjRjx1kzm6YoOudTGr6PzBGQvhOINrR8N9ULbM.YWvw9O','2023-03-07 13:26:05','2023-03-07 13:26:05'),
(11,'sera@gmail.com',NULL,'webtopc2021@gmail.com',NULL,NULL,0,0,'$2a$08$v2O.Hl0QPHPFRYE7RhTnju0SX.t3XZYMVtZC7ayRVb04EAnt/EIiq','2023-03-07 23:55:49','2023-03-07 23:55:49'),
(12,'qwer',NULL,'webtopc2022@gmail.com',NULL,NULL,0,0,'$2a$08$SRiG15nk9Ap4lwGCV19dYut23mtDSaoBzW5onfptIGyxEhKype12a','2023-03-08 04:24:22','2023-03-08 04:24:22'),
(14,'1','1','1@gmail.com','male','2023-03-08',NULL,NULL,NULL,'2023-03-08 06:18:52','2023-03-08 06:18:52');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
