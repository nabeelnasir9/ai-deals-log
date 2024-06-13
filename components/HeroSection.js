import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, ArcElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, ArcElement);

const EnhancedHeroSection = () => {
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Credits Used',
        data: [10, 20, 15, 25, 20, 30],
        fill: false,
        borderColor: '#4A5568',
        tension: 0.1,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const pieChartData = {
    labels: ['Active Users', 'Inactive Users', 'Banned Users'],
    datasets: [
      {
        data: [300, 50, 20],
        backgroundColor: ['#4A5568', '#CBD5E0', '#E53E3E'],
        hoverBackgroundColor: ['#2D3748', '#A0AEC0', '#C53030'],
      },
    ],
  };

  return (
    <div className="p-8">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md rounded-md">
        <h1 className="text-2xl font-semibold">Welcome to Ai DealsBajaar!</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Total Credits</h2>
          <p className="mt-4 text-3xl font-bold text-gray-800">2000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Current Package</h2>
          <p className="mt-4 text-3xl font-bold text-gray-800">Pro</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Total Chats</h2>
          <p className="mt-4 text-3xl font-bold text-gray-800">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Other Metric</h2>
          <p className="mt-4 text-3xl font-bold text-gray-800">42</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">New Signups</h2>
          <p className="mt-4 text-3xl font-bold text-gray-800">75</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Active Users</h2>
          <p className="mt-4 text-3xl font-bold text-gray-800">300</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Inactive Users</h2>
          <p className="mt-4 text-3xl font-bold text-gray-800">50</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Banned Users</h2>
          <p className="mt-4 text-3xl font-bold text-gray-800">20</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Credits Usage</h2>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">User Distribution</h2>
          <Pie data={pieChartData} />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200">Activity</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Date</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">User signup</td>
              <td className="py-2 px-4 border-b border-gray-200">2024-05-21</td>
              <td className="py-2 px-4 border-b border-gray-200">John Doe</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Chat initiated</td>
              <td className="py-2 px-4 border-b border-gray-200">2024-05-20</td>
              <td className="py-2 px-4 border-b border-gray-200">Jane Smith</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Credits purchased</td>
              <td className="py-2 px-4 border-b border-gray-200">2024-05-19</td>
              <td className="py-2 px-4 border-b border-gray-200">Alice Johnson</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Package upgraded</td>
              <td className="py-2 px-4 border-b border-gray-200">2024-05-18</td>
              <td className="py-2 px-4 border-b border-gray-200">Bob Brown</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User Feedback</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200">Feedback</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Rating</th>
              <th className="py-2 px-4 border-b-2 border-gray-200">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Great service!</td>
              <td className="py-2 px-4 border-b border-gray-200">5/5</td>
              <td className="py-2 px-4 border-b border-gray-200">2024-05-21</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Very helpful</td>
              <td className="py-2 px-4 border-b border-gray-200">4/5</td>
              <td className="py-2 px-4 border-b border-gray-200">2024-05-20</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Needs improvement</td>
              <td className="py-2 px-4 border-b border-gray-200">3/5</td>
              <td className="py-2 px-4 border-b border-gray-200">2024-05-19</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Excellent!</td>
              <td className="py-2 px-4 border-b border-gray-200">5/5</td>
              <td className="py-2 px-4 border-b border-gray-200">2024-05-18</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnhancedHeroSection;
