import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import {NewTaskInterface} from '../models/new-task.interface';
import { NgClass } from '@angular/common';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [NgClass,FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone: true
})
export class NewTaskComponent  {
  //@Input() userId!: string;
  @Output() taskAdded = new EventEmitter<NewTaskInterface>();
  @Output() taskAddCancelled = new EventEmitter<void>();

  taskModelObject: NewTaskInterface = {    
    title: '',    
    summary: '',    
    dueDate: null
  }
  
  cancelAddTask() {
    this.taskAddCancelled.emit();
  }

  submitNewTask(){
    this.taskAdded.emit(this.taskModelObject);
  }
}
