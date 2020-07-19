-- MySQL Script generated by MySQL Workbench
-- Mon Jul 13 20:20:56 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb2` DEFAULT CHARACTER SET utf8 ;
USE `mydb2` ;

-- -----------------------------------------------------
-- Table `mydb2`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`product` ;

CREATE TABLE IF NOT EXISTS `mydb2`.`product` (
  `product_id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `image` VARCHAR(45) NULL,
  `sale_price` INT NULL,
  `actual_price` INT NULL,
  `seller_id` INT NULL,
  PRIMARY KEY (`product_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb2`.`address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`address` ;

CREATE TABLE IF NOT EXISTS `mydb2`.`address` (
  `address_id` INT NOT NULL,
  `address_line_1` VARCHAR(45) NULL,
  `mobile_number` VARCHAR(45) NULL,
  `street` VARCHAR(45) NULL,
  PRIMARY KEY (`address_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb2`.`order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`order` ;

CREATE TABLE IF NOT EXISTS `mydb2`.`order` (
  `order_id` INT NOT NULL,
  `address_id` INT NULL,
  `delivery_status` VARCHAR(45) NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`order_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb2`.`order_detail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`order_detail` ;

CREATE TABLE IF NOT EXISTS `mydb2`.`order_detail` (
  `order_detail_id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NULL,
  `order_id` INT NULL,
  `quantity` INT NULL,
  `selling_price` INT NULL,
  PRIMARY KEY (`order_detail_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb2`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb2`.`user` (
  `user_id` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `is_seller` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb2`.`cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`cart` ;

CREATE TABLE IF NOT EXISTS `mydb2`.`cart` (
  `cart_id` INT NOT NULL,
  `user_id` VARCHAR(45) NULL,
  `cart_product_mapping_id` INT NULL,
  `quantity` INT NULL,
  PRIMARY KEY (`cart_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb2`.`cart_product_mapping`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`cart_product_mapping` ;

CREATE TABLE IF NOT EXISTS `mydb2`.`cart_product_mapping` (
  `cart_product_id` INT NOT NULL AUTO_INCREMENT,
  `product_id` VARCHAR(45) NULL,
  `quantity` INT NULL,
  PRIMARY KEY (`cart_product_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb2`.`payment_details`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`payment_details` ;

CREATE TABLE IF NOT EXISTS `mydb2`.`payment_details` (
  `payment_id` INT NOT NULL,
  `order_id` INT NULL,
  `user_id` VARCHAR(45) NULL,
  PRIMARY KEY (`payment_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb2`.`table1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`table1` ;




-- -----------------------------------------------------
-- Table `mydb2`.`product_review`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`product_review` ;

CREATE TABLE IF NOT EXISTS `mydb2`.`product_review` (
  `product_review_id` INT NOT NULL AUTO_INCREMENT,
  `product_id` VARCHAR(45) NOT NULL,
  `rating` INT NOT NULL,
  `comment` VARCHAR(45) NOT NULL,
  `number_of_likes` INT DEFAULT 0,
  `number_of_dislikes` INT DEFAULT 0,
  PRIMARY KEY (`product_review_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb2`.`complaint`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`complaint` ;

CREATE TABLE IF NOT EXISTS `mydb2`.`complaint` (
  `complaint_id` INT NOT NULL,
  `email_id` VARCHAR(45) NULL,
  `message` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  PRIMARY KEY (`complaint_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb2`.`FAQ`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb2`.`FAQ` ;

CREATE TABLE IF NOT EXISTS `mydb2`.`FAQ` (
  `faq_id` INT NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`faq_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;