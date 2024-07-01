const Loan = require("../models/loan");

const getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const filterStatus = async (req, res) => {
  const status = req.params.status;
  try {
    const items = await Loan.find({ status });
    res.status(200).json(items);
  } catch (error) {
    console.error("Error finding content by contract:", error);
  }
};

const filterByEmail = async (req, res, next) => {
  const userEmail = req.params.email;

  try {
    const userMail = await Loan.findById(userEmail).populate("comments");

    if (!userMail) {
      throw new NotFoundError(`No email found with ID: ${userEmail}`);
    }

    res.status(200).json(userMail.email);
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const filterExpiredLoans = async (req, res, next) => {
  try {
    const expiredLoans = await Loan.find({ maturityDate: { $lt: new Date() } });

    res.status(200).json({ loans: expiredLoans });
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const deleteLoan = async (req, res) => {
  try {
    const ids = req.params.id;
    const data = await Loan.findByIdAndDelete(ids);
    res.send(`loan has been deleted`);
    res.status(200).json();
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = {
  getAllLoans,
  filterStatus,
  filterByEmail,
  deleteLoan,
  filterExpiredLoans,
};
