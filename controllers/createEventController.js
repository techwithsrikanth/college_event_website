const express = require('express');
const createeventSchema = require('../models/CreateEvent');
const createEventController = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

createEventController.post('/createevent', upload.single('posterimg'), async (req, res) => {
  try {
    const 
    { eventType,eventName,collegeName,cashPrize,description,website,regnfees,} = req.body;

    const posterImagePath = req.file.path;

    const newEvent = new createeventSchema({
      eventType,eventName,collegeName,posterimg: posterImagePath,cashPrize,description,website, regnfees

    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

createEventController.get('/events', async (req, res) => {
    try {
      const events = await createeventSchema.find({}, 'eventType eventName collegeName posterimg description cashPrize website regnfees');
      res.status(200).json(events);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  
  module.exports = createEventController;