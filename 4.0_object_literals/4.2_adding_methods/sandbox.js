// This is a object literal:
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@genericemail.com',
  blogs: ['way mac & cheese rules', '10 things to make with marmite'],

  // Methods:
  login: () => { console.log('The user has been logged in.') },
  logout() { console.log('The user has been logged out.') },
  isLogged: function() { return true; },
}

user.login();
user.logout();