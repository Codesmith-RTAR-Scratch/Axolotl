const express = require('express');
const controller = require('../controllers/OCRcontroller.js');

const router = express.Router();

router.post('/', controller.upload, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;