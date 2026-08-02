import { Component } from '@angular/core';
import {DUMMY_USERS} from './dummy_users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent  {
  randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  selectedUser = DUMMY_USERS[this.randomUserIndex];
  get imagePath() {
    return 'users/' + this.selectedUser.avatar;
  }
}
