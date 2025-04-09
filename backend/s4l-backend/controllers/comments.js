const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');

// @desc    Add comment to post
// @route   POST /api/posts/comment/:id
// @access  Private
const addComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    const comment = await Comment.create({
      user: req.user._id,
      post: post._id,
      text: req.body.text
    });
    
    post.comments.push(comment._id);
    await post.save();
    
    // Populate user details in the response
    const populatedComment = await Comment.findById(comment._id).populate('user', 'username image');
    
    res.status(201).json(populatedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete comment
// @route   DELETE /api/comments/:id
// @access  Private
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id)
      .populate('user', 'username image');
    
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    
    // Check if the user is the comment owner or the post owner
    const post = await Post.findById(comment.post);
    const isCommentOwner = comment.user._id.toString() === req.user._id.toString();
    const isPostOwner = post.user.toString() === req.user._id.toString();
    
    if (!isCommentOwner && !isPostOwner) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    
    // Remove comment from post's comments array
    await Post.updateOne(
      { _id: comment.post },
      { $pull: { comments: comment._id } }
    );
    
    await Comment.deleteOne({ _id: comment._id });
    res.json({ message: 'Comment removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addComment,
  deleteComment
};