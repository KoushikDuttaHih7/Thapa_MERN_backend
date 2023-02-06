const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to mongoDb");
  })
  .catch((err) => {
    console.log("Not Connected");
  });
