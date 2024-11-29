import './postedjob.css'
import Navbar from '../../components/navbar'
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios'; 

const Postedjob = ()=>{
    const [postedJobs, setPostedJobs] = useState([]);

    useEffect(() => {
      const fetchPostedJobs = async () => {
        try {
          const response = await axios.get('/job/posted'); // Update the endpoint as per your backend
          setPostedJobs(response.data);
        } catch (error) {
          console.error('Error fetching posted jobs:', error);
        }
      };
  
      fetchPostedJobs();
    }, []);
  
return(
    <div className="postedjob">
        <Navbar/>
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
              {/* <button className="apply-btn" Lin>
                  Apply
                </button> */}

            </div>
          ))
        ) : (
          <p>No jobs posted yet.</p>
        )}
      </div>
    </div>
    </div>
)


}
export default Postedjob