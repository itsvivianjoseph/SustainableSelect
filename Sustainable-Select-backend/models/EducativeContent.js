const mongoose = require('mongoose');

const educativeContentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const EducativeContent = mongoose.model('EducativeContent', educativeContentSchema);

module.exports = EducativeContent;