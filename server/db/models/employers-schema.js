const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
      trim: true,
    },
    description: {
      type: String,
      // required: true,
    },
    name: {
      type: String,
      // required: true,
    },
    phonenumber: {
      type: String,
      required: true,
      unique: true, 
      match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'], 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    skills: {
      type: String,
      // required: true,
    },
  noofvaccency: {
      type: String,
      // required: true,
    },
    company: {
      type: String,
      // required: true,
    },
    location: {
      type: String,
      // required: true,
    },
    salary: {
      type: String,
      default: 'Not Disclosed',
    },
    postedBy: {
      type: String,
      // required: true,
    },
    postedon: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
