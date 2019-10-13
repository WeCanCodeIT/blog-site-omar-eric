const BlogPost = require("./views/BlogPost");
const Blog = require("./views/Blog");

const input = require("readline-sync");


console.log("Welcome to Omar and Eric's Travel Blog!");
console.log("-------------------------");
console.log();
console.log("Please select an option: ");
console.log("-------------------------");
console.log();
console.log("1. Print current blog posts");
console.log("2. Retrieve a specific post");
console.log();
console.log();

const travelBlog = new Blog();
travelBlog.addBlogPost(new BlogPost("1", "Henry", "the Eighth","New York", "This place is expensive."));
travelBlog.addBlogPost(new BlogPost("2", "Joe", "Sixpack","Florida", "Where can a guy get a beer around here?"));

const userSelection = input.question("Which option would you like to choose? ");

switch (userSelection) {
  case "1":
    printCurrentRoster();
    break;

  case "2":
    printIndividualPost();
    break;

  default:
    break;
}

function printCurrentRoster() {
  const blogPosts = travelBlog.getBlogPostsArray();
    blogPosts.forEach(blogPost => {
    console.log(`${blogPost.getId()}: ${blogPost.getFullName()}`);
  });
} 

function printIndividualPost() {
  console.log("Here is the list of current posts:");
  console.log("-------------------------------------");
  console.log();
  printCurrentRoster();
  console.log("-------------------------------------");
  console.log();
  const selectedBlogPostId = input.question(
    "Please enter the ID of the blog post to select: "
  );
  const blogPost = travelBlog.getBlogPost(selectedBlogPostId);
  console.log(`${blogPost.getId()}: ${blogPost.getFullName()}`);
}