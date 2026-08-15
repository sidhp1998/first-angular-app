import { Component,input,model,output, OnInit } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal.component';
import { FormComponent } from '../shared/form/form.component';
import { FormsModule } from '@angular/forms';
import { NewUserInterface } from '../models/new-user.interface';
import { UserInterface } from '../models/user.interface';
@Component({
  selector: 'app-new-user-form',
  imports: [ModalComponent, FormComponent, FormsModule],
  templateUrl: './app-new-user-form.component.html',
  styleUrls: ['../shared/form/form.component.css'],
  standalone: true,
})
export class AppNewUserFormComponent implements OnInit {
  onUserAdd = output<NewUserInterface>();
  inputUserForEdit = input<UserInterface|undefined>(undefined);
  onCancelAdd = output<void>();
  newUser = model<NewUserInterface>({
    name: '',
    avatar: '',
  });
  ngOnInit(){
    if(this.inputUserForEdit()){
      this.newUser.set({
        name: this.inputUserForEdit()!.name,
        avatar: this.inputUserForEdit()!.avatar,
      });
    }
  }
  submitAddNewUser() {
    this.onUserAdd.emit(this.newUser());
  }
  cancelAddTask() {
    this.onCancelAdd.emit();
  }
}
