import React, { useEffect, useState, useRef, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import './TabBar.css';

const allTabs = [
  {
    id: 'home',
    name: 'Home',
    backgroundColor: '#e9d4ff',
    focusColor: '#be98e3',
    route: '/',
    tabIndex: 0,
  },
  {
    id: 'products',
    name: 'Products',
    backgroundColor: '#ffe4e3',
    focusColor: '#e3a29f',
    route: '/products',
    tabIndex: 1,
  },
  {
    id: 'about',
    name: 'About',
    backgroundColor: '#e8e9ff',
    focusColor: '#98b4e3',
    route: '/about',
    tabIndex: 2,
  },
];

const TabBar = () => {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(
    allTabs.find((tab) => tab.route === location.pathname)?.tabIndex ?? 0
  );

  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      if (currentTab) {
        setTabUnderlineLeft(currentTab.offsetLeft);
        setTabUnderlineWidth(currentTab.clientWidth);
      }
    };

    const tab = allTabs[activeTabIndex];
    if (tab) {
      theme.changeTheme(tab.id, tab.focusColor);
    }

    setTimeout(setTabPosition, 60);
  }, [activeTabIndex, location.pathname, theme]);

  const handleTabClick = (index, tab) => {
    setActiveTabIndex(index);
    theme.changeTheme(tab.id, tab.focusColor);
    navigate(tab.route, { state: { prevLocation: location.pathname } });
  };

  return (
    <div
      className="sliding-tab-bar"
      style={{ backgroundColor: allTabs[activeTabIndex]?.backgroundColor }}
    >
      <div
        className="tab-underline"
        style={{
          left: tabUnderlineLeft,
          width: tabUnderlineWidth,
          backgroundColor: allTabs[activeTabIndex]?.focusColor,
        }}
      ></div>
      {allTabs.map((tab, index) => (
        <button
          key={index}
          ref={(el) => (tabsRef.current[index] = el)}
          className={`tab-button ${activeTabIndex === index ? 'active' : ''}`}
          onClick={() => handleTabClick(index, tab)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
