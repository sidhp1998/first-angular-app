import { Component, computed, input,output} from '@angular/core';
import {NgClass} from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent  {
  selectedUser = input.required<any>();

  select = output<any>();
  imagePath = computed(()=>{
    return `users/${this.selectedUser().avatar}`;
  })    
  
  onSelectUser(){
    this.select.emit(this.selectedUser());
  }
}
