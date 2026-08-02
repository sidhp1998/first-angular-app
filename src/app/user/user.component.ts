import { Component, computed, input} from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent  {
  selectedUser = input.required<any>();
  imagePath = computed(()=>{
    return `users/${this.selectedUser().avatar}`;
  })    
  
  onSelectUser(){
  
  }
}
