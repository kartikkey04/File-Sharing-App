const connectDB = require('./config/db')

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})