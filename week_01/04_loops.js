// Loops
/* This is just a small introduction to loops */
/* A lot more about loops in the future */

let counter = 10;

console.log(counter);

// FOR loops
// A loop iterates as long as a condition is met
/* SYNTAX:
    for(starting point of your iterator; 
        condition that needs to be met in order to continue;
        what you add to your iterator after a successful loop){
            code to execute every loop.
        }

    for(let i = 0; i < 10; i++)
*/

for (let i = 0; i < 10; i++) {
  counter++;
  console.log(`counterValue: ${counter}, index:${i}`);
}

// clears the previous console.logs
console.clear();

let myArr = ["Apple", "Banana", "Pear"];

console.log(myArr);

for (let j = 0; j < 3; j++) {
  // j is the index and with the help of the index
  // we can access the element in said index in an array
  console.log(myArr[j]);
}

console.clear();

let cars = ["BMW", "Tesla", "VW", "Subaru", "Ford", "Fiat"];
// console.log(cars);

for (let n = 0; n < cars.length; n++) {
  //   console.log(cars[n]);
  if (cars[n] == "Subaru") {
    console.log("there is a Subaru in the array");
  }
}

console.clear();

/* SWITCH */
const expression = "Papayas";

// Syntax
switch (expression) {
  case "Oranges":
    console.log("Oranges are 1.- CHF");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Papayas are 4.-CHF");
    break;
  default:
    console.log(`Sorry, we are out of ${expression}`);
}

console.clear();

/* FOR EACH */
const fruits = ["Apple", "Banana", "Pineapple", "Oranges"];

/*
    ARRAY.forEach((single element) => {
        what we want to do with the single element
    })
*/

fruits.forEach((fruit, index) => {
  console.log(`fruit: ${fruit}, index: ${index}`);
});

console.clear();

// A more specific real world example
// with mock datas
const allPosts = [
  { userName: "Tony", description: "bla bla bla" },
  { userName: "Jeremy", description: "blub blub blub" },
  { userName: "Flawia", description: "cold cold cold" },
];

allPosts.forEach((post) => {
  console.log(`${post.userName} says ${post.description}`);
});
