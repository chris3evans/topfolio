const express = require('express');
const { userInfo, createUser, saveUser } = require('./controllers/controller');
const { validateAccessToken } = require("./middleware/auth0.middleware.js");
const router = express.Router();

router.get('/user/:userId', userInfo);
router.post('/user', validateAccessToken, createUser);
router.put('/user/:userId', saveUser);
//Adding middleware in protected routes:
//router.put('/user/:userId', validateAccessToken, saveUser);

module.exports = router;