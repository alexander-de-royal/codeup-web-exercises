"use strict";

alert('Welcome to my Website!')


let userInput = prompt('What is your favorite color?');
alert("Great," + userInput + " is my favorite color too!")

let userInputMermaid = prompt('How many days are you renting The Little Mermaid for?');
let userInputBear = prompt('How many days are you renting the Brother Bear for?');
let userInputHercules = prompt('How many days are you renting the Hercules for');

alert("Great, your total will be $" + 3 * (parseInt(userInputMermaid) + parseInt(userInputBear) + parseInt(userInputHercules)));

let userInputWork1 = prompt('Where do you work?');
let userInputHours1 = prompt('How many hours did you work?')
let userInputPay1 = prompt('How much do you get paid?')
let userInputWork2 = prompt('Where do yu work?');
let userInputHours2 = prompt('How many hours did you work?')
let userInputPay2 = prompt('How much do you get paid?')
let userInputWork3 = prompt('Where do you work?')
let userInputHours3 = prompt('How many hours did you work?')
let userInputPay3 = prompt('How much do you get paid?')

let workOnePay = (parseInt(userInputPay1) * parseInt(userInputHours1));
let workTwoPay = (parseInt(userInputPay2) * parseInt(userInputHours2));
let workThreePay = (parseInt(userInputPay3) * parseInt(userInputHours3));

alert("Great, your income is " + (parseInt(workOnePay) + parseInt(workTwoPay) + parseInt(workThreePay)));

let userInputClassFull = prompt('Is the class full? (type yes or no)');
let userInputClassSchedule = prompt('Does it conflict with the schedule? (type yes or no)');

if (userInputClassFull === "yes"){
    if (userInputClassSchedule === "yes"){
        console.log("You cannot be enrolled at this time")
    } else {
        alert("You are enrolled")
    }
    alert("You cannot be enrolled at this time")
} else {
    alert("You are enrolled")
}

let userInputProducts = prompt('How many products did you buy?');
let userInputExpiration = prompt('Has the offer expired? (type yes or no)');
let userInputMembers = prompt('Are you a premium member? (type yes or no)')

if (userInputProducts >= 2 && userInputExpiration === "no" || userInputMembers === "yes" ){
    alert("Product offer is applied");
} else {
    alert("Product offer is not applied");
}