



const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      // required: true,
      trim: true,
    },
   
    email: {
      type: String,
      // required: true,
      unique: true,
      // trim: true,
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
      // enum: ['Male', 'Female', 'Other'],
      // required: true,
    },
    address: {
      type: String,
      // required: true,
      trim: true,
    },

    panchayath: {
      type: String,
      // required: true,
      trim: true},
      
      district: {
        type: String,
        // required: true,
        trim: true},
    
    pincode: {
      type: String,
      // required: true,
      trim: true},
     state: {
        type: String,
        // required: true,
        // trim: true
      },
       currentlocation: {
          type: String,
          // required: true,
          trim: true},
         experience: {
            type: String,
            // required: true,
            trim: true},
           qualification: {
              type: String,
              // required: true,
              trim: true},
            skills: {
                type: String,
                // required: true,
                trim: true},
   file: {
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
