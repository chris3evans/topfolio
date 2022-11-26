const express = require('express');
const { userInfo, createUser, updateUser } = require('./controllers/controller');
const router = express.Router();

router.get('/user/:userId', userInfo);
router.post('/user/:userId', createUser);
router.put('/user/:userId', updateUser);

module.exports = router;
