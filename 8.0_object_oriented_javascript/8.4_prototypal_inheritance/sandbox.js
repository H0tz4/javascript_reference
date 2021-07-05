/*
  This file will show you how class inheritance really works
  under the hood in javascript.
*/

// Defining the user.
function User(username, email) {
    this.username = username;
    this.email = email;
}

// Creating prototype "methods" for the user.
User.prototype.login = function() {
  console.log(`The user ${this.username} has just logged in.`);
  return this;
}

User.prototype.logout = function() {
  console.log(`The user ${this.username} has just logged out.`);
  return this;
}

// Defining the admin.
function Admin(username, email, title) {
    User.call(this, username, email);
    this.title = 'Administrator';
}

Admin.prototype = Object.create(User.prototype); // <- copy the user prototype to
                                                 // the admin prototype.

Admin.prototype.deleteUser = function() {
    // deleting the user...
}

console.log(Admin.prototype);

let user1 = new User('Scott', 'scott@example.com');
let user2 = new User('Amanda', 'amanda@example.com');
let admin1 = new Admin('Admin', 'someemail@example.com', 'ADMIN');

console.log(admin1);

user1.login().logout();
user2.login().logout();
admin1.login().logout();