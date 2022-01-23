const config = require('../../config.js');
const express = require('express');
const router = express.Router();
const auth = require('./auth.js');

router.post("/", (req , res) => auth(req , res));

module.exports = router;