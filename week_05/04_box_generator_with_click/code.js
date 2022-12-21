// Define Global variables
const circle = document.querySelector("#circle");
let count = 0;

// Add our click event for the circle
circle.addEventListener("click", (e) => {
  count++;
  createBox();
  displayCount();
  // Challenge Mode
  changeBG();
});

// Function for box creation
function createBox() {
  // generate the random coordinates
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100));

  const randomValue1 = Math.floor(Math.random() * 256);
  const randomValue2 = Math.floor(Math.random() * 256);
  const randomValue3 = Math.floor(Math.random() * 256);
  const randomValue4 = Math.floor(Math.random() * 256);
  const randomValue5 = Math.floor(Math.random() * 256);
  const randomValue6 = Math.floor(Math.random() * 256);

  const mainBody = document.querySelector("main");

  mainBody.style.backgroundColor = `rgb(${randomValue4},${randomValue5},${randomValue6})`;
  // create the circles
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  // append the newly created box into the main HTML element
  document.querySelector("main").appendChild(box);
  // give the coordinates to the box
  box.setAttribute("style", `left: ${randomX}px; top: ${randomY}px`);

  box.style.backgroundColor = `rgb(${randomValue1},${randomValue2},${randomValue3})`;
}

// Function for click count
function displayCount() {
  // check if counter does not exist
  if (!document.querySelector(".counter")) {
    const counter = document.createElement("h3");
    counter.setAttribute("class", "counter");
    document.querySelector("main h1").after(counter);
  }
  // when counter box exists
  document.querySelector(".counter").innerHTML = `Times clicked: ${count}`;
}
// Function for changing BG color
// function changeBG() {
//   // get all the generated boxes inside the body
//   const boxes = document.querySelectorAll(".box");

//   // for loop for changing the background color
//   for (let i = 0; i < boxes.length && i < 255; i++) {
//     boxes[i].style.backgroundColor = `rgb(${i}, ${i}, ${i})`;
//   }
// }
