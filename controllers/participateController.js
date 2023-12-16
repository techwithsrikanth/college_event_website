
const express = require('express');
const ParticipateUserSchema = require('../models/ParticipateUser'); 

const participateController = express.Router();

participateController.post('/participate', async (req, res) => {
  try {
    const { name, email, phone, collegeName, password } = req.body;

    console.log(req.body);

    const newUser = new ParticipateUserSchema({
      name,
      email,
      phone, 
      collegeName, 
      password,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser); 
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = participateController;
