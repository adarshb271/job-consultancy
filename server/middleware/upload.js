// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         const uploadPath = path.join(__dirname, 'uploads');
//         cb(null, uploadPath); 
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname); 
//     }
// });

// const upload = multer({ storage: storage });

// module.exports = upload;



const multer = require('multer');
const path = require('path');

// Storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../uploads'); // Directory to store files
    cb(null, uploadPath); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Ensure unique file names
  }
});

// File type validation - only allow PDFs
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf']; // Only PDF files are allowed
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only PDF files are allowed!'), false);
  }
  cb(null, true);
};

// File upload setup
const upload = multer({
  storage: storage,
  fileFilter: fileFilter, // Apply file type validation
  limits: { fileSize: 10 * 1024 * 1024 }, // Optional: Limit file size (10MB in this case)
});

// Export the upload middleware
module.exports = upload;


