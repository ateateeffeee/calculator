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
//I could've done this the whole time but lets keep up the consistency of my laziness
let displayBox = document.getElementById("display").textContent;

//Number variables
let firstNumber = 0;
let secondNumber = 0;
let userInput = 0;

//Symbol variable
let operatorText = '';

//Boolean variables
let plusSelected = false;
let subSelected = false;
let multSelected = false;
let divSelected = false;
let firstNumberStored = false;

//Have to make textContent equal a variable
/*function displayInput() {
    document.getElementById("display").textContent = 1;
    console.log(this);
}*/

//const display = document.getElementsByTagName("P");
//create another function that stores the input of the click
    // run THAT function on click. Use output of that function to
    // figure out which number to display and so on

//Input functions
function inputOne() {
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
}
function inputTwo(){
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
}
function inputThree(){
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
}
function inputFour(){
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
}
function inputFive(){
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
}
function inputSix(){
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
}
function inputSeven(){
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
}
function inputEight(){
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
}
function inputNine(){
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
}
function inputZero(){
    userInput = userInput.replace(/[^\d.]/g, '');
    //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
    console.log(userInput);  
    userInput = document.getElementById("display").textContent = userInput + 0;
}

function inputDecimal(){
    if (document.getElementById("display").textContent.includes(".")) {
        alert("Numbers can only contain one decimal point, chief.")
    }
    else {
        if (userInput == 0) {
            userInput = document.getElementById("display").textContent = ".";
            console.log(userInput);     
        }
        else {
            userInput = userInput.replace(/[^\d.]/g, '');
            //document.getElementById("display").textContent.replace(/[^\d.]/g, '');
            console.log(userInput);  
            userInput = document.getElementById("display").textContent = userInput + ".";
           
        }
    }
}
//just now changed userInput reset to '' instead of 0
    //if stuff breaks, just change it back
function inputPlus(){
    if (plusSelected == true) {
        //this does nothing. make it grey out button in css or something
    }
    else {
    firstNumberStored = true;
    plusSelected = true;
    firstNumber = document.getElementById("display").textContent;
    userInput = '';
    console.log(firstNumber);
    operatorText = document.getElementById("display").textContent = "+";
    }
}

function inputMinus(){
    if (subSelected == true) {
        //grey it out doooooood
    }
    else {
    firstNumberStored = true;
    subSelected = true;
    firstNumber = document.getElementById("display").textContent;
    userInput = '';
    console.log(firstNumber);
    operatorText = document.getElementById("display").textContent = " - ";
    }
}

function inputTimes(){
    if (multSelected == true) {
        //grey
    }
    else {
    firstNumberStored = true;
    multSelected = true;
    firstNumber = document.getElementById("display").textContent;
    userInput = '';
    console.log(firstNumber);
    operatorText = document.getElementById("display").textContent ="x";
    }
}
function inputDivide(){
    if (divSelected == true) {
        //yuh
    }
    else {
    firstNumberStored = true;
    divSelected = true;
    firstNumber = document.getElementById("display").textContent;
    userInput = '';
    console.log(firstNumber);
    operatorText = document.getElementById("display").textContent = "/";
    }
}
function inputEquals(){
    if (!firstNumberStored || !userInput) {
        //grey it out brudda
        console.log("Nothing happened, ya goof");
    }
    else {
    if (plusSelected == true) {
        firstNumber = parseFloat(firstNumber);
        userInput = parseFloat(userInput);
        firstNumber = addNumbers(firstNumber,userInput);
        firstNumber = Math.round((firstNumber + Number.EPSILON) * 100) / 100;
        }
        else if (subSelected == true) {
            firstNumber = parseFloat(firstNumber);
            userInput = parseFloat(userInput);
            firstNumber = subtractNumbers(firstNumber,userInput);
            firstNumber = Math.round((firstNumber + Number.EPSILON) * 100) / 100;
        }
        else if (multSelected == true) {
            firstNumber = parseFloat(firstNumber);
            userInput = parseFloat(userInput);
            firstNumber = multiplyNumbers(firstNumber,userInput);
            firstNumber = Math.round((firstNumber + Number.EPSILON) * 100) / 100;
        }
        else if (divSelected == true) {
            firstNumber = parseFloat(firstNumber);
            userInput = parseFloat(userInput);
            if (userInput == 0) {
                firstNumber = "We all make mistakes in the heat of passion, Jimbo.";
                console.log('ppoooop');
            }
            else {
                firstNumber = divideNumbers(firstNumber,userInput);
                firstNumber = Math.round((firstNumber + Number.EPSILON) * 100) / 100;
            }
            
        }


    document.getElementById("display").textContent = firstNumber;

    userInput = 0;
    plusSelected = false;
    subSelected = false;
    multSelected = false;
    divSelected = false;
    operatorText = '';
    }
}
function inputBackspace(){
    if (operatorText && firstNumberStored && userInput){
        userInput = userInput.slice(0, -1);
        document.getElementById("display").textContent = userInput;
        if (!userInput){
            operatorText = document.getElementById("display").textContent = operatorText;
            
        }
        /*
        else {
        document.getElementById("display").textContent = userInput;
        console.log("FUDGE");
        }*/
    
        
    
    }
    else if (!userInput && operatorText){
        operatorText = '';
        plusSelected = false;
        subSelected = false;
        multSelected = false;
        divSelected = false;
        console.log(operatorText);
        userInput = firstNumber;
        firstNumber = 0;
        document.getElementById("display").textContent = userInput;

    }
    else if (firstNumber && !userInput && !operatorText){
        //just to be cheeky see if we can backspace the answers
        //problem here is it is working with firstNumber NOT userInput
            //IDK WTF is going on here. i want to backspace the sums
            //string was still converted to a number...
        console.log("works");
        //firstNumber = firstNumber.toString().slice(0, -1);
        userInput = firstNumber.toString().slice(0, -1);
        document.getElementById("display").textContent = userInput;
        firstNumber = 0;
            if (!userInput) {
                userInput = 0;
                console.log("it works");
                document.getElementById("display").textContent = userInput;
            }
            else {
                document.getElementById("display").textContent = userInput;
                }
    }
    else {
    //if showing a symbol, allow user to edit first number again
    //uncheck div/add/mult/sub BOOL
    //if display is empty, show a zero
    userInput = userInput.slice(0, -1);
    if (!userInput) {
        userInput = 0;
        console.log("it works");
        document.getElementById("display").textContent = userInput;
    }
    else {
        document.getElementById("display").textContent = userInput;
        }
    }
}
function inputClear(){
    firstNumber = 0;
    secondNumber = 0;
    userInput = 0;
    plusSelected = false;
    subSelected = false;
    multSelected = false;
    divSelected = false;
    firstNumberStored = false;
    operatorText = '';
    document.getElementById("display").textContent = "0";
}


