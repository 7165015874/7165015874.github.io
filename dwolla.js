"use strict";
var Dwolla = (function () {
    function Dwolla(firstName, lastName, birthMonth, birthDate, birthYear, mobileNumber, lastFourSsn, address, zip, city, state, pin, confirmPin, accountNum, routingNum) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthMonth = birthMonth;
        this.birthDate = birthDate;
        this.birthYear = birthYear;
        this.mobileNumber = mobileNumber;
        this.lastFourSsn = lastFourSsn;
        this.address = address;
        this.zip = zip;
        this.city = city;
        this.state = state;
        this.pin = pin;
        this.confirmPin = confirmPin;
        this.accountNum = accountNum;
        this.routingNum = routingNum;
    }
    return Dwolla;
}());
exports.Dwolla = Dwolla;
//# sourceMappingURL=dwolla.js.map