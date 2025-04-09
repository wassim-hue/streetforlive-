const express = require('express');
const { registerUser, authUser } = require('../controllers/auth');
const { protect } = require('../middleware/auth');
const {
  createPost,
  getPosts,
  getPost,
  deletePost,
  likePost,
  unlikePost
} = require('../controllers/posts');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);

router.route('/')
  .post(protect, createPost)
  .get(getPosts);

router.route('/:id')
  .get(getPost)
  .delete(protect, deletePost);

router.route('/like/:id')
  .post(protect, likePost);

router.route('/unlike/:id')
  .delete(protect, unlikePost);

module.exports = router;