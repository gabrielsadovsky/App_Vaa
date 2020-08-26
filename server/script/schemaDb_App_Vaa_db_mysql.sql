--
-- Database: `app_vaa_db`
--

CREATE DATABASE IF NOT EXISTS `app_vaa_db`;
USE `app_vaa_db`;


-- ENTITIES

--
-- Struttura della tabella `cities`
--

CREATE TABLE IF NOT EXISTS `cities` (
	`name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `classes`
--

CREATE TABLE IF NOT EXISTS `classes` (
	`days` numeric  NOT NULL,
	`vacancies` numeric  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `clubs`
--

CREATE TABLE IF NOT EXISTS `clubs` (
	`canoe_oc1` numeric ,
	`canoe_oc2` numeric ,
	`canoe_oc6` numeric ,
	`canoe_oc6_7` numeric ,
	`canoe_v1` numeric ,
	`canoe_v3` numeric ,
	`canoe_v6` numeric ,
	`city` varchar(130)  NOT NULL,
	`country` varchar(130)  NOT NULL,
	`name` varchar(130)  NOT NULL,
	`number` numeric  NOT NULL,
	`schedule` numeric  NOT NULL,
	`state` varchar(130)  NOT NULL,
	`street` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `countries`
--

CREATE TABLE IF NOT EXISTS `countries` (
	`name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `events`
--

CREATE TABLE IF NOT EXISTS `events` (
	`name` varchar(130)  NOT NULL,
	`vacancies` numeric  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `states`
--

CREATE TABLE IF NOT EXISTS `states` (
	`name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `students`
--

CREATE TABLE IF NOT EXISTS `students` (
	`date_of_birth` date  NOT NULL,
	`facebook` varchar(130) ,
	`instagram` varchar(130) ,
	`name` varchar(130)  NOT NULL,
	`password` varchar(130)  NOT NULL,
	`position_secundary` numeric  NOT NULL,
	`position_usual` numeric  NOT NULL,
	`steer` bool  NOT NULL,
	`surname` varchar(130)  NOT NULL,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `teachers`
--

CREATE TABLE IF NOT EXISTS `teachers` (
	`auth_classes_students` bool  NOT NULL,
	`date_of_birth` date  NOT NULL,
	`name` varchar(130)  NOT NULL,
	`partner` bool  NOT NULL,
	`password` varchar(130)  NOT NULL,
	`surname` varchar(130)  NOT NULL,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `app_vaa_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `app_vaa_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);





-- relation m:m _club Classes - Clubs
CREATE TABLE IF NOT EXISTS `Classes__club` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_Classes` int(11)  NOT NULL REFERENCES classes(_id),
    `id_Clubs` int(11)  NOT NULL REFERENCES clubs(_id)
);

-- relation m:m _student Classes - Students
CREATE TABLE IF NOT EXISTS `Classes__student` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_Classes` int(11)  NOT NULL REFERENCES classes(_id),
    `id_Students` int(11)  NOT NULL REFERENCES students(_id)
);

-- relation 1:m _class Clubs - Classes
ALTER TABLE `clubs` ADD COLUMN `_class` int(11)  REFERENCES classes(_id);

-- relation m:m _teacher Clubs - Teachers
CREATE TABLE IF NOT EXISTS `Clubs__teacher` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_Clubs` int(11)  NOT NULL REFERENCES clubs(_id),
    `id_Teachers` int(11)  NOT NULL REFERENCES teachers(_id)
);

-- relation m:m _clubs Events - Clubs
CREATE TABLE IF NOT EXISTS `Events__clubs` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_Events` int(11)  NOT NULL REFERENCES events(_id),
    `id_Clubs` int(11)  NOT NULL REFERENCES clubs(_id)
);

-- relation m:m _classes Students - Classes
CREATE TABLE IF NOT EXISTS `Students__classes` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_Students` int(11)  NOT NULL REFERENCES students(_id),
    `id_Classes` int(11)  NOT NULL REFERENCES classes(_id)
);

-- relation m:m _clubs Students - Clubs
CREATE TABLE IF NOT EXISTS `Students__clubs` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_Students` int(11)  NOT NULL REFERENCES students(_id),
    `id_Clubs` int(11)  NOT NULL REFERENCES clubs(_id)
);

-- relation 1:m _classes Teachers - Classes
ALTER TABLE `teachers` ADD COLUMN `_classes` int(11)  REFERENCES classes(_id);

-- relation m:m _clubs Teachers - Clubs
CREATE TABLE IF NOT EXISTS `Teachers__clubs` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_Teachers` int(11)  NOT NULL REFERENCES teachers(_id),
    `id_Clubs` int(11)  NOT NULL REFERENCES clubs(_id)
);


