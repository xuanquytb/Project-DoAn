CREATE DATABASE  IF NOT EXISTS `webthaotran` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `webthaotran`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: webthaotran
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idCustomer` int NOT NULL,
  `idMGG` int DEFAULT NULL,
  `stateCard` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (4,3,5,1),(5,3,5,2),(6,3,5,1),(7,4,5,1),(8,4,5,1);
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameCategory` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameCategory` (`nameCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Nhà cửa đời sống','default.png','Bao gồm các sản phẩm xung quanh đời sống'),(2,'Thiết bị gia dụng','default.png','default.jpg'),(3,'Thiết bị nhà bếp','default.png','default.jpg'),(4,'Balo & Túi ví','image-1652503330139.jpeg','default.jpg'),(5,'Test ngành hàng','image-1652522272332.png','456464');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` text NOT NULL,
  `sex` varchar(20) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(150) NOT NULL,
  `address` text NOT NULL,
  `username` varchar(200) NOT NULL,
  `passwordEn` varchar(200) NOT NULL,
  `statusLock` int NOT NULL,
  `dateOfBirth` date NOT NULL,
  `idRole` int NOT NULL,
  `createDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `idRole` (`idRole`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Vũ Xuân Quý','Nam','xuanquyadmin@gmail.com','08586038888','Tây Sơn Kiến Xương Thái Bình','vuxuanquy','$argon2i$v=19$m=4096,t=3,p=1$WIXCg3Wo1zaPDUgh0MdO4A$IhiJDkzaCYBODZ9R5tGMFEAdDNXMLfQHyDaktcLUD3w',0,'1999-03-23',1,'2022-04-26 16:03:36'),(2,'Đặng Thị Hải Nhật','Nữ','hainhaiadmin@gmail.com','9876543210','Tây Sơn Kiến Xương Thái Bình','hainhat','$argon2i$v=19$m=4096,t=3,p=1$/ziRabvXKFdFgt0jHF3IGg$yoiLgiAVt2jM0wj0FcXEA9YdlcMInpIBmesUoK79a6E',0,'1999-02-27',1,'2022-04-26 16:04:46');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` text NOT NULL,
  `nameImage` varchar(200) NOT NULL,
  `createDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagetable`
--

DROP TABLE IF EXISTS `imagetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagetable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameImage` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagetable`
--

LOCK TABLES `imagetable` WRITE;
/*!40000 ALTER TABLE `imagetable` DISABLE KEYS */;
INSERT INTO `imagetable` VALUES (1,'image-1651947644341.jpeg'),(2,'image-1651947644341.jpeg'),(3,'image-1651592043709.jpeg'),(4,'image-1651591974864.jpeg');
/*!40000 ALTER TABLE `imagetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturer`
--

DROP TABLE IF EXISTS `manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufacturer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameManufacturer` varchar(200) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `mail` varchar(100) NOT NULL,
  `nameImage` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameManufacturer` (`nameManufacturer`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'Sony','7453743754','768676786','76786786','image-1652520600435.jpeg'),(2,'Xiaomi','0984646516','trung quốc','xiaomi@gmail.com','image-1652522550611.jpeg');
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameNews` text NOT NULL,
  `brief` text NOT NULL,
  `content` text NOT NULL,
  `nameImage` varchar(150) NOT NULL,
  `author` varchar(150) NOT NULL,
  `createDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `state` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (2,'Tin khuyến mãi đặc biệt','Giảm giá đặc biệt','Giảm 50% các mặt hàng','undefined','Minh Thư','2022-05-05 21:12:12',0);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `origin`
--

