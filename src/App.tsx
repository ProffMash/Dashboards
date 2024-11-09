import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pharmacy/Dashboard';
import Medicine from './pharmacy/Medicine';
import MedicineForm from './pharmacy/addMedicine';
import Users from './pharmacy/Users';
import Settings from './pharmacy/Settings';
import Sales from './pharmacy/Sales';
import Sidebar from './pharmacy/Sidebar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow bg-gray-100 min-h-screen p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/medicine-form" element={<MedicineForm />} />
            <Route path="/users" element={<Users />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
