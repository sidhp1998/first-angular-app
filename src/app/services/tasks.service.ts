import { Injectable, signal, inject } from '@angular/core';
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
  addTask(newTask: NewTaskInterface, userId: number) {
    if (!userId) return;
    const ids = this.tasks()
      .map((task) => task.id)
      .filter((id): id is number => Number.isInteger(id) && id >= 0);
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1;
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
          summary: newTask.summary,
        },
      ];
    });
    this.saveTasks();
  }

  completeTask(taskId: number) {
    this.tasks.update((current) =>
      current.map((task) =>
        task.id === taskId ? { ...task, completed: true, completedAt: new Date() } : task,
      ),
    );
    this.saveTasks();
  }

  deleteTask(taskId: number) {
    this.tasks.update((current) => current.filter((task) => task.id !== taskId));

    this.saveTasks();
  }

  deleteUserTask(userId: number) {
    this.tasks.update((current) => current.filter((task) => task.userId !== userId));
    this.saveTasks();
  }

  loadTasks() {
    this.tasks.set(this.storage.get<TaskInterface[]>(this.tasksKey, []));
  }

  saveTasks() {
    this.storage.set(this.tasksKey, this.tasks());
  }
}
