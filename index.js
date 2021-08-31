// Dependencies
const express = require('express');
const session = require('cookie-session');
const morgan = require('morgan');
require('colors');
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config({ path: './config/config.env' });
}
const passport = require('passport'); // passport module
require('./config/passport'); // passport configuration

// Custom Dependencies
const errorHandler = require('./middlewares/errorHandler');

// Initialize Application
const app = express();

// Routers
const publicResourceRouter = require('./routers/publicResourceRouter');
const authRouter = require('./routers/authRouter');

// Middlewares
app.use(
  session({
    name: 'tim-ruesink-web-boilerplate-cookie',
    keys: [process.env.COOKIE_KEY],
    maxAge: 60 * 1000,
  })
);
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());

// Mount Routers
app.use('/api/v1/public_resource', publicResourceRouter);
app.use('/api/v1/auth', authRouter);

// Custom Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.cyan.bold);
});
