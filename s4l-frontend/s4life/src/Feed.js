import { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import { useTheme } from './context/ThemeContext';
import Post from './Post.js';
import Story from './storys';
import './feed.css';

function Feed() {
  const { user } = useAuth();
  const { darkMode } = useTheme();
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // هنا يمكنك جلب البيانات من API
    const mockPosts = [
      { id: 1, username: 'user1', imageUrl: '...', caption: 'منشور تجريبي 1', likes: 42 },
      { id: 2, username: 'user2', imageUrl: '...', caption: 'منشور تجريبي 2', likes: 24 }
    ];
    
    const mockStories = [
      { id: 1, username: 'user1', imageUrl: '...' },
      { id: 2, username: 'user2', imageUrl: '...' }
    ];
    
    setPosts(mockPosts);
    setStories(mockStories);
  }, []);

  return (
    <div className={`feed-container ${darkMode ? 'dark' : ''}`}>
      <div className="stories-container">
        {stories.map(story => (
          <Story key={story.id} story={story} />
        ))}
      </div>
      
      <div className="posts-container">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;