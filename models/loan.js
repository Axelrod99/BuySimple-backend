const mongoose = require("mongoose");

const ApplicantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  totalLoan: {
    type: String,
    required: true,
  },
});

const LoanSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  amount: {
    type: String,
  },
  maturityDate: {
    type: String,
  },
  status: {
    type: String,
  },
  applicant: {
    type: [ApplicantSchema]
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Loans", LoanSchema);
