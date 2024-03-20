const Users = require("../models/Users.js");
const bycrpyt = require("bcrypt");
var jwt = require("jsonwebtoken");

const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
  //console.log(req.body);
  const { email, password } = req.body;

  const user = await Users.findOne({ email: email });
  const decrypt = await bycrpyt.compare(password, user.password);
  const newToken = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN);
  try {
    if (!user) {
      return res.status(401).json({ msg: "No User Found" });
    } else {
      if (decrypt === true) {
        res.status(201).json({
          msg: "login Successfull",
          token: `Bearer ${newToken}`,
        });
      } else {
        res.status(401).json({ msg: "Invalid Password!" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
