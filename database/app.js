const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});


//Connect to MongoDB
mongoose.connect(
    "mongodb+srv://camila:Camila2611@cluster0.7atfl.mongodb.net/?retryWrites=true&w=majority", 
    { useNewUrlParser: true }, 
    () => console.log('Connected to MongoDB')
);

//Listen on port 3000
app.listen(3000);
