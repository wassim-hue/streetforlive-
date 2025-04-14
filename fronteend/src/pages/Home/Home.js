import React from 'react';
import { FaHeart, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import './Home.css';

const Home = () => {
  const { darkMode } = useTheme();

  // Sample stories data
  const stories = [
    { id: 1, username: 'your_story', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', isYourStory: true },
    { id: 2, username: 'user1', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, username: 'traveler', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, username: 'foodie', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, username: 'photographer', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ];

  // Sample posts data
  const posts = [
    {
      id: 1,
      username: 'traveler123',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      image: 'https://source.unsplash.com/random/600x600?nature',
      caption: 'Beautiful sunset views today! 🌅 #nature #sunset',
      likes: 142,
      comments: 23,
      time: '2 hours ago',
      isLiked: false,
      isSaved: false
    },
    {
      id: 2,
      username: 'foodlover',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      image: 'https://source.unsplash.com/random/600x600?food',
      caption: 'Delicious pasta for dinner! 🍝 #foodie #pasta',
      likes: 89,
      comments: 12,
      time: '4 hours ago',
      isLiked: true,
      isSaved: false
    }
  ];

  const handleLike = (postId) => {
    // You would typically update state here
    console.log('Liked post:', postId);
  };

  const handleSave = (postId) => {
    // You would typically update state here
    console.log('Saved post:', postId);
  };

  return (
    <div className={`ig-home ${darkMode ? 'dark' : ''}`}>
      {/* Stories Section */}
      <div className="ig-stories">
        {stories.map(story => (
          <div key={story.id} className="ig-story">
            <div className={`ig-story-circle ${story.isYourStory ? 'your-story' : ''}`}>
              <img src={story.avatar} alt={story.username} />
            </div>
            <span className="ig-story-username">
              {story.isYourStory ? 'Your Story' : story.username}
            </span>
          </div>
        ))}
      </div>

      {/* Posts Feed */}
      <div className="ig-posts">
        {posts.map(post => (
          <div key={post.id} className="ig-post">
            {/* Post Header */}
            <div className="ig-post-header">
              <div className="ig-post-user">
                <img src={post.avatar} alt={post.username} className="ig-post-avatar" />
                <span className="ig-post-username">{post.username}</span>
              </div>
              <button className="ig-post-more">···</button>
            </div>

            {/* Post Image */}
            <div className="ig-post-image">
              <img src={post.image} alt="Post" />
            </div>

            {/* Post Actions */}
            <div className="ig-post-actions">
              <div className="ig-post-action-left">
                <button 
                  className="ig-post-action" 
                  onClick={() => handleLike(post.id)}
                >
                  {post.isLiked ? (
                    <FaHeart className="liked" />
                  ) : (
                    <FaHeart />
                  )}
                </button>
                <button className="ig-post-action">
                  <FiSend />
                </button>
              </div>
              <button 
                className="ig-post-action" 
                onClick={() => handleSave(post.id)}
              >
                {post.isSaved ? (
                  <FaBookmark className="saved" />
                ) : (
                  <FaRegBookmark />
                )}
              </button>
            </div>

            {/* Post Details */}
            <div className="ig-post-details">
              <div className="ig-post-likes">{post.likes.toLocaleString()} likes</div>
              <div className="ig-post-caption">
                <span className="ig-post-username">{post.username}</span> {post.caption}
              </div>
              <div className="ig-post-comments">View all {post.comments} comments</div>
              <div className="ig-post-time">{post.time}</div>
            </div>

            {/* Add Comment */}
            <div className="ig-add-comment">
              <input type="text" placeholder="Add a comment..." />
              <button className="ig-post-button">Post</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;