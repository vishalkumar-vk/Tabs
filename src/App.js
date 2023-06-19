import React from 'react';
import Tabs from './components/Tabs';

const App = () => {
  const tabs = [
    { title: 'Tab 1', content: 'This is Tab 1' },
    { title: 'Tab 2', content: 'This is Tab 2' },
    { title: 'Tab 3', content: 'This is Tab 3' },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;