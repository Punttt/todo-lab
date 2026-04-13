// Importerar interface från Todo.ts
import type { Todo } from "../models/Todo";


export class TodoList {
  // En privat lista som endast klassen kan ändra
  private todos: Todo[] = [];

  constructor() {
    // När klassen skapas: hämta och sparade todos från localStorage
    this.loadFromLocalStorage();
  }

  addTodo(task: string, priority: number): boolean{
    // Validering: av task, måste finnas innahåll i 
    if(!task || task.trim().length === 0){
      return false;
    }

    // Validering: Prioritet måste vara inom spannet 1-3
    if(priority < 1 || priority > 3){
      return false;
    }

    // Skapa ett nytt Todo-objekt enligt interfacet
    const newTodo: Todo = {
      id: Date.now(),
      task,
      completed: false,
      priority
    }

    // Lägga till i listan, spara till localstorage och returnera True när allt är klart.
    this.todos.push(newTodo);
    this.saveToLocalStorage();

    return true;
  }

  markTodoCompleted(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if(todo) {
      todo.completed = !todo.completed;
      this.saveToLocalStorage();
    }
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  saveToLocalStorage(): void{
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  loadFromLocalStorage(): void {
    const data = localStorage.getItem("todos");
    
    if(data){
      this.todos = JSON.parse(data);
    }
  }

  clearTodos(): void {
    this.todos = [];
    this.saveToLocalStorage();
  }

}


