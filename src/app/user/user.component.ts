import { Component, computed, signal, Input, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from "./../dummy-users"

import { User } from "./user.model"
import { CardComponent } from '../shared/card/card.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;

  // setting up a output value that can be accesses wuth same in parent compoent
  @Output() selectUser = new EventEmitter<string>();


  get imagePath() {
    return "./../assets/users/" + this.user.avatar
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id)
  }

}
