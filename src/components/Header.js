import React from 'react';
import styles from "../styles/Header.css";

const Header = () => {
  
  const formatDate = () => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const today = new Date();
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <header className="header">
      <div className="header-left">
        <select className="dropdown">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <span className="date-range">{formatDate()}</span> 
      </div>
      <div className="overview">
        <div className="metric">Total Earnings: $54.36</div>
        <div className="metric">Total Spent: $23.63</div>
        <div className="metric">Total Posts: 72</div>
      </div>
    </header>
  );
};

export default Header;
