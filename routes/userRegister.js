const Users = require("../models/Users.js");
const express = require("express");
const router = express.Router();
const bycrpyt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password  must be at least 6 characters" });
  }

  try {
    const exist = await Users.findOne({ email: email });
    const hashedPass = await bycrpyt.hash(password, 10);
    if (exist) {
      return res
        .status(400)
        .send({ message: "user already exist", error: error.message });
    } else {
      const User = await Users.create({
        name: name,
        email: email,
        password: hashedPass,
      });
      res.status(201).json({
        msg: "user Created",
        User,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "error", error });
  }
});

module.exports = router;
