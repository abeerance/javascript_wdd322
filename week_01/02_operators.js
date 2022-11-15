// There are many operators in JavaScript that help us control and manipulate variables in many ways
// Here are the most important ones

// Assignment operator ( = )
let myNum = 24;
/*
    We use this operator to asign values to variables
*/

// The + or addition operator
// Can be used to add 2 numbers together or to concatenate 2 strings

// with numbers ( adds )
// with strings ( concatination )
let myStr1 = "Hello";
let myStr2 = "World";
let seperator = " ";

let concatination = myStr1 + seperator + myStr2;
// console.log(concatination);

// The - or substraction operator
// is used to substract a value from a number
let otherNum = 100;
// console.log(myNum - otherNum);

// The greater than ( > ), less than ( < ) and equal to ( == ) operator
// >, <, ==

// Greather than tests if a value is greated than another value
// If that is the case, it returns true, otherwhise it returns false

// if (otherNum > myNum) {
//   console.log("100 is greater than 24");
// }

// Less than test if a value is less than another value,
// If that is the case, it returns true, otherwhise it returns false

// if (myNum < otherNum) {
//   console.log("24 is less than 100");
// }

// "Equal to" tests if a value is equal to antoher value
// If that is the case, it returns true, otherwise it returns false
// "Equal to" only tests if the values are the same, but doesn't test the type
// if (myNum == myNum) {
//   console.log("myNum is equal to myNum");
// }

// if (myNum == "24") {
//   console.log("myNumb is equal to 24");
// }

// The equal value and equal type operator
// ( === )
// Checks if a value is equal to another value AND if it has the same type
// if the first value is a string, then the second value HAS to be a string
// if that's the case, it returns true, otherwhise it returns false
let notAnumber = "24";

// if (myNum == notAnumber) {
//   console.log("Another success");
// }

// if (myNum === notAnumber) {
//   console.log("Anoter success");
// }

// The moduls operator (division remainder)
// %
// It divides a number by another number and returns the remainder
// Example, when dividing a number by 2, if the remainder is not zero, that number is odd

// LOOK AT THE CODE

// The less than or equal to and greater than or equal to operator
// ( <= ) , ( >= )
// Combiniert the less/greater than operator (>, <) with the equal to operator ( == )

let bar = 10;
let bat = 9;

// if (bar >= bat) {
//   console.log("Yeahhaaaa");
// }

// Logical Operators
// The NOT operator ( ! )
let first = 1;
let second = 2;

// console.log(first != second);
// Returns true, because first is not equal to the second

// The AND operator ( && )
// console.log(first === 1 && second === 2);
// Returns true because first is 1 AND second is 2
// If first condition returns FALSE, it will not check the second condition and returns FALSE

// The OR operator ( || )
// windows : ATL + GR + 7
// mac: option 7
// console.log(first === 1 || second === 1);
// Returns true because first === 1, Only one of the expressions needs to be correct with OR
// If both conditions are FALSE, only then will it return FALSE
