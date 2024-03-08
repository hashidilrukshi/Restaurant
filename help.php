<?php
// Connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "resturent";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$fullname = isset($_POST['fullname']) ? $_POST['fullname'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

// Use prepared statement to prevent SQL injection
$stmt = $conn->prepare("INSERT INTO messages (fullname, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $fullname, $email, $message);

if ($stmt->execute()) {
    echo "Message sent successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>