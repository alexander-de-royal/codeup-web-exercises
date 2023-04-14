"use strict";


alert('Welcome to my Website!');

console.log('Hello from external javascript');


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
        alert.log("You cannot be enrolled at this time")
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

let littleMermaidRentalLength = parseInt(prompt("How long would you like to rent The Little Mermaid?"));
let brotherBearRentalLength = parseInt(prompt("How long would you like to rent Brother Bear"));
let herculesRentalLength = parseInt(prompt("How long would you like to rent Hercules?"));
let rentalCost = prompt("Wait, how much is it to rent a movie per day?");

alert("Alrighty, you're renting 'The Little Mermaid' for " + littleMermaidRentalLength + " days, 'Brother Bear' for " + brotherBearRentalLength + " days, and " +
    "'Hercules' for " + herculesRentalLength + " days. It will cost $" + rentalCost + " per movie, per day. Your final total is $" + ((littleMermaidRentalLength + brotherBearRentalLength + herculesRentalLength) * rentalCost));

let googRate = prompt("How much does Google pay per hour?");
let googHours = prompt("how many hours did you work for Google this week?");
let fbRate = prompt("How much does Meta pay per hour?");
let fbHours = prompt("How many hours did you work for Meta this week?");
let amarate = prompt("How much does Amazon pay per hour?");
let amaHours = prompt("How many hours did you work for Amazon this week?");

alert("Congrats, you got paid: $" + (googHours*googRate + fbHours*fbRate + amaHours*amarate));

let isClassFull = confirm("Hey, is there still space in Underwater Basket weaving 101?");
let hasClassAtEightAMAAlready = confirm("Is this going to conflict with your 8AM Seminar on Cheese?");

alert("Students can go to Underwater Basket weaving 101: " + (isClassFull === true && hasClassAtEightAMAAlready === false));

let isOfferValid = confirm("Is the offer still valid?");
let isPremiumMember = confirm("Do you have a kroger card?");
let cartSize = prompt("How many items")

alert("Customer can have discount: " + ((isPremiumMember || cartSize > 2) && isOfferValid));

// alert("Customer can have discount: " + (cartSize >= 2 && isOfferValid || isPremiumMember));