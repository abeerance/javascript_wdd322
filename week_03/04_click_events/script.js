// we have to select the element that we want to add an event listener
const clickMe = document.querySelector(".button-one");
const styleMe = document.querySelector(".style-button");

/*
    eventListeners usually take two arguments
    1.) the type of the event it should listen to
    2.) a callback function

    A callback function is just a regular function. It's a word we use to describe when
    we pass a function to a method that will then be called at a later point in time
    The callback function is our way of saying to the browser in this example:

    "Hey browser, when the clickMe button is clicked, can you please do me a favour
    and call this function (callback function)"

    Syntax example:
    clickMe.addEventListener('type of event', callBackFunction(){
        function body / statements
    })
*/

const htmlBody = document.querySelector("body");

// It is better to create a named function and pass it as reference in the callback function
function handleClick() {
  console.log("it got clicked!");

  // THIS IS A TEMPLATE STRING
  const helloWorld = `<h1>Hello World</h1>`;
  // Because we are using a template string, we need to create an element, in which we add said template string
  const thisElement = document.createElement("div");
  // We define, that in thisElement we can add an innerHTML with the value of helloWorld template string
  thisElement.innerHTML = helloWorld;
  // we append the thisElement into toe HTML body
  htmlBody.appendChild(thisElement);
}

// it is important to not write handleClick() when using a reference
// else it will fire the function even before the user clicks
// a named function must only be a reference in an event listener
clickMe.addEventListener("click", createElement);

/*
    Exercise Time:
    1.) Create a new function called createElement which is passed as a reference to the button clickMe
    2.) In the function itself, you should fire 3 different prompts and store them in their own variable:
    - What is your name?
    - What was your dream profession when you were a kid?
    - Who is your favorite superhero?
    3.) Create a template string with the following content:
    4.) In the template create a div, where you pass your name as H1 tag
    5.) Create another element as a sibling with the description dream job H2
        and after the dream job a p-tag with your favorite profession and your favorite Hero
    6.) At the end of the function append the template to the html body
    6.) BONUS: Add another button which says: "Style me and add a background to the template string"

    Expected output:
    Hello my name is NAME
    DREAM JOB:
    My dream job as a kid was PROFESSION and my favorite superhero was and will always be SUPERHERO
*/

function createElement() {
  // div check if there is already a div inside the body
  const checkForDivs = document.querySelector("div");
  // if div found delete it
  if (checkForDivs !== null) {
    checkForDivs.remove();
  }

  // the variables are saving the user input from the prompts
  const name = prompt("What is your name?");
  const job = prompt("What was your dream job when you were a kid?");
  const superhero = prompt("Who is your favorite superhero?");

  if (name === "" || job === "" || superhero === "") {
    alert("You prick you didn't answer me");
  } else {
    const message = `
    <div>
      <h1>Hello my name is ${name}</h1>
      <div>
        <h2>DREAM JOB:</h2>
        <p>My dream job as a kid was ${job} and my favorite superhero was and will always be ${superhero}</p>
      </div>
    </div>
  `;
    console.log(message);
    const element = document.createElement("div");
    element.innerHTML = message;
    htmlBody.appendChild(element);
  }
}

/* BONUS */
styleMe.addEventListener("click", styleElement);
function styleElement() {
  const firstDiv = document.querySelector("div");
  // add class to
  firstDiv.classList.add("background-style");
}
