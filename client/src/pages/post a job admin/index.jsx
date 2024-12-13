import './postjobadmin.css'

import React, { useState } from 'react';
import Navbar from '../../components/adminnavbar'; 
import Footer from '../../components/footer';
import axios from 'axios';

const PostJobForm = () => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    name: '',
    phonenumber: '',
    email: '',
    skills: '',
    noofvaccency: '',
    company: '',
    location: '',
    salary: '',
    postedBy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/employer/postjob', jobData);
      alert('Job posted successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error posting job:', error.response.data);
      alert('Failed to post the job. Check the console for details.');
    }
  };

  // return (
  //   <div className="postjob">
  //     <Navbar />
  //     <h2>Post a Job</h2>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         name="title"
  //         placeholder="Job Title"
  //         value={jobData.title}
  //         onChange={handleChange}
  //         required
  //       />
  //       <textarea
  //         name="description"
  //         placeholder="Job Description"
  //         value={jobData.description}
  //         onChange={handleChange}
  //         required
  //       />
  //       <input
  //         type="text"
  //         name="name"
  //         placeholder="Your Name"
  //         value={jobData.name}
  //         onChange={handleChange}
  //         required
  //       />
  //       <input
  //         type="text"
  //         name="phonenumber"
  //         placeholder="Phone Number"
  //         value={jobData.phonenumber}
  //         onChange={handleChange}
  //         required
  //       />
  //       <input
  //         type="email"
  //         name="email"
  //         placeholder="Email"
  //         value={jobData.email}
  //         onChange={handleChange}
  //         required
  //       />
  //       <input
  //         type="text"
  //         name="skills"
  //         placeholder="Required Skills"
  //         value={jobData.skills}
  //         onChange={handleChange}
  //         required
  //       />
  //       <input
  //         type="text"
  //         name="noofvaccency"
  //         placeholder="Number of Vacancies"
  //         value={jobData.noofvaccency}
  //         onChange={handleChange}
  //         required
  //       />
  //       <input
  //         type="text"
  //         name="company"
  //         placeholder="Company Name"
  //         value={jobData.company}
  //         onChange={handleChange}
  //         required
  //       />
  //       <input
  //         type="text"
  //         name="location"
  //         placeholder="Location"
  //         value={jobData.location}
  //         onChange={handleChange}
  //         required
  //       />
  //       <input
  //         type="text"
  //         name="salary"
  //         placeholder="Salary (Optional)"
  //         value={jobData.salary}
  //         onChange={handleChange}
  //       />
  //       <input
  //         type="text"
  //         name="postedBy"
  //         placeholder="Posted By"
  //         value={jobData.postedBy}
  //         onChange={handleChange}
  //         required
  //       />
  //       <button type="submit">Post Job</button>
  //     </form>
  //     <Footer />
  //   </div>
  // );
  return (
    <div className="postjob">
      <Navbar />
      <div className="postjob-container">
        <br />
        <br />
        <br />
        <h2>Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group5">
            <label htmlFor="title">Job Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Job Title"
              value={jobData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group5">
            <label htmlFor="description">Job Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter Job Description"
              value={jobData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group5">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={jobData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group5">
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              placeholder="Enter Phone Number"
              value={jobData.phonenumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              value={jobData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group5">
            <label htmlFor="skills">Required Skills</label>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder="Enter Required Skills"
              value={jobData.skills}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group5">
            <label htmlFor="noofvaccency">Number of Vacancies</label>
            <input
              type="text"
              id="noofvaccency"
              name="noofvaccency"
              placeholder="Enter Number of Vacancies"
              value={jobData.noofvaccency}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group5">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Enter Company Name"
              value={jobData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group5">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter Location"
              value={jobData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group5">
            <label htmlFor="salary">Salary (Optional)</label>
            <input
              type="text"
              id="salary"
              name="salary"
              placeholder="Enter Salary"
              value={jobData.salary}
              onChange={handleChange}
            />
          </div>

          <div className="form-group5">
            <label htmlFor="postedBy">Posted By</label>
            <input
              type="text"
              id="postedBy"
              name="postedBy"
              placeholder="Enter Poster Name"
              value={jobData.postedBy}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group5">
            <label htmlFor="postedon">Date</label>
            <input
              type="date"
              id="postedon"
              name="postedon"
              value={jobData.postedon}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submitbutton5">Post Job</button>
      
        </form>
      </div>
      <Footer />
    </div>
  );

};

export default PostJobForm;


