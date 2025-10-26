import React from 'react';

const KpiCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-8 bg-gray-300 rounded w-1/2 mt-3"></div>
        <div className="flex items-center mt-6">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default KpiCardSkeleton;