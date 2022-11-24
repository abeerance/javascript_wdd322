/*
    Handling arrays is a very important part in JavaScript
    We need to be able to add or remove items from an array
*/

// Example array -> has to be a LET variable, because we will change the array
let shoppingList = ["bananas", "apples", "pears", "oranges", "pork", "chicken"];

// Add one item to the array
const additionalItem = "lettuce";

// .push() method inserts an item at the end of an array
// the item can be of any data type possible, which is know by JavaScript
// example the item can be a string, number, boolean, array or an object
// shoppingList.push(additionalItem);
// console.log(shoppingList);

console.clear();

// There are a few items we wish to add to the array
const additionalItems = ["pasta", "sugo", "wasser"];

// If we try to push an array in an array, the whole array will be inserted
// and not only the values
// shoppingList.push(additionalItems);
// console.log(shoppingList);

// we can loop through the second array and push each individual item
// for (let i = 0; i < additionalItems.length; i++) {
//   shoppingList.push(additionalItems[i]);
// }
// console.log(shoppingList);

// Ausganslage: let shoppingList = ["bananas", "apples", "pears", "oranges", "pork", "chicken"];
// 1st iteration: shoppingList = ["bananas", "apples", "pears", "oranges", "pork", "chicken", "pasta"];
// 2st iteration: shoppingList = ["bananas", "apples", "pears", "oranges", "pork", "chicken", "pasta", "sugo"];
// 3st iteration: shoppingList = ["bananas", "apples", "pears", "oranges", "pork", "chicken", "pasta", "sugo", "wasser"];

// FOREACH variation
// additionalItems.forEach((item) => {
//   shoppingList.push(item);
// });
// console.log(shoppingList);

// unshift() method
// unshift() adds to the beginning of an array, returning the length
let result = shoppingList.unshift({ color: "red" });
console.log(result);
// If we want to console.log the actual array, we need to refer to the shoppinglist
// and not the optional newly created variable
console.log(shoppingList);
