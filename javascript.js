let currentNum = ""
let previousNum
let operator



//gets all the buttons named
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("eqbtn")
const clearButton = document.getElementById("clrbtn")

const currentDisplayNumber = document.querySelector(".screen");


//add value to the keys using typed number in html



// math functions
let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;

equalsButton.addEventListener("click", operate);
clearButton.addEventListener("click", clear);

function clear () {
    previousNum = "";
    currentNum = "";
    operator = "";
    currentDisplayNumber.textContent = "0";
}


function operate () { 
    a = Number(previousNum);
    b = Number(currentNum);
    
    switch (operator){
        case "+":
            currentDisplayNumber.textContent = add(a,b);
            break
        case "-":
            currentDisplayNumber.textContent = subtract(a,b);
            break
        case "x":
            currentDisplayNumber.textContent = multiply(a,b);
            break
        case "/": 
            if (b === 0){ currentDisplayNumber.textContent = "ERROR";
            break;}
            else currentDisplayNumber.textContent = divide(a,b);
            break;

        default:
             return null;
    }
    

}//works and accounts for dividing by 0

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});


function handleNumber(number){
    if (currentNum.length <= 12){
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
    }

}

operatorButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
    });
});


function handleOperator(op){
    
    operator = op;
    previousNum = currentNum;
    currentNum = "";
    currentDisplayNumber.textContent = "";

console.log(operator);
    

}



