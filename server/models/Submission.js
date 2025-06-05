const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  submittedAt:{
    type:Date,
    default: Date.now
  }
});

module.exports = mongoose.model('submission', submissionSchema);
