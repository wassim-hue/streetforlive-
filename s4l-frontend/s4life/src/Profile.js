import React, { useState } from 'react';
import { FiEdit, FiSettings, FiBookmark, FiGrid } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import './profil.css';

const Profil = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState('posts');
  const [bio, setBio] = useState("Photographe passionné par les paysages urbains | Basé à Paris 📸");
  
  // Données simulées
  const stats = {
    posts: 125,
    followers: 8432,
    following: 421,
  };

  const posts = Array(9).fill().map((_, i) => ({
    id: i,
    imageUrl: `https://picsum.photos/400/400?random=${i}`,
    likes: Math.floor(Math.random() * 500),
    comments: Math.floor(Math.random() * 50),
  }));

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="profil-container">
      {/* Section en-tête */}
      <div className="profil-header">
        <div className="profil-avatar">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Profil"
            className="avatar-image"
          />
        </div>
        
        <div className="profil-info">
          <div className="profil-meta">
            <h2 className="username">johndoe</h2>
            <div className="action-buttons">
              <button 
                className={`follow-btn ${isFollowing ? 'following' : ''}`}
                onClick={handleFollow}
              >
                {isFollowing ? 'Suivi' : 'Suivre'}
              </button>
              <button className="message-btn">Message</button>
              <button className="options-btn">
                <FiSettings />
              </button>
            </div>
          </div>
          
          <div className="profil-stats">
            <div className="stat">
              <span className="stat-count">{stats.posts}</span>
              <span className="stat-label">publications</span>
            </div>
            <div className="stat">
              <span className="stat-count">{stats.followers}</span>
              <span className="stat-label">abonnés</span>
            </div>
            <div className="stat">
              <span className="stat-count">{stats.following}</span>
              <span className="stat-label">abonnements</span>
            </div>
          </div>
          
          <div className="profil-bio">
            <h3>John Doe</h3>
            <p>{bio}</p>
            <button className="edit-bio" onClick={() => prompt('Modifier votre bio', bio)}>
              <FiEdit size={14} /> Modifier
            </button>
          </div>
        </div>
      </div>
      
      {/* Section contenu */}
      <div className="profil-content">
        <div className="profil-tabs">
          <button 
            className={`tab-btn ${activeTab === 'posts' ? 'active' : ''}`}
            onClick={() => setActiveTab('posts')}
          >
            <FiGrid /> Publications
          </button>
          <button 
            className={`tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
            onClick={() => setActiveTab('saved')}
          >
            <FiBookmark /> Enregistrés
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tagged' ? 'active' : ''}`}
            onClick={() => setActiveTab('tagged')}
          >
            <FaRegUserCircle /> Taggués
          </button>
        </div>
        
        <div className="posts-grid">
          {posts.map(post => (
            <div key={post.id} className="post-thumbnail">
              <img src={post.imageUrl} alt={`Post ${post.id}`} />
              <div className="post-hover">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profil;