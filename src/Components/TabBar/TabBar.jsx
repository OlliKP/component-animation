import React from 'react';
import './TabBar.css';

const TabBar = () => {

  return (
    <div className="sliding-tab-bar">
      <button className="active-tab">Home</button>
      <button className="tab-button">Products</button>
      <button className="tab-button">About</button>
    </div>
  );
};

export default TabBar;