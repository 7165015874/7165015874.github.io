import { Component } from '@angular/core';
import { User }    from './user';
@Component({
  moduleId: module.id,
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  // email = ['wesniem@yahoo.com'];
  model = new User('', '', '', '','','');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  newUser() {
    this.model = new User('', '', '','','','');
  }
}
