"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dwolla_1 = require('./dwolla');
var DwollaFormComponent = (function () {
    function DwollaFormComponent() {
        // email = ['wesniem@yahoo.com'];
        this.model = new dwolla_1.Dwolla('', '', '', null, null, null, null, '', null, '', '', null, null, null, null);
        this.submitted = false;
    }
    DwollaFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(DwollaFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    DwollaFormComponent.prototype.newUser = function () {
        this.model = new dwolla_1.Dwolla('', '', '', null, null, null, null, '', null, '', '', null, null, null, null);
    };
    DwollaFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dwolla-form',
            templateUrl: 'dwolla-form.component.html',
            styleUrls: ['./dwolla-form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DwollaFormComponent);
    return DwollaFormComponent;
}());
exports.DwollaFormComponent = DwollaFormComponent;
//# sourceMappingURL=dwolla-form.component.js.map