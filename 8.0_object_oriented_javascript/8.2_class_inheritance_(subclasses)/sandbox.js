/*
  Making and using subclasses in javascript.
*/

// Creating a array of users.
let users = [];

// Defining the "super" class.
class User {
  constructor(username, email) {
    this.email = email;
    this.username = username;
    users.push(this);
  }

  login() {
    console.log(`The user ${this.username} has logged in.`);
    return this;
  }

  logout() {
    console.log(`The user ${this.username} has logged out.`);
    return this;
  }
}

// Defining a subclass.
class Admin extends User {
  constructor(username, email) {
    super(username, email);
  }

  deleteUser(other) {
    users = users.filter(user => user !== other);
    return this;
  }
}

// Creating users.
let admin1 = new Admin('admin', 'admin@example.com');
let user1 = new User('Scott', 'scott@example.com');
let user2 = new User('Luigi', 'luigi@example.com');

console.log(users);

// Deleting a user via the Admin subclass.
admin1.deleteUser(user1);

console.log(users);
