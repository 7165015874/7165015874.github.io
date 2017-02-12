import {Routes, RouterModule} from '@angular/router';

import {DwollaFormComponent} from './dwolla-form.component';
import {DonationFormComponent} from './donation.component';
import {UserFormComponent} from "./user-form.component";

const appRoutes: Routes = [
  {path: '', component:UserFormComponent},
  {path:'dwolla', component: DwollaFormComponent },
  {path: ':donation', component:DonationFormComponent },
  {path: '', pathMatch: 'full', redirectTo: 'all'}
];

export const routing = RouterModule.forRoot(appRoutes);
