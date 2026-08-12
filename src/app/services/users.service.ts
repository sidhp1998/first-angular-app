import { Injectable, signal, inject } from '@angular/core';
import { UserInterface } from '../models/user.interface';
import { NewUserInterface } from '../models/new-user.interface';
import { LocalStorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users = signal<UserInterface[]>([]);
  private readonly usersKey = 'users';
  readonly usersList = this.users.asReadonly();
  private readonly storage = inject(LocalStorageService);
  constructor() {
    this.loadUsers();
  }
  addUser(newUser: NewUserInterface) {
    let newId: number = Math.max(...this.users().map((user) => user.id));
    this.users.update((current) => {
      return [
        ...current,
        {
          id: newId + 1,
          name: newUser.name,
          avatar: newUser.avatar,
          selected: false,
        },
      ];
    });
    this.saveUsers();
  }

  deleteUser(userId: number) {
    this.users.update((current) => current.filter((user) => user.id !== userId));

    this.saveUsers();
  }

  updateUser(updatedUser: UserInterface) {
    this.users.update((current) =>
      current.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );

    this.saveUsers();
  }

  loadUsers(): void {
    this.users.set(this.storage.get<UserInterface[]>(this.usersKey, []));
  }

  saveUsers(): void {
    this.storage.set(this.usersKey, this.users());
  }
}
