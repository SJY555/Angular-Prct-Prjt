import { Component, OnInit } from '@angular/core';
import { ServiceLocalService } from '../service-local.service';

@Component({
  selector: 'app-to-do-complete',
  templateUrl: './to-do-complete.component.html',
  styleUrls: ['./to-do-complete.component.css']
})
export class ToDoCompleteComponent implements OnInit {
completed:any;
  constructor(private localService:ServiceLocalService) { }
  
  ngOnInit(){
    this.completed=this.localService.completedTodos();
  }
  onTrash(e){
    this.localService.completedRemove(e);
  }

}
