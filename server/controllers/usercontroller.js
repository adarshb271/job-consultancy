const User= require('../db/models/user-schema')
const Job = require('../db/models/job-schema');


const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.getUser = async (req, res) => {
    const response = await User.find();
    res.status(201).json(response);
  };



 

  
  module.exports.signupUser = async (req, res) => {
    try {
      // Check if the email already exists
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(409).json({ message: 'Email already exists. Please choose another one.' });
      }
  
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      // Create the new user
      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      });
  
      // Email setup using nodemailer
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL, 
          pass: process.env.PASSWORD,
        },
      });
  
      // Set the email options
      let mailOptions = {
        from: process.env.MAIL,
        to: req.body.email,
        subject: 'Welcome to job conselting ',
        text: `Dear User, \n\nYour account has been successfully created on job conselting App. \n\nYou can login using your email: ${req.body.email} and password: ${req.body.password}.\n\nPlease change your password after logging in for better security.`,
      };
  
      // Send the email
      await transporter.sendMail(mailOptions);
  
      // Respond with success message
      return res.status(201).json({
        message: 'User registered successfully, and email sent with login credentials.',
        user: newUser,
      });
  
    } catch (err) {
      console.error('Signup error:', err);
      return res.status(500).json({ message: 'Server error during signup', error: err.message });
    }
  };
  
  module.exports.loginUser = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(403).json({ message: 'Email is incorrect' });
    }
    const isMatching = await bcrypt.compare(req.body.password, user.password);
    if (!isMatching) {
      return res.status(403).json({ message: 'Incorrect Password' });
    }
  
    const token = jwt.sign({ id: user._id, role: 'user' }, process.env.USERKEY, {
      expiresIn: '365d',
    });
  
    res.status(200).json({ message: 'You Are Logged In', token, id: user._id });
  };



module.exports.applyForJob = async (req, res) => {
  const userId = req.user.id; // Assuming user is authenticated and `req.user` contains their ID
  const { jobId } = req.params;

  try {
      // Check if the job exists
      const job = await Job.findById(jobId);
      console.log('Job:', job);  // Log the job details
      if (!job) {
          return res.status(404).json({ message: 'Job not found' });
      }

      // Find the user by ID
      const user = await User.findById(userId);
      console.log('User:', user);  // Log the user details
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Prevent duplicate job applications
      const alreadyApplied = user.appliedJobs.some(
          (application) => application.jobId.toString() === jobId
      );
      if (alreadyApplied) {
          return res.status(400).json({ message: 'You have already applied for this job' });
      }

      // Add job to user's appliedJobs array
      user.appliedJobs.push({ jobId });
      await user.save();

      res.status(200).json({ message: 'Job application submitted successfully!' });
  } catch (error) {
      console.error('Error applying for job:', error);
      res.status(500).json({ message: 'Server error', error });
  }
};


module.exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(201).json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
};
module.exports.getPostedJobs = async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs from the database
    res.status(200).json(jobs); // Send jobs as JSON response
  } catch (error) {
    console.error('Error fetching posted jobs:', error);
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
};