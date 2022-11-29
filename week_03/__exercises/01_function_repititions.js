// 1. Create a 'double' function which will take in a number (n) and return double it's value

function double(n) {
  return n * 2;
}

console.log(double(9));

// 2. Create a function that takes in a number (age) as an argument and returns a message that tells you that age in dog years!
//    (one human year = seven dog years)

function dogYears(n) {
  return n * 7;
}

console.log(dogYears(9));

// 3. Create a function that will convert a value from celsius to fahrenheit and another one that converts fahrenheit to celsius

function toCelc(fahr) {
  return ((fahr - 32) * 5) / 9;
}

console.log(toCelc(50));

function toFahr(cel) {
  return (cel * 9) / 5 + 32;
}

console.log(toFahr(50));

// 4. Create a function that takes the length, width and height of a  cube and return it's volume

const cubeL = 100;
const cubeW = 20;
const cubeH = 24;

function calculateCubeVol(a, b, c) {
  return a * b * c;
}

console.log(calculateCubeVol(cubeH, cubeW, cubeL));

// 5. !BONUS!  Create a function that will take in a sentence as argument and capitalize the first letter of all it's words
//    You want to use split() to split the sentence into individual words and save them in an array

function uppercase(str) {
  let array1 = str.split(" ");
  let newArray = [];

  for (let x = 0; x < array1.length; x++) {
    newArray.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newArray.join(" ");
}

console.log(uppercase("the quick brown fox jumped over the lazy dog"));
