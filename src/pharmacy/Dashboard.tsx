// // Dashboard.tsx
// import React from 'react';

// const Dashboard: React.FC = () => {
//   return (
//     <div className="p-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
//       {/* Each block here represents the dashboard metrics */}
//       <div className="bg-blue-400 p-4 rounded-lg text-white">
//         <h3>239</h3>
//         <p>Quantity of Sales</p>
//       </div>
//       <div className="bg-green-400 p-4 rounded-lg text-white">
//         <h3>$19989.00</h3>
//         <p>Revenue</p>
//       </div>
//       {/* Continue adding metrics blocks here... */}
//     </div>
//   );
// };

// export default Dashboard;








// import React from 'react';
// import { FaPills, FaUsers, FaShoppingCart, FaDollarSign, FaFileAlt, FaCog, FaChartBar } from 'react-icons/fa';

// const App: React.FC = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gradient-to-b from-pink-500 to-pink-300 p-4 text-white">
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold">Pharmacy</h1>
//         </div>
//         <ul className="space-y-4">
//           <li className="flex items-center space-x-2 hover:bg-pink-400 p-2 rounded">
//             <FaChartBar />
//             <span>Dashboard</span>
//           </li>
//           <li className="flex items-center space-x-2 hover:bg-pink-400 p-2 rounded">
//             <FaPills />
//             <span>Medicine</span>
//           </li>
//           <li className="flex items-center space-x-2 hover:bg-pink-400 p-2 rounded">
//             <FaUsers />
//             <span>Users</span>
//           </li>
//           <li className="flex items-center space-x-2 hover:bg-pink-400 p-2 rounded">
//             <FaShoppingCart />
//             <span>Purchase</span>
//           </li>
//           <li className="flex items-center space-x-2 hover:bg-pink-400 p-2 rounded">
//             <FaDollarSign />
//             <span>Expense</span>
//           </li>
//           <li className="flex items-center space-x-2 hover:bg-pink-400 p-2 rounded">
//             <FaFileAlt />
//             <span>Reports</span>
//           </li>
//           <li className="flex items-center space-x-2 hover:bg-pink-400 p-2 rounded">
//             <FaCog />
//             <span>Settings</span>
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100">
//         {/* Top Statistics */}
//         <div className="grid grid-cols-4 gap-4 mb-6">
//           <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
//             <h2 className="text-xl font-bold">239</h2>
//             <p>Quantity of Sales</p>
//           </div>
//           <div className="bg-green-500 text-white p-4 rounded-lg shadow">
//             <h2 className="text-xl font-bold">$19,989.00</h2>
//             <p>Revenue</p>
//           </div>
//           <div className="bg-orange-500 text-white p-4 rounded-lg shadow">
//             <h2 className="text-xl font-bold">$5,999.00</h2>
//             <p>Profit</p>
//           </div>
//           <div className="bg-purple-500 text-white p-4 rounded-lg shadow">
//             <h2 className="text-xl font-bold">$96,000.00</h2>
//             <p>Value of Stock</p>
//           </div>
//           <div className="bg-red-500 text-white p-4 rounded-lg shadow">
//             <h2 className="text-xl font-bold">$3,449.00</h2>
//             <p>Total Due</p>
//           </div>
//           <div className="bg-pink-500 text-white p-4 rounded-lg shadow">
//             <h2 className="text-xl font-bold">39</h2>
//             <p>Total Customers</p>
//           </div>
//           <div className="bg-yellow-500 text-white p-4 rounded-lg shadow">
//             <h2 className="text-xl font-bold">11</h2>
//             <p>Total Suppliers</p>
//           </div>
//           <div className="bg-teal-500 text-white p-4 rounded-lg shadow">
//             <h2 className="text-xl font-bold">4</h2>
//             <p>Total Users</p>
//           </div>
//         </div>

//         {/* Today's Sale, Expense, and Report */}
//         <div className="grid grid-cols-3 gap-4">
//           {/* Today's Sale Table */}
//           <div className="bg-white rounded-lg shadow p-4">
//             <h3 className="text-lg font-semibold mb-4">Today's Sale</h3>
//             <table className="w-full text-left">
//               <thead>
//                 <tr>
//                   <th className="border-b-2 pb-2">Reference</th>
//                   <th className="border-b-2 pb-2">Quantity</th>
//                   <th className="border-b-2 pb-2">Amount ($)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="py-2">0000001</td>
//                   <td>4</td>
//                   <td>155.00</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2">0000002</td>
//                   <td>1</td>
//                   <td>13.00</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2">0000003</td>
//                   <td>2</td>
//                   <td>25.00</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2">0000004</td>
//                   <td>3</td>
//                   <td>130.00</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Today's Expense Table */}
//           <div className="bg-white rounded-lg shadow p-4">
//             <h3 className="text-lg font-semibold mb-4">Today's Expense</h3>
//             <table className="w-full text-left">
//               <thead>
//                 <tr>
//                   <th className="border-b-2 pb-2">Description</th>
//                   <th className="border-b-2 pb-2">Amount ($)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="py-2">Food</td>
//                   <td>250.00</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Today's Report */}
//           <div className="bg-white rounded-lg shadow p-4">
//             <h3 className="text-lg font-semibold mb-4">Today's Report</h3>
//             <table className="w-full text-left">
//               <thead>
//                 <tr>
//                   <th className="border-b-2 pb-2">Category</th>
//                   <th className="border-b-2 pb-2">Amount ($)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="py-2">Sales</td>
//                   <td>323.00</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2">Expense</td>
//                   <td>250.00</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2">Purchase</td>
//                   <td>2050.00</td>
//                 </tr>
//                 <tr>
//                   <td className="py-2">Profit</td>
//                   <td>5000.00</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;









import React from 'react';
import { FaPills, FaUsers, FaShoppingCart, FaDollarSign, FaFileAlt, FaCog, FaChartBar } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-100">
        {/* Header */}
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
            <p>239</p>
            <p className="text-sm">Quantity of Sales</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow">
            <p>$19,989.00</p>
            <p className="text-sm">Revenue</p>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg shadow">
            <p>$5,999.00</p>
            <p className="text-sm">Profit</p>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded-lg shadow">
            <p>$96,000.00</p>
            <p className="text-sm">Value of Stock</p>
          </div>
          <div className="bg-pink-500 text-white p-4 rounded-lg shadow">
            <p>$3,449.00</p>
            <p className="text-sm">Total Due</p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-lg shadow">
            <p>39</p>
            <p className="text-sm">Total Customers</p>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg shadow">
            <p>11</p>
            <p className="text-sm">Total Suppliers</p>
          </div>
          <div className="bg-teal-500 text-white p-4 rounded-lg shadow">
            <p>4</p>
            <p className="text-sm">Total Users</p>
          </div>
        </div>

        {/* Tables for Today's Sales, Expenses, and Reports */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Today's Sale */}
          <div className="bg-blue-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Today's Sale</h2>
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
            <h2 className="text-lg font-semibold mb-2">Today's Expense</h2>
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
            <h2 className="text-lg font-semibold mb-2">Today's Report</h2>
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


