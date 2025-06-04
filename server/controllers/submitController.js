exports.handleSubmit = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: 'Name is required',
    });
  }
  console.log(name);

  res.status(201).json({success: true, message: 'Name received'});
}; 