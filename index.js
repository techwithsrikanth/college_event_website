const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const authController = require('./controllers/authController');
const participateController = require('./controllers/participateController');
const organizeController = require('./controllers/organizeController');
const createEventController = require('./controllers/createEventController');



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('DB connection is a success');
    })
    .catch((error) => {
      console.error('DB connection error:', error);
    });

    
app.use('/images', express.static('public/images'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api1', participateController);
app.use('/api2', organizeController);
app.use('/api3', createEventController);

app.listen(process.env.PORT, () => console.log('Server has been connected successfully'));
