const Submission = require("../models/Submission.js");

exports.handleSubmissionUpdate = async (req, res) => {
  const {id} = req.params;
  const {name} = req.body;

  if (!id || !name) return res.status(400).json({success:false, message:'id, name required'});

  try{
    const updated = await Submission.findByIdAndUpdate(id,{name},{new:true});
    res.status(200).json({success:true, updated})
  }catch (e) {
    console.log('ERROR fetching MONGODB:', e.message);
  }
}