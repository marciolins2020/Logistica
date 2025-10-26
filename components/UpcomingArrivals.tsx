import React from 'react';
import type { Shipment } from '../types';

const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const PinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const InfoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

const UpcomingArrivals: React.FC<{ shipments: Shipment[], onViewDetails: (shipment: Shipment) => void }> = ({ shipments, onViewDetails }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full flex flex-col">
      <h3 className="text-lg font-bold text-brand-primary mb-4">Próximas Chegadas</h3>
      {shipments.length > 0 ? (
        <div className="space-y-4 overflow-y-auto pr-2 -mr-2">
          {shipments.map((shipment) => (
            <div key={shipment.id} className="p-4 rounded-lg bg-gray-50 border border-gray-200 transition-shadow hover:shadow-md">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold font-mono text-brand-primary text-base">{shipment.containerId}</span>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  shipment.status === 'delayed' ? 'bg-red-100 text-brand-critical' : 'bg-green-100 text-brand-success'
                }`}>
                  {shipment.statusText}
                </span>
              </div>
              <div className="text-sm space-y-2 text-gray-600 mb-3">
                  <div className="flex items-center">
                      <PinIcon />
                      <span>Origem: <span className="font-semibold">{shipment.origin}</span></span>
                  </div>
                  <div className="flex items-center">
                      <ClockIcon />
                      Previsto: <span className={`font-semibold ml-1 ${shipment.status === 'delayed' ? 'line-through text-gray-500' : ''}`}>{shipment.originalEta}</span>
                      {shipment.status === 'delayed' && <span className="font-bold text-brand-critical ml-2 animate-pulse">{shipment.newEta}</span>}
                  </div>
              </div>
              <button 
                onClick={() => onViewDetails(shipment)}
                className="w-full text-center py-2 px-4 bg-white border border-gray-300 rounded-md text-sm font-semibold text-brand-primary hover:bg-gray-100 transition-colors"
              >
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center text-center text-gray-500 py-8">
            <InfoIcon />
            <p className="mt-2 font-semibold">Nenhuma Carga Encontrada</p>
            <p className="text-sm">Tente selecionar um KPI diferente ou limpe o filtro.</p>
        </div>
      )}
    </div>
  );
};

export default UpcomingArrivals;