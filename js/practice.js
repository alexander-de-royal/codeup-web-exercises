//Section 19 - Repeating stuff with loops

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
