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
function countEs(str){
    if (typeof str === "string"){
        let count = 0;
        let normalizedStr = str.toLowerCase();
        for(let i = 0; i < str.length; i++){
            if (normalizedStr.charAt(i) === "e"){
                count++;
            }
        }
        return count;
    } else {
        return false;
    }
}
console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;