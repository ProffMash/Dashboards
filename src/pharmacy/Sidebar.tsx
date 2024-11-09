// import React from 'react';
// import { FaTachometerAlt, FaPills, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

// interface SidebarProps {
//   setActiveComponent: (component: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ setActiveComponent }) => {
//   return (
//     <div className="w-64 bg-gray-800 text-white h-screen p-4 space-y-6">
//       <h2 className="text-2xl font-bold mb-6">PHARMACY</h2>
//       <button
//         className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
//         onClick={() => setActiveComponent('Dashboard')}
//       >
//         <FaTachometerAlt className="mr-2" />
//         Dashboard
//       </button>
//       <button
//         className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
//         onClick={() => setActiveComponent('Medicine')}
//       >
//         <FaPills className="mr-2" />
//         Medicine
//       </button>
//       <button
//         className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
//         onClick={() => setActiveComponent('Users')}
//       >
//         <FaUser className="mr-2" />
//         Users
//       </button>
//       <button
//         className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
//         onClick={() => setActiveComponent('Settings')}
//       >
//         <FaCog className="mr-2" />
//         Settings
//       </button>
//       <button
//         className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
//         // onClick={() => setActiveComponent('')}
//       >
//         <FaSignOutAlt className="mr-2" />
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Sidebar;



import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaPills, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-6">PHARMACY</h2>
      
      <Link
        to="/"
        className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
      >
        <FaTachometerAlt className="mr-2" />
        Dashboard
      </Link>
      
      <Link
        to="/medicine"
        className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
      >
        <FaPills className="mr-2" />
        Medicine
      </Link>
      
      <Link
        to="/users"
        className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
      >
        <FaUser className="mr-2" />
        Users
      </Link>
      
      <Link
        to="/settings"
        className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
      >
        <FaCog className="mr-2" />
        Settings
      </Link>
      
      <button
        className="flex items-center w-full text-left py-2 px-4 rounded hover:bg-gray-700"
      >
        <FaSignOutAlt className="mr-2" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
