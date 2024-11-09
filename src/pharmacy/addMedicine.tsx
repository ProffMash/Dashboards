import React from 'react';
import { FaPlus, FaSave, FaTimes, FaPrescriptionBottle, FaCalendarAlt, FaTags, FaBox, FaDollarSign, FaBuilding } from 'react-icons/fa';

const MedicineForm: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Add New Medicine</h2>

      <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        {/* Medicine Name */}
        <div className="flex items-center border border-blue-300 rounded-lg shadow-sm">
          <FaPrescriptionBottle className="p-3 text-blue-600" />
          <input
            type="text"
            placeholder="Medicine Name"
            className="p-3 w-full outline-none text-gray-700"
            required
          />
        </div>

        {/* Category */}
        <div className="flex items-center border border-blue-300 rounded-lg shadow-sm">
          <FaTags className="p-3 text-blue-600" />
          <input
            type="text"
            placeholder="Category (e.g., Pain Relief)"
            className="p-3 w-full outline-none text-gray-700"
            required
          />
        </div>

        {/* Quantity */}
        <div className="flex items-center border border-blue-300 rounded-lg shadow-sm">
          <FaBox className="p-3 text-blue-600" />
          <input
            type="number"
            placeholder="Quantity"
            className="p-3 w-full outline-none text-gray-700"
            required
          />
        </div>

        {/* Price */}
        <div className="flex items-center border border-blue-300 rounded-lg shadow-sm">
          <FaDollarSign className="p-3 text-blue-600" />
          <input
            type="number"
            step="0.01"
            placeholder="Price"
            className="p-3 w-full outline-none text-gray-700"
            required
          />
        </div>

        {/* Expiration Date */}
        <div className="flex items-center border border-blue-300 rounded-lg shadow-sm">
          <FaCalendarAlt className="p-3 text-blue-600" />
          <input
            type="date"
            placeholder="Expiration Date"
            className="p-3 w-full outline-none text-gray-700"
            required
          />
        </div>

        {/* Manufacturer */}
        <div className="flex items-center border border-blue-300 rounded-lg shadow-sm">
          <FaBuilding className="p-3 text-blue-600" />
          <input
            type="text"
            placeholder="Manufacturer"
            className="p-3 w-full outline-none text-gray-700"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="reset"
            className="flex items-center bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            <FaTimes />
            <span className="ml-2">Cancel</span>
          </button>
          <button
            type="submit"
            className="flex items-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
          >
            <FaSave />
            <span className="ml-2">Save Medicine</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MedicineForm;
