import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { useTheme } from './context/ThemeContext';
// import { 
//   FiHome, 
//   FiCompass, 
//   FiPlusSquare, 
//   FiHeart, 
//   FiUser 
// } from 'react-icons/fi';
// import { 
//   FaHome, 
//   FaCompass, 
//   FaPlusSquare, 
//   FaHeart, 
//   FaUser,
//   FaMoon,
//   FaSun
// } from 'react-icons/fa';
import './Header.css';

function Header({ proDesign = false }) {
  const { user, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  // Choose icon set based on proDesign prop
  const Icons = proDesign ? Fa : Fi;
  
  return (
    <header className={`header ${darkMode ? 'dark' : ''} ${proDesign ? 'pro' : ''}`}>
      <div className="header-container">
        <Link to="/feed" className="logo">
          {proDesign ? (
            <span className="creative-logo-pro">Creativa</span>
          ) : (
            <span className="creative-logo">Creativa</span>
          )}
        </Link>
        
        <div className={`search-bar ${proDesign ? 'pro' : ''}`}>
          <input 
            type="text" 
            placeholder="Search" 
            className={proDesign ? 'pro-input' : ''}
          />
          {proDesign && <div className="search-icon">⌕</div>}
        </div>
        
        <nav className="nav-icons">
          <Link to="/feed" className="nav-icon" title="Home">
            <Icons.Home className="icon" color={proDesign ? (darkMode ? "#ffffff" : "#262626") : "#262626"} />
          </Link>
          
          <Link to="/explore" className="nav-icon" title="Explore">
            <Icons.Compass className="icon" />
          </Link>
          
          <Link to="/create-post" className="nav-icon" title="Create">
            <Icons.PlusSquare className="icon" />
          </Link>
          
          <Link to="/activity" className="nav-icon" title="Activity">
            <Icons.Heart className="icon" />
          </Link>
          
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? (
              <FaSun className="icon" color={proDesign ? "#ffffff" : "#262626"} />
            ) : (
              <FaMoon className="icon" color={proDesign ? "#262626" : "#262626"} />
            )}
          </button>
          
          <Link to={`/profile/${user?.username || ''}`} className="nav-icon" title="Profile">
            <Icons.User className="icon" />
          </Link>
          
          {user && (
            <button onClick={logout} className="logout-btn" title="Logout">
              {proDesign ? 'Logout' : '✕'}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;