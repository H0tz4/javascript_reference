let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@genericemail.com',
  blogs: ['way mac & cheese rules', '10 things to make with marmite'],

  // Methods:
  login: () => { console.log('The user has been logged in.') },
  logout: () => { console.log('The user has been logged out.') },
  logBlogs() {
    this.blogs.forEach(blog => {
      console.log(blog);
    });
  },
}

user.logBlogs();