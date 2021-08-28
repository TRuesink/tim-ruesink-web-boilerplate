// Dependencies
const express = require('express');
const morgan = require('morgan');
require('colors');
const errorHandler = require('./middlewares/errorHandler');

// Initialize Application
const app = express();

// Routers
const publicResourceRouter = require('./routers/publicResourceRouter');

// Middlewares
app.use(morgan('dev'));

// Mount Routers
app.use('/api/v1/public_resource', publicResourceRouter);

// Custom Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.cyan.bold);
});
