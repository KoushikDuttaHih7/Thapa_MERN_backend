const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to mongoDb");
  })
  .catch((err) => {
    console.log("Not Connected");
  });

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
