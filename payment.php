<!DOCTYPE html>
<html lang="en">
<head>
    <title>Payment Page</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- custom css file link  -->
    <link rel="stylesheet" href="css_payment2/style.css">

</head>
<body>

<div class="container">

    <form action="process_payment.php" method="post">

        <div class="row">

            <div class="col">

                <h3 class="title">billing address</h3>

                <div class="inputBox">
                    <span>full name :</span>
                    <input type="text" name="full_name" placeholder="Zack Efron">
                </div>
                <div class="inputBox">
                    <span>email :</span>
                    <input type="email" name="email" placeholder="example@example.com">
                </div>
                <div class="inputBox">
                    <span>address :</span>
                    <input type="text" name="address" placeholder="room - street - locality">
                </div>
                <div class="inputBox">
                    <span>city :</span>
                    <input type="text" name="city" placeholder="Colombo">
                </div>
                <div class="inputBox">
                    <span>Item Number :</span>
                    <input type="text" name="item_number" placeholder="01">
                </div>
                <div class="inputBox">
                    <span>Phone Number :</span>
                    <input type="text" name="phone_number" placeholder="077-1234567">
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>state :</span>
                        <input type="text" name="state" placeholder="Sri Lanka">
                    </div>
                    <div class="inputBox">
                        <span>zip code :</span>
                        <input type="text" name="zip_code" placeholder="12345">
                    </div>
                </div>

            </div>

            <div class="col">

                <h3 class="title">payment</h3>

                <div class="inputBox">
                    <span>cards accepted :</span>
                    <img src="images/card_img.png" alt="">
                </div>
                <div class="inputBox">
                    <span>name on card :</span>
                    <input type="text" name="name_on_card" placeholder="Mr. Zack Efron">
                </div>
                <div class="inputBox">
                    <span>credit card number :</span>
                    <input type="number" name="credit_card_number" placeholder="1111-2222-3333-4444">
                </div>
                <div class="inputBox">
                    <span>exp month :</span>
                    <input type="text" name="exp_month" placeholder="January">
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>exp year :</span>
                        <input type="number" name="exp_year" placeholder="2023">
                    </div>
                    <div class="inputBox">
                        <span>CVV :</span>
                        <input type="text" name="cvv" placeholder="123">
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="proceed to checkout" class="submit-btn">

    </form>
    <script src="path/to/script.js"></script>



</div>    
    
</body>
</html>