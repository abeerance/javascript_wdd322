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
function createBox() {}
// Function for click count
function displayCount() {
  if (!document.querySelector(".counter")) {
  }
}
// Function for changing BackGround color
function changeBG() {
  a = math.random;
  b = math.random;
  c = math.random;
  rgb(a, b, c);
}
