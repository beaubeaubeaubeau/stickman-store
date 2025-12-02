/* sessionStorage found from internet to meet our needs to save variables across internal webpages for
 our shop page. It persists during the user's "session" lasting until the browser is closed. We use .getItem()
 .setItem() w/ a key, value (dictionary) format in order to store and retrieve items. Note: only String objects
 may be stored in sessionStorage, so we additionally needed to find JSON.stringify and JSON.parse in order to
 convert dictionary objects into strings for storage in sessionStorage.
*/

ScrollReveal().reveal(".placeholder");

//Store the value of each stickmen
const productsDict = {
    "Basic": 1,
    "Bizarre": 3,
    "Sword": 3,
    "Big": 3,
    "Gun": 5,
    "Cow": 5,
    "Alien": 10,
    "Super": 10,
    "Crazed": 10,
}
sessionStorage.setItem("productsDict", JSON.stringify(productsDict));

//Store the count of each stickmen in cart
let cart = {
    "Basic": 0,
    "Bizarre": 0,
    "Sword": 0,
    "Big": 0,
    "Gun": 0,
    "Cow": 0,
    "Alien": 0,
    "Super": 0,
    "Crazed": 0,
}

//If cart already has items, then replace the cart initializer with the preset cart
if (sessionStorage.getItem("cart")) {
    cart = JSON.parse(sessionStorage.getItem("cart"))
}

//Initialize variables except wallet, which follows same logic as above
let cartPrice = 0;
let cartAmount = 0;
let wallet = 0;
if (sessionStorage.getItem('wallet') !== null) {
    wallet = sessionStorage.getItem('wallet')
}

//Set the wallet area HTML element
document.getElementById("remainingMoney").innerHTML = "$:     " + String(wallet);

//Function that takes the unique id of the clicked button and adds the corresponding item to cart
function addToCart(name) {
    //Stop if not enough money
    if (wallet - productsDict[name] < 0) {
        return;
    }
    //Remove money from wallet
    wallet = wallet - productsDict[name];
    //Add to cart
    cart[name] += 1;
    //Set HTML element
    document.getElementById("remainingMoney").innerHTML = "$:     " + String(wallet);
    //Add to total price
    cartPrice += productsDict[name];
    //Increment amount in cart
    cartAmount += 1;
    //Save amount in cart to corresponding HTMl element
    document.getElementById("amountInCart").innerHTML = cartAmount;
    //Store everything in sessionStorage
    sessionStorage.setItem("cartAmount", String(cartAmount));
    sessionStorage.setItem("cartPrice", String(cartPrice));
    sessionStorage.setItem("cart", JSON.stringify(cart))
    sessionStorage.setItem("wallet", wallet)
}


//Initizalize index for the rotating images carousel
let index = 0;

function displayImages() {
    //Initialize the group of image elements and set to images
    const images = document.getElementsByClassName("image");

    //Set all images to display none
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    //Increment index
    index++;
    //Reset index once it exceeds the length of images
    if (index > images.length) {
        index = 1;
    }
    //Set display of current image to block
    images[index-1].style.display = "block";
    //Run displayImages() once again after set amount of time passes
    setTimeout(displayImages, 3000);
}

//Start displayImages()
displayImages();


//Function to set display of "featured-section" div to none
function closeDiv() {
    document.getElementById("featured-section").style.display = "none";
}



