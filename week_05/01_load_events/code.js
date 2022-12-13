console.log("Hello World");

// the "after" will create something after a specific element
const myElement = document.createElement("div");
myElement.innerHTML = "<p>This element was created after the p-tag</p>";
document.querySelector("p").after(myElement);

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  const domLoadedElement = document.createElement("div");
  domLoadedElement.innerText = "This is an example element";
  document.querySelector("p").after(domLoadedElement);
});

// Window On Load
window.onload = function () {
  const onLoadedElement = document.createElement("div");
  onLoadedElement.innerText =
    "This element was created after the window on load event";
  document.querySelector("p").after(onLoadedElement);
};
