const express = require('express');
const passport = require('passport');

const {
  authGoogle,
  authGoogleCallback,
  authGoogleSuccess,
  authGoogleFailure,
} = require('../controllers/authController');
const { logOut } = require('../controllers/authController');

const router = express.Router();

router.route('/google').get(authGoogle);

router
  .route('/google-token')
  .get(passport.authenticate('google-token'), (req, res) => {
    res.json({ success: true, user: req.user });
  }); // FOR DEVELOPMENT ONLY

router.route('/google/callback').get(authGoogleCallback);

router.route('/google/success').get(authGoogleSuccess);

router.route('/google/failure').get(authGoogleFailure);

router.route('/logout').get(logOut);

module.exports = router;
