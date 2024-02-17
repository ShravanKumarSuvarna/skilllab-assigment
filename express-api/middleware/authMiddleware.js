const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

const authenticateUser = (req, res, next) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  req.user = user;

  next();
};

module.exports = { authenticateUser };
