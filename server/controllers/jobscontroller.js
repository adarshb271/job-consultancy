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


  // module.exports.deleteJob = async (req, res) => {
  //   const { id } = req.params;
  
  //   if (!mongoose.Types.ObjectId.isValid(id)) {
  //     return res.status(400).json({ message: 'Invalid job ID' });
  //   }
  
  //   try {
  //     const response = await Job.findByIdAndRemove(id); // Use findByIdAndRemove instead of findByIdAndDelete
  
  //     if (!response) {
  //       return res.status(404).json({ message: 'Job not found' });
  //     }
  
  //     res.status(200).json({ message: 'Job deleted successfully' });
  //   } catch (error) {
  //     console.error('Error deleting job:', error);
  //     res.status(500).json({ message: 'An error occurred while deleting the job', error: error.message });
  //   }
  // };
  