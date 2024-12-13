


import './postedjobforuser.css';
import Navbar from '../../components/navbar';
import Usersidebar from '../../components/usersidebar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import Footer from '../../components/footer';
import axios from '../../utils/axios';

const Postedjobforuser = () => {
  const navigate = useNavigate();
  const [postedJobs, setPostedJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(2); // Initially display 3 jobs

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

  const handleViewMore = () => {
    setVisibleJobs((prev) => prev + 3); // Show 3 more jobs
  };

  return (
    <div className="postmain">
      <Navbar />
      <div className="searchjobuser1">
        <div className="sidebarcontent">
          <Usersidebar />
        </div>
        <div className="jobcontent">
          <div className="search1">
            <input type="text" placeholder="Job title" />
            <button>Submit</button>
          </div>
          <h1>Posted Jobs</h1>

          <div className="jobs-container1">
            {postedJobs.length > 0 ? (
              postedJobs.slice(0, visibleJobs).map((job) => ( // Slice based on visibleJobs
                <div key={job.id || job._id} className="full-row-job-card">
                  <div className="card-header1">
                    <h2>{job.title}</h2>
                    <p className="company-name">{job.company}</p>
                  </div>
                  <div className="card-details">
                    <p>
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p>
                      <strong>Salary:</strong> {job.salary}
                    </p>
                    <p>
                      <strong>Skills:</strong> {job.skills}
                    </p>
                  </div>
                  
                  <div className="card-footer1">
                    
                    <p>{new Date(job.postedon).toLocaleDateString()}</p>
                    <button
                      onClick={() => {
                        navigate(`/applicationform`);
                      }}
                      className="apply-btn"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No jobs posted yet.</p>
            )}
          </div>

          {visibleJobs < postedJobs.length && (
            <div className="view-more-container">
              <Button onClick={handleViewMore} className="view-more-btn">
                View More
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Postedjobforuser;
