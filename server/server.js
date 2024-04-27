const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
const tesseract = require('tesseract.js');
const punycode = require('punycode/');

// mongoose.connect('<Mongoose Server URL>', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//   console.log('Connected to Database');
// });

const imagePath = 'client/assets/sample2.png';

let tempVariable = ''

tesseract.recognize(imagePath)
  .then((result) => {
    // console.log(punycode.encode(result.data.text))
    tempVariable = punycode.encode(result.data.text)
    console.log(tempVariable)
  }).catch((error) => {
    console.log(error)
  })


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
const router = require('./routers/router.js')

// serve static files

// unknown route handler
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

// module.exports = app.listen(3000, () => console.log(`Listening on port ${port}`));
