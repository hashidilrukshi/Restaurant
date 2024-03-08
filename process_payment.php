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

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST["full_name"];
    $email = $_POST["email"];
    $address = $_POST["address"];
    $city = $_POST["city"];
    $item_number =$_POST["item_number"];
    $phone_number =$_POST["phone_number"];
    $state = $_POST["state"];
    $zip_code = $_POST["zip_code"];
    $name_on_card = $_POST["name_on_card"];
    $credit_card_number = $_POST["credit_card_number"];
    $exp_month = $_POST["exp_month"];
    $exp_year = $_POST["exp_year"];
    $cvv = $_POST["cvv"];

    $sql = "INSERT INTO billing_info (full_name, email, address, city, item_number , phone_number , state, zip_code, name_on_card, credit_card_number, exp_month, exp_year, cvv)
            VALUES ('$full_name', '$email', '$address', '$city', '$item_number', '$phone_number','$state', '$zip_code', '$name_on_card', '$credit_card_number', '$exp_month', '$exp_year', '$cvv')";

    if ($conn->query($sql) === TRUE) {
        echo "Record added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>