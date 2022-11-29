// FUNCTIONS IN JAVASCRIPT

/*
    A function is a "subprogram" that can be called outside or inside another function

    Syntax:
    function functionName(param0, param1){
        function body / statements
    }

    The params are optional and you can add them if needed
    To return a value other than de default, a function must have
    a return statement which specifies the value of return
*/

// JavaScript has multiple in-built function such as prompt or console.log
// You should never define functions with the same name as the in-built functions
// let userName = prompt("What's your username?");
// let cityLocation = prompt("Where do you come from");

// Function declaration
// function askUser(name, city) {
// the return keyword is needed to return the specific value we desire
// if we don't define a return, it's default value (undefined) will be the output
//   return name + " from " + city;
// }

// To run a function you will need to explicitly call the function
// in this example it would be askUser()
// console.log(askUser(userName, cityLocation));

// Same function but with no return. Inside the function we will call the in-built
// console.log function
// function askUser(name, city) {
//   console.log(name + " from " + city);
// }

// askUser(userName, cityLocation);

/*
    Function Expressions are functions which are stored inside a variable
*/
function calculateBill() {
  const total = 100 * 1.13;
  return total;
}

// we store the return in another variable which can be accessed
const myTotal = calculateBill();
console.log(myTotal);

/*
    A function expression is when you store a function inside a variable as a value
    The differences between a function declaration and a function expression is hoisting
    Function hoisting example:
*/

console.log(doctorize2("Hadrian"));

// function expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// function declaration
function doctorize2(firstName) {
  return `Dr. ${firstName}`;
}

/*
    Functions that are declared with the function keyword (not a function expression) are hoisted
    JavaScript takes every function declaration and hoists them all the way up to the top level
    of the file, so that you can call the function wherever you want to inside the file
*/

/*
    FUNCTION SCOPE
    We can't access the hair variable, because the variable is declares inside a function,
    which means that it is not available globally or outside of that function.
    Anything we declare inside a function is not available outside of it, unless we
    explicitly return it.
    A function is able to access a variable even if it is outside of a function
*/
/*
    A shadow variable is when we declare a variable inside a function, which already exists
    outside the function scope.
    in the following example, const age = 100; has been shadowed (overwritten) and we can't access
    the initial age.
    A function always prioritizes the variable inside itself
*/
// const age = 100;

// function go() {
//   const age = 200;
//   const hair = "brown";
//   console.log(hair);
//   console.log(age);
// }

// go();
// console.clear();

/*
    With ES6 a new kind of function was introduced: The ARROW FUNCTION

    Syntax:
    let functionName = (param0, param1) => {
        return param0 + param +
    }

    Hera as well the params are optional and you can add them if needed.
    SAME return dependency as the normal function
*/

// const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// arrow function basic example
// let materialLength = () => {
// The return is the same as the normal function
//   return materials.length;
// };

// const result = materialLength();

// console.log(result);

// As always you can also use the syntax of the arrow function to map over an array
// console.log(materials.map((material) => material.length));

// console.clear();

/*
    A return inside a function is only needed when there are {}
    We can also return a function with a single line return statement
    Example with arrow function:
*/
// One parameter with a single line return statement
// let double = (zahl) => zahl * 2;
// multiple parameters in a single line return statement
// let askUserArrow = (userName, cityLocation) => userName + " of " + cityLocation;
// You can add conditional statements or loops etc. inside a function
// let askUserBad = (name, city) => {
//   if (name === "Piranha") {
//     return "You are a bad person";
//   } else {
//     return name + " of " + city;
//   }
// };

// console.log(double(2));
// console.log(double(4));
// console.log(double(8));
// console.log(askUserArrow(userName, cityLocation));
// console.log(askUserBad(userName, cityLocation));

/*
    The Most important difference of a normal and an arrow function:

    You can not use the "this" keyword in arrow functions.
    Inside a function, the value of "this" depends on how the function is called,
    typically it is the value of the object that the function is accessed on.
*/

// An example object
const personOne = {
  firstName: "John",
  lastName: "Doe",
  id: 1372,
  fullName: function () {
    // In this example, the "this" refers to the object it is inside in
    return this.firstName + " " + this.lastName;
  },
};

console.log(personOne.fullName());

// BAD example with an arrow function
const personTwo = {
  firstName: "Max",
  lastName: "Muster",
  id: 3927323,
  fullName: (getFullName = () => {
    // Since we are using the arrow function, the "this" keyword does not function
    // The "this" keyword does not exist in an arrow function
    return this.firstName + " " + this.lastName;
  }),
};

console.log(personTwo.fullName());
