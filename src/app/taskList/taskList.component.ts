import { Component, input, output, computed, inject, signal } from '@angular/core';
import { Task } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskInterface } from '../models/task.interface';
import { NewTaskInterface } from '../models/new-task.interface';
import { UserInterface } from '../models/user.interface';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [Task, NewTaskComponent],
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.css'],
})
export class TaskListComponent {
  taskService = inject(TasksService);
  selectedUser = input.required<UserInterface | undefined>();
  listOfTasksForSelectedUser = computed(() => {
    return this.taskService.tasksList().filter((task) => task.userId === this.selectedUser()?.id);
  });
  newTask = signal<NewTaskInterface | undefined>(undefined);
  isAddingNewTask: boolean = false;

  onTaskDelete(taskId: number) {
    this.taskService.deleteTask(taskId);
  }
  addTask() {
    this.isAddingNewTask = true;
  }
  onTaskAddCancelled() {
    this.isAddingNewTask = false;
  }
  onTaskAdded(task: NewTaskInterface) {
    this.taskService.addTask(task, this.selectedUser()?.id || 0);
    this.isAddingNewTask = false;
  }
  onTaskComplete(taskId: number) {
    this.taskService.completeTask(taskId);
  }
}
