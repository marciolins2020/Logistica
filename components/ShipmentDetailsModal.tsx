import React from 'react';
import type { Shipment } from '../types';

const CloseIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const WarningIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-4a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /></svg>;


const ShipmentDetailsModal: React.FC<{ shipment: Shipment; onClose: () => void }> = ({ shipment, onClose }) => {
  const isDelayed = shipment.status === 'delayed';

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto transform transition-all animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-brand-primary">{shipment.containerId}</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
            <CloseIcon />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
            <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className={`text-lg font-semibold ${isDelayed ? 'text-brand-critical' : 'text-brand-success'}`}>{shipment.statusText}</p>
            </div>
            <div>
                <p className="text-sm text-gray-500">Origem</p>
                <p className="text-lg font-semibold text-gray-800">{shipment.origin}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                <div>
                    <p className="text-sm text-gray-500">Previsto Originalmente</p>
                    <p className={`text-lg font-mono font-bold ${isDelayed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{shipment.originalEta}</p>
                </div>
                {isDelayed && (
                    <div>
                        <p className="text-sm text-red-600">Nova Previsão</p>
                        <p className="text-lg font-mono font-bold text-brand-critical animate-pulse">{shipment.newEta}</p>
                    </div>
                )}
            </div>

            {isDelayed && shipment.delayReason && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex items-start">
                        <WarningIcon />
                        <div>
                            <h4 className="font-bold text-yellow-800">Motivo do Atraso</h4>
                            <p className="mt-1 text-sm text-yellow-700">{shipment.delayReason}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
        <div className="p-6 bg-gray-50 rounded-b-xl text-right">
            <button
                onClick={onClose}
                className="py-2 px-6 bg-brand-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            >
                Fechar
            </button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ShipmentDetailsModal;