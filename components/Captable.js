"use client"
import { Pie, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, LineElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(ArcElement, LineElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Filler);

const ownershipData = {
  labels: ['Founders', 'Investors', 'Employees', 'Others'],
  datasets: [
    {
      label: 'Ownership Distribution',
      data: [50, 30, 15, 5],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const sharePriceHistoryData = {
  labels: ['Q1 2020', 'Q2 2020', 'Q3 2020', 'Q4 2020', 'Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021'],
  datasets: [
    {
      label: 'Share Price ($)',
      data: [10, 12, 15, 18, 22, 28, 30, 35],
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

const fundingData = {
  labels: ['2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'Funding ($M)',
      data: [1, 6, 16, 25],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
    },
  ],
};

const employeeStockOptionsData = {
  labels: ['Engineering', 'Marketing', 'Sales', 'Support', 'Operations'],
  datasets: [
    {
      label: 'Stock Options (k)',
      data: [150, 50, 75, 25, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const equityBreakdownData = {
  labels: ['Executive', 'Management', 'Staff', 'Contractors'],
  datasets: [
    {
      label: 'Equity Breakdown by Role',
      data: [40, 25, 25, 10],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const capTableData = [
  { name: 'Founders', shares: 500000, percentage: 50 },
  { name: 'Investors', shares: 300000, percentage: 30 },
  { name: 'Employees', shares: 150000, percentage: 15 },
  { name: 'Others', shares: 50000, percentage: 5 },
];

const investmentRounds = [
  { round: 'Seed', amount: '$1M', date: 'Jan 2019' },
  { round: 'Series A', amount: '$5M', date: 'Jun 2020' },
  { round: 'Series B', amount: '$10M', date: 'Dec 2021' },
];

const majorStakeholders = [
  { name: 'Alice Johnson', role: 'Founder & CEO', shares: 250000, percentage: 25, investment: '$1M' },
  { name: 'Bob Smith', role: 'Founder & CTO', shares: 250000, percentage: 25, investment: '$1M' },
  { name: 'Charlie Davis', role: 'Lead Investor', shares: 150000, percentage: 15, investment: '$5M' },
  { name: 'Dana Lee', role: 'Investor', shares: 100000, percentage: 10, investment: '$3M' },
];

const vestingSchedules = [
  { name: 'Alice Johnson', role: 'Founder & CEO', vestingStart: 'Jan 2019', vestingEnd: 'Jan 2023' },
  { name: 'Bob Smith', role: 'Founder & CTO', vestingStart: 'Jan 2019', vestingEnd: 'Jan 2023' },
  { name: 'Charlie Davis', role: 'Lead Investor', vestingStart: 'Jun 2020', vestingEnd: 'Jun 2024' },
  { name: 'Dana Lee', role: 'Investor', vestingStart: 'Dec 2021', vestingEnd: 'Dec 2025' },
];

const CapTable = () => {
  return (
    <div className="p-8 bg-white min-h-screen text-gray-800">
      <div className="bg-gray-50 text-gray-800 p-6 rounded-lg mb-6 shadow-md">
        <h2 className="text-3xl font-bold text-center">Cap Table</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Ownership Distribution</h3>
          <Pie data={ownershipData} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Share Price History</h3>
          <Line data={sharePriceHistoryData} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Funding Over Time</h3>
          <Line data={fundingData} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Employee Stock Options</h3>
          <Bar data={employeeStockOptionsData} />
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Equity Breakdown by Role</h3>
        <Pie data={equityBreakdownData} />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Details</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Shares
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Percentage
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {capTableData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.shares.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Investment Rounds</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Round
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {investmentRounds.map((round, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{round.round}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{round.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{round.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Major Stakeholders</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Shares
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Percentage
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Investment
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {majorStakeholders.map((stakeholder, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stakeholder.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stakeholder.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stakeholder.shares.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stakeholder.percentage}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stakeholder.investment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Vesting Schedules</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vesting Start
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vesting End
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vestingSchedules.map((schedule, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{schedule.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.vestingStart}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.vestingEnd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CapTable;
