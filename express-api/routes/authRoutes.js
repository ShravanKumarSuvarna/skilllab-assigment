// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');
const {
  validateLogin,
  validateRegistration,
} = require('../middleware/validationMiddleware');

router.get('/login', (req, res) => {
  res.sendFile('login.html', { root: './public' });
});

router.get('/register', (req, res) => {
  res.sendFile('register.html', { root: './public' });
});

router.post('/login', validateLogin, login);

// Add validation middleware for registration route
router.post('/register', validateRegistration, register);

module.exports = router;
