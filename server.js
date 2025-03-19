const connectDB = require('./config/db');

const express = require('express');

const path = require('path')

const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

// Template engine

app.set('views', path.join(__dirname, "/views"));

app.set('view engine', 'ejs')

//Routes

app.use("/api/files", require("./routes/files"));

app.use("/files", require("./routes/show"));

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
