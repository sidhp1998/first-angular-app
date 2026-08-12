import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import {TaskListComponent} from './taskList/taskList.component';
import { DUMMY_USERS } from './user/dummy_users';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule,TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;

  get selectedUser() {
    return this.users.find((user: any) => user.selected)!;
  }

  onSelectUser(user: any) {
    this.users = this.users.map((u: any) => ({
      ...u,
      selected: u.id === selectedUser.id,
    }));
  }

  onAddUser
}
