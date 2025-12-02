//Grab the total price from sessionStorage and set to corresponding HTML element
let total1 = Number(sessionStorage.getItem("total"));
document.getElementById('total-heading').innerHTML = "$" + total1.toFixed(2);

//Function to check and decide which output when the checkout button is clicked
function handleButtonClick() {
    //Parse values from input fields and set to variables
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone_number").value;
    let email = document.getElementById("email").value;
    let zip = document.getElementById("zip_code").value;
    let address = document.getElementById("address").value;
    let result = email.includes("@");
    let result_2 = email.includes(".");

    //Decision tree for which output to display
    if (Number(name.length) === 0) {
        document.getElementById("output").style.visibility = "block";
        document.getElementById("output").innerHTML = "Please enter your name!";
    } else if (Number(phone.length) !== 10) {
        document.getElementById("output").style.visibility = "block";
        document.getElementById("output").innerHTML = "Please enter your phone number properly!";
    } else if (String(result) === "false" || String(result_2) === "false") {
        document.getElementById("output").style.visibility = "block";
        document.getElementById("output").innerHTML = "Please enter your email properly!";
    } else if (Number(zip.length) !== 5) {
        document.getElementById("output").style.visibility = "block";
        document.getElementById("output").innerHTML = "Please enter your zip code properly!";
    } else if (Number(address.length) === 0) {
        document.getElementById("output").style.visibility = "block";
        document.getElementById("output").innerHTML = "Please enter your address!";
    } else {
        document.getElementById("output").innerHTML = "Your information saved!";
        document.getElementById("checkout").style.visibility = "visible"
    }
}

//Display "thanks" element when button is clicked
function checkout(){
    document.getElementById("thanks").style.visibility = "visible";
}
