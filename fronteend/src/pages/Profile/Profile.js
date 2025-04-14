import React from 'react';
import { FiMoreHorizontal,} from 'react-icons/fi';
import { FaRegBookmark, FaRegUser, } from 'react-icons/fa';
import { BsGrid3X3, BsBookmark, } from 'react-icons/bs';
import { RiVideoLine } from 'react-icons/ri';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState('posts');
  const [isFollowing, setIsFollowing] = React.useState(false);

  // Sample posts data
  const posts = [...Array(12)].map((_, i) => ({
    id: i + 1,
    image: `https://source.unsplash.com/random/300x30${i}`,
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100)
  }));

  return (
    <div className="ig-profile">
      {/* Profile Header */}
      <div className="ig-profile-header">
        <div className="ig-profile-avatar-container">
          <div className="ig-profile-avatar">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Profile" 
            />
          </div>
        </div>

        <div className="ig-profile-info">
          <div className="ig-profile-actions">
            <h1>janedoe</h1>
            <button 
              className={`ig-follow-btn ${isFollowing ? 'following' : ''}`}
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
            <button className="ig-more-btn">
              <FiMoreHorizontal />
            </button>
          </div>

          <div className="ig-profile-stats">
            <div className="ig-stat">
              <span className="ig-stat-number">1,234</span>
              <span className="ig-stat-label">posts</span>
            </div>
            <div className="ig-stat">
              <span className="ig-stat-number">12.8K</span>
              <span className="ig-stat-label">followers</span>
            </div>
            <div className="ig-stat">
              <span className="ig-stat-number">543</span>
              <span className="ig-stat-label">following</span>
            </div>
          </div>

          <div className="ig-profile-bio">
            <h2>Jane Doe</h2>
            <p>Digital creator & photography enthusiast</p>
            <p>📍 New York, USA</p>
            <a href="jkh" className="ig-profile-link">example.com/portfolio</a>
          </div>
        </div>
      </div>

      {/* Profile Highlights */}
      <div className="ig-highlights">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="ig-highlight">
            <div className="ig-highlight-circle">
              <img 
                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i+10}.jpg`} 
                alt="Highlight" 
              />
            </div>
            <span>Highlight {i+1}</span>
          </div>
        ))}
      </div>

      {/* Profile Navigation */}
      <div className="ig-profile-nav">
        <button 
          className={`ig-profile-nav-item ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          <BsGrid3X3 />
          <span>POSTS</span>
        </button>
        <button 
          className={`ig-profile-nav-item ${activeTab === 'reels' ? 'active' : ''}`}
          onClick={() => setActiveTab('reels')}
        >
          <RiVideoLine />
          <span>REELS</span>
        </button>
        <button 
          className={`ig-profile-nav-item ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          {activeTab === 'saved' ? <BsBookmark /> : <FaRegBookmark />}
          <span>SAVED</span>
        </button>
        <button 
          className={`ig-profile-nav-item ${activeTab === 'tagged' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagged')}
        >
          <FaRegUser />
          <span>TAGGED</span>
        </button>
      </div>

      {/* Profile Content */}
      <div className="ig-profile-content">
        {activeTab === 'posts' && (
          <div className="ig-posts-grid">
            {posts.map(post => (
              <div key={post.id} className="ig-post">
                <img src={post.image} alt={`Post ${post.id}`} />
                <div className="ig-post-overlay">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reels' && (
          <div className="ig-reels-grid">
            {posts.slice(0, 6).map(post => (
              <div key={post.id} className="ig-reel">
                <img src={post.image} alt={`Reel ${post.id}`} />
                <span>▶️ {post.likes / 1000}k</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="ig-saved-collections">
            <div className="ig-saved-header">
              <h3>Saved</h3>
              <p>Only you can see what you've saved</p>
            </div>
            <div className="ig-collections-grid">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="ig-collection">
                  <div className="ig-collection-cover">
                    <img src={posts[i].image} alt={`Collection ${i+1}`} />
                    <img src={posts[i+1].image} alt={`Collection ${i+1}`} />
                  </div>
                  <span>Collection {i+1}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tagged' && (
          <div className="ig-tagged-posts">
            <div className="ig-tagged-header">
              <h3>Photos of you</h3>
              <p>When people tag you in photos, they'll appear here.</p>
            </div>
            <div className="ig-tagged-grid">
              {posts.slice(0, 4).map(post => (
                <div key={post.id} className="ig-tagged-post">
                  <img src={post.image} alt={`Tagged ${post.id}`} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;