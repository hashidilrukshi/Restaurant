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
        name: 'Chiken pizza 1',
        image: 'images/pizza1.jpg',
        price: 1450
    },
    {
        id: 2,
        name: 'Cheesh pizza 2',
        image: 'images/pizza2.jpg',
        price: 1450
    },
    {
        id: 3,
        name: 'Texas Chicken 3',
        image: 'images/pizza2.jpg',
        price: 1450
    },
    {
        id: 4,
        name: 'Sausage Supreme 4',
        image: 'images/pizza3.jpg',
        price: 1000
    },
    {
        id: 5,
        name: 'Cheese 5',
        image: 'images/pasta2.jpeg',
        price: 1000
    },
    {
        id: 6,
        name: 'Spagadi 6',
        image: 'images/pizza7.jpg',
        price: 1200
    },
    {
        id: 7,
        name: 'Classic Avocado Toast  7',
        image: 'images/avocado-toast.jpg',
        price: 450
    },
    {
        id: 8,
        name: 'Spicycreamy Avocado Toast 8',
        image: 'images/avocado_toast4.jpeg',
        price: 450
    },
    {
        id: 9,
        name: 'mix acai_bowls 9',
        image: 'images/Acai-Bowl 2.jpg',
        price: 1450
    },
    {
        id: 10,
        name: 'Creamy Avocado acai_bowls 10',
        image: 'images/asai bowls 3.jpeg',
        price: 1300
    },
    {
        id: 11,
        name: 'Spicy Tuna & Mango Sushi burrito 11',
        image: 'images/Sushi-Burrito-.jpg',
        price: 750
    },
    {
        id: 12,
        name: 'Tuna & Mango Sushi burrito 12',
        image: 'images/sushi3.jpeg',
        price: 800
    },
    {
        id: 13,
        name: 'mix quinoa_bowls 13',
        image: 'images/Acai-Bowl 2.jpg',
        price: 1450
    },
    {
        id: 14,
        name: 'Creamy quinoa_bowls 14',
        image: 'images/quinoa 4.jpeg',
        price: 1300
    },
    {
        id: 15,
        name: 'Cheese laksa 11',
        image: 'images/laksa.jpeg',
        price: 750
    },
    {
        id: 16,
        name: 'Tuna laksa 16',
        image: 'mages/laksa3.jpeg',
        price: 800
    },
    {
        id: 17,
        name: 'Sausage Supreme Tacos 17',
        image: 'images/tacos2.jpeg',
        price: 750
    },
    {
        id: 18,
        name: 'Chiken tacos 18',
        image: 'images/tacos3.jpeg',
        price: 800
    },
    {
        id: 19,
        name: 'Chiken Burger 19',
        image: 'images/burgers.jpg',
        price: 1450
    },
    {
        id: 20,
        name: 'Fries 20',
        image: 'images/fries.jpg',
        price: 1300
    }
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
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
                <div><img src="image/${value.image}"/></div>
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