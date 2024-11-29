// const mongoose = require('mongoose');

// // Define the application schema
// const appilicationSchema = mongoose.Schema(
//   {
//     firstname: {
//       type: String,
//     //   required: true,
//       trim: true,
//     },
//     lastname: {
//       type: String,
//     //   required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//     //   required: true,
//       unique: true,
//       trim: true,
//     },
//     password: {
//       type: String,
//     //   required: true,
//     //   minlength: 6,
//     },
//     mobilenumber: {
//       type: String,
//     //   required: true,
//     //   unique: true,
//       trim: true,
//     },
//     DOB: {
//       type: Date,
//     //   required: true,
//     },
//     gender: {
//       type: String,
//       enum: ['Male', 'Female', 'Other'],
//     //   required: true,
//     },
//     address: {
//       type: String,
//     //   required: true,
//       trim: true,
//     },
//     confirmpassword: {
//       type: String,
//     },
//     role: {
//       type: String,
//       enum: ['admin', 'employee', 'user'],
//       default: 'user',
//     },
//   },
//   { timestamps: true }
// );

// // Check if the Application model already exists before defining it
// const Application = mongoose.models.Application || mongoose.model('Application', appilicationSchema);

// module.exports = Application;



const mongoose = require('mongoose');

// Define the application schema
const applicationSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      // required: true,
      trim: true,
    },
    lastname: {
      type: String,
      // required: true,
      trim: true,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
      trim: true,
    },
    mobilenumber: {
      type: String,
      // required: true,
      trim: true,
    },
    dob: {
      type: Date,
      // required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      // required: true,
    },
    address: {
      type: String,
      // required: true,
      trim: true,
    },
    resume: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

// Check if the Application model already exists before defining it
const 
Applicationform = mongoose.models.Application || mongoose.model('Application', applicationSchema);

module.exports=Applicationform
