const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { addComment, deleteComment } = require('../controllers/comments');

router.route('/posts/comment/:id')
  .post(protect, addComment);

router.route('/:id')
  .delete(protect, deleteComment);

module.exports = router;