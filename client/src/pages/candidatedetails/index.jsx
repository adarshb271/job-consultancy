import './candidate.css'; // Make sure to import your CSS file for styling
import Navbar from '../../components/navbar';
import React, { useEffect, useState } from 'react';

import axios from '../../utils/axios'; // Assuming axios is set up

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

  return (
    <div className="submittedApplications">


      <div className="main-content">
     
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




                <p><strong>Currentlocation:</strong> {application.currentlocation}</p>
                <p><strong>Education:</strong> {application.qualification}</p>
                <p><strong>Current location:</strong> {application.location}</p>
                <p><strong>Posted On:</strong> {new Date(application.createdAt).toLocaleDateString()}</p>
                <p><strong>File:</strong> {application.file ? <a href={application.file} target="_blank" rel="noopener noreferrer">View File</a> : 'No file uploaded'}</p>
              </div>
            ))
          ) : (
            <p>No applications submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmittedApplications;




