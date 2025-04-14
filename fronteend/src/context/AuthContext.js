import React, { createContext, useState, useEffect, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';

// Create Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize authentication on component mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');

        if (token && userData) {
          const decoded = jwtDecode(token);
          if (decoded.exp * 1000 < Date.now()) {
            throw new Error('Token expired');
          }
          setUser(JSON.parse(userData));
        }
      } catch (err) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };
    
    initializeAuth();
  }, []);

  // Login function
  const login = useCallback(async (credentials, navigate) => {
    try {
      setLoading(true);
      setError(null);

      const response = await mockLogin(credentials);
      const { token, user } = response;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);

      // Redirect to home after successful login
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Logout function
  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  // Return the context to be used in other components
  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock API for login
const mockLogin = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password') {
        resolve({
          token: 'fake-jwt-token',
          user: {
            id: '1',
            name: 'John Doe',
            email: 'user@example.com',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
          }
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};
