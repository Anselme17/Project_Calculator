const keyboard = document.querySelector(".keyboard");
const digitcolumn = document.querySelector(".digitcolumn");
const buttonclear = document.querySelector(".clear")
let screencontent = document.querySelector(".screencontent")
const buttons = document.querySelectorAll('.digit-btn');
const opbuttons = document.querySelectorAll('.operator-btn');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        screencontent.textContent+=btn.value;
        digitPressed = true;
    });
});

opbuttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        screencontent.textContent+=btn.textContent;
        operatorPressed = true;
    });
});


let digitPressed = false;
let operatorPressed = false;
let screenarray = []

while (digitPressed && !operatorPressed) {
    screenarray


const addition = function(a, b) {
    return a + b;
}

const substract = function(a, b) {
    return a + b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

let num1 = ""
let num2 = ""
let operator = ""

const operate = function(num1,operator,num2) {
    if (operator == "+") {
        return addition(num1,num2)
    }

    if (operator == "-") {
        return substract(num1,num2)
    }

    if (operator == "*") {
        return multiply(num1,num2)
    }

    if (operator == "/") {
        return divide(num1,num2)
    }
}

buttonclear.addEventListener("click", () => {
    screencontent.textContent=""
    screenarray=[]
});

