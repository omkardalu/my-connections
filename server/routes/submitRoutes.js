const express = require('express');
const {handleSubmit} = require('../controllers/submitController.js');
const { handleAllSubmisions } = require('../controllers/allSubmissions.js');

const router = express.Router();

router.post('/submit', handleSubmit);
router.get('/allsubmissions', handleAllSubmisions);

module.exports = router;
