import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  signal,
  input,
  output,
  model,
} from '@angular/core';
import { NewTaskInterface } from '../models/new-task.interface';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, ModalComponent],
  templateUrl: './new-task.component.html',
  styleUrls: ['../shared/form/form.component.css'],
  standalone: true,
})
export class NewTaskComponent implements OnInit {
  // @Output() taskAdded = new EventEmitter<NewTaskInterface>();
  // @Output() taskAddCancelled = new EventEmitter<void>();

  taskAdded = output<NewTaskInterface>();
  taskAddCancelled = output<void>();

  ngOnInit(): void {}

  taskModelObject: NewTaskInterface = {
    title: '',
    summary: '',
    dueDate: null,
  };

  cancelAddTask() {
    this.taskAddCancelled.emit();
  }

  submitNewTask() {
    this.taskAdded.emit(this.taskModelObject);
  }
}
