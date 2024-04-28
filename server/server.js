const express = require('express');
const path = require('path');
const router = require('./routers/OCRrouter.js');
// const mongoose = require('mongoose');


// mongoose.connect('<Mongoose Server URL>', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', () => {
//   console.log('Connected to Database');
// });

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/upload', router)

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

module.exports = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
