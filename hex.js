const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    //in the call back funtion we are setting up aloop that will generate a random color targeting the body
    let hexColor = '#'; 
    for(let i =0; i<6; i++){  //i<6 represents the number of values a hex color has which is 5 after the #
        hexColor += hex[getRandomNumber()] //+= will generate a new color hastag   
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}