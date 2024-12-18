


import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './application.css'; 
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const ApplicationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    mobilenumber: '',
    firstname: '',
    address: '',
    gender: '',
    state: '',
    panchayath: '',
    pincode: '',
    currentlocation: '',
    experience: '',
    qualification: '',
    skills: '',
    jobtitle:'',
    district: '',
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });
    
    if (file) {
      form.append('file', file);
    }

    try {
      const response = await axios.post('http://localhost:8000/application/submit', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Show success toast
      toast.success('Application submitted successfully!');
      console.log(response.data);  
      navigate(`/`);
      
    } catch (error) {
      // Show error toast
      toast.error('Error in submitting application.');
      console.error(error.response.data);
    }
  };

  return (
    <div className="application-container">
      <Navbar />
      <div className="applicationform">
        <h1 className="application-title">Application Form</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="application-form">
          <div className="form-group7">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group7">
            <label htmlFor="mobilenumber">Mobile Number:</label>
            <input
              type="text"
              name="mobilenumber"
              id="mobilenumber"
              value={formData.mobilenumber}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group7">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group7">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group1">
            <label htmlFor="gender">Gender:</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group7">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              name="state"
              id="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group7">
            <label htmlFor="panchayath">Panchayath:</label>
            <input
              type="text"
              name="panchayath"
              id="panchayath"
              value={formData.panchayath}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group7">
            <label htmlFor="pincode">Pincode:</label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group7">
            <label htmlFor="currentlocation">Current Location:</label>
            <input
              type="text"
              name="currentlocation"
              id="currentlocation"
              value={formData.currentlocation}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group7">
            <label htmlFor="experience">Experience:</label>
            <select
              name="experience"
              id="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Select Experience</option>
              <option value="0 to 6 months">0 to 6 months</option>
              <option value="0.6 to 1 year">0.6 to 1 year</option>
              <option value="1 to 2 years">1 to 2 years</option>
              <option value="2 to 3 years">2 to 3 years</option>
              <option value="above 3 years">Above 3 years</option>
            </select>
          </div>
          <div className="form-group7">
            <label htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              name="qualification"
              id="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group1">
            <label htmlFor="skills">Skills:</label>
            <textarea
              name="skills"
              id="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              className="form-input"
              rows="5"  // Adjust the number of rows (height)
              cols="50" // Adjust the number of columns (width)
            />
          </div>
          <div className="form-group7">
            <label htmlFor="jobtitle">Jobtitle:</label>
            <input
              type="text"
              name="jobtitle"
              id="jobtitle"
              value={formData.jobtitle}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group7">
            <label htmlFor="district">District:</label>
            <input
              type="text"
              name="district"
              id="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group7">
            <label htmlFor="file">Upload File (PDF):</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleFileChange}
              className="form-input"
            />
          </div>
          <div>
            <button type="submit" className="form-submit-btn">Submit Application</button>
          </div>
        </form>
        {/* ToastContainer to render toast notifications */}
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationForm;
