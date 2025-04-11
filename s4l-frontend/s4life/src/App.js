import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';
import Login from './Login.js';
import Feed from './Feed.js';
import CreatePost from './CreatePost.js';
import Profile from './Profile.js';
import './App.css';

function App() {
  console.log("App rendered");

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="app-container">
            <Header />
            <div className="main-content">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/feed" element={<Feed />} />
                {/* <Route path="/explore" element={<Explore />} /> */}
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="*" element={<Navigate to="/feed" />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;