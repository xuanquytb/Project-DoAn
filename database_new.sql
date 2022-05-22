-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: webthaotran
-- ------------------------------------------------------
-- Server version	8.0.29

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
  `userid` int NOT NULL,
  `stateCard` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `userid_UNIQUE` (`userid`),
  CONSTRAINT `fk_user` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,4,0),(3,6,0),(9,45,0),(10,50,0);
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carddetail`
--

DROP TABLE IF EXISTS `carddetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carddetail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idCard` int NOT NULL,
  `idProduct` int NOT NULL,
  `idCoupon` int DEFAULT NULL,
  `dongia` double NOT NULL,
  `quantity` int NOT NULL,
  `sumMoney` double NOT NULL,
  `createDate` date DEFAULT (curdate()),
  PRIMARY KEY (`id`),
  KEY `fk_card` (`idCard`),
  KEY `fk_productDe` (`idProduct`),
  KEY `fk_coupon` (`idCoupon`),
  CONSTRAINT `fk_card` FOREIGN KEY (`idCard`) REFERENCES `card` (`id`),
  CONSTRAINT `fk_coupon` FOREIGN KEY (`idCoupon`) REFERENCES `coupon` (`id`),
  CONSTRAINT `fk_productDe` FOREIGN KEY (`idProduct`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carddetail`
--

