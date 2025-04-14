import React, { useState } from 'react';
import { FiMenu, FiX, FiSettings, FiBookmark } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      {isOpen && (
        <nav>
          <a href="#"><FiSettings /> Settings</a>
          <a href="#"><FiBookmark /> Saved</a>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;