import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'donation-form',
  templateUrl: 'donation.component.html',
  styleUrls: ['./donation.component.css']
})

export class DonationFormComponent {
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done

}
