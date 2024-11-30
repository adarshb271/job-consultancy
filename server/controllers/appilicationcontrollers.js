const Applicationform = require('../db/models/appliciation-schema');
const Appilication = require('../db/models/appliciation-schema')


module.exports.getApplication = async (req, res) => {
  const response = await Appilication.find();
  res.status(201).json(response);
};
module.exports.submitApplication = async (req, res) => {
  console.log('Received application data:', req.body); 
  console.log('Received file:', req.file); 

  const { email, mobilenumber, firstname, address ,

       gender,
      state,
      panchayath,
      pincode,
     
      currentlocation,
      experience,
      qualification,
      skills,
      district,
  } = req.body;
  const pdfPath = req.file ? req.file.path : null; 

  try {
    const newApplication = await Applicationform.create({
      email,
      mobilenumber,
      firstname,
       gender,
      state,
      panchayath,
      pincode,
      address,
      currentlocation,
      experience,
      qualification,
      skills,
      district,
      file: pdfPath,  

    });

    res.status(200).json({
      message: 'Application submitted successfully',
      data: newApplication,
    });
  } catch (error) {
    console.error('Error in submit:', error);
    res.status(500).json({
      message: 'Error in submit:',
      error: error.message,
    });
  }
};








