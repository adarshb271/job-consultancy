const Admin= require('../db/models/admin-schema')
const Job= require('../db/models/job-schema')
 const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



module.exports.signupAdmin = async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({ email: req.body.email });
    if (existingAdmin) {
      return res.status(409).json({ message: 'Email already exists. Please choose another one.' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newAdmin = await Admin.create({
      ...req.body,
      password: hashedPassword,
    });

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.MAIL,
      to: req.body.email,
      subject: 'Welcome to the Admin Portal',
      text: `Dear Admin, \n\nYour account has been successfully created on the Admin Portal. \n\nYou can log in using your email: ${req.body.email} and password: ${req.body.password}. \n\nPlease change your password after logging in for better security.`,
    };

 
    await transporter.sendMail(mailOptions);

   
    return res.status(201).json({
      message: 'Admin registered successfully, and email sent with login credentials.',
      admin: newAdmin,
    });

  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ message: 'Server error during admin signup', error: err.message });
  }
};

module.exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Request Body:', req.body);

    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      console.log('Admin not found');
      return res.status(403).json({ message: 'Email is incorrect' });
    }

    const isMatching = await bcrypt.compare(password, admin.password);
    if (!isMatching) {
      console.log('Password does not match');
      return res.status(403).json({ message: 'Incorrect Password' });
    }

    
    const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.ADMINKEY, {
      expiresIn: '365d',
    });

    // console.log('Admin logged in successfully');
    res.status(200).json({ message: 'You Are Logged In', token, id: admin._id });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};





  

  









module.exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res.status(400).json({ message: 'Email doesn\'t exist' });
    }

    const resetToken = jwt.sign({ email: email }, process.env.ADMINKEY, { expiresIn: '15m' });  
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL, 
        pass: process.env.PASSWORD, 
      },
    });

   
    let mailOptions = {
      from: process.env.MAIL,  
      to: email, 
      subject: 'Password Reset',
      text: `Please reset your password by clicking on the link: http://localhost:${process.env.PORT}/admin/reset/${resetToken}`,
    };

    
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return res.status(500).json({ error: 'Error occurred while sending email.' });
      } else {
        return res.status(200).json({ message: 'Password reset email sent successfully.' });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong, please try again later.' });
  }
};

module.exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password, confirmpassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.ADMINKEY);

    if (password !== confirmpassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);  

    const admin = await Admin.findOneAndUpdate(
      { email: decoded.email },
      { password: hashedPassword },
      { new: true }  
    );

    if (!admin) {
      return res.status(400).json({ message: 'User not found.' });
    }

   
    return res.status(200).json({ message: 'Password reset successfully.' });
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired. Please request a new password reset.' });
    }

    console.error(err);
    return res.status(400).json({ message: 'Invalid or malformed token.' });
  }
};

