/*
  Before ECMAScript6 (where classes was introduced to javascript),
  We was used to make objects using functions and prototypes, and
  this is exactly what happens under de hood when we create a class
  for example. In this file i'm gonna show you how classes works
  under the hood.
*/

// Constructors under the hood.
function User(username, email) {
  this.username = username;
  this.email = email;

  // You can create functions inside the constructor for methods,
  // but in not recommended, because that is what the "prototype"
  // is used for.
  // function login() {
  //     console.log(`The user ${this.username} has just logged in.`);
  // }
}

/*
  The prototype is a object that contains every method of certain class,
  after a object is created the prototype attaches to that other object giving
  it all it's methods and functionality. This improves performance,
  because whe don't need to store the same methods inside every single
  object of the same class.
*/

// Creating prototype "methods" for the user.
User.prototype.login = function() {
  console.log(`The user ${this.username} has just logged in.`);
  return this;
}

User.prototype.logout = function() {
  console.log(`The user ${this.username} has just logged out.`);
  return this;
}

console.log(User.prototype);

// Testing the User "class".
let user1 = new User('Scott', 'scott@example.com');
let user2 = new User('Amanda', 'amanda@example.com');

user1.login().logout();
user2.login().logout();