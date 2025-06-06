const submission = require('../models/Submission.js');
exports.handleSubmit = async(req, res) => {
  try{

    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Name is required',
      });
    }
    
    const newEntry = await submission.create({name});

    res.status(201).json({
      success: true,
      message: 'Name received',
      data: newEntry
    });
  }catch(error){
    console.error('Error saving to DB:',error.message);
    
    res.status(500).json({error: 'Server error!!!'})
  }
}; 