
class BlogPost {

  
    constructor(firstName = "John", lastName = "Doe", destination = "home", blogPostText = "nothing yet", tags) {
      this.tags = [];
      this.destination = destination;
      this.firstName = firstName;
      this.lastName = lastName;
      this.
    }
  
    getFullName () {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getId () {
      return this.id;
    }
  
    getText () {
      return this.blogPostText;
    }
  }
  
  module.exports = BlogPost;