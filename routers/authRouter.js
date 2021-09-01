const express = require('express');
const passport = require('passport');

const {
  authGoogle,
  authGoogleCallback,
  authGoogleSuccess,
  authGoogleFailure,
  authLocal,
} = require('../controllers/authController');
const { logOut } = require('../controllers/authController');

const router = express.Router();

router.route('/google').get(authGoogle);
router.route('/google/callback').get(authGoogleCallback);
router.route('/google/success').get(authGoogleSuccess);
router.route('/google/failure').get(authGoogleFailure);

router
  .route('/local')
  .post(
    passport.authenticate('local', { failureRedirect: '/login' }),
    authLocal
  );

router.route('/logout').get(logOut);

module.exports = router;
