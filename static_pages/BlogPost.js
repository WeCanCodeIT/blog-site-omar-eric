
class BlogPost {

  
    constructor(id, firstName = "John", lastName = "Doe", destination = "home", blogPostText = "nothing yet") {
      this.blogPostId = id;
      // this.tags = tags;
      this.destination = destination;
      this.firstName = firstName;
      this.lastName = lastName;
      this.blogPostText = blogPostText;
    }
  
    getFullName () {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getId () {
      return this.blogPostId;
    }

    getText () {
      return this.blogPostText;
    }

    getDate() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        const d = new Date();

        let date = months[d.getMonth()] + " " + d.getDate() +", " + d.getFullYear();

      return date;
    }
  }

  module.exports = BlogPost;