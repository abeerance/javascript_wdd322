/* FOR LOOP */
// For loop does a specific statement as long as the
// Final condition isn't met
const items = ["banana", "apple", "orange"];
const basket1 = [];
const basket2 = [];

for (let item = 0; item < items.length; item++) {
  basket1.push(items[item]);
}

console.log(basket1);

/* forEach() */
// Theoretically, you can translate every for Loop into
// a forEach()

// A forEach checks how many elements are inside an array
items.forEach((item) => {
  basket2.unshift(item);
});

console.log(basket2);

console.clear();

const myArray = [
  ["apple", "banana"],
  ["orange", "pineapple"],
];

myArray.forEach((item) => {
  item.forEach((element) => {
    console.log(element);
  });
});

/* Map to iterate through arrays */
myArray.map((item) => {
  item.map((element) => {
    console.log(element);
  });
});

console.clear();
