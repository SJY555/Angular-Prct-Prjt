import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'ngx-webstorage-service';
import{ FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoCompleteComponent } from './to-do-complete/to-do-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoAddComponent,
    ToDoListComponent,
    ToDoCompleteComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    FormsModule
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
