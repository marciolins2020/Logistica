export interface KpiData {
  title: string;
  value: string;
  change: string;
  changeDirection: 'up' | 'down';
  changeType: 'positive' | 'negative' | 'neutral';
  period: string;
  icon: 'truck' | 'calendar' | 'money' | 'water';
}

export interface Shipment {
  id: string;
  containerId: string;
  status: 'delayed' | 'on-time';
  statusText: string;
  origin: string;
  originalEta: string;
  newEta: string;
  delayReason?: string;
}