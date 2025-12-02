
//Randomize bug location in div element
function randomize_bug() {
    document.getElementById("bug").style.left= (90*Math.random()) + "%";
    document.getElementById("bug").style.top= (80*Math.random()) + "%";
}

//Function to call randomize_bug() and increment wallet
function bug_hit() {
    wallet += income;
    document.getElementById("remainingMoney").innerHTML = "$:     " + String(wallet);
    sessionStorage.setItem("wallet", wallet)
    randomize_bug()
}

//Initialize variables except wallet if it already exists
let income = 1;
let wallet = 0;
if (sessionStorage.getItem("wallet") !== null) {
    wallet = Number(sessionStorage.getItem("wallet"));
}
//Set "remainingMoney" to display wallet amount
document.getElementById("remainingMoney").innerHTML = "$:     " + String(wallet);
//Randomize initial position
randomize_bug()

