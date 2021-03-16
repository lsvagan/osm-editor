-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2020 at 11:35 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `osm-editor-database`
--

-- --------------------------------------------------------

--
-- Table structure for table `poi`
--

CREATE TABLE `poi` (
  `id` bigint(11) NOT NULL,
  `name` char(255) NOT NULL,
  `street` char(255) NOT NULL,
  `housenumber` char(255) NOT NULL,
  `city` char(255) DEFAULT 'Beograd',
  `lat` decimal(65,7) NOT NULL,
  `lon` decimal(65,7) NOT NULL,
  `amenity` char(255) NOT NULL,
  `removed` tinyint(1) NOT NULL DEFAULT 0,
  `version` tinyint(1) NOT NULL DEFAULT 1,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `node` (
  `id` bigint(11) NOT NULL,
  `xml` text NOT NULL,
  `name` char(255) DEFAULT NULL,
  `street` char(255) DEFAULT NULL,
  `housenumber` char(255) DEFAULT NULL,
  `lat` decimal(65,7) DEFAULT NULL,
  `lon` decimal(65,7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for table `poi`
--
ALTER TABLE `poi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `poi`
--
ALTER TABLE `poi`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99000000000;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
