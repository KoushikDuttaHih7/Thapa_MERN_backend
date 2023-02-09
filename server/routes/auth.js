const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

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

    // email matching
    const userLogin = await User.findOne({ email: email });

    // Password hashing
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // JWT Token generator
      token = await userLogin.generateAuthToken();
      // console.log(token);

      // For cookies and Session
      res.cookie("jwtoken", token, {
        expire: new Date(Date.now() + 86400000),
        httpOnly: true,
      });
      if (!isMatch) {
        // password invalid
        res.status(400).json({ message: "Invalid Email or Password" });
      } else {
        res.json({ message: "User Login Successfully" });
      }
    } else {
      // email invalid
      res.status(400).json({ message: "Invalid Email or Password" });
    }
  } catch {
    console.log(err);
  }
});

// About page
router.get("/about", authenticate, (req, res) => {
  console.log("Hello about");
  res.send(req.rootUser);
});

// user data for contact and home page
router.get("/getdata", authenticate, (req, res) => {
  console.log("Hello getData");
  res.send(req.rootUser);
});

// Contact Page
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      console.log("Error in contact form : Not filled");
      return res.json({ error: "Please fill the form" });
    }
    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "User sent contact successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
