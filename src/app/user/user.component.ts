import { Component, signal, computed } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[this.randomUserIndex]);
  get imagePathGetter() {
    return 'users/' + this.selectedUser().avatar;
  }

  imagePath = computed(()=>{
    return 'users/' + this.selectedUser().avatar;
  })
  onSelectUser(){
    const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomUserIndex]); 
  }
}
