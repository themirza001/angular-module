import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { DUMMY_USERS } from '../dummy-users';
import { Task, NewTask } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string
  users = DUMMY_USERS;
  isAddingTask: boolean = false;
  private tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUserName(): string | undefined {
    const user = this.users.find((u) => u.id === this.selectedUserId);
    return user ? user.name : undefined;
  }

  get currUserTasks(): Task[] {
    return this.tasksService.getUserTasks(this.selectedUserId);
  }


  handleTaskCreation() {
    this.isAddingTask = true
  }

  handleNewTaskDialogClose() {
    this.isAddingTask = false
  }

  handleTaskAdditon(newTask: NewTask) {
    this.tasksService.addNewTask(newTask, this.selectedUserId)
    this.handleNewTaskDialogClose();
  }

}
