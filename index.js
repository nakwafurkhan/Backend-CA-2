const { config } = require('dotenv');
const express = require('express');

config();
const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
  const { username, email, password, dateOfBirth } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username cannot be empty" });
  }

  if (!email) {
    return res.status(400).json({ error: "Email cannot be empty" });
  }
  
  if (!password || password.length < 8 || password.length > 16) {
    return res.status(400).json({ error: "Password length should be greater than 8 or less than or equal to 16" });
  }

  res.status(201).json({
    message: "User signed up successfully",
    user: { username, email, password, dateOfBirth }
  });
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
