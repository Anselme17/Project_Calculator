let keyboard = document.querySelector(".keyboard");
let digitcolumn = document.querySelector(".digitcolumn");

for(i=0;i<=8;i++) {
    let array = [1,2,3,4,5,6,7,8,9]
    let bton = document.createElement("button")
    bton.textContent = array[i]
    digitcolumn.appendChild(bton);
}





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


console.log(addition(2,3))
console.log(substract(3,3))
console.log(multiply(2,3))
console.log(divide(2,2))
