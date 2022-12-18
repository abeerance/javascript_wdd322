// Operators in JavaScript

/* ARITHMETIC OPERATORS */
let number = 20;
// Adition
console.log(number + 10);
// Substraction
console.log(number - 10);
// Multiplication
console.log(number * 3);
// Division
console.log(number / 5);
// Modulo
// We have pack of 10 smarties and 3 kids
console.log(10 / 3);
console.log(10 % 3);
console.log((number + 2) % 4);
// we start at 22. We divide it by 4. So we substracted 20
// we are left with 2, which is the modulo

// Exponentiation
console.log(number ** 2);
console.clear();

/* OTHER OPERATORS */
// Assignment Operator =
let myNum = 24;

// == is a comparison operator, that checks if value is the same
if (myNum == "24") {
  console.log(true); // Also is true, because value is still 24
} else {
  console.log(false);
}

// === comparison operator, which checks the value and the type
if (myNum === "24") {
  console.log(true);
} else {
  console.log(false); //  returns false, because "24" is a string
}

// Example on Incrementation operator in a for loop
const myArray = [1, 5, 23, 24, 123];
for (let x = 0; x < myArray.length; x++) {
  console.log(x);
}

console.clear();

// != Not equal value comparison
if (number != "20") {
  console.log(true);
} else {
  console.log(false);
}

// !== Not equa value and type comparison
if (number !== "20") {
  console.log(true);
} else {
  console.log(false);
}

console.clear();
/* SPREAD OPERATOR => ... */
// copies a set of element into a new elemt
const person1 = { firstname: "Max", lastname: "muster" };

// const person3 = person1;
// const person3 = { ...person1 };
// console.log(person3);

const todoListFromBackend = ["shopping", "gaming", "eat"];
console.log(todoListFromBackend);

const newTodo = "sleep";
const todoList = [newTodo, ...todoListFromBackend];
console.log(todoList);
