// controllers/blogController.js

// Dummy blog data for demonstration purposes
const blogs = [
  { id: 1, authorId: 1, title: 'Blog 1', content: 'Content of Blog 1' },
  { id: 2, authorId: 2, title: 'Blog 2', content: 'Content of Blog 2' },
];

// Function to retrieve all blogs
const getAllBlogs = (req, res) => {
  res.status(200).json(blogs);
};

// Function to create a new blog
let nextBlogId = 3; // Start with the next available ID
const createBlog = (req, res) => {
  const { title, content } = req.body;
  const authorId = req.user.id;
  const newBlog = { id: nextBlogId++, authorId, title, content };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
};

// Function to retrieve blogs by author ID
const getBlogByAuthorId = (req, res) => {
  const authorId = parseInt(req.params.authorId);
  const authorBlogs = blogs.filter((blog) => blog.authorId === authorId);
  res.status(200).json(authorBlogs);
};

module.exports = { getAllBlogs, createBlog, getBlogByAuthorId };
