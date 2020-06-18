-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2020 at 04:52 PM
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
-- Database: `project_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `poi`
--

CREATE TABLE `poi` (
  `id` bigint(11) NOT NULL,
  `placeName` char(255) NOT NULL,
  `street` char(255) NOT NULL,
  `lat` decimal(65,4) NOT NULL,
  `lng` decimal(65,4) NOT NULL,
  `type` char(255) NOT NULL,
  `removed` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `poi`
--

INSERT INTO `poi` (`id`, `placeName`, `street`, `lat`, `lng`, `type`, `removed`) VALUES
(988877745457, 'Hala Aleksandar Nikolic', 'Carlija Caplina 39', '44.8155', '20.4848', 'Sport object', 0),
(988877745458, 'Kafeterija Fontana', 'Pariske komune 13', '44.8257', '20.4088', 'Cafe', 1),
(988877745459, 'Hotel Jugoslavija', 'Bulevar Nikole Tesle 3', '44.8295', '20.4201', 'Hotel', 1),
(988877745460, 'Stark arena', 'Bulevar Arsenija Čarnojevica 58', '44.8141', '20.4213', 'Sport object', 0),
(988877745461, 'McDonalds Terazije', 'Terazije 27', '44.8129', '20.4615', 'Restaurant', 1),
(988877745462, 'Hotel Hayat', 'Milentija Popovića 5', '44.8131', '20.4340', 'Hotel', 1),
(988877745463, 'Hotel Moskva', 'Terazije 20', '44.8130', '20.4604', 'Hotel', 0),
(988877745464, 'Big Fashion shopping center', 'Visnjicka 84', '44.8168', '20.5076', 'Shopping center', 0),
(988877745465, 'Usce shopping center', 'Bulevar Mihajla Pupina 4', '44.8154', '20.4370', 'Shopping center', 0),
(988877745466, 'Delta City', 'Jurija Gagarina 16', '44.8054', '20.4052', 'Shopping center', 0),
(988877745467, 'Piramida Shopping Mall', 'Jurija Gagarina 149', '44.8019', '20.3876', 'Shopping center', 0),
(988877745468, 'Hala sportova Ranko Zeravica', 'Pariske komune 20', '44.8277', '20.4064', 'Sport object', 0),
(988877745469, 'Bazen 11. April', 'Autoput za Novi Sad br 2', '44.8254', '20.3940', 'Sport object', 0),
(988877745470, 'Stadion JNA', 'Humska 1', '44.7888', '20.4591', 'Sports object', 0),
(988877745471, 'Skupstina Beograd', 'Dragoslava Jovanovića 2', '44.8110', '20.4625', 'Other', 0),
(988877745472, 'Zooloski vrt Beograd', 'Mali Kalemegdan 8', '44.8258', '20.4536', 'Other', 0),
(988877745473, 'Picerija Bucko', 'Beogradska 56', '44.8063', '20.4708', 'Restaurant', 0),
(988877745474, 'Picerija Bucko Francuska', 'Francuska 18', '44.8186', '20.4642', 'Restaurant', 0),
(988877745475, 'Restoran Frans', 'Bulevar Oslobođenja 18a', '44.7929', '20.4658', 'Restaurant', 0),
(988877745476, 'VISER', 'Vojvode Stepe 283', '44.7683', '20.4800', 'Other', 0),
(988877745483, 'Pravni Fakultet Beograd', 'Bulevar kralja Aleksandra 67', '44.8073', '20.4727', 'Other', 0),
(988877745485, 'Hotel 1000 ruza', 'General Ždanova 1', '44.7155', '20.5031', 'Hotel', 0),
(988877745490, 'Merkator SC', 'Bulevar umetnosti 4', '44.8203', '20.4154', 'Shopping center', 0),
(988877745491, 'Sportofis', 'Radnicka 39', '44.7849', '20.4145', 'Sport object', 0),
(988877745492, 'Intergalactic Diner', 'Bulevar Nikole Tesle 3', '44.8295', '20.4199', 'Restaurant', 0);

--
-- Indexes for dumped tables
--

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
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=988877745496;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
