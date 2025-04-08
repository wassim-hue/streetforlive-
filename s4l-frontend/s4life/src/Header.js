import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

function Header() {
  const { user, logout } = useAuth();
  const { darkMode } = useTheme();

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="header-container">
        <Link to="/feed" className="logo">
          <span className="creative-logo">Creativa</span>
        </Link>
        
        <div className="search-bar">
          <input type="text" placeholder="بحث" />
        </div>
        
        <nav className="nav-icons">
          <Link to="/feed" className="nav-icon">
            <i className="icon-home"></i>
          </Link>
          <Link to="/explore" className="nav-icon">
            <i className="icon-explore"></i>
          </Link>
          <Link to="/create-post" className="nav-icon">
            <i className="icon-add"></i>
          </Link>
          <ThemeToggle />
          <Link to={`/profile/${user?.username || ''}`} className="nav-icon">
            <i className="icon-profile"></i>
          </Link>
          {user && (
            <button onClick={logout} className="nav-icon">
              <i className="icon-logout"></i>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;