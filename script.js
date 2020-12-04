function addNumbers(num1, num2) {
    return num1 + num2
}

function subtractNumbers(num1, num2) {
    return num1 - num2
}

function multiplyNumbers(num1, num2) {
    return num1 * num2
}

function divideNumbers(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
    //set this up so the button sets the operator
    if (operator == '+') {
        return addNumbers(num1, num2);
    }

    else if (operator == '-') {
        return subtractNumbers(num1, num2);
    }

    else if (operator == '*') {
        return multiplyNumbers(num1, num2);
    }

    else if (operator == '/') {
        return divideNumbers(num1, num2);
    }
}
//const button1 = document.querySelector("#btn1");

//Number variables
let firstNumber = 0;
let secondNumber = 0;
let userInput = 0;

//Boolean variables
let plusSelected = false;
let subSelected = false;
let multSelected = false;
let divSelected = false;

//Have to make textContent equal a variable
/*function displayInput() {
    document.getElementById("display").textContent = 1;
    console.log(this);
}*/

//const display = document.getElementsByTagName("P");
//create another function that stores the input of the click
    // run THAT function on click. Use output of that function to
    // figure out which number to display and so on

//Button One
btn1.addEventListener("click", function() {
    if (userInput == 0) {
        userInput = document.getElementById("display").textContent = "" + 1;
        console.log(userInput);     
    }
    else {
        userInput = userInput.replace(/[^\d.]/g, '');
        //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
        console.log(userInput);  
        userInput = document.getElementById("display").textContent = userInput + 1;
           
    }

});

//Button Two
btn2.addEventListener("click", function() {
    if (userInput == 0) {
        userInput = document.getElementById("display").textContent = "" + 2;
        console.log(userInput);     
    }
    else {
        userInput = userInput.replace(/[^\d.]/g, '');
        //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
        console.log(userInput);  
        userInput = document.getElementById("display").textContent = userInput + 2;
           
    }
});

//Button Three
btn3.addEventListener("click", function() {
    if (userInput == 0) {
        userInput = document.getElementById("display").textContent = "" + 3;
        console.log(userInput);     
    }
    else {
        userInput = userInput.replace(/[^\d.]/g, '');
        //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
        console.log(userInput);  
        userInput = document.getElementById("display").textContent = userInput + 3;
           
    }
});

//Button Four
btn4.addEventListener("click", function() {
    if (userInput == 0) {
        userInput = document.getElementById("display").textContent = "" + 4;
        console.log(userInput);     
    }
    else {
        userInput = userInput.replace(/[^\d.]/g, '');
        //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
        console.log(userInput);  
        userInput = document.getElementById("display").textContent = userInput + 4;
           
    }
});

//Button Five
btn5.addEventListener("click", function() {
    if (userInput == 0) {
        userInput = document.getElementById("display").textContent = "" + 5;
        console.log(userInput);     
    }
    else {
        userInput = userInput.replace(/[^\d.]/g, '');
        //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
        console.log(userInput);  
        userInput = document.getElementById("display").textContent = userInput + 5;
           
    }
});

//Button Six
btn6.addEventListener("click", function() {
    if (userInput == 0) {
        userInput = document.getElementById("display").textContent = "" + 6;
        console.log(userInput);     
    }
    else {
        userInput = userInput.replace(/[^\d.]/g, '');
        //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
        console.log(userInput);  
        userInput = document.getElementById("display").textContent = userInput + 6;
           
    }
});

//Button Seven
btn7.addEventListener("click", function() {
    if (userInput == 0) {
        userInput = document.getElementById("display").textContent = "" + 7;
        console.log(userInput);     
    }
    else {
        userInput = userInput.replace(/[^\d.]/g, '');
        //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
        console.log(userInput);  
        userInput = document.getElementById("display").textContent = userInput + 7;
           
    }
});

//Button Eight
btn8.addEventListener("click", function() {
    if (userInput == 0) {
        userInput = document.getElementById("display").textContent = "" + 8;
        console.log(userInput);     
    }
    else {
        userInput = userInput.replace(/[^\d.]/g, '');
        //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
        console.log(userInput);  
        userInput = document.getElementById("display").textContent = userInput + 8;
           
    }
});

//Button Nine
btn9.addEventListener("click", function() {
    if (userInput == 0) {
        userInput = document.getElementById("display").textContent = "" + 9;
        console.log(userInput);     
    }
    else {
        userInput = userInput.replace(/[^\d.]/g, '');
        //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
        console.log(userInput);  
        userInput = document.getElementById("display").textContent = userInput + 9;
           
    }
});

//Button Zero
btn0.addEventListener("click", function() {
    if (userInput == 0) {
        userInput = document.getElementById("display").textContent = "" + 0;
        console.log(userInput);     
    }
    else {
        userInput = userInput.replace(/[^\d.]/g, '');
        //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
        console.log(userInput);  
        userInput = document.getElementById("display").textContent = userInput + 0;
           
    }
});

//OperatorButtons
//Addition Button
btnPls.addEventListener("click", function(){
    plusSelected = true;
    firstNumber = document.getElementById("display").textContent;
    userInput = 0;
    console.log(firstNumber);
    document.getElementById("display").textContent = "+";
});

//Subtraction Button
btnSub.addEventListener("click", function(){
    document.getElementById("display").textContent = firstNumber + " - ";
});

//Multiplication Button
btnMult.addEventListener("click", function(){
    document.getElementById("display").textContent = firstNumber + " x ";
});

//Division Button
btnDiv.addEventListener("click", function(){
    document.getElementById("display").textContent = firstNumber + " / ";
});

//Equals Button
btnEq.addEventListener("click", function(){
    if (plusSelected == true) {
        firstNumber = parseInt(firstNumber);
        userInput = parseInt(userInput);
        firstNumber = addNumbers(firstNumber,userInput);
        }


    document.getElementById("display").textContent = firstNumber;

    userInput = 0;
    plusSelected = false;
    subSelected = false;
    multSelected = false;
    divSelected = false;
});

//Clear Button
btnClear.addEventListener("click", function(){
    firstNumber = 0;
    secondNumber = 0;
    userInput = 0;
    plusSelected = false;
    subSelected = false;
    multSelected = false;
    divSelected = false;
    document.getElementById("display").textContent = "0";
});

//LEFT OFF HERE
//SET UP OTHER OPERATIONAL BUTTONS
//ADDITION WORKS