const validateLogin = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' });
  }
  next();
};

const validateRegistration = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Both username and password are required' });
  }

  next();
};
module.exports = { validateLogin, validateRegistration };
