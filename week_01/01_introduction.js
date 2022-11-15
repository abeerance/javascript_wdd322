/* JavaScript Introduction */
//
// Einzelne Line ist auskommentiert / This is a line comment

/*  
Ist alles auskommentiert
Das auch
Alles was hier drin ist, ist auskommentiert

This is a block comment
*/

/* 
 Definition
*/
// var content = "hello this is a content"; -> Alte Schreibweise
let mutableVariable = "Hello, im mutable variable"; // Diese variable kann man umändern
const unmutableVariable = "Hello, im unmutable variable"; // Diese variable kann man nicht ändern

// mutableVariable = "What's up";  // since the variable is initiated with "let" it can be changed
// unmutableVariable = "Error thrown cause use of const";
// console.log() gibt die Variable im Browser unter console wieder
// console.log(mutableVariable);
// console.log(unmutableVariable);

/*
    Number
*/
let number = 10;
// console.log(number);

/*
    String
*/
let string = "text";
// console.log(string);
// console.log("hello i'm a string");

/* 
    Alles was in den "Gänsefüsschen" drin ist, ist ein string
*/
let test = "20";
// console.log(test);

/*
    Booleans -> sind immer entweder WAHR oder FALSCH
*/
let foo = false;
let bar = true;
// console.log(foo);
// console.log(bar);

/*
    Undefined
*/
let buzz; // ist das gleiche wie -> let buzz = undefined / sollte wenn möglich nicht implementiert werden
// console.log(buzz);

/*
    NULL
*/
let thiIsNull = null;
// console.log(thiIsNull);

/*
    Array
*/
/* Alle data types können in einem array hinterlegt werden */
let list = ["Apple", "Banana", "Pears"];
let listNumbers = [20, 50, 10, 100];
let listBoolean = [true, false];
let listCombined = ["Apple", 10, true, "Banana", false, 20];
// console.log(listNumbers);
// console.log(listBoolean);
// console.log(listCombined);

/*
    Object
*/
let car = {
  door: "red",
  wheels: 4,
  speed: "240hm/h",
  fahrbar: true,
};
// console.log(car);

/*
    Case Sensitive
*/
let zoo = 1;
// console.log(Zoo);

/* 
    Uses unicode
*/
let früh = "8:30";
// console.log(früh);

/*
    String and Number
    Javascript ist nicht in der Lage zwei verschiedene Type in einem zu kombinieren
*/
// console.log(string + number);

/*
    Undefined + number
*/
let pop;
// console.log(pop + number);

/*
    Numbers addition
*/
let numberOne = 10;
let numberTwo = 20;
// console.log(numberOne + numberTwo);

// console.log("5" - "2"); ASK MARTIN
