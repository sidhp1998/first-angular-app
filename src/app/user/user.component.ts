import { Component, Input} from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent  {
  @Input({required: true}) selectedUser!: any;
  get imagePath(): string {
    return `users/${this.selectedUser.avatar}`;
  }
  onSelectUser(){
  
  }
}
