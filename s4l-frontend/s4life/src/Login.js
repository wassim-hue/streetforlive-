import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { useTheme } from './context/ThemeContext';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password) {
        const username = email.split('@')[0];
        login({ email, username });
        navigate('/feed');
      } else {
        setError('Please enter both email and password');
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`login-page ${darkMode ? 'dark' : ''}`}>
      <div className="login-container">
        <div className="login-box">
          <div className="logo-container">
            <h1 className="creative-logo">Creativa</h1>
            <p className="tagline">Share your creative moments</p>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="login-input"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="login-input"
              />
            </div>
            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="spinner"></span>
              ) : (
                'Log In'
              )}
            </button>
          </form>
          
          <div className="divider">
            <span>OR</span>
          </div>
          
          <div className="social-login">
            <button className="social-button facebook">
              <i className="social-icon">f</i>
              Continue with Facebook
            </button>
            <button className="social-button google">
              <i className="social-icon">G</i>
              Continue with Google
            </button>
          </div>
          
          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
        </div>
        
        <div className="signup-box">
          Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
        </div>
        
        <div className="app-download">
          <p>Get the app.</p>
          <div className="download-buttons">
            <button className="download-button app-store"></button>
            <button className="download-button google-play"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;