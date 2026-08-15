import { Component, computed, input,output} from '@angular/core';
import {NgClass} from '@angular/common';
import { UserInterface } from '../models/user.interface';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent  {
  selectedUser = input.required<UserInterface>();

  select = output<UserInterface>();
  edit = output<number>();
  delete = output<number>();
  
  imagePath = computed(()=>{
    return `users/${this.selectedUser().avatar}`;
  })    
  
  onSelectUser(){
    this.select.emit(this.selectedUser());
  }

  onEditUser(event:Event){
    event.stopPropagation();
    this.edit.emit(this.selectedUser().id);
  }

  onDeleteUser(event:Event){
    event.stopPropagation();
    this.delete.emit(this.selectedUser().id);
  }
}
