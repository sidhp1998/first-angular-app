import { Injectable, signal,inject } from '@angular/core';
import { TaskInterface } from '../models/task.interface';
import { NewTaskInterface } from '../models/new-task.interface';
import { LocalStorageService } from './localstorage.service';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<TaskInterface[]>([]);
  private readonly tasksKey = 'tasks';
  readonly tasksList = this.tasks.asReadonly();
  private readonly storage = inject(LocalStorageService);
  constructor() {
    this.loadTasks();
  }
  addUser(newTask: NewTaskInterface, userId: number) {
    let newId: number = Math.max(...this.tasks().map((user) => user.id));
    this.tasks.update((current) => {
      return [
        ...current,
        {
          id: newId,
          userId: userId,
          title: newTask.title,
          completed: false,
          createdAt: new Date(),
          completedAt: null,
          dueDate: newTask.dueDate,
          summary: newTask.summary
        },
      ];
    });
    this.saveTasks();
  }

  loadTasks() {
    this.tasks.set(this.storage.get<TaskInterface[]>(this.tasksKey,[]));
  }

  saveTasks() {
    this.storage.set(this.tasksKey,JSON.stringify(this.tasks()));
  }
}
