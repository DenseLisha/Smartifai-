import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../styles/Dashboard.css"

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("overall")

  useEffect(() => {
    axios.get('http://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=London&days=7')
      .then(response => {
        setData(response.data.forecast.forecastday);
      });
  }, []);

  const formatDate = () => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const today = new Date();
    return today.toLocaleDateString('en-US', options);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab.toLowerCase());
  }
  return (
    <div className="dashboard">
      <div className="tabs">
        <button className={activeTab === 'Overall' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Overall')}>Overall</button>
        <button className={activeTab === 'Platform 01' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Platform 01')}>Platform 01</button>
        <button className={activeTab === 'Platform 02' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Platform 02')}>Platform 02</button>
        <button className={activeTab === 'Platform 03' ? 'tab active' : 'tab'} onClick={() => handleTabClick('Platform 03')}>Platform 03</button>
        <span className="date-range">{formatDate()}</span>
      </div>
      
      <div className="metrics">
        <div className="metric-box">Total Views: 45</div>
        <div className="metric-box">Total Clicks: 30</div>
        <div className="metric-box">Metrics 03: $0.3</div>
        <div className="metric-box">Metrics 04: 90</div>
        <div className="metric-box">Total View Time: 42h</div>
        <div className="metric-box">Number of Viewers: 27</div>
      </div>
      <div className="top-categories">
        <h3>Top Categories</h3>
        <div className="category">Cooking</div>
        <div className="category">Gaming</div>
        <div className="category">Lifestyle</div>
        <div className="category">Beauty</div>
        <div className="category">Fashion</div>
      </div>
    </div>
  );
};

export default Dashboard;
