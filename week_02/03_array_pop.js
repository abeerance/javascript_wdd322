/*
    Handling arrays is a very importan part in JavaScript
    We need to be able to add or remove items from an array
*/

// Example array -> has to be a LET variable, because we will change the array
let shoppingList = ["bananas", "apples", "pears", "oranges", "pork", "chicken"];

// We are vegetariens and there are certain items in our shopping list
// we do not want to eat
// So to remove the last items in an array, we use the mothod .pop()

// pop will return an remove the last item in an array

// result of array shoppingList = ["bananas", "apples", "pears", "oranges", "pork", "chicken"];
// const lastItem = shoppingList.pop();
// console.log(lastItem);
// console.log(shoppingList);
// result of array shoppingList = ["bananas", "apples", "pears", "oranges", "pork"];
// shoppingList.pop();
// console.log(shoppingList);
// result of array shoppingList = ["bananas", "apples", "pears", "oranges"];

// an example if you want to remove more than 1 item in an array
// only FOR loop works in this example, because we don't have a reference array for a FOREACH loop
for (let i = 0; i < 2; i++) {
  shoppingList.pop();
}
console.log(shoppingList);

// .shift() method removes the first value of an array
// returning the value and changing its length
const result2 = shoppingList.shift();
// returns the value that got deleted
console.log(result2);
// and changes the length of the array
console.log(shoppingList);
