// Dependencies
const express = require('express');

// Controllers
const {
  getAllPublicResource,
  getOnePublicResource,
  updatePublicResource,
  deletePublicResource,
  createPublicResource,
} = require('../controllers/publicResourceController');

// Bring in the Router
const router = express.Router();

// Models

// Middlewares

// Routes

router.route('/').get(getAllPublicResource).post(createPublicResource);

router
  .route('/:id')
  .get(getOnePublicResource)
  .put(updatePublicResource)
  .delete(deletePublicResource);

module.exports = router;
