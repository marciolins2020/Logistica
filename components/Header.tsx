import React from 'react';

const BellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

const Header: React.FC<{ onImportClick: () => void }> = ({ onImportClick }) => {
  return (
    <header className="bg-brand-primary shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Logística Inteligente Amazônica
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onImportClick}
            className="bg-brand-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all text-sm shadow-sm"
          >
            Importar Planilha
          </button>
          <button className="relative text-white p-2 rounded-full hover:bg-white/20">
            <BellIcon />
            <span className="absolute top-1 right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-alert opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-alert"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
