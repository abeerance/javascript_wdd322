// Selection by ID
// Syntax: document.getElementById("idName");
console.log(document.getElementById("baz"));
// document.getElementById("baz").style.background = "pink";

// you can also store HTML DOM elements in a variable
const elementByID = document.getElementById("baz");
elementByID.style.background = "red";

// Selection by class
// In this example we have an array of two golden HTML elements
console.log(document.getElementsByClassName("golden"));
// To access a specific element, we need to use the index of it
console.log(document.getElementsByClassName("golden")[1]);

// console.clear();

// Selection by HTML Tag name
console.log(document.getElementsByTagName("li"));

// Selection with Query Selector
console.log(document.querySelector("#baz"));
// With the query selector you can select whatever you want.
// If you want to access class, you would need to write .className
// If you want to access an ID, you write #idName
// The query selector only selects the first "hit" and ignores every other

console.clear();

// console.log(document.querySelector(".golden.foo"));

console.log(document.querySelector("li"));

// Selection by Query Selector All
// with the query selector all you select every
// found class/tag/id you specify
const test = document.querySelectorAll(".golden, .foo, #baz, ul li");
console.log(test);
