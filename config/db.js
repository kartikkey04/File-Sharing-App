require("dotenv").config();
const mongoose = require("mongoose");
function connectDB() {
  // Database connection
  mongoose.connect(process.env.MONGO_CONNECTION_URL);

  mongoose.connection
    .once("open", function () {
      console.log("MongoDB running");
    })
    .on("error", function (err) {
      console.log(err);
    });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;
