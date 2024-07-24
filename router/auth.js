const escapeHTML = require("escape-html");
const express = require("express");
const { off } = require("process");
const User = require("../model/user");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.use(express.json())


 

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all mandatory fields" });
  }

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(422).json({ error: "User name already registered." });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "Password and confirm password must be same" });
    } 
    else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      //Before password is saved, first encrypt it  encryption

      return res.status(201).json({ success: "User registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }

  res.json({ message: req.body });
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "Please fill all mandatory fields." });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatched = await bcrypt.compare(password, userLogin.password);

      if (isMatched) {
        console.log(userLogin);
        return res.status(201).json({ message: "User logged in successfully." });
      } else {
        return res.status(422).json({ message: "Invalid credntials entered." });
      }
    } else {
      return res.status(422).json({ message: "Invalid credntials entered." });
    }
  } catch (err) {
    console.log(err);
  }
});




module.exports = router;


