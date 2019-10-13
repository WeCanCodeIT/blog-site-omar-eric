
class Blog {
    constructor() {
      this.blog = new Map();
    }
  
    addBlogPost(blogPostToAdd) {
      this.blog.set(blogPostToAdd.getId(), blogPostToAdd);
    }
  
    getBlogPost(blogPostId) {
      return this.blog.get(blogPostId);
    }
  
    getBlogArray() {
      return [...this.blog.values()];
    }
  }
  
  module.exports = Blog;