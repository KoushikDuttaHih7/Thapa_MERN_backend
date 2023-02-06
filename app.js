const express = require("express");
const app = express();

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

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000/");
});
