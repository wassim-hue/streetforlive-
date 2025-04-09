const express = require('express');
const { protect } = require('../middleware/auth');
const {
  registerUser,
  getUserProfile,
  updateUserProfile,
  followUser,
  unfollowUser
} = require('../controllers/users');

const router = express.Router();

router.post('/register', registerUser);
router.get('/:id', getUserProfile);
router.put('/:id', protect, updateUserProfile);
router.post('/follow/:id', protect, followUser);
router.delete('/unfollow/:id', protect, unfollowUser);

module.exports = router;