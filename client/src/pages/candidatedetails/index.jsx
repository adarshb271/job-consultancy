


import './candidate.css';
// import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import Adminnavbar from '../../components/adminnavbar';
import axios from '../../utils/axios';
import { toast, ToastContainer } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toastify

const SubmittedApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:8000/application'); // Backend endpoint
        setApplications(response.data.data); // Assuming 'data' contains the applications
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleDelete = async (id) => {
    console.log('Deleting application with ID:', id); // Debugging log
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this application?');
      if (!confirmDelete) return;

      const response = await axios.delete(`http://localhost:8000/application/${id}`);
      console.log('Delete response:', response.data); // Debugging log

      setApplications((prevApplications) =>
        prevApplications.filter((application) => application._id !== id)
      );

      // Show a success toast notification
      toast.success('Application deleted successfully!');
    } catch (error) {
      console.error('Error deleting application:', error.response?.data || error.message);

      // Show an error toast notification
      toast.error('Failed to delete application. Please try again.');
    }
  };

  return (
    <div className="submittedApplications1">
      <Adminnavbar />
<div className="candidatedetails">
      <div className="main-content1">
        <h1>Submitted Applications</h1>
        <div className="applications-container">
          {applications.length > 0 ? (
            applications.map((application) => (
              <div key={application._id} className="application-card">
                <h2>{application.firstname} {application.lastname}</h2>
                <p><strong>Email:</strong> {application.email}</p>
                <p><strong>Mobile:</strong> {application.mobilenumber}</p>
                <p><strong>Experience:</strong> {application.experience} years</p>
                <p><strong>Skills:</strong> {application.skills}</p>
                <p><strong>District:</strong> {application.district}</p>
                <p><strong>panchayath:</strong> {application.panchayath}</p>
                <p><strong>job title:</strong> {application.jobtitle}</p>

                <p><strong>Currentlocation:</strong> {application.currentlocation}</p>
                <p><strong>Education:</strong> {application.qualification}</p>
                <p><strong>Current location:</strong> {application.location}</p>
                <p><strong>Posted On:</strong> {new Date(application.createdAt).toLocaleDateString()}</p>

                <p><strong>File:</strong>
                  {application.file ? (
                    <a href={`http://localhost:8000/${application.file}`} target="_blank" rel="noopener noreferrer">
                      View File
                    </a>
                  ) : (
                    'No file uploaded'
                  )}
                </p>

                <Button onClick={() => handleDelete(application._id)} color="default" variant="dashed">
                  Delete
                </Button>
              </div>
            ))
          ) : (
            <p>No applications submitted yet.</p>
          )}
        </div>
      </div>
      </div>
      <Footer />
      
      {/* ToastContainer to display the toasts */}
      <ToastContainer />
    </div>
  );
};

export default SubmittedApplications;


