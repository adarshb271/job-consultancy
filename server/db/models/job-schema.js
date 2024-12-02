// const mongoose = require('mongoose');

// const jobSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     name: {
//         type: String,
//         trim: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     requirements: {
//         type: [String],
//         required: true,
//     },
//     salary: {
//         type: String,
//         required: true,
//     },
//     location: {
//         type: String,
//         required: true,
//     },
//     company: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// jobSchema.pre('save', function (next) {
//     this.updatedAt = Date.now();
//     next();
// });

// const Job = mongoose.model('Job', jobSchema);

// module.exports = Job;
