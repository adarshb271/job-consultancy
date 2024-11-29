const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Use the absolute path for uploads folder
        const uploadPath = path.join(__dirname, 'uploads');
        cb(null, uploadPath); // The folder where you want to save uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Naming convention for the uploaded file
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
