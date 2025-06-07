const Submission = require("../models/Submission");

exports.handleSubmissionDelete = async (req,res) => {
  const { id } = req.params;
  try{
    const data = await Submission.findByIdAndDelete(id);
    res.status(200).json({success:true, message: 'Submission Deleted'});
  }catch(e) {
    console.log('Error fetching MongoDB',e.message);
    re.status(400).json({success:false, message:'failed to delete'});
  }
}