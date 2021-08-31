const passport = require('passport');

// Description: Google authentication route
// Route: GET /api/v1/auth/google
// Access: PUBLIC
exports.authGoogle = passport.authenticate('google', {
  scope: ['email', 'profile'],
});

// Description: Google Callback
// Route: GET /api/v1/auth/google/callback
// Access: PUBLIC
exports.authGoogleCallback = passport.authenticate('google', {
  successRedirect: '/api/v1/auth/google/success',
  failureRedirect: '/api/v1/auth/google/failure',
});

// Description: Google success route upon redirect
// Route: GET /api/v1/auth/google/success
// Access: PUBLIC
exports.authGoogleSuccess = (req, res) => {
  res.json({
    success: true,
    message: `User with ID of ${1} has been logged in`,
    userData: req.user,
  });
};

// Description: Google failure route upon redirect
// Route: GET /api/v1/auth/google/failure
// Access: PUBLIC
exports.authGoogleFailure = (req, res) => {
  res.json({
    success: true,
    message: 'Authentication with google failed',
  });
};

// Description: Log the user of the cookie session
// Route: GET /api/v1/auth/logout
// Access: PUBLIC
exports.logOut = (req, res) => {
  req.logout();
  res.json({
    success: true,
    message: 'User is logged out',
  });
};
