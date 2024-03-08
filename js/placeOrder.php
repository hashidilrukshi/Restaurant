<?php

if (isset($_POST)) {
    $conn = mysqli_connect("localhost", "root", "", "resturent");
    $data = file_get_contents("php://input");
    $orderValues = json_decode($data);
    $orderId = date("YmdHis");

    foreach ($orderValues as $od) {
        $id = $od->id;
        $name = $od->name;
        $price = $od->price;
        $qty = $od->quantity;

        $sql = "INSERT INTO cart VALUES('{$id}','{$name}','{$qty}','{$price}','{$orderId}')";
        mysqli_query($conn,$sql);
    }



    echo "Order Added";
}
