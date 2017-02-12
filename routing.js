"use strict";
var router_1 = require('@angular/router');
var dwolla_form_component_1 = require('./dwolla-form.component');
var donation_component_1 = require('./donation.component');
var user_form_component_1 = require("./user-form.component");
var appRoutes = [
    { path: '', component: user_form_component_1.UserFormComponent },
    { path: 'dwolla', component: dwolla_form_component_1.DwollaFormComponent },
    { path: ':donation', component: donation_component_1.DonationFormComponent },
    { path: '', pathMatch: 'full', redirectTo: 'all' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.js.map