import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="rounded-lg bg-white px-6 py-5 shadow-lg">
      <div className="text-3xl font-bold text-primary lg:text-4xl">{value}</div>
      <div className="mt-1 text-sm font-medium text-gray-600">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-7xl px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
        <StatCard value="400+" label="Residents" />
        <StatCard value="12" label="Amenities" />
      </div>
    </div>
  );
};

export default Stats;
