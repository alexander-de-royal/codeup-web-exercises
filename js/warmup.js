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
const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];
function mostColorful(arr){
    let mostColors = {fur: []};
    arr.forEach(function (obj){
        if(obj.fur.length > mostColors.fur.length){
            mostColors = obj;
        }
    });
    return mostColors;
}
console.log(mostColorful(hamsters));

