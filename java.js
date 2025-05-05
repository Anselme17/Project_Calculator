const keyboard = document.querySelector(".keyboard");
const digitcolumn = document.querySelector("#digitcolumn"); // ⚠️ ID, pas class
const buttonclear = document.querySelector(".clear");
let screencontent = document.querySelector(".screencontent");
const buttons = document.querySelectorAll('.digit-btn');
const opbuttons = document.querySelectorAll('.operator-btn');
const equalBtn = document.querySelector(".equal");

// Affichage des chiffres
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        screencontent.textContent += btn.value;
    });
});

// Affichage des opérateurs
opbuttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        screencontent.textContent += btn.textContent.trim();
    });
});

// Fonctions de calcul
const addition = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "∞";

// Fonction d'opération principale
const operate = function(num1, operator, num2) {
    switch (operator) {
        case "+": return addition(num1, num2);
        case "-": return substract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        default: return "Erreur opérateur";
    }
}

// Bouton clear
buttonclear.addEventListener("click", () => {
    screencontent.textContent = "";
});

// Égal : effectuer le calcul
equalBtn.addEventListener("click", () => {
    const expression = screencontent.textContent.trim();


    // Découpage de l'expression : nombre1, opérateur, nombre2
    const parts = expression.match(/^\s*(\d+)\s*([+\-*/])\s*(\d+)\s*$/);

    if (parts) {
        const num1 = parseInt(parts[1]);
        const operator = parts[2];
        const num2 = parseInt(parts[3]);

        const result = operate(num1, operator, num2);
        screencontent.textContent = result;
    } else {
        screencontent.textContent = "Erreur";
    }
});