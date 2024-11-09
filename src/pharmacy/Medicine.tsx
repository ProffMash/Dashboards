import React from 'react';
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MedicineInventory: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Medicine Inventory</h2>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center border border-blue-300 rounded-lg shadow-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search medicine..."
            className="p-3 w-72 outline-none text-gray-700"
          />
          <button className="p-3 bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
            <FaSearch />
          </button>
        </div>
        <button 
        onClick={() => navigate('/medicine-form')}
        className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300">
          <FaPlus />
          <span>Add Medicine</span>
        </button>
      </div>

      <div className="overflow-hidden rounded-lg shadow-lg">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-blue-100 text-gray-700">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-blue-50 transition duration-150">
              <td className="p-4">001</td>
              <td className="p-4">Paracetamol</td>
              <td className="p-4">Pain Relief</td>
              <td className="p-4">200</td>
              <td className="p-4">$5.00</td>
              <td className="p-4 flex space-x-2">
                <button className="p-2 text-blue-600 hover:text-blue-800 transition duration-200">
                  <FaEdit />
                </button>
                <button className="p-2 text-red-600 hover:text-red-800 transition duration-200">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-blue-50 transition duration-150">
              <td className="p-4">002</td>
              <td className="p-4">Ibuprofen</td>
              <td className="p-4">Pain Relief</td>
              <td className="p-4">150</td>
              <td className="p-4">$8.00</td>
              <td className="p-4 flex space-x-2">
                <button className="p-2 text-blue-600 hover:text-blue-800 transition duration-200">
                  <FaEdit />
                </button>
                <button className="p-2 text-red-600 hover:text-red-800 transition duration-200">
                  <FaTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicineInventory;
