let todoList = [
  {
    item: "walk the dog",
    isDone: false,
  },
  {
    item: "buy milk",
    isDone: false,
  },
  {
    item: "walk the cat",
    isDone: false,
  },
];

let ulTodo = document.createElement("ul");
ulTodo.className = "todo-ul";

let todoDiv = document.querySelector("#todo-div");
todoDiv.insertAdjacentElement("beforeend", ulTodo);

let todoInput = document.querySelector("#todo-input");

let newTodoInputValue = null;

todoInput.addEventListener("input", (event) => {
  newTodoInputValue = event.target.value;
});

let submitTodo = document.querySelector("#todo-submit");

submitTodo.addEventListener("click", (event) => {
  todoList.push({ isDone: false, item: newTodoInputValue });

  const todoLi = document.createElement("li");
  todoLi.className = `todo-li`;
  todoLi.id = `todo-li-${todoList.length}`;

  const liSpan = document.createElement("span");
  liSpan.className = `li-span`;
  liSpan.id = `${`li-span`}-${todoList.length}`;
  liSpan.textContent = newTodoInputValue;
  todoLi.appendChild(liSpan);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.className = `delete-todo-li`;
  deleteButton.id = `delete-todo-li-${todoList.length}`;
  deleteButton.addEventListener("click", deleteButtonFunc);

  todoLi.appendChild(deleteButton);

  let doneButton = document.createElement("button");
  doneButton.innerHTML = "done";
  doneButton.className = `done-todo-li`;
  doneButton.id = `done-todo-li-${todoList.length + 1}`;
  doneButton.addEventListener("click", doneButtonFunc);
  todoLi.appendChild(doneButton);

  ulTodo.appendChild(todoLi);

  todoInput.value = "";
});

function deleteButtonFunc(event) {
  //this is binding to the button
  console.log(todoList);
  let currentButton = document.querySelector(`#${event.target.id}`);

  let currentDoneContent = currentButton.parentElement.firstElementChild;

  todoList.forEach(function (todo, index) {
    if (todo.item === currentDoneContent.innerHTML) {
      todoList.splice(index, 1);

      currentDoneContent.parentNode.remove();
      console.log(todoList);
      //this will only remove the span but not the entire li tag
      //document.querySelector(`#${currentDoneContent.id}`).remove();
    }
  });
}

const doneButtonFunc = (event) => {
  //this is binding to the window scope because of the arrow function
  let currentButton = document.querySelector(`#${event.target.id}`);
  console.log(todoList);
  let currentDoneContent = currentButton.parentElement.firstElementChild;

  todoList.forEach(function (todo) {
    if (todo.item === currentDoneContent.innerHTML && todo.isDone === false) {
      currentDoneContent.classList.add("done-crossed-line");

      todo.isDone = true;
    } else if (
      todo.item === currentDoneContent.innerHTML &&
      todo.isDone === true
    ) {
      todo.isDone = false;
      currentDoneContent.classList.remove("done-crossed-line");
    }
  });
};

todoList.forEach((todo, index) => {
  const todoLi = document.createElement("li");
  todoLi.className = `todo-li`;
  todoLi.id = `todo-li-${index + 1}`;

  const liSpan = document.createElement("span");
  liSpan.className = `li-span`;
  liSpan.id = `${`li-span`}-${index + 1}`;
  liSpan.textContent = todo.item;
  todoLi.appendChild(liSpan);
  ulTodo.appendChild(todoLi);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.className = `delete-todo-li`;
  deleteButton.id = `delete-todo-li-${index + 1}`;
  todoLi.appendChild(deleteButton);

  let doneButton = document.createElement("button");
  doneButton.innerHTML = "done";
  doneButton.className = `done-todo-li`;
  doneButton.id = `done-todo-li-${index + 1}`;
  todoLi.appendChild(doneButton);

  //using function expression will bind you to the current scope which is window
  // const deleteCallback = () => {
  //   console.log(this);
  // };

  //if you use function declaration will keep the current scope

  //refactor this to a function so other buttons can use it too
  // deleteButton.addEventListener("click", function (event) {
  //   //this is binding to the button
  //   console.log(todoList);
  //   let currentButton = document.querySelector(`#${event.target.id}`);

  //   let currentDoneContent = currentButton.parentElement.firstElementChild;

  //   todoList.forEach(function (todo, index) {
  //     if (todo.item === currentDoneContent.innerHTML) {
  //       todoList = todoList.splice(0, index);

  //       currentDoneContent.parentNode.remove();

  //       //this will only remove the span but not the entire li tag
  //       //document.querySelector(`#${currentDoneContent.id}`).remove();
  //     }
  //   });
  // });

  deleteButton.addEventListener("click", deleteButtonFunc);

  //refactor this as well
  // doneButton.addEventListener("click", (event) => {
  //   //this is binding to the window scope because of the arrow function
  //   let currentButton = document.querySelector(`#${event.target.id}`);

  //   let currentDoneContent = currentButton.parentElement.firstElementChild;

  //   todoList.forEach(function (todo) {
  //     if (todo.item === currentDoneContent.innerHTML && todo.isDone === false) {
  //       currentDoneContent.classList.add("done-crossed-line");

  //       todo.isDone = true;
  //     } else if (
  //       todo.item === currentDoneContent.innerHTML &&
  //       todo.isDone === true
  //     ) {
  //       todo.isDone = false;
  //       currentDoneContent.classList.remove("done-crossed-line");
  //     }
  //   });
  // });
  doneButton.addEventListener("click", doneButtonFunc);
});
