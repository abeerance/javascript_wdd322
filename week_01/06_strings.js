/* STRINGS */

// To get a letter of a word we need to know what it's index (position) is

let word = "Javascript";

/*
You can think of this word like the following

0 -> J
1 -> a
2 -> v
3 -> a
4 -> s
5 -> c
6 -> r
7 -> i
8 -> p
9 -> t

So if we want to get the first letter of the variable "word", we would need to write
    word[0]
and if we want to access the last letter we would write
    word[9]
*/

const wordLength = word.length;
console.log(wordLength);
console.log(word[7]);

/* 
    the length of a word is how many characters it has
    in this case of our variable 'word', its length is 10
*/

console.clear();

// ABC, XYZ exercise
// The goal of this exercise is to create a code
// that will test if a word in an array starts with the letter
// a, b, or c or ends with the letter x, y, z
let myArray = [
  "Popcorn",
  "Acorn",
  "Lolzz",
  "Ant",
  "Fish",
  "Baby",
  "Cat",
  "Fox",
];

// First we need to iterate through this arrqy so that we can go
// through all the words inside it
for (let i = 0; i < myArray.length; i++) {
  // it starts with the index at 0 and goes all the way to index 4
  // When variable i is 0, then myArray[i] is the first item in our array
  // when i is 1, in the next iteration, then myArray[i] is going to be the secont item in the array
  // and so on...

  // Thus myArray[i][0] is the first letter of the current selected word in the array
  //   console.log(myArray[i][0]);
  //   console.clear();
  // And myArray[i][myArray[i].length -1] is the last letter of the current selected word of the array
  let firstLetter = myArray[i][0];
  let lastLetter = myArray[i][myArray[i].length - 1];
  //   console.log(lastLetter);

  // We want to test if something is equal to something else, so we need a conditional statement
  // Our condition in this statement is that the firstLetter needs to be either A, B or C
  // OR lastLetter needs to be either x, y, z
  if (
    firstLetter == "A" ||
    firstLetter == "B" ||
    firstLetter == "C" ||
    lastLetter == "x" ||
    lastLetter == "y" ||
    lastLetter == "z"
  ) {
    // if the condition is met, we print out the current word to the console
    console.log(myArray[i]);
  }
}
