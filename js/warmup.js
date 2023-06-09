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

// Warmup Exercise - 6...
// MY ATTEMPT
// let i = 1;
// do {
//     i = i + i;
// }
// while(i < 1000000);
//
// console.log(i);

// Warmup Exercise - 7 | May 10th 2023
// Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming that only arrays are going to be used with this function).
// function addEmUp(array) {
//
//     let sum = 0;
//
//     //For Each Loop
//     // arr.forEach(function(num){
//     //     sum += num;
//     // })
//
//     //For Loop
//     // for (let i = 0; i < arr.length; i += 1) {
//     //     sum += arr[i];
//     // }
//
//     return sum;
// }
// console.log(addEmUp([2,6,19])); // returns 27
// console.log(addEmUp([-99, 180, -5])); // returns 76
// console.log(addEmUp([44,10,7])); // returns 61
// console.log(addEmUp([-100])); // returns -100
// console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
// console.log(addEmUp([-13, -92, -3500])) // returns -3605

// Warmup Exercise - 8 | May 11th 2023
// Write a function that takes in a string and returns an object describing the string. The object should have a string property that contains the original string, a numberOfEs property that contains a count of the number of e's in the string (case-insensitive), and an isEvenLength property that contains a boolean for whether the string's length is even or not.
// function explainString(str){
//     return{
//         string: str,
//         numberOfEs: countEs(str),
//         isEvenLength: str.length % 2 === 0
//     }
// }
// console.log(explainString("cheese")); // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
// console.log(explainString("dog")); // returns {string: "dog", numberOfEs: 0, isEvenLength: false}

// Warmup Exercise - 9 | May 12th 2023
// Write a function that takes in an array of objects and returns an array containing all of the names from the original array.
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
// function extractNames(arr){
//     let bucket = [];
//     arr.forEach(function(el){
//         bucket.push(el.name);
//     });
//     return bucket;
// }
// console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];

// Warmup Exercise - 10 | May 15th 2023
// Write a function that takes in an array of objects and returns the object with the largest heightInMM property
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
// const getTallest = function(arr){
//     let tallest = {heightInMM: 0};
//     arr.forEach(function (obj){
//         if(obj.heightInMM > tallest.heightInMM){
//             tallest = obj;
//         }
//     });
//     return tallest;
// };
// console.log(getTallest(hamsters));
// // returns {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"}

// Warmup Exercise - 11 | May 16th 2023
// Write a function that takes in an array of objects and returns an array of the objects from the array that only have one fur color.
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
// function singleFurColor(arr){
//     let newArr = [];
//     arr.forEach(function (elem){
//         if(elem.fur.length === 1){
//             newArr.push(elem);
//         }
//     });
//     return newArr;
// }
// console.log(singleFurColor(hamsters));

// Warmup Exercise - 12 | May 17th 2023
// Write a function that takes in an array of objects and returns the object with the most colors in the fur array.
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
// function mostColorful(arr){
//     let mostColors = {fur: []};
//     arr.forEach(function (obj){
//         if(obj.fur.length > mostColors.fur.length){
//             mostColors = obj;
//         }
//     });
//     return mostColors;
// }
// console.log(mostColorful(hamsters));

// Warmup Exercise - 13 | May 18th 2023
// Write a JavaScript function that takes in a number and returns an object with the following fields: number, which will contain the original number; evenOrOdd, which will contain a string ("even" or "odd") as to whether the value is even or odd; factors, an array of numbers that are evenly divisible within the number passed; and numberOfDigits, a number counting the number of digits with the number passed.
// function describeNumber(num) {
//     return{
//         number: num,
//         evenOrOdd: (num % 2 === 0)? "even": "odd",
//         factors: findFactors(num),
//         numberOfDigit: (`${num}`).length
//     }
// }
// console.log(describeNumber(19)); // returns {number: 19, evenOrOdd: "odd", factors: [1,19], numberOfDigits: 2};
// console.log(describeNumber(2)); // returns {number: 2, evenOrOdd: "even", factors: [1,2], numberOfDigits: 1};

// Warmup Exercise - 14 | May 19th 2023
// Write a JavaScript function that takes in an array of numbers and returns an array of the same length where all of the numbers have been replaced with the number multiplied by 3.
// function multiplyElementsByThree(arr) {
//     const bucket = [];
//     arr.forEach(function(el){
//         bucket.push(el * 3);
//     })
//     return bucket;
// }
// console.log(multiplyElementsByThree([3,4,5])); // returns [9, 12, 15];
// console.log(multiplyElementsByThree([12,8])); // returns [36, 24];
// console.log(multiplyElementsByThree([100])); // returns [300];
// console.log(multiplyElementsByThree([15, 9, 33, 16, 50])); // returns [45, 27, 99, 48, 150];

