import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskListComponent } from './taskList/taskList.component';
import { AddUserComponent } from './app-add-user/app-add-user.component';
import { UsersService } from './services/users.service';
import { UserInterface } from './models/user.interface';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskListComponent, AddUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  protected readonly title = signal('first-angular-app');
  private userService = inject(UsersService);
  users = signal<UserInterface[]>(this.userService.usersList());
  selectedUser = signal<UserInterface|null>(null);
  onClickAddUser(){

  }


  onSelectUser(userID:number){
    
  }
}
