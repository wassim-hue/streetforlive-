import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import CreatePost from './components/CreatePost';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6">
          <CreatePost />
          <Feed />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
