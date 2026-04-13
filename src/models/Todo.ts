export interface Todo {
    id: number;
    task: string;
    completed: boolean;
    priority: number; // Nummer 1 = viktigast, 3 = minst viktig
}