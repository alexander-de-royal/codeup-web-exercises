function showMultiplicationTable(num){
    //creating a multiplication table
    for(let i = 1; i <= 10; i++) {
        // multiply i with number
        const result = i * num;
        // display the result
        console.log(`${num} * ${i} = ${result}`);
    }
}
showMultiplicationTable(7);


function questionTwo(max, min){
    for(let i = 1; i <= 10; i++) {
        let randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;
        const isEven = randomNumbers % 2 === 0;
        const isOdd = randomNumbers % 2 !== 0;
        if (isEven){
            console.log(`${randomNumbers}` + " is an even number");
        } else {
            console.log(`${randomNumbers}` + " is an odd number");
        }
    }
}
questionTwo(200, 20);


for(let i =  100; i >= 5; i-=5){
    console.log(i);
}

let n = 9;
let string = "";

for (let i= 1; i <= n; i++){
    for (let j = 1; j <= i; j++){
        string += i;
    }
    string += "\n";
}
console.log(string);