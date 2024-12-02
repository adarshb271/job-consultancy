const Admin= require('../db/models/admin-schema')
const Job= require('../db/models/job-schema')
// const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.signupAdmin = async (req, res) => {
    try {
      const admin = await Admin.findOne({ email: req.body.email });
      if (admin) {
        return res
          .status(403)
          .json({ message: 'Email already exists, please use a different one.' });
      }
  
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      const newAdmin = await Admin.create({
        ...req.body,
        password: hashedPassword,
      });
  
      return res
        .status(201)
        .json({ message: 'Admin created successfully.', admin: newAdmin });
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Server error', error: err.message });
    }
  };
  



module.exports.loginAdmin = async (req, res) => {
    const { email } = req.body;
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res.status(403).json({ message: 'Email is incorrect' });
    }
    try {
      const isMatching = await bcrypt.compare(req.body.password, doctor.password);
      if (!isMatching) {
        return res.status(403).json({ message: 'Incorrect Password' });
      }
    } catch {
      console.log('error');
    }
  
    const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.ADMIN, {
      expiresIn: '365d',
    });
  
    res.status(200).json({ message: 'You Are Logged In', token, id: admin._id });
  };


// module.exports.updateJobProfile = async (req, res) => {
//     try {
//         const { jobId } = req.params; 
//         const { title, description, requirements, salary, location, company } = req.body;

//         const updatedJob = await Job.findByIdAndUpdate(
//             jobId,
//             { title, description, requirements, salary, location, company, updatedAt: Date.now() },
//             { new: true, runValidators: true }
//         );

//         if (!updatedJob) {
//             return res.status(404).json({ message: 'Job profile not found.' });
//         }

        
//         res.status(200).json({ message: 'Job profile updated successfully.', updatedJob });
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating job profile.', error: error.message });
//     }
// };


// module.exports. addNewJob = async (req, res) => {
//   try {
//       const { name,title, description, requirements, salary, location, company } = req.body;

//       // Validate required fields
//       if (!title || !description || !requirements || !salary || !location || !company) {
//           return res.status(400).json({ message: 'All fields are required.' });
//       }

//       // Create a new job instance
//       const newJob = new Job({
//         name,
//           title,
//           description,
//           requirements,
//           salary,
//           location,
//           company,
//       });

//       // Save the job to the database
//       const savedJob = await newJob.save();

//       // Respond with the saved job
//       res.status(201).json({ message: 'Job added successfully.', job: savedJob });
//   } catch (error) {
//       res.status(500).json({ message: 'Error adding job.', error: error.message });
//   }
// };