// Calculate interest, run form validation, update innerhtml to display results
function compute() {

let principal = document.getElementById("principal").value;
let rate = document.getElementById("rate").value;
let years = document.getElementById("years").value;
let futureYear = new Date().getFullYear() + parseInt(years);

let interest = principal * years * rate / 100;
    
let text = `If you deposit <mark>$${principal}</mark> 
    at an interest rate of <mark>${rate}%</mark>, 
    you will receive <mark>$${interest.toFixed(2)}</mark> in interest
    in the year <mark>${futureYear}.</mark>`;

   document.getElementById('result').innerHTML = text;
}

// Display value of slider
function rangeSlider() {
    let displayRate = document.getElementById("rate").value;
   document.getElementById("displayRate").innerHTML = `${displayRate}%`;
};

rangeSlider();

// Validate that principal is a valid and positive number
function principalValidation() {
    if (document.getElementById("principal").value == ""){
     alert("Please enter an ammount.");
     document.getElementById("principal").focus();
     return false;
 } else if (parseInt(document.getElementById("principal").value) <= 0) {
     alert("Please fill out the ammount field with a number higher than zero.");
     document.getElementById("principal").focus();
     return false;
 } else
 return true;
    }

principalValidation()
