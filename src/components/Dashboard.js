import React, { useState } from 'react';
import axios from 'axios';
import styles from "../styles/Dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overall'); 
  const [activeMetric, setActiveMetric] = useState(null)

  const formatDate = () => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const today = new Date();
    return today.toLocaleDateString('en-US', options);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleMetricClick = (index) => {
    setActiveMetric(index === activeMetric ? null : index);
  };
  const handleMouseEnter = (index) => {
    setActiveMetric(index);
  };

  const handleMouseLeave = () => {
    setActiveMetric(null);
  };
  return (
    <div className="dashboard">
      <div className="tabs">
        <h2 className={activeTab === 'Overall' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Overall')}>Overall</h2>
        <h2 className={activeTab === 'Platform 01' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Platform 01')}>Platform 01</h2>
        <h2 className={activeTab === 'Platform 02' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Platform 02')}>Platform 02</h2>
        <h2 className={activeTab === 'Platform 03' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Platform 03')}>Platform 03</h2>
        <span className="date-range">{formatDate()}</span>
      </div>
      <div className='metrics-container'>    
        <div className="metrics">
          <div className={activeMetric === 0 ? 'metric-box active' : 'metric-box'} onClick={() => handleMetricClick(0)} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>Total Views: 45</div>
          <div className={activeMetric === 1 ? 'metric-box active' : 'metric-box'} onClick={() => handleMetricClick(1)} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>Total Clicks: 30</div>
          <div className={activeMetric === 2 ? 'metric-box active' : 'metric-box'} onClick={() => handleMetricClick(2)} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>Metrics 03: $0.3</div>
          <div className={activeMetric === 3 ? 'metric-box active' : 'metric-box'} onClick={() => handleMetricClick(3)} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>Metrics 04: 90</div>
          <div className={activeMetric === 4 ? 'metric-box active' : 'metric-box'} onClick={() => handleMetricClick(4)} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>Total View Time: 42h</div>
          <div className={activeMetric === 5 ? 'metric-box active' : 'metric-box'} onClick={() => handleMetricClick(5)} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>Number of Viewers: 27</div>
        </div>
      </div>
      <div className="top-categories">
        <h3>Top Categories</h3>
        <div className="bar-container">
            <div className="label">Cooking</div>
            <div className="bar" style={{width: "50%"}}></div>
            <div className="scale">50%</div>
        </div>
        <div className="bar-container">
            <div className="label">Gaming</div>
            <div className="bar" style={{width: "30%"}}></div>
            <div className="scale">30%</div>
        </div>
        <div className="bar-container">
            <div className="label">Lifestyle</div>
            <div className="bar" style={{width: "80%"}}></div>
            <div className="scale">80%</div>
        </div>
        <div className="bar-container">
            <div className="label">Beauty</div>
            <div className="bar" style={{width: "60%"}}></div>
            <div className="scale">60%</div>
        </div>
        <div className="bar-container">
            <div className="label">Fashion</div>
            <div className="bar" style={{width: "90%"}}></div>
            <div className="scale">90%</div>
        </div>
        <div className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
    </div>
        </div>
    </div>
  );
};

export default Dashboard;
