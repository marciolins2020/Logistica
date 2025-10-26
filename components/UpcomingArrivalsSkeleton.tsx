import React from 'react';

const ArrivalItemSkeleton = () => (
    <div className="p-3 rounded-md bg-gray-50 border border-gray-200">
        <div className="animate-pulse">
            <div className="flex justify-between items-start mb-3">
                <div className="h-5 bg-gray-300 rounded w-1/2"></div>
                <div className="h-5 bg-gray-200 rounded-full w-1/4"></div>
            </div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
        </div>
    </div>
);


const UpcomingArrivalsSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
      <div className="h-6 bg-gray-300 rounded w-1/2 mb-4 animate-pulse"></div>
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => <ArrivalItemSkeleton key={i} />)}
      </div>
    </div>
  );
};

export default UpcomingArrivalsSkeleton;
