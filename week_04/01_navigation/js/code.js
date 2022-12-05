// Select burger button
const burgerButton = document.querySelector(".burger");

// Select mobile navigation content
const mobileNavContent = document.querySelector(
  ".mobile-navigation-content-hidden"
);

// function to toggle nav content
function showMobileNavContent() {
  mobileNavContent.classList.toggle("mobile-navigation-content-visible");
}

// eventlistener for burger
burgerButton.addEventListener("click", showMobileNavContent);

// Aufgabe: macht das gleiche für den About / Projects Button,
// sodass die sub-navigation der Buttons beim klick ersichtlich
// wird

// select about & project "button"
const aboutButton = document.querySelector(".about-button");
const projectButton = document.querySelector(".project-button");

// select the about & project content
const aboutNavContent = document.querySelector(".about-sub-content-hidden");
const projectNavContent = document.querySelector(".project-sub-content-hidden");

// // define functions to show about & project content
// function showAboutNavContent() {
//   aboutNavContent.classList.toggle("about-sub-content-visible");
// }
// function showProjectNavContent() {
//   projectNavContent.classList.toggle("project-sub-content-visible");
// }

// // add eventlisteners to the about & project "button"
// aboutButton.addEventListener("click", showAboutNavContent);
// projectButton.addEventListener("click", showProjectNavContent);

// we only defined 1 function for both evenListeners
function toggleMobileContent(element) {
  if (element === "about-button") {
    aboutNavContent.classList.toggle("about-sub-content-visible");
  }
  if (element === "project-button") {
    projectNavContent.classList.toggle("project-sub-content-visible");
  }
}

// event refers to an event which we pass as a paremeter.
// with event-target we can access the currently
aboutButton.addEventListener("click", (event) => {
  /* if we would search for an ID this would look like this:
    toggleMobileContent(event.target.id)
  */
  toggleMobileContent(event.target.classList[0]);
});

projectButton.addEventListener("click", (event) => {
  toggleMobileContent(event.target.classList[0]);
});
