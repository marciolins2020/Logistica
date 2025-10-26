import React, { useState, useEffect } from 'react';
import KpiCard from './KpiCard';
import RiskMap from './RiskMap';
import UpcomingArrivals from './UpcomingArrivals';
import type { KpiData, Shipment } from '../types';
import KpiCardSkeleton from './KpiCardSkeleton';
import UpcomingArrivalsSkeleton from './UpcomingArrivalsSkeleton';
import ShipmentDetailsModal from './ShipmentDetailsModal';

const kpiData: KpiData[] = [
  {
    title: 'Cargas em Trânsito',
    value: '47',
    change: '12%',
    changeDirection: 'up',
    changeType: 'negative',
    period: 'vs. mês anterior',
    icon: 'truck'
  },
  {
    title: 'Tempo Médio de Chegada',
    value: '22 dias',
    change: '3d',
    changeDirection: 'down',
    changeType: 'positive',
    period: 'vs. mês anterior',
    icon: 'calendar'
  },
  {
    title: 'Custo Frete (Médio)',
    value: 'R$ 28k',
    change: '87%',
    changeDirection: 'up',
    changeType: 'negative',
    period: 'vs. mês anterior',
    icon: 'money'
  },
  {
    title: 'Nível Rio Negro',
    value: '14.2m',
    change: '0.3m',
    changeDirection: 'down',
    changeType: 'negative',
    period: 'nas últimas 24h',
    icon: 'water'
  }
];

const shipmentData: Shipment[] = [
    { id: '1', containerId: 'Container ABC123', status: 'delayed', statusText: 'Atrasado', origin: 'Porto de Santos, SP', originalEta: '25/07', newEta: '30/07', delayReason: 'Nível do Rio Solimões abaixo do navegável, aguardando melhora das condições.' },
    { id: '2', containerId: 'Container DEF456', status: 'on-time', statusText: 'No prazo', origin: 'Porto de Suape, PE', originalEta: '28/07', newEta: '28/07' },
    { id: '3', containerId: 'Container GHI789', status: 'on-time', statusText: 'No prazo', origin: 'Shanghai, China', originalEta: '02/08', newEta: '02/08' },
    { id: '4', containerId: 'Container JKL012', status: 'delayed', statusText: 'Atrasado', origin: 'Porto de Santos, SP', originalEta: '05/08', newEta: '09/08', delayReason: 'Congestionamento no canal de acesso ao porto de Manaus.' },
    { id: '5', containerId: 'Container MNO345', status: 'on-time', statusText: 'No prazo', origin: 'Porto de Suape, PE', originalEta: '06/08', newEta: '06/08' },
];

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedKpi, setSelectedKpi] = useState<string | null>(null);
  const [filteredShipments, setFilteredShipments] = useState<Shipment[]>(shipmentData);
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);


  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!selectedKpi) {
      setFilteredShipments(shipmentData);
      return;
    }

    if (selectedKpi === 'Cargas em Trânsito') {
      setFilteredShipments(shipmentData);
    } else if (selectedKpi === 'Tempo Médio de Chegada') {
       setFilteredShipments(shipmentData.filter(s => s.status === 'delayed'));
    } else {
      setFilteredShipments(shipmentData); // Default to all if no specific logic
    }
  }, [selectedKpi]);

  const handleKpiClick = (title: string) => {
    setSelectedKpi(prev => (prev === title ? null : title));
  };

  const handleViewDetails = (shipment: Shipment) => {
    setSelectedShipment(shipment);
  };

  const handleCloseModal = () => {
    setSelectedShipment(null);
  }

  return (
    <>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => <KpiCardSkeleton key={i} />)
          ) : (
            kpiData.map(kpi => 
              <KpiCard 
                key={kpi.title} 
                data={kpi} 
                isSelected={selectedKpi === kpi.title}
                onClick={() => handleKpiClick(kpi.title)}
              />)
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
              <RiskMap />
          </div>
          <div>
            {isLoading ? <UpcomingArrivalsSkeleton /> : <UpcomingArrivals shipments={filteredShipments} onViewDetails={handleViewDetails} />}
          </div>
        </div>
      </div>
      {selectedShipment && (
        <ShipmentDetailsModal shipment={selectedShipment} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Dashboard;