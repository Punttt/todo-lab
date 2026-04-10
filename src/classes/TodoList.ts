import { Todo } from "../models/Todo";


export class TodoList {
  private todos: Todo[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  addTodo(task: string, priority: number): boolean{
    
  }
}
