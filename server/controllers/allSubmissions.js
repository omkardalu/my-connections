const submission = require('../models/Submission.js');
exports.handleAllSubmisions = async(req, res) => {
  try{
    const data = await submission.find();
    if(!data){
      res.status(400).json({success: false, message: 'data not found'})
    }
    res.status(200).json({
      success:true,
      submissions:data
    });

  } catch(e) {
    console.log('Error in fetching MongoDB: ',error.message);
    res.status(500).json({
      success: false,
      message:'fetching failed'
    });
  }
};