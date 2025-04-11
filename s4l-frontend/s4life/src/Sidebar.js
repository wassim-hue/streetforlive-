import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { 
  FiHome, 
  FiSearch, 
  FiCompass, 
  FiFilm, 
  FiMessageCircle, 
  FiHeart, 
  FiPlusSquare, 
  FiUser 
} from 'react-icons/fi';
import { 
  FaHome, 
  FaSearch, 
  FaCompass, 
  FaFilm, 
  FaRegComment, 
  FaRegHeart, 
  FaPlusSquare, 
  FaUser 
} from 'react-icons/fa';
import './sidebar.css';

function Sidebar() {
  const { darkMode } = useTheme();
  const location = useLocation();
  const Icons = darkMode ? Fa : Fi; // Use filled icons in dark mode

  const navItems = [
    { icon: <Icons.Home size={24} />, label: 'Home', path: '/feed' },
    { icon: <Icons.Search size={24} />, label: 'Search', path: '/explore' },
    { icon: <Icons.Compass size={24} />, label: 'Explore', path: '/explore' },
    { icon: <Icons.Film size={24} />, label: 'Reels', path: '/reels' },
    { icon: <Icons.MessageCircle size={24} />, label: 'Messages', path: '/direct' },
    { icon: <Icons.Heart size={24} />, label: 'Notifications', path: '/activity' },
    { icon: <Icons.PlusSquare size={24} />, label: 'Create', path: '/create-post' },
    { icon: <Icons.User size={24} />, label: 'Profile', path: '/profile' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Link to="/feed">
          {darkMode ? (
            <img 
              src="/instagram-white-logo.png" 
              alt="Instagram" 
              className="sidebar-logo-img" 
            />
          ) : (
            <img 
              src="/instagram-logo.png" 
              alt="Instagram" 
              className="sidebar-logo-img" 
            />
          )}
        </Link>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="sidebar-item-icon">
              {item.icon}
            </span>
            <span className="sidebar-item-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link to="/more" className="sidebar-item">
          <span className="sidebar-item-icon">
            <Icons.Menu size={24} />
          </span>
          <span className="sidebar-item-label">More</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;