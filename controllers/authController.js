const passport = require('passport');

// Description: Google authentication route
// Route: GET /api/v1/auth/google
// Access: PUBLIC
exports.authGoogle = passport.authenticate('google', {
  scope: ['email', 'profile'],
});

exports.authGoogleCallback = passport.authenticate('google', {
  successRedirect: '/api/v1/auth/google/success',
  failureRedirect: '/api/v1/auth/google/failure',
});

exports.authGoogleSuccess = (req, res) => {
  console.log(req.user);
  res.json({
    success: true,
    message: req.user,
    user: req.user,
  });
};

exports.authGoogleFailure = (req, res) => {
  res.json({
    success: true,
    message: 'Authentication with google failed',
  });
};
