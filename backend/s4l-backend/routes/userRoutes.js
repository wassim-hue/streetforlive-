const express = require('express');
const { protect } = require('../middleware/auth');
const {
  getUserProfile,
  updateUserProfile,
  followUser,
  unfollowUser
} = require('../controllers/users');

const router = express.Router();

router.get('/:id', getUserProfile);
router.put('/:id', protect, updateUserProfile);
router.post('/follow/:id', protect, followUser);
router.delete('/unfollow/:id', protect, unfollowUser);

module.exports = router;