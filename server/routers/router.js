const express = require('express');
const controller = require('../controllers/controller.js');

const router = express.Router();

router.post('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;