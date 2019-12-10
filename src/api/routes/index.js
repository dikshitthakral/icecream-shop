const express = require('express');
const BusinessDetails = require('../controllers/businessDetails');

const router = express.Router();

// ProductDetails
router.get('/businessDetails', BusinessDetails.getBusinessDetails);

module.exports = router;