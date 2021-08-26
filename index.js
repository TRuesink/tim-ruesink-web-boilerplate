// Dependencies
const express = require('express');
const morgan = require('morgan');
require('colors');

// Initialize Application
const app = express();

// Routers

// Middlewares
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({message:"hello world"});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.yellow)
});
