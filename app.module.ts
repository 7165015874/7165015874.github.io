import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';
import {UserFormComponent} from './user-form.component';
import {DwollaFormComponent} from './dwolla-form.component';
import {DonationFormComponent} from './donation.component';
import {RouterModule, Routes} from '@angular/router';
import {routing} from './routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    routing
  ],
  declarations: [
    AppComponent,
    UserFormComponent,
    DwollaFormComponent,
    DonationFormComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
