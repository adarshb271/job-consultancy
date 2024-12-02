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
      // required: true,
    },
    email: {
      type: String,
      // required: true,
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
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
