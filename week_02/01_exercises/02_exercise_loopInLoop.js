/**
 * You are in charge of managing social channels for your company.
 * One of your tasks is to get go over user messages and change any negative
 * comments to positive comments.
 * You have grown tired of doing this and want to automate the process.
 *
 * You have already prepared a bit and created 2 dictionaries.
 * The first one: goodwords, is a list of possitive words that you can use to replace negative words with
 * The second one: evilwords, is a list of words that you know are negative and need to be removed.
 */

const goodwords = ["amazing", "intriguing", "versatile"];
const evilwords = ["boring", "useless", "obsolete"];

let messages = [
  "Learning to code is very important in the modern age",
  "JavaScript is an obsolete and useless programming language",
  "There is nothing more useless than programming",
  "I think writing code is boring",
  "I absolutely love js",
];

// Expected output is a new array (filtedMessages) with all the messages without any evil words
var filteredMessages = [];

/*
    Think about this logically first, what do we need to do 
    1.) We are going to need to go through every sentence in "messages"
    - this means, we are going to need to loop through the indexes of messages
    2.) We are going to need to go through all the evilWords
    - this means, we are going to need to loop through the evilWords

    This puts us in a position where we need to create a loop inside a loop
    Our first loop goes through very sentence 
    The second loop inside a loop goes through every evilWords to check if there is an evilWord in it
    If there is an evilWord, it should replace the evilWord with a goodWord with the same index

    After every iteration of a sentence in message, we push the iteration to the filteredMessage array
*/

// START YOUR CODE HERE
console.log(messages);

// the first FOR loop to loop through all the sentences
for (let i = 0; i < messages.length; i++) {
  // FOR loop through all the evilWords
  // inside the FOR loop we replace the current evilWord with the current goodWord
  // Outside the inner FOR loop we push the current message iteration
  // to the filteredMessagesArray
}

console.log(filteredMessages);

/* 
EXPECTED OUTPUT 
  "Learning to code is very important in the modern age",
  "JavaScript is an versatile and intriguing programming language",
  "There is nothing more intriguing than programming",
  "I think writing code is amazing",
  "I absolutely love js",
*/
