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

   // Validate amount is > 0
   function validatePrincipal() { 
    if (document.getElementById("principal").value == '' || document.getElementById("principal").value <= 0){
        alert('Please enter a positive number');
}}
validatePrincipal()
};

// Display value of slider
function rangeSlider() {
    let displayRate = document.getElementById("rate").value;
   document.getElementById("displayRate").innerHTML = `${displayRate}%`;
};
