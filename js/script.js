var cart = document.querySelector(".cart");
var menu = document.querySelector("#menu");

function open_cart(){
    cart.classList.add("active");
}
function close_cart(){
    cart.classList.remove("active");
}


function open_menu(){
    menu.classList.add("active");
}
function close_menu(){
    menu.classList.remove("active");
}
/*add items in cart*/

var all_products_json;
var item_in_cart = document.querySelector(".item_in_cart");
let product_car = [];

function addToCart(id , btn){
    product_car.push(all_products_json[id]);
    btn.classList.add("active")
    getCartItem()
}
let count_item = document.querySelector(".count_item")
let price_cart_Head = document.querySelector(".price_cart_Head")

let count_cart = document.querySelector(".count_cart")
let price_cart_total = document.querySelector(".price_cart_total")

function getCartItem(){
    let totalPrice = 0;
    item_in_cart.innerHTML = "";
    let item_c = ""
    for(let i = 0; i < product_car.length;i++){
        item_c += `
        <div class="item_cart">
        <img src="${product_car[i].img}" alt="">
        <div class="content">
          <h4>${product_car[i].name}</h4>
          <p>$${product_car[i].price}</p>
        </div>
        <i onClick="removeFromCart(${i})" id="delete_item" class="fa-solid fa-trash-can"></i>
      </div>
        `
        totalPrice += product_car[i].price;
    }
    item_in_cart.innerHTML += item_c;
    price_cart_Head.innerHTML = "$"+ totalPrice;
    price_cart_total.innerHTML = "$"+ totalPrice;
    count_cart.innerHTML = `(${product_car.length} Item In Cart)`;
    count_item.innerHTML = product_car.length
}

function removeFromCart(index) {
    product_car.splice(index , 1)
    getCartItem()
    let addCartButtons = document.querySelectorAll(".fa-cart-plus")
    for (let i = 0; i < addCartButtons.length; i++) {
        addCartButtons[i].classList.remove("active")
        product_car.forEach(product =>{
            if(product.id == i){
                addCartButtons[i].classList.add("active")
            }
        })
    }
}

// Back to top
let back_to_top = document.querySelector(".back_to_top");
back_to_top.addEventListener("click",function(){
    window.scrollTo(0,0);
})

// items.html
// change item image
let bigImage = document.getElementById("bigImg");
function  ChangeItemImage(img){
    bigImage.src = img
}