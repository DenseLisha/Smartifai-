import React from 'react';
import styles from "../styles/Header.css";

const Header = () => {
  
  

  return (
    <header className="header">
      <div className="header-left">
        <select className="dropdown">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        
      </div>
      <div className="overview">
        <div className="metric">Total Earnings: <span className='large-number'>$54.36</span></div>
        <div className="metric">Total Spent:<span className='large-number'>$23.63</span> </div>
        <div className="metric">Total Posts:<span className='large-number'>72</span> </div>
      </div>
    </header>
  );
};

export default Header;
