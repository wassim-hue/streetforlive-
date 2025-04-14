import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate at the top
import { FiMail, FiLock } from 'react-icons/fi';
import axios from 'axios';
import './Login.css';
import videoBg from '../../pages/Login/jk.mp4';
import logoImg from '../../pages/Login/st.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Call useNavigate at the top level of the component

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
  
    // Basic validation
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  
    if (password.length < 6) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  
    try {
      setIsLoading(true);
      
      // Simple Axios POST request
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
  
      console.log('Login response:', response.data); // Debug log
  
      if (response.data && response.data.token) {
        // Save token and user data to localStorage
        localStorage.setItem('userInfo', JSON.stringify(response.data));
  
        console.log('Navigating to /home...');
        // Use navigate here for redirection
        navigate('/home', { replace: true });
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Login error:', error); // Debug log
      setLoginError(
        error.response?.data?.message || 
        error.message || 
        'Login failed. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="ig-login-container">
      <video autoPlay loop muted playsInline className="ig-bg-video">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="ig-overlay" />

      <div className="ig-login-box">
        <img src={logoImg} alt="Logo" className="ig-login-logo" />

        {loginError && <div className="ig-login-error">{loginError}</div>}

        <form onSubmit={handleSubmit} className="ig-login-form">
          <div className="ig-input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? 'invalid' : ''}
              required
            />
            <FiMail className="ig-input-icon" />
            {emailError && <p className="error-text">Invalid email</p>}
          </div>

          <div className="ig-input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? 'invalid' : ''}
              required
            />
            <FiLock className="ig-input-icon" />
            {passwordError && <p className="error-text">Password must be at least 6 characters</p>}
          </div>

          <button 
            type="submit" 
            className="ig-login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="ig-login-footer">
          <Link to="/forgot-password">Forgot password?</Link>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
