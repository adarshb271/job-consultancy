const mongoose = require('mongoose');

// Define the user schema
const userSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            // required: true,  // Making firstname required
            trim: true,      // Automatically removes extra spaces
        },
        lastname: {
            type: String,
            // required: true,  // Making lastname required
            trim: true,      // Automatically removes extra spaces
        },

        email: {
            type: String,
            // required: true,   // Making email required
            unique: true,     // Ensures the email is unique
            trim: true,       // Automatically removes extra spaces
            // match: [/\S+@\S+\.\S+/, 'is invalid'],  // Validates email format
        },
        password: {
            type: String,
            required: true,   // Making password required
            minlength: 6,     // Enforcing minimum length for password
        },
        mobilenumber: {
            type: String,
            required: true,  // Making mobilenumber required
            trim: true,      // Automatically removes extra spaces
            unique: true,    // Ensures the mobilenumber is unique
        },
        DOB: {
            type: Date,
            // required: true,  // Making DOB required
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],  // Enum ensures only these values are allowed
            // required: true,  
        },
        address: {
            type: String,
            // required: true,  // Making address required
            trim: true,      // Automatically removes extra spaces
        },
        confirmpassword: {
            type: String,
            // required: true,  // Making confirmpassword required for validation
        },
        role: {
            type: String,
            enum: ['admin', 'employe', 'user'],  // Roles the user can have
            default: 'user',  // Default role is user
        },

        appliedJobs: [
          {
              jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }, // Reference to the Job model
              appliedAt: { type: Date, default: Date.now },                // Timestamp
              status: { 
                  type: String, 
                  enum: ['Pending', 'Accepted', 'Rejected'], 
                  default: 'Pending' 
              } // Tracks the status
          }
      ],
    },
    { timestamps: true }  // Adds createdAt and updatedAt fields automatically
);

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
