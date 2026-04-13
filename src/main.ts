import "./style/main.scss";

import { TodoList } from "./classes/TodoList";

const todoList = new TodoList();

// Hämtar element från HTML-sidan
const form = document.getElementById("todoForm") as HTMLFormElement;
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const prioritySelect = document.getElementById("prioritySelect") as HTMLSelectElement;
const outputList = document.getElementById("outputList") as HTMLUListElement;

// Renderar local-storage direkt
renderTodos();

// Lägger till event-lyssnare till formuläret
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const task = taskInput.value;
    const priority = Number(prioritySelect.value);

    const success = todoList.addTodo(task, priority);

    // Validerar input
    if(success){
        taskInput.value = "";
        renderTodos();
    } else {
        alert("Fel: kontrollera task och prioritet!");
    }
});

function renderTodos(){
    outputList.innerHTML = "";

    const todos = todoList.getTodos();

    todos.forEach((todo, index) =>{
        const li = document.createElement("li");

        // Text
        li.textContent = todo.task;

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        checkbox.addEventListener("change", ()=>{
            todoList.markTodoCompleted(index);
            renderTodos();
        })

        // Om todo är klar
        if(todo.completed) {
            li.style.opacity = "0.6";
        }

        // Skriver ut i DOM
        li.appendChild(checkbox);
        outputList.appendChild(li);
    })
}