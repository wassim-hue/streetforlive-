// Feed.js - Instagram-style Feed
import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaPaperPlane, FaBookmark, FaRegBookmark, FaEllipsisH } from 'react-icons/fa';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'user123',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      image: 'https://source.unsplash.com/random/600x600',
      caption: 'Enjoying the beautiful day! #sunshine',
      likes: 243,
      comments: 32,
      isLiked: false,
      isSaved: false
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          } 
        : post
    ));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isSaved: !post.isSaved } 
        : post
    ));
  };

  return (
    <div className="ig-feed">
      {posts.map(post => (
        <div key={post.id} className="ig-post">
          <div className="ig-post-header">
            <div className="ig-post-user">
              <img src={post.avatar} alt={post.username} className="ig-post-avatar" />
              <span className="ig-post-username">{post.username}</span>
            </div>
            <button className="ig-post-more">
              <FaEllipsisH />
            </button>
          </div>

          <div className="ig-post-image">
            <img src={post.image} alt="Post" />
          </div>

          <div className="ig-post-actions">
            <div className="ig-post-action-left">
              <button onClick={() => handleLike(post.id)} className="ig-post-action">
                {post.isLiked ? <FaHeart className="liked" /> : <FaRegHeart />}
              </button>
              <button className="ig-post-action">
                <FaComment />
              </button>
              <button className="ig-post-action">
                <FaPaperPlane />
              </button>
            </div>
            <button onClick={() => handleSave(post.id)} className="ig-post-action">
              {post.isSaved ? <FaBookmark /> : <FaRegBookmark />}
            </button>
          </div>

          <div className="ig-post-likes">
            {post.likes} likes
          </div>

          <div className="ig-post-caption">
            <span className="ig-post-username">{post.username}</span> {post.caption}
          </div>

          <div className="ig-post-comments">
            View all {post.comments} comments
          </div>

          <div className="ig-post-time">
            2 HOURS AGO
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;