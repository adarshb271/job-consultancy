import './application.css'
import React, { useState } from "react";
const Application=()=>{
   
      const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        gender: "",
        address: "",
        state: "",
        panchayat: "",
        pincode: "",
        currentLocation: "",
        currentCompany: "",
        experience: "",
        qualification: "",
        skills: "",
        cv: null,
      });
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
          ...formData,
          [name]: type === "file" ? files[0] : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Application Submitted Successfully!");
        // Send formData to backend for further processing
      };
    
      return (
        <div className="application-form">
          <h2>Job Application Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <label>
              Full Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </label>
    
            {/* Phone */}
            <label>
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </label>
    
            {/* Email */}
            <label>
              Email ID:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </label>
    
            {/* Gender */}
            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
    
            {/* Address */}
            <label>
              Address:
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Enter your address"
              />
            </label>
    
            {/* State */}
            <label>
              State:
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                placeholder="Enter your state"
              />
            </label>
    
            {/* Panchayat or Municipality */}
            <label>
              Panchayat or Municipality:
              <input
                type="text"
                name="panchayat"
                value={formData.panchayat}
                onChange={handleChange}
                required
                placeholder="Enter your panchayat or municipality"
              />
            </label>
    
            {/* Pincode */}
            <label>
              Pincode:
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                placeholder="Enter your pincode"
              />
            </label>
    
            {/* Current Location */}
            <label>
              Current Location:
              <input
                type="text"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleChange}
                required
                placeholder="Enter your current location"
              />
            </label>
    
            {/* Current Company */}
            <label>
              Current Company:
              <input
                type="text"
                name="currentCompany"
                value={formData.currentCompany}
                onChange={handleChange}
                required
                placeholder="Enter your current company"
              />
            </label>
    
            {/* Experience */}
            <label>
              Experience:
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="">Select your experience</option>
                <option value="0-1">0-1 Year</option>
                <option value="1-2">1-2 Years</option>
                <option value="3+">3 Years and Above</option>
              </select>
            </label>
    
            {/* Qualification */}
            <label>
              Qualification:
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                placeholder="Enter your qualification"
              />
            </label>
    
            {/* Skills */}
            <label>
              Skills:
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
                placeholder="Enter your skills"
              />
            </label>
    
            {/* Upload CV */}
            <label>
              Upload your CV (PDF or DOC only):
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
            </label>
    
            {/* Submit Button */}
            <button type="submit">Submit Application</button>
          </form>
        </div>
      );
    };
    
   
    

export default Application