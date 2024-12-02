import './postedjob.css'
// import Navbar from '../../components/navbar'
import Adminnavbar from '../../components/adminnavbar'; 
import React, { useEffect, useState } from 'react';
import { Button, ConfigProvider, Flex } from 'antd';

import axios from '../../utils/axios'; 

const Postedjob = ()=>{
    const [postedJobs, setPostedJobs] = useState([]);

    useEffect(() => {
      const fetchPostedJobs = async () => {
        try {
          const response = await axios.get('/employer/getjob'); // Update the endpoint as per your backend
          setPostedJobs(response.data);
        } catch (error) {
          console.error('Error fetching posted jobs:', error);
        }
      };
  
      fetchPostedJobs();
    }, []);
  
  
return(
    <div className="postedjob">
        <Adminnavbar/>
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
              <p><strong>Company:</strong> {job.company}</p>

              <p><strong>Posted On:</strong> {new Date(job.postedby).toLocaleDateString()}</p>
              <p><strong>name:</strong> {job.name}</p>
              <p><strong>email:</strong> {job.email}</p>
              <p><strong>phone number:</strong> {job.phonenumber}</p>
              <p><strong>Skills:</strong> {job.skills}</p>
              <p><strong>No Of Vaccency:</strong> {job.noofvaccency}</p>
          
             
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