import { Component, OnInit } from '@angular/core';
import { ServiceLocalService } from '../service-local.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
  nameList: any;

  constructor(private localService: ServiceLocalService) {

  }


  ngOnInit(): void {
    this.nameList = this.localService.getTodos();
  }
  onDone(e) {

    this.localService.doneTodos(e);
    
  }
  onTrash(e) {

    this.localService.removeTodo(e);
  }


}

