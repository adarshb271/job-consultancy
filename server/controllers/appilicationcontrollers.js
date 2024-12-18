const Applicationform = require('../db/models/appliciation-schema');




module.exports.getApplication = async (req, res) => {
  try {
    const response = await Applicationform.find();
    
    res.status(200).json({
      message: 'Applications fetched successfully',
      data: response
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    
    res.status(500).json({
      message: 'Error fetching applications',
      error: error.message
    });
  }
};



// module.exports.submitApplication = async (req, res) => {
//   console.log('Received application data:', req.body); 
//   console.log('Received file:', req.file); 

//   const { email, mobilenumber, firstname, address,
//          gender, state, panchayath, pincode,
//          currentlocation, experience, qualification,
//          skills, district } = req.body;

//   const pdfPath = req.file ? req.file.path : null; 

//   try {
//     const existingApplication = await Applicationform.findOne({ mobilenumber });
//     if (existingApplication) {
//       return res.status(400).json({
//         message: 'You have already submitted an application with this mobile number.'
//       });
//     }

//     const newApplication = await Applicationform.create({
//       email,
//       mobilenumber,
//       firstname,
//       gender,
//       state,
//       panchayath,
//       pincode,
//       address,
//       currentlocation,
//       experience,
//       qualification,
//       skills,
//       district,
//       file: pdfPath,
//     });

//     res.status(200).json({
//       message: 'Application submitted successfully',
//       data: newApplication,
//     });
//   } catch (error) {
//     console.error('Error in submit:', error);
//     res.status(500).json({
//       message: 'Error in submit:',
//       error: error.message,
//     });
//   }
// };




const path = require('path');

module.exports.submitApplication = async (req, res) => {
  console.log('Received application data:', req.body); 
  console.log('Received file:', req.file); 

  const { email, mobilenumber, firstname, address,
         gender, state, panchayath, pincode,
         currentlocation, experience, qualification,
         skills, district,jobtitle } = req.body;

  // Get the file name from the uploaded file
  const fileName = req.file ? req.file.filename : null; 

  // Define a relative path to store in the database (e.g., just the filename or a relative path)
  const filePath = fileName ? `uploads/${fileName}` : null;

  try {
    const existingApplication = await Applicationform.findOne({ mobilenumber });
    if (existingApplication) {
      return res.status(400).json({
        message: 'You have already submitted an application with this mobile number.'
      });
    }

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
      jobtitle,
      file: filePath,  // Store the relative file path here
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






module.exports.deleteApplication = async (req, res) => {
  try {
    const { id } = req.params; 
    const response = await Applicationform.findByIdAndDelete(id); 

    if (!response) {
      return res.status(404).json({ message: 'Application not found' }); // Handle case where the application doesn't exist
    }

    res.status(200).json({ message: 'Application deleted successfully' }); // Success response
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the application', error }); // Error response
  }
};







