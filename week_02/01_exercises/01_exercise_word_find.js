// Somewhere in this messages there are some hidden words.
// Find a way to print every letter of the hidden word to the console.

// Example:

var message0 = ["compute", "order", "design", "edit"];

// The hidden word here is 'code'
// So lets make a for loop that iterates through the message0 array

for (let i = 0; i < message0.length; i++) {
  // Our iterator starts with a value of 0 and will go all the way to 3, so i will be 0, 1, 2 and 3
  console.log(message0[i][0]); // Every itaration we get the word (message[i]) and get its first letter [0]. So message[i][0]
} // We then print that out to the console

// ------- <(^^<) ------- //
/* OKAY, IT IS YOUR TURN! */
// ------- (>^^)> ------- //

var message1 = [
  "varying",
  "adjustable",
  "reliable",
  "incredible",
  "anything",
  "booleans",
  "local",
  "extraordinary",
];

/* Your code here (START) */

// With a FOR loop
for (let i = 0; i < message1.length; i++) {
  console.log(message1[i][0]);
}

console.clear();

// With FOREACH loop
message1.forEach((message) => {
  console.log(message[0]);
});

console.clear();

/* Your code here (END) */

var message2 = ["pattern", "arrangement", "order", "data", "bytes"];

/* Your code here (START) */

// With a FOR lopp
for (let i = 0; i < message2.length; i++) {
  console.log(message2[i][1]);
}

// With a FOREACH loop
message2.forEach((message) => {
  console.log(message[1]);
});

/* Your code here (END) */

var message3 = [
  ["i", "o", "i"],
  ["p", "b", "p"],
  ["l", "j", "l"],
  ["a", "e", "a"],
  ["o", "c", "o"],
  ["f", "t", "f"],
];

console.clear();
/* Your code here (START) */

// With a FOR loop
for (let i = 0; i < message3.length; i++) {
  console.log(message3[i][1]);
}

// With a FOREACH loop
message3.forEach((message) => {
  console.log(message[1]);
});

/* Your code here (END) */

var message4 = [
  [
    ["o", "o", "o"],
    ["o", "s", "o"],
    ["o", "o", "o"],
  ],
  [
    ["o", "o", "o"],
    ["o", "t", "o"],
    ["o", "o", "o"],
  ],
  [
    ["o", "o", "o"],
    ["o", "r", "o"],
    ["o", "o", "o"],
  ],
  [
    ["o", "o", "o"],
    ["o", "i", "o"],
    ["o", "o", "o"],
  ],
  [
    ["o", "o", "o"],
    ["o", "n", "o"],
    ["o", "o", "o"],
  ],
  [
    ["o", "o", "o"],
    ["o", "g", "o"],
    ["o", "o", "o"],
  ],
];

/* Your code here (START) */

/* Your code here (END) */
