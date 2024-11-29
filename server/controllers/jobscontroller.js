const Job = require('../db/models/job-schema');


module.exports.getPostedJobs = async (req, res) => {
    try {
      const jobs = await Job.find(); // Fetch all jobs from the database
      res.status(200).json(jobs); // Send jobs as JSON response
    } catch (error) {
      console.error('Error fetching posted jobs:', error);
      res.status(500).json({ message: 'Failed to fetch jobs' });
    }
  };