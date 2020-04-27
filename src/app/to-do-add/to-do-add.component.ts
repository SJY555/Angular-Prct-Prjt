import { Component, OnInit } from '@angular/core';
import { ServiceLocalService } from '../service-local.service';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.css']
})
export class ToDoAddComponent implements OnInit {

  todoAdd:string;

  constructor(private localService:ServiceLocalService) {
    this.todoAdd = '';
   }

  ngOnInit(){
  }

  onAdd(){
   this.localService.addTodo(this.todoAdd);
   console.log("findings",this.todoAdd);
   this.todoAdd ='';
  }

}
