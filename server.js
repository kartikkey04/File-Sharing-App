const connectDB = require('./config/db')

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

//Routes

app.use('/api/files', require('./routes/files'))

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})