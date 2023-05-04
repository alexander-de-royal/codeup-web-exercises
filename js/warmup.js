// Warmup Exercise - 1
// function warmupOne(input){
//     return input;
// }
// console.log(input(7));

// Warmup Exercise - 2
// function findFactors(input){
// if(typeof input === 'number' && !isNAN(input)){
//     let bucket = [];
//     for (let i = 1; i <= input; i++){
//         if(input % i === 0){
//             bucket.push(i);
//         }
//     }
// } else {
//     return false;
// }
// }
// console.log(findFactors(6));
// console.log(findFactors(16));
// console.log(findFactors(0));
// console.log(findFactors(true));
// console.log(findFactors("13"));
// console.log(findFactors([54, 72, 144]));
// console.log(findFactors({value: 64}));
// console.log(findFactors());

// Warmup Exercise - 3
// function countEs(str){
//     if (typeof str === "string"){
//         let count = 0;
//         let normalizedStr = str.toLowerCase();
//         for(let i = 0; i < str.length; i++){
//             if (normalizedStr.charAt(i) === "e"){
//                 count++;
//             }
//         }
//         return count;
//     } else {
//         return false;
//     }
// }
// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;

// Warmup Exercise - 4
// function containsE(str){
//     if (countEs(str) === false){
//         return false;
//     } else {
//         return countEs(str) > 0;
//     }
// }
// // Alternative Option
// function containsE(str){
//     if (typeof (str) !== "string"){
//         return false;
//     } else {
//         return str.toLowerCase().indexOf("e") > -1;
//     }
// }

// Warmup Exercise - 5
// My attempt
// function fizzBuzz(input){
//     for (let i = 0; i <= 100; i++){
//         if (input % 3 === 0){
//             return("Fizz");
//         } else if (input % 5 === 0){
//             return("Buzz");
//         } else if (input % 3 === 0 && input % 5 === 0){
//             return("Fizz-Buzz");
//         } else {
//             return("Booo!")
//         }
//     }
// }
// console.log(fizzBuzz(15));
// Real Solution
// function fizzBuzz(){
//     for (let i = 1; i <= 100; i++){
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log("fizz buzz");
//         } else if (i % 3 === 0){
//             console.log("fizz")
//         } else if (i % 5 === 0){
//             console.log("Fizz-Buzz")
//         } else {
//                 console.log(i);
//             }
//         }
//     }
// fizzBuzz();git