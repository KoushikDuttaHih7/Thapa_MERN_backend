const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Hello from server auth`);
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
});

module.exports = router;
