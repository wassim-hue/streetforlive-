import React from 'react';
import './sidebar.css';
import { FaHome, FaUser, FaComments, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Correct imports

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <img
          src="https://via.placeholder.com/150x50/000000/FFFFFF/?text=Logo"
          alt="Logo"
          className="sidebar-logo-img"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <SidebarSection title="Main">
          <NavItem icon={<FaHome size={20} />} label="Home" />
          <NavItem icon={<FaUser size={20} />} label="Profile" />
          <NavItem icon={<FaComments size={20} />} label="Messages" />
        </SidebarSection>

        <SidebarSection title="Groups">
          <NavItem icon={<FaUsers size={20} />} label="Friends" />
        </SidebarSection>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <NavItem icon={<FaCog size={20} />} label="Settings" />
        <NavItem icon={<FaSignOutAlt size={20} />} label="Logout" />
      </div>
    </aside>
  );
};

// Reusable Nav Item Component
const NavItem = ({ icon, label }) => (
  <a href="#" className="sidebar-item">
    {icon}
    <span className="sidebar-item-label">{label}</span>
  </a>
);

// Section Wrapper
const SidebarSection = ({ title, children }) => (
  <div className="sidebar-section">
    <h4 className="sidebar-title">{title}</h4>
    {children}
  </div>
);

export default Sidebar;

