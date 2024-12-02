  import './postjob.css'

import React, { useState } from 'react';
 

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

  return (
    <div className="postjob">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={jobData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={jobData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phonenumber"
          placeholder="Phone Number"
          value={jobData.phonenumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={jobData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="skills"
          placeholder="Required Skills"
          value={jobData.skills}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="noofvaccency"
          placeholder="Number of Vacancies"
          value={jobData.noofvaccency}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={jobData.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={jobData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary (Optional)"
          value={jobData.salary}
          onChange={handleChange}
        />
        <input
          type="text"
          name="postedBy"
          placeholder="Posted By"
          value={jobData.postedBy}
          onChange={handleChange}
          required
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJobForm;
