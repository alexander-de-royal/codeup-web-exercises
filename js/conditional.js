"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color){
//     if (color === 'blue'){
//         return "Blue is color of the sky";
//     } else if (color === 'orange'){
//         return "Orange is a refreshing color";
//     } else if (color === 'yellow'){
//         return "Yellow is a bright color";
//     } else if (color === 'green'){
//         return "Green is a yucky color";
//     } else if (color === 'red'){
//         return "Red is a danger color";
//     } else if (color === 'indigo'){
//         return "Indo is a ..........";
//     } else if (color === 'violet'){
//         return "Violet is a pretty color";
//     } else {
//         return "Please enter a different color.";
//     }
// }
// console.log(analyzeColor("red"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color){
switch (color) {
    case "Red":
        return "Red is a danger color";
    case "Orange":
        return "Orange is a refreshing color";
    case "Yellow":
        return "Yellow is a bright color";
    case "Green":
        return "Green is a yucky color";
    case "Blue":
        return "Blue is color of the sky";
    case "Indigo":
        return "Indo is a ..........";
    case "Violet":
        return "Violet is a pretty color";
    default:
        alert(`Invalid Day`);
    }
}
console.log(analyzeColor("Blue"));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
alert(analyzeColor(prompt('What is your favorite color?')));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNum, total){

    if(luckyNum === 0){
        return total;
    } else if (luckyNum === 1){
        return total - (total * 0.10);
    } else if (luckyNum === 2){
        return total - (total * 0.25);
    } else if (luckyNum === 3){
        return total - (total * 0.35);
    } else if (luckyNum === 4){
        return total - (total * 0.50);
    } else if (luckyNum === 5){
        return total - total;
    } else {
        return "Please enter a valid input";
    }
}
caculateTotal(0,100);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);

let totalBill = prompt("Please enter a total amount of your bill");

alert(calculateTotal(luckyNumber, totalBill));

alert("Your lucky number was " + luckyNumber + ". The price before the discount was $" + totalBill + ". Your total amount due after the discount is $" + calculateTotal(luckyNumber, totalBill));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
if (confirm("Would you like to enter a number?")){
    let userInput = prompt("Enter a number");

    if(!isNaN(userInput)){
        if(userInput % 2 === 0){
            alert("The number" + userInput + " is even");
        } else {
            alert(`The number ${userInput} is odd`)
        }
    }
    alert("The number plus 100 = " + (parseInt(userInput) + 100));

    if(userInput >= 0){
        alert("The number " + userInput + " Is positive");
    } else {
        alert("The number " + userInput + "is negative");
    }
    else {
        alert("Write a message here")
    }
}