DROP TABLE IF EXISTS `origin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `origin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameOrigin` varchar(200) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameOrigin` (`nameOrigin`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `origin`
--

LOCK TABLES `origin` WRITE;
/*!40000 ALTER TABLE `origin` DISABLE KEYS */;
INSERT INTO `origin` VALUES (1,'Việt Nam','Việt nam'),(2,'Trung Quốc','Trung Quốc');
/*!40000 ALTER TABLE `origin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameProduct` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `warranty` int NOT NULL,
  `quantity` int NOT NULL,
  `price` double NOT NULL,
  `promotional` double NOT NULL,
  `status` text NOT NULL,
  `image` varchar(150) NOT NULL,
  `idCategory` int NOT NULL,
  `idUnit` int NOT NULL,
  `idManufacturer` int NOT NULL,
  `idOrigin` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameProduct` (`nameProduct`),
  KEY `idCategory` (`idCategory`),
  KEY `idUnit` (`idUnit`),
  KEY `idManufacturer` (`idManufacturer`),
  KEY `idOrigin` (`idOrigin`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `category` (`id`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`idUnit`) REFERENCES `unit` (`id`),
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`idManufacturer`) REFERENCES `manufacturer` (`id`),
  CONSTRAINT `product_ibfk_4` FOREIGN KEY (`idOrigin`) REFERENCES `origin` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (7,'Máy sấy tóc','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">V❤️chất liệu sản phẩm Tici</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">#aonuthoitrang ? Hàng áo nữ của shop là hàng freesize</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">?Chất co giãn thoải mái, đậm nữ tính</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">From nữ ?????</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">- áo : cao m62 nặng 55kg đổ lại là đẹp nhé?                          </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">?Thiết kế với màu như ảnh: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">?Các sp của shop đa số đều có đăng kèm ảnh thật sp</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">?Khi đặt hàng các bạn đọc kỹ thông tin sp và đặt đơn với đúng màu và số lượng để tránh gửi hàng nhầm lẫn ạ.?</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">❗️shop không nhận đặt màu qua lưu ý và ib mong các bạn thông cảm.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">??????????????????</span></p>',12,300,20000000,10,'Hết hàng','hinh-anh-avatar-nam-1-600x600.jpg',1,2,1,2);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `productview`
--

DROP TABLE IF EXISTS `productview`;
/*!50001 DROP VIEW IF EXISTS `productview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `productview` AS SELECT 
 1 AS `id`,
 1 AS `nameProduct`,
 1 AS `description`,
 1 AS `warranty`,
 1 AS `quantity`,
 1 AS `price`,
 1 AS `promotional`,
 1 AS `status`,
 1 AS `image`,
 1 AS `nameCategory`,
 1 AS `nameUnit`,
 1 AS `nameManufacturer`,
 1 AS `nameOrigin`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameRole` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameRole` (`nameRole`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Administrators','Quyền cho quản trị viên'),(2,'Customer','Quyền dành cho khách hàng'),(3,'Employee','Quyền dành cho nhân viên');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameUnit` varchar(200) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameUnit` (`nameUnit`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (1,'Chiếc','1'),(2,'Thùng','2');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` text NOT NULL,
  `username` varchar(200) NOT NULL,
  `passwordEn` varchar(150) NOT NULL,
  `sex` varchar(50) DEFAULT '',
  `dateOfBirth` date DEFAULT '1980-09-12',
  `email` varchar(150) NOT NULL,
  `phone` varchar(150) NOT NULL,
  `address` text NOT NULL DEFAULT (_utf8mb4''),
  `statusLock` int NOT NULL DEFAULT (1),
  `countOrder` int DEFAULT (0),
  `totalMonny` double DEFAULT (0),
  `idRole` int NOT NULL,
  `createDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `nameAvata` varchar(150) DEFAULT (_utf8mb4'default.jpg'),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`),
  KEY `idRole` (`idRole`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'Xuân Quý','client1','$argon2i$v=19$m=4096,t=3,p=1$xYRpGl/tsSZH6i4ZCpRGAA$To6xuKEJQRT4c3z55PPlW5uXug7xNQHpBEf5Qg9qcRc','Nam','1999-03-23','vuxuanquynnn@gmail.com','08686038251','TAY SON KIEN XUONG THAI BINH',1,0,0,2,'2022-04-30 10:09:05','image-1651593261305.png'),(6,'Đặng Thị Hải Nhật','client2','$argon2i$v=19$m=4096,t=3,p=1$6nTvgfF4PQsnl3a3pCgGnQ$R6O/IL8ee/KyuNu970+wqvnyqPmkdWFOHKjCI41cmtA','Nữ','1999-02-27','dangthihainhat@gmail.com','0868603899','Lê lợi kiến xương thái bình',1,0,0,2,'2022-05-07 12:53:26','image-1651947644341.jpeg'),(7,'Vũ Xuân Quý','vuxuanquy','$argon2i$v=19$m=4096,t=3,p=1$KyroShpIMij5EAZ9C4F3Tg$CnnRcEIrkZYvRJft6+43igixk8t2K7i/PTP6zFI2atY','Nam','1999-03-23','xuanquy@gmail.com','08686038255','Tây Sơn Kiến Xương Thái Bình',1,0,0,1,'2022-05-08 00:32:21','image-1651947944713.jpeg'),(8,'Đặng Thị Hải Nhật','hainhat','$argon2i$v=19$m=4096,t=3,p=1$rhL1s0uoouHr6yvHC/9saw$57QJK6fxlrlvmhZQPFJkBIh8cXzghHONe2yAhboGOgI','Nữ','1999-02-27','hainhat@gmail.com','096952342444','Lê Lợi Kiến Xương Thái Bình',1,0,0,1,'2022-05-08 00:38:38','image-1651947369333.jpeg'),(9,'employee1','employee1','$argon2i$v=19$m=4096,t=3,p=1$MTVf/LtgbjAejN+/ynLdfg$P9DzEi4XdWHAO/zfSR7mwmwikm6Txschq3tgZZelYIg','Nam','2002-05-09','employee@gmail.com','05466546489','Tiền Hải Kiến Xương Thái Bình',1,0,0,3,'2022-05-08 00:43:15','image-1651948101276.jpeg'),(27,'Vũ Hồng Sơn','hongson','$argon2i$v=19$m=4096,t=3,p=1$ZO/bQZaiKoiBKZk7rzfMJQ$bqCrkBpoBGKzKbnO//mJ2YVT0yAWbzDA3Bix9COkTDs','Nam','2003-02-14','vuhongson@gmail.com','08686038256','TAY SON KIEN XUONG THAI BINH',1,0,0,1,'2022-05-08 10:58:28','image-1652597921339.png'),(43,'uuu','aaa','$argon2i$v=19$m=4096,t=3,p=1$KUsIPHufy8mJhq6Q3tXhJQ$rnskp7h6GaD08wwluXTHBkp+jvO/wSiB+i05Si+tIgM','Nam','2022-06-03','uuuuu','uuuuu','jjjjj',1,0,0,3,'2022-05-14 11:26:37','default.png');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'webthaotran'
--

--
-- Dumping routines for database 'webthaotran'
--
/*!50003 DROP PROCEDURE IF EXISTS `updateProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateProduct`(
IN fid INT,
IN fnameProduct VARCHAR(200),
IN fdescription TEXT,
IN fwarranty INT,
IN fquantity INT, 
IN fpromotional DOUBLE, 
IN fprice DOUBLE,
IN fstatus TEXT,
IN fidCategory nvarchar(200),
IN fnameManufacturer nvarchar(200),
IN forigin nvarchar(200)
)
BEGIN
	declare idManu int;
    declare idOri int;
    declare idCategory int;
    declare idUnit int;
	select id INTO idManu from manufacturer where nameManufacturer like fnameManufacturer;
    select id INTO idOri from origin where nameOrigin like forigin;
    select id INTO idCategory from category where nameCategory like fidCategory;

    Update product SET 
    nameProduct = fnameProduct, 
    description = fdescription, 
    warranty = fwarranty , 
    quantity = fquantity,
    price = fprice,
    promotional = fpromotional, 
    status = fstatus , 
    idCategory = idCategory, 
    idManufacturer = idManu , 
    idOrigin = idOri WHERE (id = fid);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `productview`
--

/*!50001 DROP VIEW IF EXISTS `productview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `productview` AS select `product`.`id` AS `id`,`product`.`nameProduct` AS `nameProduct`,`product`.`description` AS `description`,`product`.`warranty` AS `warranty`,`product`.`quantity` AS `quantity`,`product`.`price` AS `price`,`product`.`promotional` AS `promotional`,`product`.`status` AS `status`,`product`.`image` AS `image`,`category`.`nameCategory` AS `nameCategory`,`unit`.`nameUnit` AS `nameUnit`,`manufacturer`.`nameManufacturer` AS `nameManufacturer`,`origin`.`nameOrigin` AS `nameOrigin` from ((((`product` join `manufacturer` on((`product`.`idManufacturer` = `manufacturer`.`id`))) join `origin` on((`product`.`idOrigin` = `origin`.`id`))) join `category` on((`product`.`idCategory` = `category`.`id`))) join `unit` on((`product`.`idUnit` = `unit`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-18  9:57:37
