// Let's define 3 variables
let a = 10;
let b = 20;
let c = 30;

// Conditionals
// Is basically code that will execute if a condition is true

/* SYNTAX OF CONDITIONALS

if( condition that has to be TRUE ){
    code that I want to execute if the condition is TRUE
} else {
    code that will be executed if condition is FALSE
}
else can be optional if you want to be and are sure that the code is correct

*/

/* 
    IF statement
*/
// some soimple examples of IF statements using comparison operators
// if (a < b) {
//   console.log("a is smaller than b");
// }

// AND operator
// if (a < b && b < c) {
//   console.log("a is smaller than b AND b is smaller than c");
// }

// OR operator
// if (a < b || b > c) {
//   console.log("either b is larger than c OR a is smaller than b");
// }

/*
    IF ... ELSE statement
*/
// The IF part of the statement will execute if the condition is TRUE just as before
// The ELSE part of the statement will execute if the condition is FALSE
// Here is the syntax:

/*
    if( condition ){
        code that executes if the condition is TRUE
    } else {
        code that executes if the condition is FALSE
    }
*/

if (b < a) {
  console.log("b is smaller than a");
} else {
  // ELSE will only execute if the other conditions all return FALSE
  console.log("if statement was false");
} // executes the ELSE statement because the condition returned FALSE

/* ELSE IF */
/* With ELSE IF you can have multiple conditions tested one after the other */
/* The FIRST condition to be TRUE will be executed, all other conditions will be ignored */
if (b < a) {
  console.log("b is smaller than a");
} else if (c < a) {
  //in ELSE IF another condition has to be named
  console.log("c is smaller than a");
} else {
  console.log("b and c are larger than a");
}
