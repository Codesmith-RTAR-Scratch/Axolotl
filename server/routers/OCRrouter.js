const express = require('express');
const controller = require('../controllers/OCRcontroller.js');
const fileupload = require('express-fileupload');
const fileUpload = require('express-fileupload');

const router = express.Router();

router.use(fileUpload());

router.post('/', controller.upload, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;