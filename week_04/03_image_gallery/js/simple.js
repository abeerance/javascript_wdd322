const [current, images] = [
  // this one will be stored in the current const variable
  document.querySelector("#active"),
  // this one will be stored in the images const variable
  document.querySelectorAll(".images img"),
];

images.forEach((img) =>
  // We add an event listener for each element in the images array
  // and we pass "event" as a parameter. With the help of the "event" we can
  // change the source of the big image, which is stored in the current const
  img.addEventListener("click", (event) => (current.src = event.target.src))
);
