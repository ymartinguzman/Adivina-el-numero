'use strict';

const writeNum = document.querySelector(".js__write-num");
const buttonTry = document.querySelector(".js__btn");
const trial = document.querySelector(".js__trial");
const trialNum = document.querySelector(".js__trial-num");
const randomNum = getRandomNumber(100);

function magicNumber(){
  const writeNumValue = writeNum.value;
if(writeNumValue < 1 || writeNumValue> 100 ){
  console.log("El número debe estar entre 1 y 100");
  trial.value =("El número debe estar entre 1 y 100");
} else if(randomNum > writeNumValue){
  console.log("Demasiado bajo");
  trial.value = "Demasiado bajo";
}else if(randomNum < writeNumValue){
  console.log("Demasiado alto");
 trial.value =("Demasiado alto");
}else if(randomNum === writeNumValue){
  console.log("Has ganado campeona");
  trial.value =("Has ganado campeona");
}
}

function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}


console.log(getRandomNumber(100));

buttonTry.addEventListener("click", magicNumber);