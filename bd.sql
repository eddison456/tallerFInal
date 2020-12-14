-- MySQL Script generated by MySQL Workbench
-- Sun Dec 13 00:12:59 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Trabajo_final
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Trabajo_final
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Trabajo_final` DEFAULT CHARACTER SET utf8 ;
USE `Trabajo_final` ;

-- -----------------------------------------------------
-- Table `Trabajo_final`.`Estudiantes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trabajo_final`.`Estudiantes` (
  `Cedula_est` INT NOT NULL,
  `Nombre_est` VARCHAR(150) NOT NULL,
  `Apellido_est` VARCHAR(155) NOT NULL,
  `Correo_est` VARCHAR(150) NOT NULL,
  `numero_est` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Cedula_est`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Trabajo_final`.`materia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trabajo_final`.`materia` (
  `ID_mat` INT NOT NULL AUTO_INCREMENT,
  `Nombre_mat` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`ID_mat`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Trabajo_final`.`Trabajo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trabajo_final`.`Trabajo` (
  `id_tra` INT NOT NULL AUTO_INCREMENT,
  `Nombre_tra` VARCHAR(45) NOT NULL,
  `Dirrecion_tra` VARCHAR(100) NOT NULL,
  `materia_ID_mat` INT NOT NULL,
  PRIMARY KEY (`id_tra`),
  CONSTRAINT `fk_Trabajo_materia`
    FOREIGN KEY (`materia_ID_mat`)
    REFERENCES `Trabajo_final`.`materia` (`ID_mat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Trabajo_final`.`Trabajo_estudiantes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trabajo_final`.`Trabajo_estudiantes` (
  `id_Trabajo_estudiantes` INT NOT NULL AUTO_INCREMENT,
  `Dirreccion_trabajo_estudiante` VARCHAR(100) NOT NULL,
  `Estudiantes_Cedula_est` INT NOT NULL,
  `Trabajo_id_tra` INT NOT NULL,
  PRIMARY KEY (`id_Trabajo_estudiantes`),
  CONSTRAINT `fk_Trabajo_estudiantes_Estudiantes1`
    FOREIGN KEY (`Estudiantes_Cedula_est`)
    REFERENCES `Trabajo_final`.`Estudiantes` (`Cedula_est`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Trabajo_estudiantes_Trabajo1`
    FOREIGN KEY (`Trabajo_id_tra`)
    REFERENCES `Trabajo_final`.`Trabajo` (`id_tra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Trabajo_final`.`notas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Trabajo_final`.`notas` (
  `Id_not` INT NOT NULL AUTO_INCREMENT,
  `nota` INT NOT NULL,
  `Trabajo_estudiantes_id_Trabajo_estudiantes` INT NOT NULL,
  PRIMARY KEY (`Id_not`),
  CONSTRAINT `fk_notas_Trabajo_estudiantes1`
    FOREIGN KEY (`Trabajo_estudiantes_id_Trabajo_estudiantes`)
    REFERENCES `Trabajo_final`.`Trabajo_estudiantes` (`id_Trabajo_estudiantes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;