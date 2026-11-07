import { Component, EventEmitter, NgModule, Output, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { DUMMY_TASKS } from '../../dummy-tasks';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeNewTaskDialog = new EventEmitter();

  private taskService = inject(TasksService);

  enteredTitle: string = "";
  enteredSummary: string = "";
  enteredDate: string = "";

  handleNewTaskDialogClose() {
    this.closeNewTaskDialog.emit()
  }
  handleNewTaskAddition() {

    this.taskService.addNewTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }, this.userId)

    this.handleNewTaskDialogClose();
  }

}
