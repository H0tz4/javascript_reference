/*
  Creating javascript classes.
*/

// Creating a class.
class User {
  // Making a constructor.
  constructor(username, email) {
    // Setting up proprieties
    this.email = email;
    this.username = username;
  }

  // Defining methods.
  login() {
    console.log(`The user ${this.username} has logged in.`);
    return this; // <- Returns the object itself.
  }

  logout() {
    console.log(`The user ${this.username} has logged out.`);
    return this;
  }
}

// Creating a object and using it.
let user1 = new User('Scott', 'scott@example.com');

user1.login();
console.log(user1.username, user1.email);
console.log(user1);
user1.logout();

// Method chaining.
user1.login().logout() // <- this only works because in the method
                       // we are returning the object itself.
