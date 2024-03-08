<?php
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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_name = $_POST["user_name"];
    $password = $_POST["password"];

    // Basic SQL injection prevention
    $user_name = mysqli_real_escape_string($conn, $user_name);
    $password = mysqli_real_escape_string($conn, $password);

    $sql = "SELECT * FROM users WHERE user_name='$user_name' AND password='$password'";
    $result = $conn->query($sql);

    if ($result) {
        if ($result->num_rows > 0) {
            echo "Login successful";
            // You can redirect the user to another page or perform additional actions here.
        } else {
            echo "Login failed";
        }
    } else {
        echo "Error: " . $conn->error;
    }
}

$conn->close();
?>