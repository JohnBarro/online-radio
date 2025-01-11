require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
app.use(compression());


app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const app = express();
const PORT = 4200;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://bonzshane2:0VHyaibpxLU2qPeH@onlineradio.gb9u1.mongodb.net/?retryWrites=true&w=majority&appName=OnlineRadio';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Signup Endpoint
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Email not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    res.json({ success: true, message: 'Login successful', username: user.username, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Livechat Schema and Model
const livechatSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }, // No auto-index here
});

// Disable auto-creation of indexes to avoid conflicts
livechatSchema.set('autoIndex', false);

// Define TTL index manually
try {
  livechatSchema.index({ timestamp: 1 }, { expireAfterSeconds: 21600 }); // TTL for 6 hours
} catch (err) {
  console.error('Index creation error:', err.message);
}

const Livechat = mongoose.model('Livechat', livechatSchema);

// Fetch all messages
app.get('/api/livechat/messages', async (req, res) => {
  try {
    const messages = await Livechat.find().sort({ timestamp: -1 });
    res.status(200).json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a new message
app.post('/api/livechat/send', async (req, res) => {
  const { username, email, message } = req.body;

  if (!username || !email || !message) {
    console.error('Missing fields in request:', req.body); // Log missing fields
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newMessage = new Livechat({ username, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
