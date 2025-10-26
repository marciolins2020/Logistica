import React from 'react';
import type { KpiData } from '../types';
import { TruckIcon, CalendarIcon, MoneyIcon, WaterIcon, ArrowUpIcon, ArrowDownIcon } from './icons';

const iconMap = {
  truck: <TruckIcon />,
  calendar: <CalendarIcon />,
  money: <MoneyIcon />,
  water: <WaterIcon />,
};

interface KpiCardProps {
  data: KpiData;
  isSelected: boolean;
  onClick: () => void;
}

const KpiCard: React.FC<KpiCardProps> = ({ data, isSelected, onClick }) => {
  const changeColor = {
    positive: 'text-brand-success',
    negative: 'text-brand-critical',
    neutral: 'text-gray-500',
  }[data.changeType];
  
  const selectionClass = isSelected ? 'ring-2 ring-brand-primary ring-offset-2' : 'border-gray-200';

  return (
    <button 
      onClick={onClick}
      className={`bg-white p-6 rounded-lg shadow-md border flex flex-col justify-between text-left transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${selectionClass}`}
    >
      <div>
        <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{data.title}</p>
            <span className="text-gray-400">{iconMap[data.icon]}</span>
        </div>
        <p className="text-3xl font-bold text-brand-primary font-mono mt-1">{data.value}</p>
      </div>
      <div className={`flex items-center mt-4 text-sm font-semibold ${changeColor}`}>
        {data.changeDirection === 'up' ? <ArrowUpIcon /> : <ArrowDownIcon />}
        <span className="ml-1">{data.change}</span>
        <span className="text-gray-400 font-normal ml-2">{data.period}</span>
      </div>
    </button>
  );
};

export default KpiCard;