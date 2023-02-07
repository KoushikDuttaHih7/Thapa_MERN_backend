const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello from server auth`);
});

// using promises
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ err: "ERROR" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ err: "already exist" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "success" });
//         })
//         .catch((err) => res.status(500).json({ error: "failed" }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// using async await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ err: "Fillup every Field" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ err: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ err: "Password doesn't match" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      await user.save();
      res.status(201).json({ message: "successfully registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login
router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Please fill the form" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);
      if (!isMatch) {
        res.status(400).json({ message: "Invalid Email or Password" });
      } else {
        res.json({ message: "User Login Successfully" });
      }
    } else {
      res.status(400).json({ message: "Invalid Email or Password" });
    }
  } catch {
    console.log(err);
  }
});

module.exports = router;
