


//gets all the buttons named
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("eqbtn")
const clearButton = document.getElementById("clrbtn")


//add value to the keys using typed number in html



// math functions
let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;


function operate (operator, a, b ) { 
    a = Number(a);
    b = Number(b);
    switch (operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "x":
            return multiply(a,b);
        case "/": 
            if (b === 0) return null
            else return divide(a,b);

        default:
             return null;
    }

}//works and accounts for dividing by 0

console.log(operate("x" , 1 , 2));


