// app.js

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(authRoutes); // Check if authRoutes is properly defined
app.use(blogRoutes); // Check if blogRoutes is properly defined

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
