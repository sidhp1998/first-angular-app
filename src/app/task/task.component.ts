import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TaskInterface } from '../models/task.interface';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class Task {
  @Input({ required: true }) task!: TaskInterface;
  @Output() taskDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() taskComplete: EventEmitter<number> = new EventEmitter<number>();

  completeTask() {
    this.taskComplete.emit(this.task.id);
  }
  deleteTask() {
    this.taskDelete.emit(this.task.id);
  }
}
