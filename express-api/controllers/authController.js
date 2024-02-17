const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = generateToken(user.id);
  res.json({ token });
};

const register = (req, res) => {
  // For simplicity, let's assume we add the new user to our users array
  const { username, password } = req.body;
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  res
    .status(201)
    .json({ message: 'User registered successfully', user: newUser });
};

module.exports = { login, register };
