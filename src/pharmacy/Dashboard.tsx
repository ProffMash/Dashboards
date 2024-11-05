import React from 'react';
import { FaPills, FaUsers, FaShoppingCart, FaDollarSign, FaFileAlt,  FaChartBar } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">

      <main className="flex-1 p-4 bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 border rounded-md outline-none"
            />
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow flex items-center space-x-3">
            <FaShoppingCart className="text-2xl" />
            <div>
              <p>239</p>
              <p className="text-sm">Quantity of Sales</p>
            </div>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow flex items-center space-x-3">
            <FaDollarSign className="text-2xl" />
            <div>
              <p>$19,989.00</p>
              <p className="text-sm">Revenue</p>
            </div>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg shadow flex items-center space-x-3">
            <FaChartBar className="text-2xl" />
            <div>
              <p>$5,999.00</p>
              <p className="text-sm">Profit</p>
            </div>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded-lg shadow flex items-center space-x-3">
            <FaPills className="text-2xl" />
            <div>
              <p>$96,000.00</p>
              <p className="text-sm">Value of Stock</p>
            </div>
          </div>
          <div className="bg-pink-500 text-white p-4 rounded-lg shadow flex items-center space-x-3">
            <FaDollarSign className="text-2xl" />
            <div>
              <p>$3,449.00</p>
              <p className="text-sm">Total Due</p>
            </div>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-lg shadow flex items-center space-x-3">
            <FaUsers className="text-2xl" />
            <div>
              <p>39</p>
              <p className="text-sm">Total Customers</p>
            </div>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg shadow flex items-center space-x-3">
            <FaFileAlt className="text-2xl" />
            <div>
              <p>11</p>
              <p className="text-sm">Total Suppliers</p>
            </div>
          </div>
          <div className="bg-teal-500 text-white p-4 rounded-lg shadow flex items-center space-x-3">
            <FaUsers className="text-2xl" />
            <div>
              <p>4</p>
              <p className="text-sm">Total Users</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Today's Sale */}
          <div className="bg-blue-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <FaShoppingCart className="mr-2" /> Today's Sale
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left">Reference</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>000003</td>
                  <td>4</td>
                  <td>155.00</td>
                </tr>
                <tr>
                  <td>000004</td>
                  <td>3</td>
                  <td>130.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Today's Expense */}
          <div className="bg-teal-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <FaDollarSign className="mr-2" /> Today's Expense
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left">Description</th>
                  <th className="text-left">Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Food</td>
                  <td>250.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Today's Report */}
          <div className="bg-pink-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <FaFileAlt className="mr-2" /> Today's Report
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left">Type</th>
                  <th className="text-left">Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sales</td>
                  <td>323.00</td>
                </tr>
                <tr>
                  <td>Expenses</td>
                  <td>250.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
