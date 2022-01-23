const config = require('../../config.js');
const express = require('express');
const router = express.Router();
const install = require('./install.js');

router.get("/install/:module", (req , res) => install(req , res));

module.exports = router;
