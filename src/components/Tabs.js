import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              cursor: 'pointer',
              fontWeight: activeTab === index ? 'bold' : 'normal',
            }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div>
        {tabs[activeTab] && <p>{tabs[activeTab].content}</p>}
      </div>
    </div>
  );
};

export default Tabs;