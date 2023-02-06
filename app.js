const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());
app.use(require("./routes/auth"));

const PORT = process.env.PORT;

// middleware
const middleware = (req, res, next) => {
  console.log("Hello Middleware");
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello from server`);
});

app.get("/about", middleware, (req, res) => {
  console.log("Hello about");
  res.send(`Hello from about me`);
});

app.get("/contact", (req, res) => {
  res.send(`Hello from contact`);
});

app.get("/signin", (req, res) => {
  res.send(`Hello from signin`);
});

app.get("/signup", (req, res) => {
  res.send(`Hello from signup`);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
