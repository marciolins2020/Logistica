import React from 'react';

const RiskMap: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full flex flex-col">
      <h3 className="text-lg font-bold text-brand-primary mb-4">Mapa de Risco Operacional</h3>
      <div className="aspect-video w-full rounded-md flex items-center justify-center relative overflow-hidden flex-grow bg-gray-800">
        <img 
          src="https://images.unsplash.com/photo-1587174483743-9d41484185c2?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Mapa da região Amazônica"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70" 
        />
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 800 450">
          {/* Rota Principal */}
          <path d="M 100 350 Q 350 250, 480 180 T 700 100" stroke="#1e3a8a" strokeWidth="3" fill="none" strokeDasharray="8 4" />
          
          {/* Ponto de Origem */}
          <circle cx="100" cy="350" r="6" fill="#16a34a" />
          
          {/* Ponto de Destino (Manaus) */}
          <g transform="translate(700, 100)">
            <circle r="8" fill="#1e3a8a" stroke="white" strokeWidth="2" />
            <text x="12" y="5" fill="white" fontSize="14" fontWeight="bold" style={{textShadow: '0 0 4px black'}}>Manaus</text>
          </g>

          {/* Pontos de Risco */}
          <g transform="translate(400, 210)" className="cursor-pointer">
            <title>Ponto Crítico: Nível do Rio Solimões abaixo do ideal para navegação segura.</title>
            <circle r="7" fill="#dc2626">
                <animate attributeName="r" values="7;12;7" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <text x="-40" y="-15" fill="white" fontSize="12" fontWeight="bold" style={{textShadow: '0 0 4px black'}}>Nível do Rio Baixo</text>
          </g>

          <g transform="translate(550, 150)" className="cursor-pointer">
            <title>Ponto de Atenção: Congestionamento no canal de acesso ao porto de Manaus.</title>
            <circle cx="0" cy="0" r="7" fill="#fbbf24" />
             <text x="12" y="5" fill="white" fontSize="12" fontWeight="bold" style={{textShadow: '0 0 4px black'}}>Congestionamento</text>
          </g>

        </svg>
      </div>
       <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <div className="flex items-center"><span className="h-3 w-3 rounded-full bg-brand-critical mr-2"></span> Alto Risco</div>
        <div className="flex items-center"><span className="h-3 w-3 rounded-full bg-brand-alert mr-2"></span> Risco Moderado</div>
        <div className="flex items-center"><span className="h-3 w-3 rounded-full bg-brand-success mr-2"></span> Rota Segura</div>
        <div className="flex items-center"><div className="h-px w-4 border-b-2 border-dashed border-brand-primary mr-2"></div> Rota Fluvial</div>
      </div>
    </div>
  );
};

export default RiskMap;