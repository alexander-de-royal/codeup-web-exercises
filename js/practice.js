// Section 19 - Repeating stuff with loops

//looping over arrays
// const animals = ['lions', 'tigers', 'bears'];
// for (let i = 0; i < animals.length; i++){
//     console.log(i, animals[i]);
// }

//Nested Loops
// let name = "alexander";
// for(let i = 0; i <= 4; i++){
//     console.log("outer", i)
//     for(let j = 0; j <= name.length; j++){
//         console.log("Inner", name[j]);
//     }
// }

// While Loops
// let count = 0;
// while(count < 10){
//     count++;
//     console.log(count);
// }
//
// const secret = "hippo";
//
// let guess = prompt("Enter the secret code");
//
// while(guess !== secret){
//     guess = prompt("Enter the secret code")
// }
// console.log("Congrats! You've unlocked the code.")

// The Break Keyword
// let input = prompt("Hey! Say something.");
// while(true){
//     input = prompt(input);
//     if(input === "stop copying me"){
//         break;
//     }
// }
// console.log("You win!")

// Writing a guessing game
// let maximum = parseInt(prompt("Enter a number:"))
//
// while(!maximum){
//     maximum = parseInt(prompt("Enter a valid number:"))
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum)
//
// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;
//
// while(parseInt(guess) !== targetNum){
//     if (guess === `q`) break;
//     attempts++;
//     if(guess > targetNum){
//         guess = parseInt(prompt("Too High!"));
//     } else {
//         guess = parseInt(prompt("Too Low!"));
//     }
// }
// if(guess === `q`){
//     console.log("Ok, you quit")
// } else {
//     console.log(`You got it! It took you ${attempts} guesses`)
// }

// The lovely for..of Loop
// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];
// for(let i = 0; i < subreddits.length; i++){
//     console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }
// for(let sub of subreddits){
//     console.log(sub);
// }
// ANOTHER EXAMPLE
// const seatingChart = [
//     ['kristen', 'erik', 'namita'],
//     ['geoffrey', 'juanita', 'antonio', 'kevin'],
//     ['yuma', 'sakura', 'jack', 'erika']
// ]
// for(let i = 0; i <seatingChart.length; i++){
//     const row = seatingChart[i];
//     for(let j = 0; j < row.length; j++){
//         console.log(row[j]);
//     }
// }

// Iterating over objects
// const testScores = {
//     keenan: 80,
//     damon: 90,
//     simon: 83,
//     shawn: 43,
//     nadia: 45,
//     vonnie: 59
// }
//NOTE: FOR OF DOESN'T WORK IN KEY VALUE PAIRS
// for(let person of testScores){
//     console.log(person);
// }
//NOTE: FOR IN DISPLAYS VALUE ONLY
// for(let person in testScores){
//     console.log(person);
// }
// let total = 0;
// let scores = Object.values(testScores);
// for(let score of Object.values(testScores)){
//     total += score;
// }
// console.log(total / scores.length);

// To do list project code along

// Section 20 - NEW: Introducing Functions

// Our very first function
// function singSong(){
//     console.log('DO');
//     console.log('RE');
//     console.log('MI');
// }
// singSong()
// function rant(message){
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }
// rant("I hate beets");

// Functions with multiple arguments
// function greet(firstName, lastName){
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }
// function isSnakeEyes(input1, input2){
//     if(input1 === 1 && input2 === 1){
//         console.log("Snake Eyes!");
//     } else {
//         console.log("Not Sake Eyes!")
//     }
// }
// isSnakeEyes(1,5);
// function lastElement(arr){
//     return arr.length - 1;
// }
// lastElement([1,2,3,4,5,6,7]);
// function capitalize(word) {
//     return word[0].toUpperCase()  + word.slice(1);
// }
// function sumArray(nums){
//     let total = 0;
//     for(let i = 0; i < nums.length; i++){
//         total += nums[i];
//     }
//     return total;
// }

// Section 21 - Leveling up our functions

// Function Scope
// function collectEggs(){
//     let totalEggs = 6;
// }
// collectEggs();
// console.log(totalEggs);
// let bird = 'Scarlet Macaw';
// function birdWatch(){
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// console.log(bird);

// Block Scope
// let radius = 8;
// if (radius > 0){
//     const PI = 3.14159;
//     let msg = 'Hi!'
// }
// console.log(radius);
// console.log(PI);

// Lexical Scope
// function bankRobbery() {
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther']
//     function cryForHelp(){
//         for(let hero of heroes){
//             console.log(`Please help us ${hero.toUpperCase()}`);
//         }
//         inner();
//     }
//     cryForHelp();
// }

// Function Expressions
// function add(x,y){
//     return x + y;
// }
// const add = function (x,y){
//     return x + y;
// }

// Higher Order Functions
// function callTwice(func){
//     func();
//     func();
// }
// callTwice(1);

// Returning a functions
// function makeMysteryFunc(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log("Congrats, you I am a good function");
//             console.log("You win a million dollars");
//         }
//     } else {
//         return function (){
//             console.log("This is the other type of function");
//         }
//     }
// }
// function makeBetweenFunc(min, max){
//     return function(num){
//         return num >= min && num <= max;
//     }
// }
// function isBetween(num){
//     return num > 1 && num < 10;
// }

// Defining Methods
// We can add functions as properties on objects. We call them methods.
// const math = {
//     multiply : function (x, y){
//         return x * y;
//     },
//     divide : function (x, y){
//         return x / y;
//     },
//     square : function (x){
//         return x * x;
//     }
// }

// The Mysterious Keyword 'this'
// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow(){
//         console.log(`${this.name} says Meow`)
//     }
// }

// Try/Catch
// function yell(msg){
//     try{
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e){
//         console.log("Please pass a string next time")
//     }
// }


