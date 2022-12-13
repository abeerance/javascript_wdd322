// Select the elements we wish to manipulate in advance
const slider = document.querySelector(".slider");

// We need two event listeners for the arrow-buttons
document.querySelector(".left").addEventListener("click", moveLeft);
document.querySelector(".right").addEventListener("click", moveRight);

// We will implement the current slide counter
// This variable will be changed every time we move
// the slider. It gets incremented or decremented by one
let currentSlide = 1;

// Now we will define the functions to move pictures
// to the left or to the right.
// since we are moving right, we need to get the first slide
// and put it at the end of the container
// slider.append (put at the end of slider)
// document.querySelectorAll('.slide)[0] (first slide)
function moveRight() {
  slider.append(document.querySelectorAll(".slide")[0]);
  updateDescription();
  displayCurrent("right");
}

// this function is a copy of the moveRight function
// but we invert its functionality
// meaning that we prepend (put at the start of the array)
// the last slide
function moveLeft() {
  slider.prepend(document.querySelectorAll(".slide")[4]);
  updateDescription();
  displayCurrent("left");
}

// every time we move the slide we also change the display and update
// the corresponding description

// The display is the little counter being displayed which tells us
// which image is currently visible
// to update it we have this function which takes in a direction
// parameter (left or right)

// depending on the argument given to the function, it will either
// increment or decrement the current slide variable value
function displayCurrent(direction) {
  // we also have to prevent the counter from going above the
  // maximum slide count
  if (direction === "right") {
    currentSlide === 5 ? (currentSlide = 1) : currentSlide++;
  }
  if (direction === "left") {
    currentSlide === 1 ? (currentSlide = 5) : currentSlide--;
  }

  // once the variable has been changed to the correct value,
  // then we can update the text of the html element
  document.querySelector(
    ".controls-container h2"
  ).innerText = `Current Slide: ${currentSlide}`;
}

// this function updates the description of each slide
// in this case we will just use the alt attribute of the current first image
// we then update the text of the description p tag
function updateDescription() {
  const description = document
    .querySelectorAll(".slide")[0]
    .querySelector("img").alt;
  document.querySelector(".controls-container p").innerText = description;
}

// update the description when the page loads
// not waiting for the event listeners
updateDescription();
