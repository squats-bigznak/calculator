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


let firstOperandFloat = 0;
let secondOperandFloat = 0;
let unassignedOperandString = "";
let unassignedOperandFloat = "";
let operatorChoice = "";
let decimalCount = 0;

const display = document.querySelector('.display');

const displaytext = document.createElement('div');
displaytext.classList.add('displaytext');
displaytext.style.color = 'red';                                      
displaytext.textContent = '';
displaytext.style.cssText = 'color: red;';
display.appendChild(displaytext);


function addDigitToOperandString(digit){
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
        unassignedOperandFloat = parseFloat(unassignedOperandString);
}

function chooseOperator(string){

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
// const dividebtn = document.getElementById("dividebtn");
// dividebtn.addEventListener("click", () => );
// const multiplybtn = document.getElementById("multiplybtn");
// multiplybtn.addEventListener("click", () => );
// const subtractbtn = document.getElementById("subtractbtn");
// subtractbtn.addEventListener("click", () => );
// const addbtn = document.getElementById("addbtn");
// addbtn.addEventListener("click", () => );
// const acbtn = document.getElementById("acbtn");
// acbtn.addEventListener("click", () => );
// const percentbtn = document.getElementById("percentbtn");
// percentbtn.addEventListener("click", () => );
// const signbtn = document.getElementById("signbtn");
// signbtn.addEventListener("click", () => );



