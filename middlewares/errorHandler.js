const ErrorResponse = require('../utils/errorResponse');

// Customer error handler function.
// When a route handler throws an error (throw new Error("message") or throw new ErrorResponse("message", 501))
// This funciton takes the error object (custom or standard), logs the stack trace, sends json to the client.
const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  console.log(err.stack.red.bold);

  // --------- Custom error handling ------------

  // --------------------------------------------

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'server error',
  });
};

module.exports = errorHandler;
