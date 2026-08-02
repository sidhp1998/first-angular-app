import { Component, Input, Output,EventEmitter} from '@angular/core';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent  {
  @Input({required: true}) selectedUser!: any;
  @Output() selectUser = new EventEmitter<string>();
  get imagePath(): string {
    return `users/${this.selectedUser.avatar}`;
  }
  onSelectUser(){
    this.selectUser.emit(this.selectedUser);
  }
}
