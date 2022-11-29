// Select the HTML body (or tag) where you want to insert your element
const htmlBody = document.querySelector("body");

/*
    Syntax:
    document.createElement(htmlTag)
*/
// Create a new element and store it inside a variable
const myParagraph = document.createElement("p");
// To add textContent in an HTML element use textContent
myParagraph.textContent = "I am a p-tag!";
// Add a class
myParagraph.classList.add("special");
// Add an ID
myParagraph.setAttribute("id", "this-is-my-id");

// to add the paragraph to the HTML we need to append it, usually as a child
htmlBody.append(myParagraph);

/*
    let's add an image to make it beautiful
*/
const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/500";
myImage.alt = "nice photo";

htmlBody.appendChild(myImage);

/*
    It's possible to create even nested elements inside a function
*/

function addElement() {
  // 1st div element
  const newDiv1 = document.createElement("div");
  newDiv1.classList.add("first-div");

  // 2nd div element
  const newDiv2 = document.createElement("div");
  newDiv2.classList.add("second-div");
  const paragraph = document.createElement("p");
  paragraph.textContent = "I'm a paragraph";

  // append everything together
  htmlBody.appendChild(newDiv1);
  newDiv1.appendChild(newDiv2);
  newDiv2.appendChild(paragraph);
}

// run the function
addElement();
