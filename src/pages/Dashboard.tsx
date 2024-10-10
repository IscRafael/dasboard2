import React from 'react';
import StatCard from '../components/StatCard';
import Table from '../components/Table';
import { FiBarChart2, FiBox, FiLayers, FiUsers } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <div className="container px-6 mx-auto grid">
      <h2 className="my-6 text-2xl font-semibold text-gray-700">Dashboard</h2>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Sales" value="3500" icon={<FiBarChart2 className="w-8 h-8" />} />
        <StatCard title="Orders" value="2900" icon={<FiBox className="w-8 h-8" />} />
        <StatCard title="Items" value="6500" icon={<FiLayers className="w-8 h-8" />} />
        <StatCard title="Signups" value="7200" icon={<FiUsers className="w-8 h-8" />} />
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;