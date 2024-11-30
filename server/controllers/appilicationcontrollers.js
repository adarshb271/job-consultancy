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

//   const { email, mobilenumber, firstname, address ,

//        gender,
//       state,
//       panchayath,
//       pincode,
     
//       currentlocation,
//       experience,
//       qualification,
//       skills,
//       district,
//   } = req.body;
//   const pdfPath = req.file ? req.file.path : null; 

//   try {
//     const newApplication = await Applicationform.create({
//       email,
//       mobilenumber,
//       firstname,
//        gender,
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
// module.exports.getApplication = async (req, res) => {
//   try {
//     const response = await Applicationform.find(); // Corrected typo
//     res.status(200).json({
//       message: 'Applications fetched successfully',
//       data: response,
//     });
//   } catch (error) {
//     console.error('Error in getApplications:', error);
//     res.status(500).json({
//       message: 'Error in fetching applications',
//       error: error.message,
//     });
//   }
// };
module.exports.submitApplication = async (req, res) => {
  console.log('Received application data:', req.body); 
  console.log('Received file:', req.file); 

  const { email, mobilenumber, firstname, address,
         gender, state, panchayath, pincode,
         currentlocation, experience, qualification,
         skills, district } = req.body;

  const pdfPath = req.file ? req.file.path : null; 

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









