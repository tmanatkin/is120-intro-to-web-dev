let addItemBtn = document.querySelector("#addItemBtn");
let newTodo = document.querySelector("#newTodo");
let clearBtn = document.querySelector("#clearBtn"); // added for local storage

let todoListContainer = document.querySelector("#todoListContainer");
let element;

let todoStorage = [];

function renderTodoList() {
  if (todoStorage.length === 0) {
    return;
  }

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
  localStorage.setItem("todoList", JSON.stringify(todoStorage));
  renderTodoList();
}

function clearTodoList() {
  todoStorage = [];
  localStorage.removeItem("todoList");
  renderTodoList();
}

addItemBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearTodoList);

const savedTodoList = localStorage.getItem("todoList");
if (savedTodoList) {
  todoStorage = JSON.parse(savedTodoList);
  renderTodoList();
}
