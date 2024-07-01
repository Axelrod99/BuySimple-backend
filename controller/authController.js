const express = require("express");
const fs = require("fs");
const data = require("../data/staffs.json");


const login = async (req, res, next) => {

};

const logout = (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { login, logout };
