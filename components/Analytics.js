"use client"
import { Line, Bar, Doughnut, Pie, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, RadialLinearScale } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
);

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const barData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [300, 50, 100],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
    },
  ],
};

const pieData = {
  labels: ['Apple', 'Samsung', 'Huawei'],
  datasets: [
    {
      label: 'Market Share',
      data: [45, 35, 20],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
      borderWidth: 1,
    },
  ],
};

const radarData = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'Person A',
      data: [65, 59, 90, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: 'Person B',
      data: [28, 48, 40, 19, 96, 27, 100],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      pointBackgroundColor: 'rgba(54, 162, 235, 1)',
    },
  ],
};

const Analytics = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-gray-800 text-white p-6 rounded-lg mb-6">
        <h2 className="text-3xl font-bold">Analytics Dashboard</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="shadow-lg rounded-lg p-6 text-center bg-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-white">Total Credits</h3>
          <p className="text-2xl font-bold text-white">5000</p>
        </div>
        <div className="shadow-lg rounded-lg p-6 text-center bg-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-white">Credits Being Used</h3>
          <p className="text-2xl font-bold text-white">1200</p>
        </div>
        <div className="shadow-lg rounded-lg p-6 text-center bg-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-white">Current Package Name</h3>
          <p className="text-2xl font-bold text-white">Premium</p>
        </div>
        <div className="shadow-lg rounded-lg p-6 text-center bg-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-white">Member Since</h3>
          <p className="text-2xl font-bold text-white">Jan 2020</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Sales Over Time</h3>
          <Line data={lineData} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Vote Distribution</h3>
          <Bar data={barData} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Market Share</h3>
          <Doughnut data={doughnutData} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Market Share (Pie)</h3>
          <Pie data={pieData} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Activity Radar</h3>
          <Radar data={radarData} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Overall Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg text-white">
              <p className="text-2xl font-bold">75%</p>
              <p>Success Rate</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg text-white">
              <p className="text-2xl font-bold">50K</p>
              <p>Active Users</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg text-white">
              <p className="text-2xl font-bold">150</p>
              <p>New Orders</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg text-white">
              <p className="text-2xl font-bold">1.2M</p>
              <p>Page Views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

