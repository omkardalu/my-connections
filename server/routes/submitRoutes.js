const express = require('express');
const {handleSubmit} = require('../controllers/submitController.js');

const router = express.Router();

router.post('/submit', handleSubmit);

module.exports = router;
