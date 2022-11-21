/* ARRAYS */

// Arrays are basically a list of values
// They can have strings
let arrayString = ["popcorn", "coke", "candy"];

// Arrays can also store numbers
let arrayNumbers = [2, 3, 4, 5];

// Also booleans can be stored in arrays
let arrayBooleans = [true, true, false];

// Basically arrays can store any datatypes you can think of, even objects
let arrayObjects = [
  { color: "red", age: 26 },
  { color: "green", age: 18 },
  { color: "blue", age: 35 },
];

// you can also have arrays in arrays
// This is known as a multidimensional array
let multidimensional = [
  [1, 2, 3, 4, 5],
  ["Luca", "Tony", "Kadir"],
  [
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3],
    [1, 2, ["Apple", "Banana", "Pear"]],
  ],
];

// We use the index of a value in an array to select
// 1.) console.log 'coke' to the console
console.log(arrayString[1]);
console.clear();

// 2.) console.log 'Tony' to the console
// goes into the 2nd array inside the array and picks out Tony, which has index of 1
console.log(multidimensional[1][1]);

// 3.) console.log 'Kadir' to the console
console.log(multidimensional[1][2]);

// 4.) console.log '4, 5, 6' to the console
console.log(multidimensional[2][1]);

// 5.) console.log "Apple" to the console
console.log(multidimensional[2][3][2][0]);
