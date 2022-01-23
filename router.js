const config = require('./config.js');
const express = require('express');
const router = express.Router();
const auth = require(config.LOGIC + '/auth/router.js');
const install = require(config.LOGIC + '/install/router.js');

router.use("/auth" , auth);
router.use("/" , install);

module.exports = router;
