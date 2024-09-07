const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a user
router.post('/users', async (req, res) =>{
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// List the users
router.get('/users', async (req,res) => {
  try{
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
