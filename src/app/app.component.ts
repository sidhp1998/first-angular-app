import { Component, computed, inject, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './app-add-user/app-add-user.component';
import { UsersService } from './services/users.service';
import { UserInterface } from './models/user.interface';
import { AppNewUserFormComponent } from './app-new-user-form/app-new-user-form.component';
import { NewUserInterface } from './models/new-user.interface';
import { TaskListComponent } from './taskList/taskList.component';
import { TasksService } from './services/tasks.service';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserComponent,
    AddUserComponent,
    AppNewUserFormComponent,
    TaskListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly title = signal('first-angular-app');
  private userService = inject(UsersService);
  private taskService = inject(TasksService);
  users = this.userService.usersList;
  selectedUserForEdit = signal<UserInterface | undefined>(undefined);
  addNewUserFormShow = false;
  selectedUser = computed(() => {
    return this.users().find((user) => user.selected);
  });
  onClickAddUser() {
    this.addNewUserFormShow = true;
  }
  onClickCancelAddUser() {
    if (this.selectedUserForEdit()) {
      this.selectedUserForEdit.set(undefined);
    }
    this.addNewUserFormShow = false;
  }
  onUserAddFn(newUser: NewUserInterface) {
    if (this.selectedUserForEdit()) {
      this.selectedUserForEdit.update((current) => {
        current!.name = newUser.name;
        current!.avatar = newUser.avatar;
        return current;
      });
      this.userService.updateUser(this.selectedUserForEdit()!);

      this.addNewUserFormShow = false;
    } else {
      this.userService.addUser(newUser);
      this.addNewUserFormShow = false;
    }
    this.selectedUserForEdit.set(undefined);
  }
  onSelectUser(userId: number) {
    this.userService.selectUser(userId);
  }
  onEditUserFn(userId: number) {
    this.selectedUserForEdit.set(this.users().find((user) => user.id === userId));
    this.addNewUserFormShow = true;
  }
  onDeleteUserFn(userId: number) {
    this.taskService.deleteUserTask(userId);

    this.userService.deleteUser(userId);
  }
}
