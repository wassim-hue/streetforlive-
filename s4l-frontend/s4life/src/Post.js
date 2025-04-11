import React from 'react';
import { useAuth } from './context/AuthContext';
import './Post.css';

const Post = ({ post }) => {
  const { user } = useAuth();
  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post-header">
        <img 
          src={`https://i.pravatar.cc/150?img=${post.id}`} 
          alt={post.username} 
          className="post-avatar"
        />
        <h3 className="post-username">{post.username}</h3>
      </div>
      
      <img 
        src={post.imageUrl || 'https://picsum.photos/600/600'} 
        alt="Post" 
        className="post-image"
      />
      
      <div className="post-actions">
        <button 
          className={`like-btn ${liked ? 'liked' : ''}`} 
          onClick={handleLike}
        >
          {liked ? '❤️' : '🤍'}
        </button>
        <button className="comment-btn">💬</button>
        <button className="share-btn">↗️</button>
        <button className="save-btn">🔖</button>
      </div>
      
      <div className="post-details">
        <p className="post-likes">{likes} likes</p>
        <p className="post-caption">
          <strong>{post.username}</strong> {post.caption}
        </p>
        <p className="post-time">2 HOURS AGO</p>
      </div>
    </div>
  );
};

export default Post;