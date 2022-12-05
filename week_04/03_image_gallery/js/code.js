/* Very simple thumbnail image gallery with vanilla JavaScript */

//  1.) Declare all our variables

// current is the big image in the main-img container
const current = document.querySelector("#active");

/*
 START NEW: PREPEND the first current image to the image container
*/
// Create a new image element to paste in the source of the first image
const firstImage = document.createElement("img");
// template string to get the path of the current image, splits at the last "/",
// and set it as the source of the newly created IMG-Tag
firstImage.src = `images/${current.src.split("/").pop()}`;
// get the image container
const imageContainer = document.querySelector(".images");
// Prepend (add at first line), the newly created image to the images container
imageContainer.prepend(firstImage);
/*
 END NEW
*/

// select all thumbnail images
const allImages = document.querySelectorAll(".images img");
// opacity is the opacity we want our selected image to have
const opacity = 0.4;

// With the help of a spread operator (...) we can add something to an
// JavaScript array. To add something to an array, we need to defined
// a new variable

// We start by adding an eventListener to all the thumbnails
// Since we get an array from querySelectorAll, we can iterate throught it

// This means, we can use the higher order function 'forEach' to iterate
// through the array. forEach has callback function which gives us a
// parameter, where we can access the current iteration
// in this case we call it 'img', which in a for loop would be the
// equivalent to images[i]
allImages.forEach((img) => img.addEventListener("click", imageClick));

// We now define the opacity of the first image in the thumbnail
// The idea being, if an image is being displayed in the big box
// then it's thumbnail should be faded out
allImages[0].style.opacity = opacity;

// Now we will defined our callback function 'imageClick'
// Since it is a callback function, it has access to the event object
function imageClick(event) {
  // We will first reset the opacity of images
  // We need to make sure that all the thumbnails are back to the full
  // opacity
  allImages.forEach((img) => (img.style.opacity = 1));
  // Change current image to source of clicked image
  // remember that we can know which image was clicked by getting the
  // target of the event. This target is also an object which contains
  // a lot of information, one of it's key/value pairs is the 'src'
  // which we need in this example
  current.src = event.target.src;
  // add 'fade-in' class to the current image
  // This line simply adds a class to the current image (big image)
  current.classList.add("fade-in");
  // Remove the 'fade-in' class after 0.5 seconds
  // with the help of setTimout()
  setTimeout(() => current.classList.remove("fade-in"), 500);
  // Last but not least we need to change the opacity of the clicked
  // thumbnail to fate it.
  // since we already changed all the other thumbnails to opacity = 1,
  // we know this is going to be the only thumnbail that is faded
  event.target.style.opacity = opacity;
}
