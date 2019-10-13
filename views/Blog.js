
class Blog {
    constructor() {
      this.blogPosts = new Map();
    }
  
    addBlogPost(blogPostToAdd) {
      this.blogPosts.set(blogPostToAdd.getId(),blogPostToAdd);
    }
  
    getBlogPost(blogPostId) {
      return this.blogPosts.get(blogPostId);
    }
  
    getBlogPostsArray() {
      return [...this.blogPosts.values()];
    }
  }
  
  module.exports = Blog;