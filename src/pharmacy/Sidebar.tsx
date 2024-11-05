import React from 'react';
import { FaTachometerAlt, FaPills, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

interface SidebarProps {
  setActiveComponent: (component: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveComponent }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-6">PHARMACY</h2>
      <button
        className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
        onClick={() => setActiveComponent('Dashboard')}
      >
        <FaTachometerAlt className="mr-2" />
        Dashboard
      </button>
      <button
        className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
        onClick={() => setActiveComponent('Medicine')}
      >
        <FaPills className="mr-2" />
        Medicine
      </button>
      <button
        className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
        onClick={() => setActiveComponent('Users')}
      >
        <FaUser className="mr-2" />
        Users
      </button>
      <button
        className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
        onClick={() => setActiveComponent('Settings')}
      >
        <FaCog className="mr-2" />
        Settings
      </button>
      <button
        className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
        // onClick={() => setActiveComponent('')}
      >
        <FaSignOutAlt className="mr-2" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;


