const express = require("express");
const router = express.Router();

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
    }
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
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
