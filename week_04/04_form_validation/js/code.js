// add eventListener to the submit button
document.querySelector("button").addEventListener("click", validateForm);

// declare the validateForm function
function validateForm(event) {
  // the preventDefault() disables the default behavoir
  // in this example, it disables the default behavior of
  // a button, which is to reload the entire site.
  // this way we can keep the value inside of the inputs
  // and not loosing them
  event.preventDefault();

  // check if a span element with an error message exists in the form
  // if there is a span, remove it from the HTML Body
  // so that we have a clean state whenever there is no error message
  if (document.querySelector("form span")) {
    document.querySelectorAll("form span").forEach((spanElement) => {
      spanElement.remove();
    });
  }

  // Define data object in which we store the user input
  let data = {};
  // Define validationErrors object in which we store errors
  let validationErrors = {};

  // Create properties for the data object
  data.firstName = document.querySelector("#first-name").value;
  data.lastName = document.querySelector("#last-name").value;
  data.email = document.querySelector("#email").value;
  data.message = document.querySelector("#message").value;

  // Form validation for First name, check if it's empty
  // the ! checks if something is not existent
  if (!data.firstName) {
    console.error("No first name provided");
    validationErrors.firstName = "No first name provided";
  } else {
    console.info("First name: " + data.firstName);
  }

  if (!data.lastName) {
    console.error("No last name provided");
    validationErrors.lastName = "No last name provided";
  } else {
    console.info("Last name: " + data.lastName);
  }

  if (!data.email) {
    console.error("No email provided");
    validationErrors.email = "No email provided";
  } else {
    // define variable for email regex
    let emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // Test if email is an email with the help of the previously defined regex
    if (!emailRegExp.test(data.email)) {
      // Throw error that email doesn't match
      validationErrors.email = "Invalid E-Mail Adress";
      console.error("Invalid email");
    } else {
      console.info("Email is valid");
    }
  }

  if (!data.message) {
    console.error("No message provided");
    validationErrors.message = "No message provided";
  } else {
    console.info("Message: " + data.message);
    // check if message has enough characters (min. 30)
    if (data.message.length < 31) {
      validationErrors.message = "Not enough characters (min. 30)";
      console.error("Not enough characters");
      console.log(data.message.length);
    } else {
      console.info("Message has enough characters");
      console.log(data.message.length);
    }
  }

  // Send data to backend
  // IF there are errors
  if (Object.keys(validationErrors).length > 0) {
    // Display Error messages
    displayErrors(validationErrors);
  } else {
    // send the form to backend
    console.log("sending form data to backend");
  }

  function displayErrors(validationErrors) {
    // Function that will show errors in the page

    if (validationErrors.firstName) {
      const errorContainer = document.createElement("span");
      errorContainer.innerHTML = validationErrors.firstName;
      document.querySelector("#first-name").after(errorContainer);
    }

    if (validationErrors.lastName) {
      const errorContainer = document.createElement("span");
      errorContainer.innerHTML = validationErrors.lastName;
      document.querySelector("#last-name").after(errorContainer);
    }

    if (validationErrors.email) {
      const errorContainer = document.createElement("span");
      errorContainer.innerHTML = validationErrors.email;
      document.querySelector("#email").after(errorContainer);
    }

    if (validationErrors.message) {
      const errorContainer = document.createElement("span");
      errorContainer.innerHTML = validationErrors.message;
      document.querySelector("#message").after(errorContainer);
    }
  }

  /*
  // Example with 1 if / else and ternary operators
  if (!data.firstName || !data.lastName || !data.email || !data.message) {
    !data.firstName
      ? (validationErrors.firstName = "No First Name")
      : !data.lastName
      ? (validationErrors.lastName = "No Last Name")
      : !data.email
      ? (validationErrors.email = "No email")
      : !data.message
      ? (validationErrors.message = "No Message")
      : "";
  } else {
    console.log(data);
  }
  */
}

// Event for textarea
document
  .querySelector("textarea")
  .addEventListener("input", (textAreaInput) => {
    // Initialize the counter to 30
    let counter = 30;

    // If else, counterBox div exists
    if (!document.querySelector(".counterBox")) {
      const counterBox = document.createElement("span");
      // set the class of the span-element
      counterBox.setAttribute("class", "counterBox");
      counterBox.innerHTML = `Characters needed: ${
        counter - textAreaInput.target.textLength
      }`;
      textAreaInput.target.after(counterBox);
    } else {
      document.querySelector(".counterBox").innerHTML = `Characters needed: ${
        counter - textAreaInput.target.textLength
      }`;
    }

    // check if the required characters are met
    if (textAreaInput.target.textLength < 31) {
      // reset of the font color if textLength < 31
      document.querySelector(".counterBox").style.color = "red";
    } else {
      document.querySelector(".counterBox").innerHTML =
        "Desired amount reached";
      document.querySelector(".counterBox").style.color = "lime";
    }
  });
