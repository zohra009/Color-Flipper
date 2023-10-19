const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener("click",function() {
    //get random number btw index zero and 3 so i[]
    const randomNumber = getRandomNumber()
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length); //math.floor(Math.random.. is used to round randomNumber to thenearest interger.
} 