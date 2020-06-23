-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2020 at 04:17 PM
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
  `name` char(255) NOT NULL,
  `street` char(255) NOT NULL,
  `housenumber` char(255) NOT NULL,
  `city` char(255) DEFAULT 'Beograd',
  `lat` decimal(65,7) NOT NULL,
  `lon` decimal(65,7) NOT NULL,
  `amenity` char(255) NOT NULL,
  `removed` tinyint(1) NOT NULL DEFAULT 0,
  `version` tinyint(1) NOT NULL DEFAULT 1,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `poi`
--

INSERT INTO `poi` (`id`, `name`, `street`, `housenumber`, `city`, `lat`, `lon`, `amenity`, `removed`, `version`, `timestamp`) VALUES
(988877745457, 'Hala Aleksandar Nikolic', 'Carlija Caplina 39', '', 'Beograd', '44.8155000', '20.4848000', 'Sport object', 0, 1, '2020-06-20 20:55:33'),
(988877745458, 'Kafeterija Fontana', 'Pariske komune 13', '', 'Beograd', '44.8257000', '20.4088000', 'Cafe', 1, 1, '2020-06-20 20:55:33'),
(988877745459, 'Hotel Jugoslavija', 'Bulevar Nikole Tesle 3', '', 'Beograd', '44.8295000', '20.4201000', 'Hotel', 1, 1, '2020-06-20 20:55:33'),
(988877745460, 'Stark arena', 'Bulevar Arsenija Čarnojevica 58', '', 'Beograd', '44.8141000', '20.4213000', 'Sport object', 0, 1, '2020-06-20 20:55:33'),
(988877745461, 'McDonalds Terazije', 'Terazije 27', '', 'Beograd', '44.8129000', '20.4615000', 'Restaurant', 1, 1, '2020-06-20 20:55:33'),
(988877745462, 'Hotel Hayat', 'Milentija Popovića 5', '', 'Beograd', '44.8131000', '20.4340000', 'Hotel', 1, 1, '2020-06-20 20:55:33'),
(988877745463, 'Hotel Moskva', 'Terazije 20', '', 'Beograd', '44.8130000', '20.4604000', 'Hotel', 0, 1, '2020-06-20 20:55:33'),
(988877745464, 'Big Fashion shopping center', 'Visnjicka 84', '', 'Beograd', '44.8168000', '20.5076000', 'Shopping center', 0, 1, '2020-06-20 20:55:33'),
(988877745465, 'Usce shopping center', 'Bulevar Mihajla Pupina 4', '', 'Beograd', '44.8154000', '20.4370000', 'Shopping center', 1, 1, '2020-06-20 20:55:33'),
(988877745466, 'Delta City', 'Jurija Gagarina 16', '', 'Beograd', '44.8054000', '20.4052000', 'Shopping center', 1, 1, '2020-06-20 20:55:33'),
(988877745467, 'Piramida Shopping Mall', 'Jurija Gagarina 149', '', 'Beograd', '44.8019000', '20.3876000', 'Shopping center', 1, 1, '2020-06-20 20:55:33'),
(988877745468, 'Hala sportova Ranko Zeravica', 'Pariske komune 20', '', 'Beograd', '44.8277000', '20.4064000', 'Sport object', 1, 1, '2020-06-20 20:55:33'),
(988877745469, 'Bazen 11. April', 'Autoput za Novi Sad br 2', '', 'Beograd', '44.8254000', '20.3940000', 'Sport object', 1, 1, '2020-06-20 20:55:33'),
(988877745470, 'Stadion JNA', 'Humska 1', '', 'Beograd', '44.7888000', '20.4591000', 'Sports object', 0, 1, '2020-06-20 20:55:33'),
(988877745471, 'Skupstina Beograd', 'Dragoslava Jovanovića 2', '', 'Beograd', '44.8110000', '20.4625000', 'Other', 1, 1, '2020-06-20 20:55:33'),
(988877745472, 'Zooloski vrt Beograd', 'Mali Kalemegdan 8', '', 'Beograd', '44.8258000', '20.4536000', 'Other', 1, 1, '2020-06-20 20:55:33'),
(988877745473, 'Picerija Bucko', 'Beogradska 56', '', 'Beograd', '44.8063000', '20.4708000', 'Restaurant', 1, 1, '2020-06-20 20:55:33'),
(988877745474, 'Picerija Bucko Francuska', 'Francuska 18', '', 'Beograd', '44.8186000', '20.4642000', 'Restaurant', 0, 1, '2020-06-20 20:55:33'),
(988877745475, 'Restoran Frans', 'Bulevar Oslobođenja 18a', '', 'Beograd', '44.7929000', '20.4658000', 'Restaurant', 0, 1, '2020-06-20 20:55:33'),
(988877745476, 'VISER', 'Vojvode Stepe 283', '', 'Beograd', '44.7683000', '20.4800000', 'Other', 0, 1, '2020-06-20 20:55:33'),
(988877745483, 'Pravni Fakultet Beograd', 'Bulevar kralja Aleksandra 67', '', 'Beograd', '44.8073000', '20.4727000', 'Other', 1, 1, '2020-06-20 20:55:33'),
(988877745485, 'Hotel 1000 ruza', 'General Ždanova 1', '', 'Beograd', '44.7155000', '20.5031000', 'Hotel', 0, 1, '2020-06-20 20:55:33'),
(988877745490, 'Merkator SC', 'Bulevar umetnosti 4', '', 'Beograd', '44.8203000', '20.4154000', 'Shopping center', 0, 1, '2020-06-20 20:55:33'),
(988877745491, 'Sportofis', 'Radnicka 39', '', 'Beograd', '44.7849000', '20.4145000', 'Sport object', 0, 1, '2020-06-20 20:55:33'),
(988877745492, 'Intergalactic Diner', 'Bulevar Nikole Tesle 3', '', 'Beograd', '44.8295000', '20.4199000', 'Restaurant', 0, 1, '2020-06-20 20:55:33'),
(988877745499, 'test', 'test1234', '', 'Beograd', '44.7891000', '20.4860000', 'Sport object', 1, 1, '2020-06-20 20:55:33'),
(988877745500, 'test', 'asdf1234', '', 'Beograd', '44.7683310', '20.4807899', 'Restaurant', 1, 1, '2020-06-20 21:52:47'),
(988877745501, 'novi test', 'test test 123321', '', 'Beograd', '44.8080256', '20.4882145', 'Restaurant', 1, 1, '2020-06-20 22:20:38'),
(988877745502, 'update', 'test 999', '', 'Beograd', '44.8003524', '20.5137920', 'Sport object', 1, 1, '2020-06-20 22:22:45'),
(988877745503, 'test HN', 'housenumber', '33b', 'Beograd', '44.8019358', '20.5155087', 'sports centre', 0, 1, '2020-06-22 10:55:53'),
(988877745504, 'datum', 'datmo', '123', 'Beograd', '44.8147236', '20.4613495', 'cinema', 1, 1, '2020-06-22 15:24:13'),
(988877745505, 'decimals', 'testDeci', '48', 'Beograd', '44.7990000', '20.5084700', 'parking', 0, 1, '2020-06-23 10:59:01'),
(988877745506, 'faste test', 'testtest', '234', 'Beograd', '44.7990125', '20.4730225', 'cinema', 0, 1, '2020-06-23 12:22:59'),
(988877745507, 'test', 'test', '233', 'Beograd', '44.8043718', '20.4598045', 'university', 0, 1, '2020-06-23 12:28:30'),
(988877745508, 'test repeat', 'repeat', '222', 'Beograd', '44.7924345', '20.5101013', 'sports centre', 0, 1, '2020-06-23 12:28:59');

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
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=988877745509;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
