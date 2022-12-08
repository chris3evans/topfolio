const express = require('express');
const {
  userInfo,
  createUser,
  saveUser,
  sendEmail,
} = require('./controllers/controller');
const { validateAccessToken } = require('./middleware/auth0.middleware');
const router = express.Router();
import { body } from 'express-validator';

router.get('/user/:slug_url', userInfo);
router.post('/user', validateAccessToken, createUser);
router.put('/user', validateAccessToken, saveUser);
router.post(
  '/user/email',
  body('name').not().isEmpty().trim().escape(),
  body('title').not().isEmpty().trim().escape(),
  body('body').not().isEmpty().trim().escape(),
  sendEmail
);
module.exports = router;
