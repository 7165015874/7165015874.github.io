import { Component } from '@angular/core';
import { Dwolla }    from './dwolla';

@Component({
  moduleId: module.id,
  selector: 'dwolla-form',
  templateUrl: 'dwolla-form.component.html',
  styleUrls: ['./dwolla-form.component.css']
})

export class DwollaFormComponent {
  // email = ['wesniem@yahoo.com'];
  model = new Dwolla('', '', '', null,null,null,null,'',null,'','',null,null,null,null);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  newUser() {
    this.model = new Dwolla('', '', '', null,null,null,null,'',null,'','',null,null,null,null);
  }
}
