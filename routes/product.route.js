const express = require('express');
const router = express.Router();

// Require the controllers
const product_controller = require('../controllers/product.controller');

// Create new product
router.post('/create', product_controller.product_create);
// Read
router.get('/:id', product_controller.product_details);
// Update
router.put('/:id/update', product_controller.product_update);
// Delete
router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;