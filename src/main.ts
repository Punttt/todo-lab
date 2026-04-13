import "./style/main.scss";

import { TodoList } from "./classes/TodoList";

const todoList = new TodoList();

// Hämtar element från HTML-sidan
const form = document.getElementById("todoForm") as HTMLFormElement;
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const prioritySelect = document.getElementById("prioritySelect") as HTMLSelectElement;
const outputList = document.getElementById("outputList") as HTMLUListElement;

// Lägger till event-lyssnare till formuläret
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const task = taskInput.value;
    const priority = Number(prioritySelect.value);

    console.log("Task: "+ task, ", Prioritet: "  + priority);
})