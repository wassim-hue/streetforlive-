const express = require('express');
const { registerUser, authUser } = require('../controllers/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);

module.exports = router;