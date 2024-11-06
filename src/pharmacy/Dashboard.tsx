import React from 'react';
import { FaPills, FaUsers, FaShoppingCart, FaDollarSign, FaFileAlt, FaChartBar } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"  
              className="p-2 pl-4 bg-white border border-gray-300 rounded-full shadow-sm focus:ring focus:ring-blue-300 focus:outline-none transition duration-200"
            />
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg text-white font-semibold">
              JD
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <FaShoppingCart />, value: "239", label: "Quantity of Sales", bgColor: "bg-blue-500" },
            { icon: <FaDollarSign />, value: "$19,989.00", label: "Revenue", bgColor: "bg-green-500" },
            { icon: <FaChartBar />, value: "$5,999.00", label: "Profit", bgColor: "bg-yellow-500" },
            { icon: <FaPills />, value: "$96,000.00", label: "Value of Stock", bgColor: "bg-orange-500" },
            { icon: <FaDollarSign />, value: "$3,449.00", label: "Total Due", bgColor: "bg-pink-500" },
            { icon: <FaUsers />, value: "39", label: "Total Customers", bgColor: "bg-purple-500" },
            { icon: <FaFileAlt />, value: "11", label: "Total Suppliers", bgColor: "bg-red-500" },
            { icon: <FaUsers />, value: "4", label: "Total Users", bgColor: "bg-teal-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} text-white p-5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out`}
            >
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{stat.icon}</div>
                <div>
                  <p className="text-lg font-semibold">{stat.value}</p>
                  <p className="text-sm">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tables for Today's Sales, Expenses, and Reports */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Today's Sale */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
              <FaShoppingCart className="mr-2 text-blue-500" /> Today's Sale
            </h2>
            <table className="w-full text-sm text-gray-700">
              <thead>
                <tr>
                  <th className="text-left py-2">Reference</th>
                  <th className="text-left py-2">Quantity</th>
                  <th className="text-left py-2">Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1">000003</td>
                  <td className="py-1">4</td>
                  <td className="py-1">155.00</td>
                </tr>
                <tr>
                  <td className="py-1">000004</td>
                  <td className="py-1">3</td>
                  <td className="py-1">130.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Today's Expense */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
              <FaDollarSign className="mr-2 text-teal-500" /> Today's Expense
            </h2>
            <table className="w-full text-sm text-gray-700">
              <thead>
                <tr>
                  <th className="text-left py-2">Description</th>
                  <th className="text-left py-2">Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1">Food</td>
                  <td className="py-1">250.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Today's Report */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
              <FaFileAlt className="mr-2 text-pink-500" /> Today's Report
            </h2>
            <table className="w-full text-sm text-gray-700">
              <thead>
                <tr>
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1">Sales</td>
                  <td className="py-1">323.00</td>
                </tr>
                <tr>
                  <td className="py-1">Expenses</td>
                  <td className="py-1">250.00</td>
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
