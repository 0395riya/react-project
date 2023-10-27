import React from 'react';
import './Calculator.css';
import perseFloat from 'react'

function Calculator() {
  
 
 var input = document.getElementById('input'),
 number = document.querySelectorAll('.numbers div'),
 operators = document.querySelectorAll('.operators div'),
 result = document.getElementById('result'),
 clear = document.getElementById('clear'),
 resultDisplayed = false;

 for(var i=0; i<number.length; i++){
  number[i].addEventListener("click", function(e){
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length -1]

    if(resultDisplayed === false){
      input.innerHTML += e.target.innerHTML
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷"){
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
 }

 for (var i = 0; i<operators.length; i++){
  operators[i].addEventListener("click", function(e){
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];
    if(lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷"){
      var newString = currentString.substring(0, currentString.length -1)+ e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0){

    }else {
      input.innerHTML += e.target.innerHTML;
    }
  });
 }

 for (var i=0; i<result; i++){
 result[i].addEventListener("click", function(){
  var inputString = input.innerHTML;
  var numbers = inputString.split(/\+|\-|\×|\÷/g);
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  var divide = operators.indexOf("÷");
  while( divide != -1){
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while( divide != -1){
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while( subtract != -1){
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while( add != -1){
    numbers.splice(add, 2, perseFloat(numbers[add]) + perseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0];

  resultDisplayed = true; 
});
 }

// clear.result("click", function() {
//   input.innerHTML = "";

//  })
clear.onclick = function () {
  input.innerHTML = '';
}; 
 
    
  return (
    <div className="calculator">
  <div className="input" id="input"></div>
  <div className="buttons">
    <div className="operators">
      <div>+</div>
      <div>-</div>
      <div>&times;</div>
      <div>&divide;</div>
    </div>
    <div className="leftPanel">
      <div className="numbers">
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
      <div className="numbers">
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="numbers">
        <div>0</div>
        <div>.</div>
        <div id="clear" type="button" style={{backgroundColor: "red", color: "white"}}>C</div>
      </div>
    </div>
    <div className="equal" id="result">=</div>
  </div>
</div>
  )
}

export default Calculator ;
