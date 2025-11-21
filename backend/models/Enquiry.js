const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  projectType: {
    type: String,
    required: true
  },
  budgetRange: {
    type: String
  },
  message: {
    type: String
  },
  emailSent: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Enquiry', enquirySchema);
