"use strict";
var User = (function () {
    function User(email, confirmEmail, password, orgName, city, state) {
        this.email = email;
        this.confirmEmail = confirmEmail;
        this.password = password;
        this.orgName = orgName;
        this.city = city;
        this.state = state;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map