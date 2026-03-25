let addItemBtn = document.querySelector("#addItemBtn");
let newTodo = document.querySelector("#newTodo");

let todoListContainer = document.querySelector("#todoListContainer");
let element;

let todoStorage = [];

function renderTodoList() {
  todoListContainer.innerHTML = "";
  newTodo.value = "";
  newTodo.focus();
  for (const todo of todoStorage) {
    element = document.createElement("div");
    element.innerText = todo;
    todoListContainer.appendChild(element);
  }
}

function addItem() {
  if (newTodo.value === "") {
    newTodo.focus();
    return;
  }

  todoStorage.push(newTodo.value);
  renderTodoList();
}

addItemBtn.addEventListener("click", addItem);
