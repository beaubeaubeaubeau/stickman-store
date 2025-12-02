
//enacts scroll reveal on the placeholder class, which emcompasses the stickamn boxes.
ScrollReveal().reveal(".placeholder");
//define a new object called cart2, which attributes a unique id for each stickman to their name in cart1
const cart2 = {
    "one":"Basic",
    "two":"Bizarre",
    "three":"Sword",
    "four": "Big",
    "five": "Gun",
    "six": "Cow",
    "seven": "Alien",
    "eight": "Super",
    "nine": "Crazed",
}
//get the information from session storage and assign them to a variable
let subtotal = Number(sessionStorage.getItem("cartPrice"));
//makes sure that the wallet does not get exceeded when there is no money, is no money in wallet in session storage, the set money to 0
let wallet =0
if (sessionStorage.getItem("wallet") !== null) {
    wallet = Number(sessionStorage.getItem("wallet"));
}
const productsDict = JSON.parse(sessionStorage.getItem("productsDict"));
const cart = JSON.parse(sessionStorage.getItem("cart"));

//define a totaling function which totals the price information, including the price, tax and final price
function totalling() {
    let tax = subtotal * .0625;
    let total = Number(subtotal)+ tax;
    document.getElementById('cost').innerHTML = subtotal + '.00';
    document.getElementById('tax').innerHTML = tax.toFixed(2);
    document.getElementById('total').innerHTML = total.toFixed(2);
    sessionStorage.setItem("total", String(total));
}
//call totalling to initialize the cart total
totalling();



//create a function that make the boxes appear only if item is selected in the shop
function appear(){
    for (const key in cart2){
        let box = document.getElementById(key);
        if(parseInt(cart[cart2[key]]) <= 0){
            box.style.display = "none";
        }
        else{
            box.style.display = "block";
        }
    }
}
//call appear so it appears when initializes
appear();

//event listener basically just loads the functions inside first
document.addEventListener('DOMContentLoaded', function() {
    console.log(cart);
    //console.log(price);

    document.getElementById('Basic').value = cart.Basic
    document.getElementById('Bizarre').value = cart.Bizarre
    document.getElementById('Sword').value = cart.Sword
    document.getElementById('Big').value = cart.Big
    document.getElementById('Gun').value = cart.Gun
    document.getElementById('Cow').value = cart.Cow
    document.getElementById('Alien').value = cart.Alien
    document.getElementById('Super').value = cart.Super
    document.getElementById('Crazed').value = cart.Crazed

    appear();
    totalling();
});

//define a adding and subtraction function which increases the amount of stickman in cart by 1 or deincrement by 1
    function addone(inputId) {
        appear();
        let inputField = document.getElementById(inputId);
        // Increment the value by 1
        if (wallet - productsDict[inputId] < 0) {
            return;
        }
        inputField.value = parseInt(inputField.value) + 1;
        subtotal += Number(productsDict[inputId]);
        cart[inputId] += 1;
        wallet = wallet - productsDict[inputId];
        totalling();
        //sets the price and put into session storage as updated by the adding
        sessionStorage.setItem("cartPrice", String(subtotal))
        sessionStorage.setItem("cart", JSON.stringify(cart))
        sessionStorage.setItem("wallet", String(wallet));
    }

    function minusone(inputId) {
        appear();
        let inputField = document.getElementById(inputId);
        // parse int makes the string status of the inputfield into an int
        if(parseInt(inputField.value) > 0){
            inputField.value = parseInt(inputField.value) - 1;
            subtotal = subtotal - Number(productsDict[inputId]);
            cart[inputId] = cart[inputId] - 1;
            wallet = wallet + productsDict[inputId];
            totalling();
            //sets the price and put into session storage as updated by the subtracting
            sessionStorage.setItem("cartPrice", String(subtotal))
            sessionStorage.setItem("cart", JSON.stringify(cart));
            sessionStorage.setItem("wallet", wallet);

        }
        else {
            inputField.value = 0;
        }
    }

