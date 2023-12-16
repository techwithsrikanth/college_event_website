const express = require('express');
const OrgUserSchema = require('../models/OrganizerUser')
const organizeController = express.Router();
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

organizeController.post('/organize', upload.single('idcard'), async (req, res) => {
    try {
        const { name, email, password, college, phoneNumber } = req.body;
        const idcardPath = req.file.path;
      
        const newUser = new OrgUserSchema({
          name,
          email,
          password,
          college,
          idcard: idcardPath,
          phone: phoneNumber,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server Error' });
      }
    });      
  


module.exports = organizeController;
