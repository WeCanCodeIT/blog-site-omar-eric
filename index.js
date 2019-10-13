const BlogPost = require("./views/BlogPost");

const exampleBlogPost = new BlogPost();

const date = exampleBlogPost.getDate();

console.log(exampleBlogPost);
console.log(date);