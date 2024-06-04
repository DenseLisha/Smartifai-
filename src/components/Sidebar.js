import React from 'react';
import styles from "../styles/Sidebar.css"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">Platform</div>
      <ul className="sidebar-menu">
        <li className="menu-item">Dashboard</li>
        <li className="menu-item">Connect</li>
        <li className="menu-item">Report</li>
        <li className="menu-item">Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
