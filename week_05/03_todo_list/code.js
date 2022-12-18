// Create an array for the todo list
let todoList = new Array();
getTodos();

// getTodos Function
function getTodos() {
  // If there are items in the local storage
  if (localStorage.getItem("todos")) {
    todoList = JSON.parse(localStorage.getItem("todos"));
    populateList();
  } else {
    // If there are NO items in the local storage
    return "You do not have any todos in the storage";
  }
}

// addTodo Function
function addTodo() {
  // Only add a todo if there is a value in the input
  const newTodo = document.querySelector("#addinput").value;

  if (newTodo) {
    // create an object with text and status
    const todoObj = {
      text: newTodo,
      complete: false,
    };

    // Insert the new object in the todoList array
    todoList.push(todoObj);

    // update the local storage
    localStorage.setItem("todos", JSON.stringify(todoList));

    // Update the HTML
    populateList();
  } else {
    // display error when input is empty
    return "You must write something in the box";
  }
}

// populateList Function
function populateList() {
  // Delete the current list
  const list = document.querySelector("#list");
  list.innerHTML = "";

  // Create a new item in the list for every item in the array
  if (todoList) {
    todoList.forEach((todo) => {
      const todoWrapper = document.createElement("div");
      todoWrapper.classList.add("todoWrapper");
      todoWrapper.innerHTML = `
      <div class="todoText">${todo.text}</div>
      <div class="todoCheck">${todo.complete === false ? "false" : ""}</div>
      `;

      list.appendChild(todoWrapper);
    });
  }
  updateBoxes();
}

// updateBoxes Function
function updateBoxes() {
  let boxes = document.querySelectorAll(".todoCheck");
  // iterate through the box elements in boxes
  boxes.forEach((box, i) => {
    // add an eventListener to each box
    box.addEventListener("click", () => {
      box.classList.toggle("false");

      // contains checks if an html element has the specified class
      if (box.classList.contains("false")) {
        todoList[i].complete = false;
      } else {
        todoList[i].complete = true;
      }

      // update the localStorage
      localStorage.setItem("todos", JSON.stringify(todoList));
    });
  });
}

// add button eventListener
document.querySelector("#addbutton").addEventListener("click", (e) => {
  // prevents the default behaviour of a button, which is reloading the site
  e.preventDefault();
  addTodo();
});

// clear all completed elements
document.querySelector("#clearCompleted").addEventListener("click", (e) => {
  e.preventDefault();
  todoList = todoList.filter((todo) => todo.complete == false);
  // update local storage
  localStorage.setItem("todos", JSON.stringify(todoList));
  populateList();
});
