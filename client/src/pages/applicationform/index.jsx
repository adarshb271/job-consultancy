

// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from '../../components/navbar';
// import Footer from '../../components/footer';
// import './application.css'; 
// import { Navigate, useNavigate } from 'react-router-dom';

// const ApplicationForm = () => {
//   const navigate=useNavigate()
//   const [formData, setFormData] = useState({
//     email: '',
//     mobilenumber: '',
//     firstname: '',
//     address: '',
//     gender: '',
//     state: '',
//     panchayath: '',
//     pincode: '',
//     currentlocation: '',
//     experience: '',
//     qualification: '',
//     skills: '',
//     district: '',
//   });
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = new FormData();
    
//     Object.keys(formData).forEach((key) => {
//       form.append(key, formData[key]);
//     });
    
//     if (file) {
//       form.append('file', file);
//     }

//     try {
//       const response = await axios.post('http://localhost:8000/application/submit', form, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setMessage('Application submitted successfully!');
//       console.log(response.data);  
//       navigate(`/`)
      
//     } catch (error) {
//       setMessage('Error in submitting application.');
//       console.error(error.response.data);
//     }
//   };

//   return (
//     <div className="application-container">
//       <Navbar/>
//       <h1 className="application-title">Application Form</h1>
//       {message && <p className="application-message">{message}</p>}
//       <form onSubmit={handleSubmit} encType="multipart/form-data" className="application-form">
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="mobilenumber">Mobile Number:</label>
//           <input
//             type="text"
//             name="mobilenumber"
//             id="mobilenumber"
//             value={formData.mobilenumber}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="firstname">First Name:</label>
//           <input
//             type="text"
//             name="firstname"
//             id="firstname"
//             value={formData.firstname}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address:</label>
//           <input
//             type="text"
//             name="address"
//             id="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender">Gender:</label>
//           <input
//             type="text"
//             name="gender"
//             id="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="state">State:</label>
//           <input
//             type="text"
//             name="state"
//             id="state"
//             value={formData.state}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="panchayath">Panchayath:</label>
//           <input
//             type="text"
//             name="panchayath"
//             id="panchayath"
//             value={formData.panchayath}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="pincode">Pincode:</label>
//           <input
//             type="text"
//             name="pincode"
//             id="pincode"
//             value={formData.pincode}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="currentlocation">Current Location:</label>
//           <input
//             type="text"
//             name="currentlocation"
//             id="currentlocation"
//             value={formData.currentlocation}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="experience">Experience:</label>
//           <input
//             type="text"
//             name="experience"
//             id="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="qualification">Qualification:</label>
//           <input
//             type="text"
//             name="qualification"
//             id="qualification"
//             value={formData.qualification}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="skills">Skills:</label>
//           <input
//             type="text"
//             name="skills"
//             id="skills"
//             value={formData.skills}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="district">District:</label>
//           <input
//             type="text"
//             name="district"
//             id="district"
//             value={formData.district}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="file">Upload File (PDF):</label>
//           <input
//             type="file"
//             name="file"
//             id="file"
//             onChange={handleFileChange}
//             className="form-input"
//           />
//         </div>
//         <div>
//           <button type="submit" className="form-submit-btn">Submit Application</button>
//         </div>
//       </form>
//       <Footer/>
//     </div>
//   );
// };

// export default ApplicationForm;


import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './application.css'; 
import { Navigate, useNavigate } from 'react-router-dom';
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
    district: '',
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

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
      <h1 className="application-title">Application Form</h1>
      {message && <p className="application-message">{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="application-form">
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            name="experience"
            id="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            name="skills"
            id="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
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
      <Footer />

      {/* ToastContainer to render toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default ApplicationForm;