//KeyboardListener
window.addEventListener("keydown", function(event) {
    if(event.key === '1'){
        inputOne();
    }
    else if(event.key === '2'){
        inputTwo();
    }
    else if(event.key === '3'){
        inputThree();
    }
    else if(event.key === '4'){
        inputFour();
    }
    else if(event.key === '5'){
        inputFive();
    }
    else if(event.key === '6'){
        inputSix();
    }
    else if(event.key === '7'){
        inputSeven();
    }
    else if(event.key === '8'){
        inputEight();
    }
    else if(event.key === '9'){
        inputNine();
    }
    else if(event.key === '0'){
        inputZero();
    }
    else if(event.key === '.'){
        inputDecimal();
    }
    else if(event.key === '+'){
        inputPlus();
    }
    else if(event.key === '-'){
        inputMinus();
    }
    else if(event.key === 'x'){
        inputTimes();
    }
    else if(event.key === '/'){
        inputDivide();
    }
    else if(event.key === '=' || event.key === 'Enter'){
        inputEquals();
    }
    else if(event.key === 'Backspace'){
        inputBackspace();
    }
    else if(event.key === 'Escape'){
        inputClear();
    }
});

//Click Listeners
//Button One
btn1.addEventListener("click",inputOne);

//Button Two
btn2.addEventListener("click", inputTwo);

//Button Three
btn3.addEventListener("click", inputThree);

//Button Four
btn4.addEventListener("click", inputFour);

//Button Five
btn5.addEventListener("click", inputFive);

//Button Six
btn6.addEventListener("click", inputSix);

//Button Seven
btn7.addEventListener("click", inputSeven);

//Button Eight
btn8.addEventListener("click", inputEight);

//Button Nine
btn9.addEventListener("click", inputNine);

//Button Zero
btn0.addEventListener("click", inputZero);

//Button decimal point
btnDot.addEventListener("click", inputDecimal);


//OperatorButtons
//Addition Button
btnPls.addEventListener("click", inputPlus);

//Subtraction Button
btnSub.addEventListener("click", inputMinus);

//Multiplication Button
btnMult.addEventListener("click", inputTimes);

//Division Button
btnDiv.addEventListener("click", inputDivide);

//Equals Button
btnEq.addEventListener("click", inputEquals);

//Backspace Button
btnBkSp.addEventListener("click", inputBackspace);

//Clear Button
btnClear.addEventListener("click", inputClear);

//LEFT OFF HERE
// RICH
//backspace button
    //if number AND operator are selected, it goes back to first
    //number
    //erasing second number doesn't go back to operator because
    //current if statement wipes bools
    //POSSIBLE SOLUTION: nested if's first one checks for
    //userinput(second number)
    //next one checks for operator(take out part that makes them false)
    //last one checks for first num (probably be an else)
    //SOLUTION: if !userInput AND there is an operator selected, backspace
    //gets rid of the operator
    //if !userInput AND no operators, first number becomes userInput
    //KEEP IN MIND display a zero when a number is totally deleted
    //NEW SOLUTION: if sub/plus all those are truthy AND !firstNumber
        //store display as userInput
    //if display = any of the symbols
        //erase it and make userInput = firstNumber THEN wipe firstNumber
    //NEWEST SOLUTION: make a variable specifically for displaying symbols
        //if that is truthy, it erases it and does like what i said
        //in line 405
        //TODO create varialble, go through all button hits and
        //display variable there

//keyboard support