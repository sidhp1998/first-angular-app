import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { Task } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskInterface } from '../models/task.interface';
import { NewTaskInterface } from '../models/new-task.interface';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgClass, Task, NewTaskComponent],
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.css'],
})
export class TaskListComponent {
  @Input({ required: true }) selectedUser!: any;
  listOfTasks: TaskInterface[] = [];
  newTask!: TaskInterface;
  isAddingNewTask: boolean = false;
  get listOfTasksForSelectedUser(): TaskInterface[] {
    return this.listOfTasks.filter((task) => task.userId === this.selectedUser.id);
  }
  onTaskDelete(task: TaskInterface) {
    
  }
  addTask() {
    this.isAddingNewTask = true;
  }
  onTaskAddCancelled() {
    this.isAddingNewTask = false;
  }

  onTaskAdded(task: NewTaskInterface) {
    // task.userId = this.selectedUser.id;
    // this.listOfTasks.push(task);
    
    this.isAddingNewTask = false;
  }
}
