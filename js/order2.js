let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Coffe 50',
        image: 'cofee4.jpeg',
        price: 450
    },
    {
        id: 2,
        name: 'Matcha_lattes  51',
        image: 'matcha lattes3.jpeg',
        price: 450
    },
    {
        id: 3,
        name: 'Kombuch 52',
        image: 'kombucha3.jpeg',
        price: 450
    },
    {
        id: 4,
        name: 'fruit_infused_water 53',
        image: 'fruit infused water.jpeg',
        price: 400
    },
    {
        id: 6,
        name: 'fruit_infused_water 54',
        image: 'f.infusd water3.jpeg',
        price: 600
    },
    {
        id: 7,
        name: 'Stroberry Smoothie  55',
        image: 'smoothies.jpg',
        price: 450
    },
    {
        id: 9,
        name: 'Mango Smoothie 56',
        image: 'soothies4.jpeg',
        price: 450
    },
    {
        id: 10,
        name: 'coconut water 57',
        image: 'coconut water.jpg',
        price: 1300
    },
    {
        id: 11,
        name: 'teas 58',
        image: 'teas.png',
        price: 250
    },
    {
        id: 12,
        name: 'Vegebale_juices 59',
        image: 'vegejuise3.jpeg',
        price: 450
    },
    {
        id: 13,
        name: 'vegetable_juices 60',
        image: 'vegetable Juices.jpeg',
        price: 450
    },
    {
        id: 14,
        name: 'Soda Water 61',
        image: 'sparking water 4.jpeg',
        price: 300
    },
    {
        id: 15,
        name: 'Sparkling Water 61',
        image: 'sparking water.jpeg',
        price: 750
    },
    {
        id: 16,
        name: 'Hot milk 62',
        image: 'milk.jpeg',
        price: 400
    },
    {
        id: 17,
        name: 'Cold milk  63',
        image: 'milk2.jpg',
        price: 400
    }
    
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

document.getElementById("getNowFoodBtn").addEventListener('click',function(){
    var cartItems=JSON.stringify(listCards);
    console.log(cartItems);
    fetch("./js/placeOrder.php",{
        "method":"POST",
        "headers":{
            "Content-Type":"application/json; charset=utf-8"
        },
        "body":cartItems
    }).then(function(promis){
        return promis.text();        
    }).then(function(data){
        console.log("====================");
        console.log(data);
        listCards  = [];
        window.open("payment.php?totalAmount=0&zipCode=", "_blank");
    });
});