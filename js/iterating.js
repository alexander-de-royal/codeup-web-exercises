(function(){
    "use strict";

    /**
     * TODO:1
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
     let names = ['Odin', 'Putin', 'Thor', 'Ironman', 'Alexander'];
     console.log("1 " + names);
    /**
     * TODO:2
     * Create a log statement that will log the number of elements in the names
     * array.
     */
     console.log("2 " + names.length);
    /**
     * TODO:3
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
     console.log("3 " + names[0]);
     console.log("3 " + names[1]);
     console.log("3 " + names[2]);
     console.log("3 " + names[3]);
     console.log("3 " + names[4]);
     console.log("3 " + names[5]);
    /**
     * TODO:4
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
     for(let i = 0; i <= names.length; i++){
         console.log("4 " + names[i]);
     }
    /**
     * TODO:5
     * Refactor your above code to use a `forEach` loop
     */
    // cheeses.forEach(function(cheese){
    //     console.log(cheese);
    // })

     names.forEach(function(name) {
         console.log("5 " + name);
     })
    /**
     * TODO:6
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(arr){
        return arr[0];
    }
    function second(arr){
        return arr[1];
    }
    function last(arr){
        return arr[arr.length - 1];
    }
    console.log(first(1,2,3,4,5,6,7,8));
    console.log(first(1,2,3,4,5,6,7,8));

})();
// (function(){
//     //Declaring an array.
//     let emptyArr = [];
//     console.log(Array.isArray(emptyArr));
//
//     let cheeses = ["Cheddar", "String", "Wensleydale"]; //This array contains 3 elements
//
//     let falsyValues = [0, "", false, undefined, null]; // We can collect different data types using arrays.
//     // However, this can lead to some unintended results with a looping/iterative structure
//     // console.log(cheeses[1]) //this will print the second element in our cheese array.
//     // console.log(cheeses.indexOf("Cheddar")); //this will return and print 0
//     // console.log(cheeses[0].indexOf("Brie")); //This returns -1
//     // console.log(cheeses.indexOf("White Cheddar")); // This will return and print -1
//     // console.log(cheeses.length);
//     //
//     // for(let i = 0; i < cheeses.length; i++){
//     //     console.log(cheeses[i])
//     // }
//     // for(let i = cheeses.length - 1; i >= 0; i--){
//     //     console.log(cheeses[i]);
//     // }
//     //For each version
//     cheeses.forEach(function(cheese){
//         console.log(cheese);
//     })
// })();

    // const cheese = ['brie', 'cheddar', 'jack', 'string', 'bleu'];
    // console.log(cheese);
    // cheese.push('push'); //add cheese in the end
    // console.log(cheese);
    // cheese.pop('hummer');
    // console.log(cheese);
    // cheese.shift();
    // console.log(cheese);
    // let myFavCheeses = cheese.slice(cheese.indexOf("muenster"), cheese.indexOf("kraft American singles"));
    // console.log(myFavCheeses);

    let csvNames = 'David, Cody, Jeremy, Codey The Duck';
    let names = csvNames.split(",");
    console.log(names);

    csvNames = names.reverse().join(",");
    console.log(csvNames);

    let alphaTeam = ["david", "jay", "javier", "justin", "laura", "cody", "jeremy", "trevor"];
    let goldTeam = ["kenneth", "farrukh", "lola", "issac", "steve", "jason", "Gonzalo", "johnny"];

    let staff = alphaTeam.concat(goldTeam);

    function removeAtIndex(array, index){
        let arr1 = array.slice(0,index);
        let arr2 = array.slice(index + 1);
    }





