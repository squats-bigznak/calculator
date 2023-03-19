//input first operand as string
//if decimcal is used, only allow once
//upon use of an operator or evaluator ("=")
        //cast the string to float 
        //store number to key of first operand object
        //store operator as string (do nothing if evaluator)
//input second operand as string
//if decimal is used, only allow once
//upon use of another operator or evaluator ("=")
        //cast string to float
        //store number to key of second operand object
        //run switch case that calls function corresponding to operator
        //use stored operand floats as arguments to function
//ouput result to screen
//store result as first operand

//also implement AC button "all clear" which restarts procedure

function computeEquation(firstOpString, operator, secondOpString){

        let firstNumber = castOperandStringToFloat(firstOpString);
        let secondNumber = castOperandStringToFloat(secondOpString);
        let result = 0;
        switch (operator) {
                case 'divide':
                        result = divideOperation(firstNumber,secondNumber);
                        displaytext.textContent += " = " + (result);
                        break;
                case 'multiply':
                        result = mutiplyOperation(firstNumber,secondNumber);
                        displaytext.textContent += " = " + (result);
                        break;
                case 'subtract':
                        result = subtractOperation(firstNumber,secondNumber);
                        displaytext.textContent += " = " + (result);
                        break;
                case 'add':
                        result = addOperation(firstNumber,secondNumber)
                        displaytext.textContent += " = " + (result);
                        break;             
              }
}       

let firstOperandString = "";
let secondOperandString = "";
let unassignedOperandString = "";
let unassignedOperandFloat = "";
let operatorChoice = new String();
let decimalCount = 0;
// let operatorCount = 0;

const display = document.querySelector('.display');

const displaytext = document.createElement('div');
displaytext.classList.add('displaytext');
displaytext.style.color = 'red';                                      
displaytext.textContent = '';
displaytext.style.cssText = 'color: red;';
display.appendChild(displaytext);


function addDigitToOperandString(digit){
        //only add decimal once per string
        if (digit == '.'){
                decimalCount++;
                if (decimalCount > 1){
                        return;
                }
        }

        unassignedOperandString = unassignedOperandString + digit;
        
        console.log(unassignedOperandString);
        displaytext.textContent += digit;
        return unassignedOperandString;
}

function castOperandStringToFloat(string){
        return (parseFloat(string));
}

function chooseOperator(operator){
        //check if operator has been declared before
        if (operatorChoice != ""){
                return;
        }
        else{
                //send first string to first operand
                firstOperandString = unassignedOperandString;
                //zero out unassignedOperandString
                unassignedOperandString = "";
                operatorChoice = operator;
                switch (operator) {
                        case 'divide':
                                displaytext.textContent += " / ";
                                break;
                        case 'multiply':
                                displaytext.textContent += " * ";
                                break;
                        case 'subtract':
                                displaytext.textContent += " - ";
                                break;
                        case 'add':
                                displaytext.textContent += " + ";
                                break;
                
                }
        }
        
}



function addOperation(a,b){
        
        return (a + b);
}

function subtractOperation(a,b){
        return (a - b)
}

function mutiplyOperation(a,b){
        return (a * b)
}

function divideOperation(a,b){
        return (a / b)
}

function decimalTransformation(a){
        return (a/100)
}

function signTransformation(a){
        return (0 - a)
}


//mess of event listeners that I don't quite know how to loop over yet

const onebtn = document.getElementById("onebtn");
onebtn.addEventListener("click", () => addDigitToOperandString(1));
const twobtn = document.getElementById("twobtn");
twobtn.addEventListener("click", () => addDigitToOperandString(2));
const threebtn = document.getElementById("threebtn");
threebtn.addEventListener("click", () => addDigitToOperandString(3));
const fourbtn = document.getElementById("fourbtn");
fourbtn.addEventListener("click", () => addDigitToOperandString(4));
const fivebtn = document.getElementById("fivebtn");
fivebtn.addEventListener("click", () => addDigitToOperandString(5));
const sixbtn = document.getElementById("sixbtn");
sixbtn.addEventListener("click", () => addDigitToOperandString(6));
const sevenbtn = document.getElementById("sevenbtn");
sevenbtn.addEventListener("click", () => addDigitToOperandString(7));
const eightbtn = document.getElementById("eightbtn");
eightbtn.addEventListener("click", () => addDigitToOperandString(8));
const ninebtn = document.getElementById("ninebtn");
ninebtn.addEventListener("click", () => addDigitToOperandString(9));
const zerobtn = document.getElementById("zerobtn");
zerobtn.addEventListener("click", () => addDigitToOperandString(0));
const decimalbtn = document.getElementById("decimalbtn");
decimalbtn.addEventListener("click", () => addDigitToOperandString('.'));
const dividebtn = document.getElementById("dividebtn");
dividebtn.addEventListener("click", () => chooseOperator('divide'));
const multiplybtn = document.getElementById("multiplybtn");
multiplybtn.addEventListener("click", () => chooseOperator('multiply'));
const subtractbtn = document.getElementById("subtractbtn");
subtractbtn.addEventListener("click", () => chooseOperator('subtract'));
const addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", () => chooseOperator('add'));
// const acbtn = document.getElementById("acbtn");
// acbtn.addEventListener("click", () => );
// const percentbtn = document.getElementById("percentbtn");
// percentbtn.addEventListener("click", () => );
// const signbtn = document.getElementById("signbtn");
// signbtn.addEventListener("click", () => );
const equalsbtn = document.getElementById("equalsbtn");
equalsbtn.addEventListener("click", () => computeEquation(firstOperandString, operatorChoice, unassignedOperandString));



