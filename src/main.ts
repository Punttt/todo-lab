import "./style/main.scss";

import { TodoList } from "./classes/TodoList";

const todoList = new TodoList();

// Hämtar element från HTML-sidan
const form = document.getElementById("todoForm") as HTMLFormElement;
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const prioritySelect = document.getElementById("prioritySelect") as HTMLSelectElement;
const outputList = document.getElementById("outputList") as HTMLUListElement;
const outputListComp = document.getElementById("outputListComp") as HTMLUListElement;
const clearButton = document.getElementById("clearList") as HTMLButtonElement;

// Renderar local-storage direkt
renderTodos();

// Lägger till event-lyssnare
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

clearButton.addEventListener("click", ()=>{
    todoList.clearTodos();
    renderTodos();
})

// Funktioner
function renderTodos(){
    outputList.innerHTML = "";
    outputListComp.innerHTML = "";

    const todos = todoList.getTodos();

    const active = todos.filter( t => !t.completed);
    const done = todos.filter( t => t.completed);

    // Rendera aktiva todos.
    active.forEach((todo) =>{
        const li = document.createElement("li");

        // Text
        li.textContent = todo.task;

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = false;

        checkbox.addEventListener("change", ()=>{
            todoList.markTodoCompleted(todo.id);
            renderTodos();
        });

        // Skriver ut i DOM
        li.appendChild(checkbox);
        outputList.appendChild(li);
    });

    // Renderar färdiga todos
    done.forEach((todo) =>{
        const li = document.createElement("li");

        // Text
        li.textContent = todo.task;

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = true;

        checkbox.addEventListener("change", ()=>{
            todoList.markTodoCompleted(todo.id);
            renderTodos();
        });

        // Skriver ut i DOM
        li.appendChild(checkbox);
        outputListComp.appendChild(li);
    });
}