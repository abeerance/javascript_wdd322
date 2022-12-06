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