LOCK TABLES `carddetail` WRITE;
/*!40000 ALTER TABLE `carddetail` DISABLE KEYS */;
INSERT INTO `carddetail` VALUES (6,3,7,1,200000,1,200000,'2022-05-22'),(7,3,8,1,200000,1,22000,'2022-05-22');
/*!40000 ALTER TABLE `carddetail` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (2,'Thiết bị gia dụng','default.png','default.jpg'),(5,'Test ngành hàng','image-1652522272332.png','456464'),(39,'Nhà cửa đời sống','image-1653247377061.png','Bao gồm các sản phẩm xung quanh đời sống'),(40,'Ba lô & ví nam','image-1653247394081.png','Bao gồm các sản phẩm xung quanh ba lô, ví nam'),(41,'Bách hóa online','image-1653247408097.png','Bao gồm các sản phẩm xung quanh bách hóa online'),(42,'Chăm sóc thú cưng','image-1653247676128.png','Bao gồm các sản phẩm xung quanh chăm sóc thú cưng'),(43,'Điện thoại','image-1653247691187.png','Bao gồm các sản phẩm xung quanh điện thoại'),(44,'Đồ chơi','image-1653247703088.png','Bao gồm các sản phẩm xung quanh đồ chơi'),(45,'Đồng hồ','image-1653247714023.png','Bao gồm các sản phẩm xung quanh đồng hồ'),(46,'Giặt giũ & chăm sóc nhà cửa','image-1653247724914.png','Bao gồm các sản phẩm xung quanh giặt giũ & chăm sóc nhà cửa'),(47,'Giày dép nữ','image-1653247508496.png','Bao gồm các sản phẩm xung quanh giày dép nữ'),(48,'Giày nam','image-1653247523554.png','Bao gồm các sản phẩm xung quanh giày nam'),(49,'Máy ảnh','image-1653247549579.png','Bao gồm các sản phẩm xung quanh máy ảnh'),(50,'Máy tính','image-1653247563513.png','Bao gồm các sản phẩm xung quanh máy tính'),(51,'Mẹ và bé','image-1653247576988.png','Bao gồm các sản phẩm xung quanh mẹ và bé'),(52,'Nhà sách online','image-1653247745914.png','Bao gồm các sản phẩm xung quanh nhà sách online'),(53,'Ô tô & xe máy','image-1653247756497.png','Bao gồm các sản phẩm xung quanh ô tô xe máy'),(54,'Phụ kiện trang sức nữ','image-1653247776898.png','Bao gồm các sản phẩm xung quanh phụ kiện trang sức nữ'),(55,'Sắc đẹp','image-1653247789177.png','Bao gồm các sản phẩm xung quanh sắc đẹp'),(56,'Sức khỏe','image-1653247804005.png','Bao gồm các sản phẩm xung quanh sức khỏe'),(57,'Thiết bị điện tử','image-1653247598414.png','Bao gồm các sản phẩm xung quanh thiết bị điện tử'),(58,'Thời trang nữ','image-1653247623636.png','Bao gồm các sản phẩm xung quanh thời trang nữ'),(59,'Túi ví nữ','image-1653247649651.png','Bao gồm các sản phẩm xung quanh túi ví nữ');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupon`
--

DROP TABLE IF EXISTS `coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `maxCoupon` double NOT NULL,
  `minOrder` double NOT NULL,
  `quantity` int NOT NULL,
  `description` text NOT NULL,
  `dateStart` date NOT NULL,
  `dateEnd` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon`
--

LOCK TABLES `coupon` WRITE;
/*!40000 ALTER TABLE `coupon` DISABLE KEYS */;
INSERT INTO `coupon` VALUES (1,10000,50000,20,'mo ta','2022-05-22','2022-06-22');
/*!40000 ALTER TABLE `coupon` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'Sony','0868603825','America','Sony@gmail.com','image-1652520600435.jpeg'),(2,'Xiaomi','0984646516','Việt nam','xiaomi@gmail.com','image-1652522550611.jpeg'),(8,'SamSung','0898946451','Lạng sơn','samsung@gmail.com','default.png'),(9,'TopK','0337083765','hai phong','huy78340@st.vimaru.edu.vn','default.png');
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (7,'Máy sấy tóc','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Đầm maxi dài hở lưng đi biển, maxi trắng cổ vuông tay phồng sexy thời trang nữ Minh Phúc</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️Chất liệu: Xốp chỉ, may 2 lớp có sẵn mút ngực</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️Màu sắc: Trắng, Vàng</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️ Size: Free size dưới 55kg(tùy chiều cao nhé)</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️ V1: dưới 90cm </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️ V2: dưới 72cm</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔ 1m50 – 1m55 từ 40 – 45kg vừa </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️ 1m55 – 1m6 từ 46 – 50kg vừa </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️ Trên 1m6 từ 51 – 55kg vừa </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">---------------------------</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">SHOP CAM KẾT</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Đầm maxi dài hở lưng đi biển đã được khắc phục phần mút ngực và được may 2 lớp nên KH hoàn toàn yên tâm</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Màu sắc vải/ sản phẩm đầm có thể sẽ chênh lệch thực tế một phần nhỏ, do ảnh hưởng về độ lệch màu của ánh sáng nhưng vẫn đảm bảo chất lượng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ CAM KẾT 100% sản phẩm do Minh Phúc sản xuất trực tiếp có giá tốt nhất thị trường </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ CAM KẾT 100% đổi sản phẩm nếu khách hàng không ưng mẫu đã đặt HOẶC sản phẩm bị lỗi, hỏng do bât cứ lý do gi trước khi đến tay khách hàng ( kể cả lỗi do đơn vị vận chuyển)</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Sản phẩm đổi phải chưa qua sử dụng.</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">LƯU Ý QUAN TRỌNG: Quý khách hàng hãy quay video khi bóc hàng để làm căn cứ giải quyết khiếu nại nếu hàng bị thiếu, hỏng đặc biệt với các gói hàng bị rách, móp méo.</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">QUYỀN LỢI KHÁCH HÀNG</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Nếu có bất kì khiếu nại cần Shop hỗ trợ về sản phẩm vui lòng inbox trực tiếp để shop xử lý cho mình luôn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Đội ngũ CSKH nhà MINH PHÚC luôn tư vấn tận TÂM, chi tiết, hỗ trợ nhiệt tình nhất với khách hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Khách yêu nhận được sản phẩm, vui lòng đánh giá 5* giúp Shop để nhận QUÀ bí mật từ MINH PHÚC nhé!</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">GIAO HÀNG</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">- Đầm maxi dài hở lưng đi biển được đảm bảo chất lượng, dịch vụ tốt nhất, hàng được giao từ 1-3 ngày kể từ ngày đặt hàng</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">- Đầm maxi dài hở lưng đi biển giao hàng trên toàn quốc – ship COD</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">Tên và địa chỉ của tổ chức, cá nhân chịu trách nhiệm về hàng hóa : XƯỞNG MAY MINH PHÚC</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">Xuất xứ hàng hóa: Việt Nam</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">Địa chỉ: Đông Hưng Thuận 31, Phường Tân Hưng Thuận, Quận 12, TPHCM</span></p>',12,300,20000000,10,'Hết hàng','hinh-anh-avatar-nam-1-600x600.jpg',2,2,8,1),(8,'Bàn chải điện','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Đầm maxi dài hở lưng đi biển, maxi trắng cổ vuông tay phồng sexy thời trang nữ Minh Phúc</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️Chất liệu: Xốp chỉ, may 2 lớp có sẵn mút ngực</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️Màu sắc: Trắng, Vàng</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️ Size: Free size dưới 55kg(tùy chiều cao nhé)</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️ V1: dưới 90cm </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️ V2: dưới 72cm</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔ 1m50 – 1m55 từ 40 – 45kg vừa </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️ 1m55 – 1m6 từ 46 – 50kg vừa </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✔️ Trên 1m6 từ 51 – 55kg vừa </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">---------------------------</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">SHOP CAM KẾT</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Đầm maxi dài hở lưng đi biển đã được khắc phục phần mút ngực và được may 2 lớp nên KH hoàn toàn yên tâm</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Màu sắc vải/ sản phẩm đầm có thể sẽ chênh lệch thực tế một phần nhỏ, do ảnh hưởng về độ lệch màu của ánh sáng nhưng vẫn đảm bảo chất lượng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ CAM KẾT 100% sản phẩm do Minh Phúc sản xuất trực tiếp có giá tốt nhất thị trường </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ CAM KẾT 100% đổi sản phẩm nếu khách hàng không ưng mẫu đã đặt HOẶC sản phẩm bị lỗi, hỏng do bât cứ lý do gi trước khi đến tay khách hàng ( kể cả lỗi do đơn vị vận chuyển)</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Sản phẩm đổi phải chưa qua sử dụng.</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">LƯU Ý QUAN TRỌNG: Quý khách hàng hãy quay video khi bóc hàng để làm căn cứ giải quyết khiếu nại nếu hàng bị thiếu, hỏng đặc biệt với các gói hàng bị rách, móp méo.</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">QUYỀN LỢI KHÁCH HÀNG</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Nếu có bất kì khiếu nại cần Shop hỗ trợ về sản phẩm vui lòng inbox trực tiếp để shop xử lý cho mình luôn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Đội ngũ CSKH nhà MINH PHÚC luôn tư vấn tận TÂM, chi tiết, hỗ trợ nhiệt tình nhất với khách hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">✅ Khách yêu nhận được sản phẩm, vui lòng đánh giá 5* giúp Shop để nhận QUÀ bí mật từ MINH PHÚC nhé!</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">GIAO HÀNG</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">- Đầm maxi dài hở lưng đi biển được đảm bảo chất lượng, dịch vụ tốt nhất, hàng được giao từ 1-3 ngày kể từ ngày đặt hàng</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">- Đầm maxi dài hở lưng đi biển giao hàng trên toàn quốc – ship COD</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">Tên và địa chỉ của tổ chức, cá nhân chịu trách nhiệm về hàng hóa : XƯỞNG MAY MINH PHÚC</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">Xuất xứ hàng hóa: Việt Nam</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">Địa chỉ: Đông Hưng Thuận 31, Phường Tân Hưng Thuận, Quận 12, TPHCM</span></p>',6,50,2000000,20000,'Còn hàng','Screenshot 2022-05-19 143843.png',5,2,1,2),(12,'TOPK Cốc Sạc Nhanh QC3.0 ','<p>Chào mừng bạn đến với Shopee Mall - Cửa hàng hàng đầu chính thức của TOPK</p><p>Mặt hàng này là KHO SN SÀNG. Nó CÓ SN và chào mừng bạn đến đặt hàng.</p><p>❤Gửi đi trong vòng 24 GIỜ trung bình vào CÁC NGÀY LÀM VIỆC!</p><p>Nếu bạn có bất kỳ câu hỏi nào, hoặc đáp ứng bất kỳ vấn đề nào về sản phẩm,</p><p>✅Vui lòng LIÊN HỆ VỚI CHÚNG TÔI. Chúng tôi sẽ chân thành giúp bạn về các vấn đề.</p><p>❌Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết các vấn đề.</p><p>Đánh giá cao cho đánh giá 5 sao của bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</p><p><br></p><p>Về mặt hàng này</p><p>☀Sạc đa cổng: Nhiều cổng USB để lựa chọn, Chọn theo tình hình thực tế của bạn. Bảo vệ IC thông minh tích hợp tự động phát hiện tất cả các thiết bị được kết nối và đảm bảo hiệu suất sạc tối ưu.</p><p>☀Sạc nhanh: Hỗ trợ sạc nhanh QC 3.0. Cổng QC 3.0 18W cung cấp khả năng sạc nhanh hơn gấp 4 lần so với sạc thông thường. Nó cũng tương thích ngược với điện thoại QC2.0 / 1.0. Ngay cả khi điện thoại của bạn không hỗ trợ sạc nhanh QC3.0, chúng tôi cung cấp cho bạn đầu ra tối đa là 2.4A.</p><p>☀Sạc AN TOÀN - Bộ sạc tường USB đảm bảo công suất đầu ra ổn định hơn. Bộ sạc được làm bằng vỏ ABS chắc chắn và có khả năng bảo vệ sạc quá mức, quá nhiệt và ngắn mạch. Nó đã được chứng nhận CE và FCC và đảm bảo sạc an toàn.</p><p>☀【TƯƠNG Thích RỘNG RÃI】 Nó tương thích với các ổ cắm EU / UK và phù hợp với nhiều thiết bị có cổng USB, chẳng hạn như máy tính bảng, điện thoại, bàn làm việc, điện thoại di động, điện thoại thông minh, máy ảnh, tai nghe Bluetooth, pin dự phòng di động và hơn thế nữa.</p><p>☀Nhỏ GỌN &amp; CÓ THỂ CỔNG: Bộ sạc USB này rất nhỏ, bạn có thể mang nó đi bất cứ đâu và nó hoàn toàn phù hợp trong túi hoặc ba lô của bạn. Ngoài ra, nó hỗ trợ đầu vào 100-240V, lý tưởng để đi du lịch nước ngoài, tại văn phòng và ở nhà.</p><p><br></p><p>Vận chuyển:</p><p>☀ Đối với việc chuẩn bị của người bán: trong vòng 24 giờ;</p><p>☀ Đối với giao hàng: trong vòng 5-15 ngày trung bình;</p><p><br></p><p>Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo chúng ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Hy vọng bạn sẽ nhận được bưu kiện sớm.</p><p><img src=\"https://cf.shopee.vn/file/46f918b64e3bbdfa6f7ac85cb15bd322\"></p><p><img src=\"https://cf.shopee.vn/file/e6e1f965d13df7989fd2d111521ac86f\"></p><p><img src=\"https://cf.shopee.vn/file/a24cc55b593e81467e8976fc40b600aa\"></p><p><img src=\"https://cf.shopee.vn/file/4c087783780ff7642c3906e2af8ba446\"></p><p><img src=\"https://cf.shopee.vn/file/3ed6203082ba8e1de0688ba9ad47729c\"></p><p><img src=\"https://cf.shopee.vn/file/183c524bc4d18adfdf7381c97384440c\"></p><p><img src=\"https://cf.shopee.vn/file/5835dec22c531486c1d9bb1f5c287ce5\"></p><p><img src=\"https://cf.shopee.vn/file/8f92687f0f425e98415f2a55f6f6d3e1\"></p><p><img src=\"https://cf.shopee.vn/file/4ad190f21f597fb6b4edcce61c679b82\"></p><p><img src=\"https://cf.shopee.vn/file/44a441ef1bffc9f1057c6cd305123308\"></p><p><img src=\"https://cf.shopee.vn/file/d5386032c57fa87f4b64d4a46919e8fb\"></p><p><img src=\"https://cf.shopee.vn/file/47f954a3040ead11513a53bab446659c\"></p>',6,111,345000,10,'Còn hàng','sac.jpg',57,1,9,2),(13,'Củ Sạc 65W TOPK B314P GaN PD','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">Ghé thăm cửa hàng nội địa Malaysia của chúng tôi !!! Giá rẻ hàng ngày và giao hàng nhanh !!!</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Tìm kiếm \" topkofficial.os \", \" cửa hàng nội địa chính thức topk \" hoặc nhập liên kết</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> https://shopee.com.my/shop/201839660</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chào mừng bạn đến với Shopee Mall - Cửa hàng chính thức hàng đầu TOPK</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Sản phẩm có sẵn.Hoan nghênh bạn đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Nếu bạn có bất kỳ câu hỏi nào hoặc gặp bất kỳ vấn đề nào về sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ✅Hãy LIÊN HỆ VỚI CHÚNG TÔI. Chúng tôi sẽ chân thành giúp bạn với các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❌ Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chúng tôi trân trọng đánh giá 5 sao của bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và mang lại dịch vụ tốt hơn cho bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">Chi tiết sản phẩm: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tên sản phẩm: Bộ sạc nhanh với 3 cổng B314P Mini 65W PD3.0 QC 3.0 </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Màu sắc: Đen / Trắng</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Sạc nhanh: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Đầu vào: 100-240V ~ 50 / 60Hz 1.8A (Tối đa)</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Công suất: 65w</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Loại phích cắm: Phích cắm của UK</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Chất liệu: Chất liệu chống cháy ABS</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Chứng nhận: RoHS, FCC, CE</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> 【Sạc nhanh 65W】 Cốc sạc USB 65 watt điện để đưa MacBook Pro 15.4 ”của bạn từ 0 lên 100% chỉ trong 2 giờ khi chỉ có một thiết bị được kết nối với cổng USB-C</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> 【Phân bổ điện năng thông minh】 Phân bổ công suất 65W một cách thông minh khi sạc 3 thiết bị đồng thời, đảm bảo tất cả các thiết bị được kết nối của bạn đều được sạc tốc độ cao</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> 【Kích thước nhỏ gọn &amp; Hiệu suất vượt trội】 Công nghệ tiên tiến làm cho cốc sạc USB này nhỏ hơn và tối đa hóa hiệu quả sạc mà không tạo ra nhiệt thừa</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> 【Khả năng tương thích vượt trội】 Cốc sạc USB dành cho máy tính để bàn mang lại mức sạc nhanh nhất có thể cho hầu hết các thiết bị hỗ trợ USB-C và USB-A, từ iPhone đến Samsung đến máy tính xách tay USB-C, một cho tất cả và giúp việc sạc trở nên đơn giản. Bộ sạc tương thích 100% giúp chuyến đi công tác hoặc kỳ nghỉ của bạn trở nên thuận tiện và không gặp rắc rối</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> 【Sạc an toàn】 Tất cả các cổng đều có tính năng bảo vệ sạc hoàn chỉnh cùng với công nghệ sạc mới nhất của TOPK. Với con chip thông minh bên trong, bộ sạc USB tự động khớp với dòng điện theo nhu cầu của thiết bị của bạn. Bảo vệ chống quá dòng, quá áp và ngắn mạch giúp bảo vệ thiết bị của bạn khỏi bị hư hỏng một cách hiệu quả và đảm bảo việc sạc qua đêm an toàn hơn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> 【Dịch vụ chuyên nghiệp】 TOPK là nhà sản xuất R&amp;D về sản phẩm sạc, với 10 năm kinh nghiệm. Sản phẩm chất lượng cao và dịch vụ hoàn hảo là lợi thế lớn nhất của chúng tôi, vì vậy chúng tôi tự tin cung cấp cho bạn dịch vụ khách hàng tuyệt vời trong 24 giờ.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Gói hàng bao gồm: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ 1 * Bộ sạc nhanh với 3 cổng B314P Mini 65W PD3.0 QC 3.0</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn bạn đã đặt hàng của bạn. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo rằng chúng ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Mong bạn sớm nhận được gói hàng.</span></p>',6,1000,599000,10,'Còn hàng','Củ Sạc 65W TOPK B314P GaN PD.jpg',57,1,9,2),(14,'Củ Sạc TOPK B25 10W 5V 2A ','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chào mừng bạn đến với Shopee Mall - Cửa hành chính hãng TOPK</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Sản phẩm này là CÓ SẴN TRONG KHO. Đây là HÀNG CÓ SẴN và hoan nghênh bạn đến đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Nếu bạn có bất kỳ câu hỏi nào hoặc gặp bất kỳ vấn đề nào về sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ✅Hãy LIÊN HỆ VỚI CHÚNG TÔI. Chúng tôi sẽ nhiệt tình giúp bạn giải quyết các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❌ Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Hy vọng nhận được điểm đánh giá 5 sao của bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đặc điểm: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tên sản phẩm: Cốc sạc điện thoại 1 cổng QC2.0 1 B25 10W</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Màu sắc: Đen, Trắng</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Sạc nhanh: KHÔNG</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Đầu vào: AC100-240V 50/ 60Hz 0,3A （Tối đa）</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Đầu ra: 5V/ 2A</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Loại phích cắm: Phích cắm EU, US</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Chất liệu: Chất liệu chống cháy ABS</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Khả năng tương thích:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Thông dụng và phù hợp với tất cả các loại điện thoại</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Gói hàng bao gồm:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ 1 * Cốc sạc điện thoại 1 cổng QC2.0 1 B25 10W </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo rằng chúng ở trong tình trạng tốt và hoạt động hiệu quả trước khi giao. Mong bạn sớm nhận được hàng.</span></p>',6,999,99000,10,'Còn hàng','Củ Sạc TOPK B25 10W 5V 2A.jpg',57,1,9,2),(15,'Đế sạc không dây TOPK','<p>Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</p><p><br></p><p>Chào mừng bạn đến với Shopee Mall - Cửa hàng hàng đầu chính thức của TOPK</p><p><br></p><p>Mặt hàng này là CÓ SẴN và CÒN HÀNG. chào mừng bạn đến đặt hàng.</p><p><br></p><p>Gửi đi trong thời gian nhanh nhất trung bình vào CÁC NGÀY LÀM VIỆC!</p><p><br></p><p>Nếu bạn có bất kỳ câu hỏi nào, hoặc đáp ứng bất kỳ vấn đề nào về sản phẩm,</p><p><br></p><p>Vui lòng LIÊN HỆ VỚI CHÚNG TÔI. Chúng tôi sẽ chân thành giúp bạn về các vấn đề.</p><p><br></p><p>Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết các vấn đề.</p><p><br></p><p>Đánh giá cao cho đánh giá 5 sao của bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</p><p><br></p><p>Thông tin chi tiết:</p><p><br></p><p>Tên : Bộ sạc không dây B09W 10W LED Bộ sạc điện thoại không dây nhanh đa năng di động</p><p><br></p><p>Màu sắc: đen</p><p><br></p><p>Công suất: 10W</p><p><br></p><p>Chất liệu: ABS</p><p><br></p><p>Đặc điểm:</p><p><br></p><p>Sạc nhanh bộ sạc không dây</p><p><br></p><p>Tương thích với các công suất đầu ra khác nhau của nhiều thiết bị, 10W, 7,5W, 5W</p><p><br></p><p>Sạc nhanh không dây 10W</p><p><br></p><p>Chỉ khi bộ sạc và cáp sạc hỗ trợ sạc nhanh, công suất đầu ra của bộ sạc không dây có thể sạc nhanh 10W.</p><p><br></p><p>Một bộ sạc với 3 chế độ khác nhau</p><p><br></p><p>Điều chỉnh công suất đầu ra 10W / 7,5W / 5W theo các thiết bị khác nhau</p><p><br></p><p>Sạc nhanh hơn và an toàn hơn</p><p><br></p><p>Chip bảo vệ thông minh, đảm bảo an toàn cho bạn và thiết bị của bạn</p><p><br></p><p>Thiết kế làm mát lỗ thông hơi hiếm</p><p><br></p><p>Mặt sau được thiết kế nhiều lỗ thông gió rỗng, có thể giúp thiết bị tản nhiệt hiệu quả, không dễ tích tụ nhiệt và gây ra nhiệt độ quá cao làm hỏng thiết bị</p><p><br></p><p>Phong cách nhỏ và mỏng</p><p><br></p><p>Nhỏ và di động, bạn có thể dễ dàng bỏ vào túi hoặc ba lô của mình</p><p><br></p><p>Phản hồi nhanh trong 0,1 giây</p><p><br></p><p>Độ nhạy = &lt;6mm, có thể sạc tối đa tốc độ ngay cả khi có vỏ điện thoại</p><p><br></p><p>Gói hàng bao gồm:</p><p><br></p><p>1 * B09W Bộ sạc không dây 10W LED Bộ sạc điện thoại không dây nhanh đa năng di động</p><p><br></p><p>Vận chuyển:</p><p><br></p><p>Đối với việc chuẩn bị của người bán: trong thời gian nhanh nhất</p><p>Đối với giao hàng: trong thời gian nhanh nhất sau khi hoàn tất đơn đặt hàng </p><p><br></p><p>Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo chúng ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Hy vọng bạn sẽ nhận được bưu kiện sớm.</p>',6,998,119000,10,'Còn hàng','Đế sạc không dây TOPK.jpg',57,1,9,2),(16,'Sạc dự phòng TOPK I1006P 10000mAh','<p>Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</p><p><br></p><p>Chào mừng bạn đến với Shopee Mall - Cửa hàng hàng đầu chính thức của TOPK</p><p><br></p><p>Mặt hàng này là CÓ SẴN và CÒN HÀNG. chào mừng bạn đến đặt hàng.</p><p><br></p><p>Gửi đi trong thời gian nhanh nhất trung bình vào CÁC NGÀY LÀM VIỆC!</p><p><br></p><p>Nếu bạn có bất kỳ câu hỏi nào, hoặc đáp ứng bất kỳ vấn đề nào về sản phẩm,</p><p><br></p><p>Vui lòng LIÊN HỆ VỚI CHÚNG TÔI. Chúng tôi sẽ chân thành giúp bạn về các vấn đề.</p><p><br></p><p>Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết các vấn đề.</p><p><br></p><p>Đánh giá cao cho đánh giá 5 sao của bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</p><p><br></p><p>Thông tin chi tiết:</p><p><br></p><p>Tên : Bộ sạc không dây B09W 10W LED Bộ sạc điện thoại không dây nhanh đa năng di động</p><p><br></p><p>Màu sắc: đen</p><p><br></p><p>Công suất: 10W</p><p><br></p><p>Chất liệu: ABS</p><p><br></p><p>Đặc điểm:</p><p><br></p><p>Sạc nhanh bộ sạc không dây</p><p><br></p><p>Tương thích với các công suất đầu ra khác nhau của nhiều thiết bị, 10W, 7,5W, 5W</p><p><br></p><p>Sạc nhanh không dây 10W</p><p><br></p><p>Chỉ khi bộ sạc và cáp sạc hỗ trợ sạc nhanh, công suất đầu ra của bộ sạc không dây có thể sạc nhanh 10W.</p><p><br></p><p>Một bộ sạc với 3 chế độ khác nhau</p><p><br></p><p>Điều chỉnh công suất đầu ra 10W / 7,5W / 5W theo các thiết bị khác nhau</p><p><br></p><p>Sạc nhanh hơn và an toàn hơn</p><p><br></p><p>Chip bảo vệ thông minh, đảm bảo an toàn cho bạn và thiết bị của bạn</p><p><br></p><p>Thiết kế làm mát lỗ thông hơi hiếm</p><p><br></p><p>Mặt sau được thiết kế nhiều lỗ thông gió rỗng, có thể giúp thiết bị tản nhiệt hiệu quả, không dễ tích tụ nhiệt và gây ra nhiệt độ quá cao làm hỏng thiết bị</p><p><br></p><p>Phong cách nhỏ và mỏng</p><p><br></p><p>Nhỏ và di động, bạn có thể dễ dàng bỏ vào túi hoặc ba lô của mình</p><p><br></p><p>Phản hồi nhanh trong 0,1 giây</p><p><br></p><p>Độ nhạy = &lt;6mm, có thể sạc tối đa tốc độ ngay cả khi có vỏ điện thoại</p><p><br></p><p>Gói hàng bao gồm:</p><p><br></p><p>1 * B09W Bộ sạc không dây 10W LED Bộ sạc điện thoại không dây nhanh đa năng di động</p><p><br></p><p>Vận chuyển:</p><p><br></p><p>Đối với việc chuẩn bị của người bán: trong thời gian nhanh nhất</p><p>Đối với giao hàng: trong thời gian nhanh nhất sau khi hoàn tất đơn đặt hàng </p><p><br></p><p>Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo chúng ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Hy vọng bạn sẽ nhận được bưu kiện sớm.</p>',6,99,419000,10,'Còn hàng','Sạc dự phòng TOPK I1006P 10000mAh.jpg',57,1,9,2),(17,'Cáp Sạc Nhanh Tích Hợp Giá Đỡ TOPK','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">【Tips：Sản phẩm không hỗ trợ Samsung A50/A51】</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chào mừng bạn đến với Shopee Mall - Cửa hàng chính hãng TOPK </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Mặt hàng này có sẵn trong kho, chào mừng bạn đến mua hàng</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Nếu bạn có bất kỳ câu hỏi nào hoặc gặp bất kỳ vấn đề nào về sản phẩm, hãy LIÊN HỆ VỚI CHÚNG TÔI. Chúng tôi sẽ giải quyết vấn đề của bạn một cách nhanh chóng</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❌ Đánh giá tiêu cực sẽ KHÔNG giúp giải quyết vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chúng tôi rất vui nếu nhận được đánh giá 5 sao từ bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Thông tin chi tiết </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tên sản phẩm: Dây cáp sạc bện nilon có thể làm giá đỡ điện thoại AN26 </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Màu sắc: Xám đậm, Đỏ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Chiều dài: 1m</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Mẫu dây cáp: Loại C / Micro / iPhone</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Truyền dữ liệu: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Sạc nhanh: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Dòng điện: Micro 9V / 2A, Type-C 5V / 3A, iPhone 5V / 2A</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Chất liệu: Nylon</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đặc điểm </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Đây không chỉ là cáp sạc mà còn có chức năng giá đỡ mang đến sự tiện lợi hơn cho cuộc sống của bạn</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Ngoài cáp sạc thì còn có thể sử dụng làm giá đỡ điện thoại di động</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Cáp sạc điện thoại đa chức năng, được thiết kế đặc biệt dành cho các bạn thích xem phim. Đem đến cho bạn trải nghiệm sạc và sử dụng thoải mái</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Thiết kế xoay có thể điều chỉnh 180 °</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Bạn có thể kết nối ở mọi góc độ để giúp bạn tìm được vị trí thoải mái hơn. Dù sạc, chơi game hay xem phim thì bạn sẽ luôn cảm thấy thoải mái nhất</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Thiết kế độc đáo giúp gia tăng trải nghiệm chơi game</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Thiết kế góc 90 ° giúp nâng cao trải nghiệm chơi game trong khi sạc</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Giữ điện thoại ổn định và sẽ không bị rung</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Sử dụng định lý ổn định tam giác giúp giữ điện thoại ổn định và không bị rung. Tạo góc nhìn thoải mái hơn khi xem phim </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Đèn báo khi bật nguồn</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đèn sẽ sáng lên khi được cắm vào và bạn sẽ biết trạng thái hoạt động trong nháy mắt ..</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ 25 giây chuyển dữ liệu 1G</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Tốc độ truyền lên đến 480Mbps, vừa sạc nhanh vừa truyền nhanh</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Chất liệu bện nylon mật độ cao</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Công nghệ dệt mật độ cao từ dây nilon giúp dây cáp chắc chắn hơn. Không sợ bị kéo hoặc uốn cong</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Gói hàng bao gồm </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ 1x Cáp sạc thông thường AN26 bện nylon với chức năng giá đỡ điện thoại;</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo rằng sản phẩm ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Mong bạn sớm nhận được bưu phẩm.</span></p>',6,911,49000,10,'Còn hàng','Cáp Sạc Nhanh Tích Hợp Giá Đỡ TOPK.jpg',57,1,9,2),(18,'Tai Nghe TOPK F02','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> 【Khách hàng thân mến, vui lòng suy nghĩ kỹ trước khi chọn COD. Nếu bạn không nhận hàng, Shopee và TOPK sẽ ghi lại vào ứng dụng thông tin của bạn. Cảm ơn sự hợp tác và hiểu biết của bạn】</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Chào mừng bạn đến với Shopee Mall - TOPK Official Flagship Store</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  TOPK đã giành được siêu giải thưởng Thương hiệu có ảnh hưởng nhất năm 2020 tại thị trường Đông Nam Á. TOPK chuyên về các sản phẩm điện tử tiêu dùng, hầu hết các phụ kiện điện thoại.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Mặt hàng này luôn có sẵn và hoan nghênh bạn đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ❤Gửi hàng trong thời gian sớm nhất!</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Nếu bạn có bất kỳ câu hỏi nào hoặc gặp bất kỳ vấn đề nào về sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ✅Xin vui lòng liên hệ với chúng tôi. Chúng tôi sẽ chân thành giúp bạn với các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ❌Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Đánh giá cao đánh giá 5 sao của bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Chi tiết sản phẩm:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Tên sản phẩm: Tai nghe có dây F02</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Màu sắc: Đen</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Chiều dài: 1.1m</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Bluetooth: KHÔNG</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Micro: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Giắc audio: 3.5mm</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Chất lượng âm thanh: Tai nghe âm thanh nổi 3D</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 【HAI TRÌNH ĐIỀU KHIỂN ĐỘNG VÀ SIÊU TRẦM】 Trình điều khiển kép 8MM + 10MM mạnh mẽ tạo âm trầm vượt trội và tăng cường âm thanh tuyệt vời với độ nét cao.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 【THIẾT KẾ TIỆN DỤNG CHO NGƯỜI DÙNG VÀ VỪA VẶN HOÀN HẢO】 Thiết kế tiện dụng cho người dùng và có 2 kiểu đeo (Có / Không có móc tai) đảm bảo tai nghe luôn ở trong tai bạn một cách an toàn và thoải mái.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 【NGHE ĐIỆN THOẠI RẢNH TAY VÀ DỄ THAO TÁC 】 Dễ dàng điều khiển tai nghe bằng một nút đa chức năng. Có thể nghe điện thoại rảnh tay và rõ ràng với micro chất lượng cao.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 【CHỐNG ỒN VÀ KHÔNG RƠI】 Thiết kế nhét trong và nhiều kích cỡ nút bịt tai bằng silicone giảm thiểu tiếng ồn để tai nghe phát ra âm thanh nổi rõ ràng và âm trầm sâu lắng. Móc tai mềm có thể tháo rời đảm bảo tai nghe vừa vặn và chắc chắn trong tai bạn và không bao giờ rơi ra trong quá trình sử dụng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 【TƯƠNG THÍCH KHÔNG GIỚI HẠN】 Giắc cắm 3.5mm giúp tai nghe có dây có thể sử dụng với các thiết bị âm thanh khác nhau.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Khả năng tương thích:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Phổ biến và phù hợp với tất cả các dòng điện thoại, máy tính bảng hoặc các thiết bị có giắc cắm 3.5mm, không giới hạn ở một thương hiệu nhất định.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Gói hàng bao gồm:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 1 * Tai nghe nhét tai có dây F02</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ kiểm tra sản phẩm để đảm bảo chất lượng trước khi giao hàng. Mong bạn sẽ sớm nhận được hàng</span></p>',1,911,49000,10,'Còn hàng','Tai Nghe TOPK F02.jpg',57,1,9,2),(19,'Tai Nghe Topk F35','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> 【Khách hàng thân mến, vui lòng suy nghĩ kỹ trước khi chọn COD. Nếu bạn không nhận hàng, Shopee và TOPK sẽ ghi lại vào ứng dụng thông tin của bạn. Cảm ơn sự hợp tác và hiểu biết của bạn】</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Chào mừng bạn đến với Shopee Mall - TOPK Official Flagship Store</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  TOPK đã giành được siêu giải thưởng Thương hiệu có ảnh hưởng nhất năm 2020 tại thị trường Đông Nam Á. TOPK chuyên về các sản phẩm điện tử tiêu dùng, hầu hết các phụ kiện điện thoại.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Mặt hàng này luôn có sẵn và hoan nghênh bạn đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ❤Gửi hàng trong thời gian sớm nhất!</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Nếu bạn có bất kỳ câu hỏi nào hoặc gặp bất kỳ vấn đề nào về sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ✅Xin vui lòng liên hệ với chúng tôi. Chúng tôi sẽ chân thành giúp bạn với các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ❌Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Đánh giá cao đánh giá 5 sao của bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Chi tiết sản phẩm:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Tên sản phẩm: Tai nghe có dây F02</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Màu sắc: Đen</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Chiều dài: 1.1m</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Bluetooth: KHÔNG</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Micro: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Giắc audio: 3.5mm</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Chất lượng âm thanh: Tai nghe âm thanh nổi 3D</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 【HAI TRÌNH ĐIỀU KHIỂN ĐỘNG VÀ SIÊU TRẦM】 Trình điều khiển kép 8MM + 10MM mạnh mẽ tạo âm trầm vượt trội và tăng cường âm thanh tuyệt vời với độ nét cao.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 【THIẾT KẾ TIỆN DỤNG CHO NGƯỜI DÙNG VÀ VỪA VẶN HOÀN HẢO】 Thiết kế tiện dụng cho người dùng và có 2 kiểu đeo (Có / Không có móc tai) đảm bảo tai nghe luôn ở trong tai bạn một cách an toàn và thoải mái.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 【NGHE ĐIỆN THOẠI RẢNH TAY VÀ DỄ THAO TÁC 】 Dễ dàng điều khiển tai nghe bằng một nút đa chức năng. Có thể nghe điện thoại rảnh tay và rõ ràng với micro chất lượng cao.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 【CHỐNG ỒN VÀ KHÔNG RƠI】 Thiết kế nhét trong và nhiều kích cỡ nút bịt tai bằng silicone giảm thiểu tiếng ồn để tai nghe phát ra âm thanh nổi rõ ràng và âm trầm sâu lắng. Móc tai mềm có thể tháo rời đảm bảo tai nghe vừa vặn và chắc chắn trong tai bạn và không bao giờ rơi ra trong quá trình sử dụng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 【TƯƠNG THÍCH KHÔNG GIỚI HẠN】 Giắc cắm 3.5mm giúp tai nghe có dây có thể sử dụng với các thiết bị âm thanh khác nhau.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Khả năng tương thích:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ Phổ biến và phù hợp với tất cả các dòng điện thoại, máy tính bảng hoặc các thiết bị có giắc cắm 3.5mm, không giới hạn ở một thương hiệu nhất định.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Gói hàng bao gồm:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ♫ 1 * Tai nghe nhét tai có dây F02</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ kiểm tra sản phẩm để đảm bảo chất lượng trước khi giao hàng. Mong bạn sẽ sớm nhận được hàng</span></p>',6,999,59000,10,'Còn hàng','Tai Nghe Topk F35.jpg',57,1,9,2),(20,'Tai Nghe Bluetooth TOPK T20','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">【Khách hàng thân mến, vui lòng suy nghĩ kỹ trước khi chọn COD.  Nếu bạn từ bỏ hàng hóa gói, Shopee và TOPK sẽ ghi lại vào ứng dụng thông tin của bạn.  Cảm ơn sự hợp tác và hiểu biết của bạn】</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chào mừng bạn đến với Shopee Mall - TOPK Official Flagship Store</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> TOPK đã giành được siêu giải thưởng Thương hiệu có ảnh hưởng nhất năm 2020 tại thị trường Đông Nam Á.  TOPK chuyên về các sản phẩm điện tử tiêu dùng, hầu hết các phụ kiện điện thoại.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Mặt hàng này luôn có sẵn và hoan nghênh bạn đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❤Gửi trung bình trong vòng 24 GIỜ vào WORKDAYS!</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Nếu bạn có bất kỳ câu hỏi nào hoặc gặp bất kỳ vấn đề nào về sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ✅Xin vui lòng liên hệ với chúng tôi.  Chúng tôi sẽ chân thành giúp bạn với các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❌Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đánh giá cao đánh giá 5 sao của bạn.  Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Thông tin chi tiết: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Tên sản phẩm: Tai nghe Bluetooth T20 TWS</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Màu sắc: Đen, Trắng, Đỏ, Xanh lá</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Bluetooth: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Micro: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Cổng đầu vào: Type C</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Hộp sạc pin: 350mAh</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Pin tai nghe: 28mAh mỗi bên</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Thời gian sử dụng: 3 ~ 4 giờ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đặc điểm: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Hộp sạc trong suốt</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Chip không dây 5.0 mới giúp truyền tín hiệu nhanh hơn và khả năng tương thích cao hơn</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Ghép nối lần đầu tiên</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Bước 1: Tháo tai nghe, tai nghe sẽ tự động chuyển sang trạng thái ghép nối</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Bước 2: Làm mới thiết bị bluetooth trên điện thoại của bạn, tìm \"T20\" và ghép nối với tai nghe</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Khả năng tương thích:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Phổ biến và phù hợp với tất cả mẫu điện thoại, máy tính bảng hoặc các thiết bị khác có bluetooth, không giới hạn ở một thương hiệu nhất định.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Gói hàng bao gồm: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ 1 Tai nghe Bluetooth T20 TWS</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn bạn vì đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo rằng chúng ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Mong bạn sớm nhận được gói hàng.</span></p>',6,999,259000,10,'Hết hàng','Tai Nghe Bluetooth TOPK T20.jpg',57,1,9,2),(21,'Tai Nghe Bluetooth 5.0 Topk T30 ','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">【Khách hàng thân mến, vui lòng suy nghĩ kỹ trước khi chọn COD.  Nếu bạn từ bỏ hàng hóa gói, Shopee và TOPK sẽ ghi lại vào ứng dụng thông tin của bạn.  Cảm ơn sự hợp tác và hiểu biết của bạn】</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chào mừng bạn đến với Shopee Mall - TOPK Official Flagship Store</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> TOPK đã giành được siêu giải thưởng Thương hiệu có ảnh hưởng nhất năm 2020 tại thị trường Đông Nam Á.  TOPK chuyên về các sản phẩm điện tử tiêu dùng, hầu hết các phụ kiện điện thoại.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Mặt hàng này luôn có sẵn và hoan nghênh bạn đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❤Gửi trung bình trong vòng 24 GIỜ vào WORKDAYS!</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Nếu bạn có bất kỳ câu hỏi nào hoặc gặp bất kỳ vấn đề nào về sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ✅Xin vui lòng liên hệ với chúng tôi.  Chúng tôi sẽ chân thành giúp bạn với các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❌Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đánh giá cao đánh giá 5 sao của bạn.  Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Thông tin chi tiết: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Tên sản phẩm: Tai nghe Bluetooth T20 TWS</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Màu sắc: Đen, Trắng, Đỏ, Xanh lá</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Bluetooth: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Micro: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Cổng đầu vào: Type C</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Hộp sạc pin: 350mAh</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Pin tai nghe: 28mAh mỗi bên</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Thời gian sử dụng: 3 ~ 4 giờ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đặc điểm: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Hộp sạc trong suốt</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Chip không dây 5.0 mới giúp truyền tín hiệu nhanh hơn và khả năng tương thích cao hơn</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Ghép nối lần đầu tiên</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Bước 1: Tháo tai nghe, tai nghe sẽ tự động chuyển sang trạng thái ghép nối</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Bước 2: Làm mới thiết bị bluetooth trên điện thoại của bạn, tìm \"T20\" và ghép nối với tai nghe</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Khả năng tương thích:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Phổ biến và phù hợp với tất cả mẫu điện thoại, máy tính bảng hoặc các thiết bị khác có bluetooth, không giới hạn ở một thương hiệu nhất định.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Gói hàng bao gồm: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ 1 Tai nghe Bluetooth T20 TWS</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn bạn vì đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo rằng chúng ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Mong bạn sớm nhận được gói hàng.</span></p>',6,999,259000,10,'Còn hàng','Tai Nghe Bluetooth 5.0 Topk T30.jpg',57,1,9,2),(22,'Tai Nghe Không Dây TOPK T12','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">【Khách hàng thân mến, vui lòng suy nghĩ kỹ trước khi chọn COD.  Nếu bạn từ bỏ hàng hóa gói, Shopee và TOPK sẽ ghi lại vào ứng dụng thông tin của bạn.  Cảm ơn sự hợp tác và hiểu biết của bạn】</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chào mừng bạn đến với Shopee Mall - TOPK Official Flagship Store</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> TOPK đã giành được siêu giải thưởng Thương hiệu có ảnh hưởng nhất năm 2020 tại thị trường Đông Nam Á.  TOPK chuyên về các sản phẩm điện tử tiêu dùng, hầu hết các phụ kiện điện thoại.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Mặt hàng này luôn có sẵn và hoan nghênh bạn đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❤Gửi trung bình trong vòng 24 GIỜ vào WORKDAYS!</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Nếu bạn có bất kỳ câu hỏi nào hoặc gặp bất kỳ vấn đề nào về sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ✅Xin vui lòng liên hệ với chúng tôi.  Chúng tôi sẽ chân thành giúp bạn với các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❌Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đánh giá cao đánh giá 5 sao của bạn.  Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Thông tin chi tiết: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Tên sản phẩm: Tai nghe Bluetooth T20 TWS</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Màu sắc: Đen, Trắng, Đỏ, Xanh lá</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Bluetooth: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Micro: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Cổng đầu vào: Type C</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Hộp sạc pin: 350mAh</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Pin tai nghe: 28mAh mỗi bên</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Thời gian sử dụng: 3 ~ 4 giờ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đặc điểm: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Hộp sạc trong suốt</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Chip không dây 5.0 mới giúp truyền tín hiệu nhanh hơn và khả năng tương thích cao hơn</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Ghép nối lần đầu tiên</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Bước 1: Tháo tai nghe, tai nghe sẽ tự động chuyển sang trạng thái ghép nối</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Bước 2: Làm mới thiết bị bluetooth trên điện thoại của bạn, tìm \"T20\" và ghép nối với tai nghe</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Khả năng tương thích:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Phổ biến và phù hợp với tất cả mẫu điện thoại, máy tính bảng hoặc các thiết bị khác có bluetooth, không giới hạn ở một thương hiệu nhất định.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Gói hàng bao gồm: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ 1 Tai nghe Bluetooth T20 TWS</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn bạn vì đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo rằng chúng ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Mong bạn sớm nhận được gói hàng.</span></p>',6,999,159000,10,'Còn hàng','Tai Nghe Không Dây TOPK T12.jpg',57,1,9,2),(23,'Tai Nghe Không Dây TOPK T10','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">【Khách hàng thân mến, vui lòng suy nghĩ kỹ trước khi chọn COD.  Nếu bạn từ bỏ hàng hóa gói, Shopee và TOPK sẽ ghi lại vào ứng dụng thông tin của bạn.  Cảm ơn sự hợp tác và hiểu biết của bạn】</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chào mừng bạn đến với Shopee Mall - TOPK Official Flagship Store</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> TOPK đã giành được siêu giải thưởng Thương hiệu có ảnh hưởng nhất năm 2020 tại thị trường Đông Nam Á.  TOPK chuyên về các sản phẩm điện tử tiêu dùng, hầu hết các phụ kiện điện thoại.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Mặt hàng này luôn có sẵn và hoan nghênh bạn đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❤Gửi trung bình trong vòng 24 GIỜ vào WORKDAYS!</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Nếu bạn có bất kỳ câu hỏi nào hoặc gặp bất kỳ vấn đề nào về sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ✅Xin vui lòng liên hệ với chúng tôi.  Chúng tôi sẽ chân thành giúp bạn với các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❌Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đánh giá cao đánh giá 5 sao của bạn.  Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Thông tin chi tiết: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Tên sản phẩm: Tai nghe Bluetooth T20 TWS</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Màu sắc: Đen, Trắng, Đỏ, Xanh lá</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Bluetooth: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Micro: CÓ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Cổng đầu vào: Type C</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Hộp sạc pin: 350mAh</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Pin tai nghe: 28mAh mỗi bên</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Thời gian sử dụng: 3 ~ 4 giờ</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đặc điểm: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Hộp sạc trong suốt</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Chip không dây 5.0 mới giúp truyền tín hiệu nhanh hơn và khả năng tương thích cao hơn</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Ghép nối lần đầu tiên</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Bước 1: Tháo tai nghe, tai nghe sẽ tự động chuyển sang trạng thái ghép nối</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Bước 2: Làm mới thiết bị bluetooth trên điện thoại của bạn, tìm \"T20\" và ghép nối với tai nghe</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Khả năng tương thích:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ Phổ biến và phù hợp với tất cả mẫu điện thoại, máy tính bảng hoặc các thiết bị khác có bluetooth, không giới hạn ở một thương hiệu nhất định.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Gói hàng bao gồm: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ♫ 1 Tai nghe Bluetooth T20 TWS</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn bạn vì đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo rằng chúng ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Mong bạn sớm nhận được gói hàng.</span></p>',6,999,159000,10,'Còn hàng','Tai Nghe Không Dây TOPK T10.jpg',57,1,9,2),(24,'Bộ Sạc Dự Phòng Topk I2009 20000mAh','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chào mừng bạn đến với Shopee Mall - Cửa hàng hàng đầu chính hãng của TOPK</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Sản phẩm này có sẵn. Rất là thuận tiện, chào mừng bạn đến đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Nếu bạn có bất kỳ vấn đề nào hoặc nếu bạn gặp bất kỳ vấn đề nào với sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ✅ Xin vui lòng liên hệ với bộ phận chăm sóc khách hàng của chúng tôi. Chúng tôi sẽ chân thành giúp bạn giải quyết những vấn đề này.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❌ Đánh giá tiêu cực không giúp giải quyết vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn cho đánh giá 5 sao của bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp cho bạn dịch vụ tốt hơn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Thông tin chi tiết: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tên sản phẩm: Pin sạc dự phòng I1008C 10000mAh vỏ kim loại hiển thị kỹ thuật số </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Màu sắc: Xanh dương</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Cổng đầu ra: type - C (tối đa 10W), USB</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Cổng đầu vào: C (5 V2A), micro</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Sạc nhanh: Không</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Dung lượng: 10.000 mAh</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Công suất định mức: 6500 mA</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Chất liệu: kim loại</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tương thích với tất cả các thiết bị apple, C và Android.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đặc trưng:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Hiển thị kỹ thuật số rõ ràng về mức pin. Bạn không cần phải đoán mức pin hiện tại nữa.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Đầu ra hai cổng USB và ba loại đầu vào cáp.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Giải quyết vấn đề sạc và xả pin chỉ với một dây cáp, giúp việc di chuyển của bạn thuận tiện hơn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Bạn có thể sạc hai điện thoại cùng một lúc.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Tự động phân phối dòng điện, tiết kiệm thời gian và không gian, rút ​​ngắn khoảng cách giữa bạn và bạn bè của bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Nâng cấp chip mang lại cho bạn khả năng bảo vệ đa năng vượt trội</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Tích hợp chip thông minh nâng cấp và pin cao cấp.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Vỏ kim loại thể hiện cảm giác sang trọng nhẹ nhàng</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Vỏ hoàn toàn bằng kim loại, không có cảm giác thô ráp truyền thống từ nhựa, tạo cảm giác sang trọng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tuân thủ các tiêu chuẩn quản lý hàng không</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Có thể mang lên máy bay an toàn, sạc di động trong quá trình di chuyển.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đóng gói:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ 1 * Sạc dự phòng I1008C 10000mAh </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ 1* Cáp sạc micro (để sạc pin sạc dự phòng)</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo rằng sản phẩm vẫn ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Mong bạn sớm nhận được bưu phẩm.</span></p>',6,999,459000,10,'Còn hàng','Bộ Sạc Dự Phòng Topk I2009 20000mAh.jpg',57,1,9,2),(25,'Pin sạc dự phòng TOPK I2006P 20000mAh','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chào mừng bạn đến với Shopee Mall - Cửa hàng hàng đầu chính hãng của TOPK</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Sản phẩm này có sẵn. Rất là thuận tiện, chào mừng bạn đến đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Nếu bạn có bất kỳ vấn đề nào hoặc nếu bạn gặp bất kỳ vấn đề nào với sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ✅ Xin vui lòng liên hệ với bộ phận chăm sóc khách hàng của chúng tôi. Chúng tôi sẽ chân thành giúp bạn giải quyết những vấn đề này.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❌ Đánh giá tiêu cực không giúp giải quyết vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn cho đánh giá 5 sao của bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp cho bạn dịch vụ tốt hơn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Thông tin chi tiết: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tên sản phẩm: Pin sạc dự phòng I1008C 10000mAh vỏ kim loại hiển thị kỹ thuật số </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Màu sắc: Xanh dương</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Cổng đầu ra: type - C (tối đa 10W), USB</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Cổng đầu vào: C (5 V2A), micro</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Sạc nhanh: Không</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Dung lượng: 10.000 mAh</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Công suất định mức: 6500 mA</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Chất liệu: kim loại</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tương thích với tất cả các thiết bị apple, C và Android.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đặc trưng:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Hiển thị kỹ thuật số rõ ràng về mức pin. Bạn không cần phải đoán mức pin hiện tại nữa.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Đầu ra hai cổng USB và ba loại đầu vào cáp.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Giải quyết vấn đề sạc và xả pin chỉ với một dây cáp, giúp việc di chuyển của bạn thuận tiện hơn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Bạn có thể sạc hai điện thoại cùng một lúc.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Tự động phân phối dòng điện, tiết kiệm thời gian và không gian, rút ​​ngắn khoảng cách giữa bạn và bạn bè của bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Nâng cấp chip mang lại cho bạn khả năng bảo vệ đa năng vượt trội</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Tích hợp chip thông minh nâng cấp và pin cao cấp.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Vỏ kim loại thể hiện cảm giác sang trọng nhẹ nhàng</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Vỏ hoàn toàn bằng kim loại, không có cảm giác thô ráp truyền thống từ nhựa, tạo cảm giác sang trọng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tuân thủ các tiêu chuẩn quản lý hàng không</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Có thể mang lên máy bay an toàn, sạc di động trong quá trình di chuyển.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đóng gói:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ☀ 1 * Sạc dự phòng I1008C 10000mAh </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ☀ 1* Cáp sạc micro (để sạc pin sạc dự phòng)</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo rằng sản phẩm vẫn ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Mong bạn sớm nhận được bưu phẩm.</span></p>',6,999,559000,10,'Còn hàng','Pin sạc dự phòng TOPK I2006P 20000mAh.jpg',57,1,9,2),(26,'Pin Sạc Dự Phòng TOPK I1012P PD 18W','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Chào mừng bạn đến với Shopee Mall - Cửa hàng hàng đầu chính hãng của TOPK</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Sản phẩm này có sẵn. Rất là thuận tiện, chào mừng bạn đến đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Nếu bạn có bất kỳ vấn đề nào hoặc nếu bạn gặp bất kỳ vấn đề nào với sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ✅ Xin vui lòng liên hệ với bộ phận chăm sóc khách hàng của chúng tôi. Chúng tôi sẽ chân thành giúp bạn giải quyết những vấn đề này.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ❌ Đánh giá tiêu cực không giúp giải quyết vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn cho đánh giá 5 sao của bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp cho bạn dịch vụ tốt hơn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Thông tin chi tiết: </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tên sản phẩm: Pin sạc dự phòng I1008C 10000mAh vỏ kim loại hiển thị kỹ thuật số </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Màu sắc: Xanh dương</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Cổng đầu ra: type - C (tối đa 10W), USB</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Cổng đầu vào: C (5 V2A), micro</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Sạc nhanh: Không</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Dung lượng: 10.000 mAh</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Công suất định mức: 6500 mA</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Chất liệu: kim loại</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tương thích với tất cả các thiết bị apple, C và Android.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đặc trưng:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Hiển thị kỹ thuật số rõ ràng về mức pin. Bạn không cần phải đoán mức pin hiện tại nữa.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Đầu ra hai cổng USB và ba loại đầu vào cáp.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Giải quyết vấn đề sạc và xả pin chỉ với một dây cáp, giúp việc di chuyển của bạn thuận tiện hơn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Bạn có thể sạc hai điện thoại cùng một lúc.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Tự động phân phối dòng điện, tiết kiệm thời gian và không gian, rút ​​ngắn khoảng cách giữa bạn và bạn bè của bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Nâng cấp chip mang lại cho bạn khả năng bảo vệ đa năng vượt trội</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Tích hợp chip thông minh nâng cấp và pin cao cấp.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Vỏ kim loại thể hiện cảm giác sang trọng nhẹ nhàng</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Vỏ hoàn toàn bằng kim loại, không có cảm giác thô ráp truyền thống từ nhựa, tạo cảm giác sang trọng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> ☀ Tuân thủ các tiêu chuẩn quản lý hàng không</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Có thể mang lên máy bay an toàn, sạc di động trong quá trình di chuyển.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Đóng gói:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ☀ 1 * Sạc dự phòng I1008C 10000mAh </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ☀ 1* Cáp sạc micro (để sạc pin sạc dự phòng)</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ kiểm tra các sản phẩm để đảm bảo rằng sản phẩm vẫn ở trong tình trạng tốt và hoạt động hoàn hảo trước khi giao hàng. Mong bạn sớm nhận được bưu phẩm.</span></p>',6,999,359000,10,'Còn hàng','Pin sạc dự phòng TOPK I2006P 20000mA.jpg',57,1,9,2),(27,'TOPK Cáp Âm Thanh L21','<p><span style=\"color: rgba(0, 0, 0, 0.8);\">Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  【Khách hàng thân mến, vui lòng suy nghĩ kỹ trước khi chọn COD. Nếu bạn không nhận hàng, Shopee và TOPK sẽ ghi lại vào ứng dụng thông tin của bạn. Cảm ơn sự hợp tác và hiểu biết của bạn】</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Chào mừng bạn đến với Shopee Mall - TOPK Official Flagship Store</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  TOPK đã giành được siêu giải thưởng Thương hiệu có ảnh hưởng nhất năm 2020 tại thị trường Đông Nam Á. TOPK chuyên về các sản phẩm điện tử tiêu dùng, hầu hết các phụ kiện điện thoại.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Mặt hàng này luôn có sẵn và hoan nghênh bạn đặt hàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ❤Gửi hàng trong thời gian sớm nhất!</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Nếu bạn có bất kỳ câu hỏi nào hoặc gặp bất kỳ vấn đề nào về sản phẩm,</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ✅Xin vui lòng liên hệ với chúng tôi. Chúng tôi sẽ chân thành giúp bạn với các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  ❌Một đánh giá tiêu cực sẽ KHÔNG giúp giải quyết các vấn đề.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Đánh giá cao đánh giá 5 sao của bạn. Chúng tôi sẽ tiếp tục cải thiện sản phẩm của mình và cung cấp dịch vụ tốt hơn cho bạn.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\"> </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Thông số kỹ thuật:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • Tên sản phẩm: Cáp âm thanh L21 nối 2RCA đến 2 RCA</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • Màu sắc: đen</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • Chiều dài: 1 mét (3.28ft)</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • Giao diện dây: Giắc cắm</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • Chất liệu: Cổng kim loại + Đồng không oxy</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • Chứng nhận: FCC, CE, ROSH</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Đặc trưng:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • 2 đầu ra RCA và 2 đầu vào RCA âm thanh trong trẻo (kết nối với đầu vào trái hoặc phải); đầu vào có thể có tần số cao (âm thanh kỹ thuật số) hoặc tần số thấp (loa siêu trầm)</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • Dây dẫn cân bằng để tăng cường loại bỏ tiếng ồn bên trong, tạo âm trầm rõ hơn, sâu hơn và loại bỏ méo âm.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • Loại bỏ tiếng ồn / phản hồi không mong muốn cho âm thanh rõ nét, trong trẻo; giảm thiểu mất tín hiệu tối thiểu cho âm thanh, phù hợp, đáng tin cậy.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • Các đầu nối được đánh dấu màu đỏ / trắng để kết nối nhanh và phân biệt trái phải dễ dàng.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Khả năng tương thích:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • Tương thích với TV, máy thu AV, bộ khuếch đại, máy chiếu, radio, dàn âm thanh xe hơi, hệ thống âm thanh nổi hi-fi, hệ thống rạp hát tại nhà, âm thanh máy tính, thiết bị ghi âm, loa, v.v.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  • Gói hàng bao gồm: 1 * Cáp âm thanh L21 nối 2RCA sang 2 RCA</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  </span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Nếu bạn có bất kỳ câu hỏi nào về sản phẩm và đơn đặt hàng, vui lòng liên hệ với chúng tôi kịp thời, chúng tôi sẽ trả lời và giúp bạn trong thời gian ngắn nhất.</span></p><p><span style=\"color: rgba(0, 0, 0, 0.8);\">  Lưu ý: Các sản phẩm có chất liệu vàng, kim cương, đá quý trong shop đều là xi mạ/ nhân tạo.</span></p>',6,999,59000,10,'Còn hàng','TOPK Cáp Âm Thanh L21.jpg',57,1,9,2);
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
  `idCard` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `idCard_UNIQUE` (`idCard`),
  KEY `idRole` (`idRole`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'Xuân Quý','client1','$argon2i$v=19$m=4096,t=3,p=1$xYRpGl/tsSZH6i4ZCpRGAA$To6xuKEJQRT4c3z55PPlW5uXug7xNQHpBEf5Qg9qcRc','Nam','1999-03-23','vuxuanquynnn@gmail.com','08686038251','TAY SON KIEN XUONG THAI BINH',1,0,0,2,'2022-04-30 10:09:05','image-1651593261305.png',1),(6,'Đặng Thị Hải Nhật','client2','$argon2i$v=19$m=4096,t=3,p=1$6nTvgfF4PQsnl3a3pCgGnQ$R6O/IL8ee/KyuNu970+wqvnyqPmkdWFOHKjCI41cmtA','Nữ','1999-02-27','dangthihainhat@gmail.com','0868603899','Lê lợi kiến xương thái bình',1,0,0,2,'2022-05-07 12:53:26','image-1651947644341.jpeg',6),(7,'Vũ Xuân Quý','vuxuanquy','$argon2i$v=19$m=4096,t=3,p=1$KyroShpIMij5EAZ9C4F3Tg$CnnRcEIrkZYvRJft6+43igixk8t2K7i/PTP6zFI2atY','Nam','1999-03-23','xuanquy@gmail.com','08686038255','Tây Sơn Kiến Xương Thái Bình',1,0,0,1,'2022-05-08 00:32:21','image-1651947944713.jpeg',NULL),(8,'Đặng Thị Hải Nhật','hainhat','$argon2i$v=19$m=4096,t=3,p=1$rhL1s0uoouHr6yvHC/9saw$57QJK6fxlrlvmhZQPFJkBIh8cXzghHONe2yAhboGOgI','Nữ','1999-02-27','hainhat@gmail.com','096952342444','Lê Lợi Kiến Xương Thái Bình',1,0,0,1,'2022-05-08 00:38:38','image-1651947369333.jpeg',NULL),(9,'employee1','employee1','$argon2i$v=19$m=4096,t=3,p=1$MTVf/LtgbjAejN+/ynLdfg$P9DzEi4XdWHAO/zfSR7mwmwikm6Txschq3tgZZelYIg','Nam','2002-05-09','employee@gmail.com','05466546489','Tiền Hải Kiến Xương Thái Bình',1,0,0,3,'2022-05-08 00:43:15','image-1651948101276.jpeg',NULL),(27,'Vũ Hồng Sơn','hongson','$argon2i$v=19$m=4096,t=3,p=1$ZO/bQZaiKoiBKZk7rzfMJQ$bqCrkBpoBGKzKbnO//mJ2YVT0yAWbzDA3Bix9COkTDs','Nam','2003-02-14','vuhongson@gmail.com','08686038256','TAY SON KIEN XUONG THAI BINH',1,0,0,1,'2022-05-08 10:58:28','image-1652597921339.png',NULL),(43,'Lê Quốc Huy','quochuy','$argon2i$v=19$m=4096,t=3,p=1$KyroShpIMij5EAZ9C4F3Tg$CnnRcEIrkZYvRJft6+43igixk8t2K7i/PTP6zFI2atY','Nam','2022-06-03','huy@gmail.com','0123','hai phong',1,0,0,1,'2022-05-14 11:26:37','default.png',NULL),(45,'Hồng Sơn','client3','$argon2i$v=19$m=4096,t=3,p=1$7MIxfY2EF9JE+OLcsYO+Rw$WxiWIH+rvevYpBdDvK8IapaSbcDtryXfr8aIGZJavTU',NULL,NULL,'hongson@gmail.com','546546644353','Tây Sơn Kiến Xương Thái Bình',1,0,0,2,'2022-05-22 10:48:58',NULL,9),(50,'Hồng Sơn2s','client6','$argon2i$v=19$m=4096,t=3,p=1$nqLoE4maQYTk0PkPr6/oLg$iqPdCDoVcrJt74GQRwgmXkVA3Q7ih8VF00NuTQh+OPE',NULL,NULL,'hongsocn2@gmail.com','546546644c3523','Tây Sơn Kiến Xương Thái Bình',1,0,0,2,'2022-05-22 11:04:52',NULL,10);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2022-05-23  3:18:18
