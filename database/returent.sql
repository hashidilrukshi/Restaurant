SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `resturent`
--

-- Table structure for table `registration`
--
DROP TABLE IF EXISTS `registration`;
CREATE TABLE `registration` (
  `id` int(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `login_at` timestamp(5) NOT NULL DEFAULT current_timestamp(5) ON UPDATE current_timestamp(5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender ENUM('male', 'female') NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Dumping data for table `users`
--
INSERT INTO `users` (`id`, `first_name`, `last_name`, `gender`, `email`, `password`, `created_at`) VALUES

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


--------------------------------------------------------------------------------

-- Create a table for billing information
DROP TABLE IF EXISTS `registration`;
CREATE TABLE `billing_info` ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    item_number VARCHAR(50) NOT NULL,
    phone_number INT(50) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    name_on_card VARCHAR(255) NOT NULL,
    credit_card_number VARCHAR(16) NOT NULL,
    exp_month VARCHAR(2) NOT NULL,
    exp_year VARCHAR(4) NOT NULL,
    cvv VARCHAR(4) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
-----------------------------------------------------------------------------------

--------Create a table for help 
CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(255),
    email VARCHAR(255),
    message TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;