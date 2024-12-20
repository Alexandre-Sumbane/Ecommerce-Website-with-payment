//Cart Open Close
let cartIcon =  document.querySelector('#cart-icon');
let cart =  document.querySelector('.cart');
let closeCart =  document.querySelector('#close-cart');
 

//OPen Cart
cartIcon.onclick = () => {
    cart.classList.add('cart-active');
}

//Close Cart
closeCart.onclick = () => {
    cart.classList.remove('cart-active');
}

//Makin Add to Cart
if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else {
    ready();
}

//Making Function
function ready() {

    //remove Item from Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');

    for(var i =0 ; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }

}

//Quantity Change
var quantityInputs = document.getElementsByClassName('cart-quantity');
for(var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChange);
}

//Remove Cart Item
function removeCartItem(event) {
    var buttonClicked = event.target;

    buttonClicked.parentElement.remove();

    updateTotal();
}

//Quantity Change
function quantityChange(event) {
   var input = event.target;
   
   if(isNaN(input.value) || input.value <= 0) {
    input.value = 1; 
   }
   
   updateTotal();
}

function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;

        total += price * quantity;
    }

    total = Math.round(total * 100) / 100;

    // Ensure the total-price element exists before updating it
    var totalPriceElement = document.getElementsByClassName('total-price')[0];
    if (totalPriceElement) {
        totalPriceElement.innerText = '$' + total;
    }
}

