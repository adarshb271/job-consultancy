

import './userhome.css';
import Userdashbox from '../../components/userdashbox';
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios'; 

const Userhome = () => {
  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    const fetchPostedJobs = async () => {
      try {
        const response = await axios.get('/job/posted'); 
        setPostedJobs(response.data);
      } catch (error) {
        console.error('Error fetching posted jobs:', error);
      }
    };

    fetchPostedJobs();
  }, []);


  return (  <div className="userhome">
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar content */}
      <Userdashbox />
    </div>

    {/* Main Content */}
    <div className="main-content">
      <h1>Posted Jobs</h1>
      <div className="jobs-container">
        {postedJobs.length > 0 ? (
          postedJobs.map((job) => (
            <div key={job.id || job._id} className="job-card">
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Posted On:</strong> {new Date(job.postedDate).toLocaleDateString()}</p>
              <button className="apply-btn" Lin>
                  Apply
                </button>

            </div>
          ))
        ) : (
          <p>No jobs posted yet.</p>
        )}
      </div>
    </div>
  </div>
//     <div className="userhome">
//       <Userdashbox />

//       <div className="userdashbox">
//         <h1>Posted Jobs</h1>
//         <div className="jobs-container">
//   {postedJobs.length > 0 ? (
//     postedJobs.map((job) => (
//       <div key={job.id || job._id} className="job-card"> {/* Use a unique key */}
//         <h2>{job.title}</h2>
//         <p>{job.description}</p>
//         <p>
//           <strong>Location:</strong> {job.location}
//         </p>
//         <p>
//           <strong>Salary:</strong> {job.salary}
//         </p>
//         <p>
//           <strong>Posted On:</strong> {new Date(job.postedDate).toLocaleDateString()}
//         </p>
//       </div>
//     ))
//   ) : (
//     <p>No jobs posted yet.</p>
//   )}
// </div>

//       </div>
//     </div>
  );
};

export default Userhome;
