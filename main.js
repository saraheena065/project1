//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);