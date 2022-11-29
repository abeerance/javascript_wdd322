/*
    With template strings we can easily concatinate strings using variables
*/

let firstName = "Princess",
  lastName = "Zelda",
  middleName = "of Hyrule";

let qty = 3,
  item = "empty jar",
  price = 50,
  shop = "Beedle's Ship Shop";

// An example with console.log
let msg = `
    Hello ${firstName},
    Thanks for purchasing ${qty} ${item}(s).
    Order Details:
        ${firstName} ${lastName} ${middleName}
        ${qty} x ${price} = $${qty * price} of ${item}
    You can pick your items up anytime you want.
    Thanks,
    ${shop}
`;
console.log(msg);

// Example with HTML code
// You can also use template strings to prepare HTML templates like this:

const myTemplate = `
<section>
    <h1>${shop}</h1>
    <h2>Hello ${firstName} ${lastName} ${middleName}</h2>
    <p>Thanks for purchasing ${qty} ${item}(s)</p>
    <h3>Oder Details:</h3>
    <p>${qty} x $${price} = $${qty * price} of ${item}</p>
    <h4>Thank you very much,</h4>
    <h3>${shop}</h3>
</section>
`;

// Remember: template strings are strings and are neither an element or a node
// Thus we have to add it as innerHTML to a already existing element
// to create a new element we use createElement
// innerHTML gets or sets the HTML or XML markup contained within it
// innerHTML replaces everything that is inside, if you want to add content, you would need
// to use insertAdjacentHTML()

const myElement = document.createElement("div");
myElement.innerHTML = myTemplate;
document.querySelector("body").appendChild(myElement);
