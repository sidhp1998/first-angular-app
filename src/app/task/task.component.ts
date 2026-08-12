import { Component, Input, EventEmitter, Output } from '@angular/core';
import {TaskInterface} from '../models/task.interface';
import { NgClass, DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [NgClass,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class Task {
  @Input({required:true}) task!: TaskInterface;
  @Output() taskDelete: EventEmitter<TaskInterface> = new EventEmitter<TaskInterface>();
  completeTask(){
    this.task.completed = true;
  }
  deleteTask(){
    this.taskDelete.emit(this.task);
  }
}
