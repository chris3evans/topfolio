const express = require('express');
const { userInfo, createUser, saveUser } = require('./controllers/controller');
const { validateAccessToken } = require('./middleware/auth0.middleware');
const router = express.Router();

router.get('/user/:slug_url', userInfo);
router.post('/user', validateAccessToken, createUser);
router.put('/user', validateAccessToken, saveUser);

module.exports = router;
