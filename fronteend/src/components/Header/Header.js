import React, { useMemo } from 'react';
import { 
  FaHome, FaSearch, FaPlusSquare, FaHeart, FaUserAlt,
  FaTelegram, FaMoon, FaSun 
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const headerClass = useMemo(() => 
    `ig-header ${theme.isDark ? 'dark' : ''}`, 
    [theme.isDark]
  );

  return (
    <header className={headerClass}>
      <div className="ig-header-container">
        
        {/* Updated Logo */}
        <div className="ig-logo">
          <img 
            src="/assets/st.jpeg" 
            alt="Street for Live Logo" 
            className="ig-brand-image"
            style={{ height: '40px', objectFit: 'contain' }}
          />
        </div>

        {/* Search */}
        <div className="ig-search">
          <FaSearch className="ig-search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="ig-search-input"
            style={{
              background: theme.surface,
              color: theme.text,
              borderColor: theme.border
            }}
          />
        </div>

        {/* Navigation */}
        <nav className="ig-nav">
          <a href="/" className="ig-nav-link">
            <FaHome className="ig-nav-icon" />
          </a>
          <a href="/direct" className="ig-nav-link">
            <FaTelegram className="ig-nav-icon" />
          </a>
          <a href="/create" className="ig-nav-link">
            <FaPlusSquare className="ig-nav-icon" />
          </a>
          <a href="/activity" className="ig-nav-link">
            <FaHeart className="ig-nav-icon" />
          </a>
          <a href="/profile" className="ig-nav-link">
            <FaUserAlt className="ig-nav-icon" />
          </a>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="ig-theme-toggle"
            aria-label={`Switch to ${theme.isDark ? 'light' : 'dark'} mode`}
            style={{
              color: theme.text,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {theme.isDark ? (
              <FaSun size={20} color={theme.warning} />
            ) : (
              <FaMoon size={20} color={theme.textSecondary} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
