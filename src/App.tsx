
import React, { useState } from 'react';
import Dashboard from './pharmacy/Dashboard';
import Medicine from './pharmacy/Medicine';
import Users from './pharmacy/Users';
import Settings from './pharmacy/Settings';
import Sales from './pharmacy/Sales';
import Sidebar from './pharmacy/Sidebar';

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard': return <Dashboard />;
      case 'Medicine': return <Medicine />;
      case 'Users': return <Users />;
      case 'Sales': return <Sales />;
      case 'Settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-grow bg-gray-100 min-h-screen">
        {renderComponent()}
      </div>
    </div>
  );
};

export default App;
