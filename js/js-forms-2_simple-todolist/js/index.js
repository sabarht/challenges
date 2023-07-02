console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
const addTodo = document.querySelector('[data-js="submitButton"]');
const headlineElement = form.elements.headline.value;

function addNewListEntry() {
  const newLi = document.createElement("li");
  const newHeadline = document.createElement("h2");
  const newTask = document.createElement("p");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const headline = document.querySelector("#headline");
  //   code bala va paeen 2 approach bara ye chizan!
  const headline = headlineElement.value;
  const task = form.elements.task.value;

  form.reset();
  headlineElement.focus();

  addNewListEntry(headline, task);
});
