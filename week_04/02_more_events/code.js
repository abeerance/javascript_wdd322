// There are a lot more events to discover in JavaSCript: Here are some of them

// window.onload event => activates when the DOM and relevant files have loaded
window.onload = function () {
  console.log("Window loaded");
};

// mouseover event => This event acts in a similar way like hover in CSS
// document.querySelector("label").addEventListener("mouseover", function () {
//   console.log("The label is being hovered");
// });

// mousemove event => This event activates every time you move your cursor
// document.addEventListener("mousemove", function (event) {
//   console.log(event.x, event.y);
// });

// mouseenter event => This event activates whenever you enter the desired HTML-tag
document.querySelector("label").addEventListener("mouseenter", function () {
  console.log("The cursor just entered the HTML Tag");
  document.querySelector("label").classList.add("got-entered");
});

// mouseout event => This event activates whenever you leave the desired HTML-tag
document.querySelector("label").addEventListener("mouseout", function () {
  console.log("The cursor just left the HTML Tag");
  document.querySelector("label").classList.add("got-left");
});

// keydown event => With this event you can track if a key was pressed.
// you can even find out WHICH key was pressed by accessing the event object
// and pass it as a parameter
document.querySelector("input").addEventListener("keydown", function (event) {
  // to check which key was pressed, you would need to use the keyCode
  // only use the keyCode, since libraries depend on it and it's move specific
  console.log(event.code);
});
