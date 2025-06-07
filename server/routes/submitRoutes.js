const express = require('express');
const { handleSubmit } = require('../controllers/submitController.js');
const { handleAllSubmisions } = require('../controllers/allSubmissions.js');
const { handleSubmissionUpdate } = require('../controllers/submissionUpdate.js');
const { handleSubmissionDelete } = require('../controllers/submissionDelete.js');
const router = express.Router();

router.post('/submit', handleSubmit);
router.get('/allsubmissions', handleAllSubmisions);
router.put('/submit/:id', handleSubmissionUpdate);
router.delete('/submit/:id',handleSubmissionDelete)
module.exports = router;
