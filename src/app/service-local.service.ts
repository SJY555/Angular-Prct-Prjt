import { Injectable } from '@angular/core';
import {Todo} from '../app/todo'
import { ToDoAddComponent } from './to-do-add/to-do-add.component';


@Injectable({
  providedIn: 'root'
})
export class ServiceLocalService {

   todos: Todo[];
  doneto=[];
  id:number;
  name:string;
  nextId: any;
  doneId:any;

  constructor() {
    this.todos = [
      {
        "id": 1,
        "name": "React"      
      },
      {
        "id": 2,
        "name": "Vue"      
      }
    ];

    this.nextId = 3;
    this.doneId =1;
}
public addTodo(name: string): void {
  let todo = new Todo(this.nextId, name);
  this.todos.push(todo);

  this.nextId++;
}

public getTodos(): Todo[] {
  return this.todos;
}
public doneTodos(e)
{
    this.doneto.push(this.todos[e]);
    this.todos.splice(e,1);  
}
completedTodos()
{
  return this.doneto;
}


public removeTodo(e){
  this.todos.splice(e,1);
}

  public completedRemove(e) {
    this.doneto.splice(e,1);
  }
}
