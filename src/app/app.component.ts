import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserId!: string
  onSelectUser(id: string) {
    this.selectedUserId = this.users.find((user) => user.id === id)?.id ?? ""
  }
}
