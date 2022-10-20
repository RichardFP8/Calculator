"use strict";
/*hold all interactions until after the first event: page finishes loading
 trigger everythin else*/
window.onload = init;

//here are where the buttons will be access and lead to the functions based on its operation
function init() {
    const add = document.getElementById("add");
    const minus = document.getElementById("minus");
    const multiply = document.getElementById("multiply");
    const divide = document.getElementById("divide");

   
    //go to the function that's assigned to the button clicked
    add.onclick = addClicked;
    minus.onclick = minusClicked;
    multiply.onclick = multiplyClicked;
    divide.onclick = divideClicked;
}

//compute, store, and display
function addClicked(){
    const num1 = Number(document.getElementById("number1").value);
    const num2 = Number(document.getElementById("number2").value);
    const answer = document.getElementById("answer");
    let calculate = num1 + num2;
    answer.value = calculate;
}
function minusClicked(){
    const num1 = Number((document.getElementById("number1")).value);
    const num2 = Number((document.getElementById("number2").value));
    let answer = document.getElementById("answer");
    let calculate = num1 - num2;
    answer.value = calculate;
}
 function multiplyClicked(){
     const num1 = Number((document.getElementById("number1")).value);
     const num2 = Number((document.getElementById("number2").value));
     let answer = document.getElementById("answer");
     let calculate = num1 * num2;
     answer.value = calculate;
}
function divideClicked(){
    const num1 = Number((document.getElementById("number1")).value);
    const num2 = Number((document.getElementById("number2").value));
    let answer = document.getElementById("answer");
    let calculate = num1 / num2;
    answer.value = calculate;
}