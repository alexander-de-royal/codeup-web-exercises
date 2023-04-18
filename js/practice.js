"use strict";

// let confirmed = confirm('Are you sure you want to do XYZ?')
// console.log(confirmed);
//
// let userInput = prompt('Please type something.')
// alert('The user entered: ' + userInput);

// function myFunction(input){
//     return input + 1;
// }
//
// function increment(x){
//     return x + 1;
// }
// let four = increment(3);

// var x = 300;
// var y = 100;
//
// function scopeExample(){
//     var x = 1;
//     var y = 2;
//     console.log('x: ' + x + 'y: ' + y);
// }

let askTheUser = confirm('Would you like to enter a number?');

function didTheUserEnteredANumber(confirm){
    if(confirm === true){
        let numberEntered = prompt('Enter a number?');{
            function letUsFindOut(whatTheUserEntered){
            if (numberEntered % 2 === 0 ) {
                return "Your number is even";
                }
            }
        }

    } else {
        alert('Goodbye');
    }
}
didTheUserEnteredANumber(askTheUser)