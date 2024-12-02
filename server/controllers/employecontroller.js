

 const Job = require('../db/models/employers-schema');

 
 module.exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error.message);
    res.status(500).json({ message: 'Error fetching jobs', error: error.message });
  }
};

module.exports.postJob = async (req, res) => {
  try {
    const { title,name,phonenumber,email,skills, noofvaccency, description, company, location, salary, postedBy } = req.body;

    const newJob = new Job({
      title,
      description,
      company,
      location,
      salary,
      postedBy,
      name,
      phonenumber,
      email,
      skills, 
      noofvaccency
    });

    await newJob.save();

    res.status(201).json({
      message: 'Job posted successfully',
      job: newJob,
    });
  } catch (error) {
    console.error('Error posting job:', error.message);
    res.status(500).json({ message: 'Error posting job', error: error.message });
  }
};

// Get all jobs
// module.exports.getJobs = async (req, res) => {
//   try {
//     const jobs = await Job.find();
//     res.status(200).json(jobs);
//   } catch (error) {
//     console.error('Error fetching jobs:', error.message);
//     res.status(500).json({ message: 'Error fetching jobs', error: error.message });
//   }
// };
