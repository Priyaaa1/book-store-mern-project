const express = require('express');
const { createAnOrder, getOrderByEmail } = require('./order.controller');

const router = express.Router();

// create order endpoint
router.post("/", createAnOrder)

// get orders by email address
router.get("/email/:email", getOrderByEmail);

module.exports = router;