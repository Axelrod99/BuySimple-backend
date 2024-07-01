const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
    },
    password: {
      type: [ApplicantSchema]
    },
  });

  module.exports = mongoose.model("Staff", StaffSchema);