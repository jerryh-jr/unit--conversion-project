/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//setting up variables to grab elements by their ID
let convertNum = "";
const convertInput = document.getElementById("convert-input");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const convertForm = document.getElementById("convert-form");
//adding click event listener for the convert button.
convertForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    //variables for measurements
    const lenMeasure = 3.281;
    const volMeasure = 0.261;
    const massMeasure = 2.204;
    
    
    let length = "";
    let volume = "";
    let mass = "";
    //setting variable for the value of the input.
    convertNum = convertInput.value;
    
    //convert the input into meters/feet
    length = `${convertNum} meters = ${Math.floor(convertNum * lenMeasure * 100) / 100} feet | ${convertNum} feet = ${Math.floor(convertNum / lenMeasure * 100) / 100} meters`;
    
    //convert the input into liters/gallons
    volume = `${convertNum} liters = ${Math.floor(convertNum * volMeasure * 100) / 100} gallons | ${convertNum} gallons = ${Math.floor(convertNum / volMeasure * 100) / 100} liters`;
    
    //convert the input into kilos/pounds
    mass = `${convertNum} kilos = ${Math.floor(convertNum * massMeasure * 100) / 100} pounds | ${convertNum} pounds = ${Math.floor(convertNum / massMeasure * 100) / 100} kilos`;
    
    //show output onto the screen for each element
   lengthEl.textContent = length;
   volumeEl.textContent = volume;
   massEl.textContent = mass;
})
