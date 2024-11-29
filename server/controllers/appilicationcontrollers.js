const Applicationform = require('../db/models/appliciation-schema');
const Appilication = require('../db/models/appliciation-schema')


module.exports.getApplication = async (req, res) => {
  const response = await Appilication.find();
  res.status(201).json(response);
};
module.exports.submitApplication = async (req, res) => {
  console.log('Received application data:', req.body); // Log form data
  console.log('Received file:', req.file); // Log the uploaded file info

  const { email, mobilenumber, firstname, address } = req.body;
  const pdfPath = req.file ? req.file.path : null; // Save the file path if a file was uploaded

  try {
    // Save the application form to the database
    const newApplication = await Applicationform.create({
      email,
      mobilenumber,
      firstname,
      address,
      file: pdfPath,  // Store the file path in the database
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

// module.exports.submitApplication = async (req, res) => {
//   console.log('Received appointment data:', req.body);
//   try {
//     const response = await Applicationform.create({
//       email: req.body.email,
//       mobilenumber: req.body.mobilenumber,
//       firstname: req.body.firstname,
//       address:req.body.address,

//     });

//     res
//       .status(200)
//       .json({ message: 'Submit sucessfully', data: response });
//   } catch (error) {
//     res.status(500).json({ message: 'Error in submit:', e: error.message });
//   }
// };

// const Application = require('../db/models/appliciation-schema'); // Correct the spelling here

// Submit an application
// module.exports.submitApplication = async (req, res) => {
//   const { firstname, lastname, email, mobilenumber, dob, gender, address } = req.body;

//   try {
//     // Create a new application using the correct model (Application, not Appilication)
//     const newApplication = new Application({
//       firstname,
//       lastname,
//       email,
//       mobilenumber,
//       dob,
//       gender,
//       address,
//     });

//     // Save the application to the database
//     await newApplication.save();

//     res.status(201).json({
//       message: 'Application submitted successfully',
//       application: newApplication,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };










