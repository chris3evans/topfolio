const express = require('express');
const { userInfo, createUser, saveUser } = require('./controllers/controller');
const router = express.Router();

router.get('/user/:userId', userInfo);
router.post('/user', createUser);
router.put('/user/:userId', saveUser);

export { router }
