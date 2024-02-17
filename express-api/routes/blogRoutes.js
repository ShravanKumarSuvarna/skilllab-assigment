// routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middleware/authMiddleware');
const { getAllBlogs } = require('../controllers/blogController');
const ejs = require('ejs');
const path = require('path');

// Define routes
router.get('/', (req, res) => {
  const blogs = [
    { id: 1, authorId: 1, title: 'Blog 1', content: 'Content of Blog 1' },
    { id: 2, authorId: 2, title: 'Blog 2', content: 'Content of Blog 2' },
  ];

  // Render the HTML template with dynamic data
  ejs.renderFile(
    path.join(__dirname, '../views/blogs.html'),
    { blogs },
    (err, html) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.send(html);
      }
    }
  );
});

module.exports = router;
