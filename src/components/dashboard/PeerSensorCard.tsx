import React from 'react';
import { Network, Wifi, WifiOff } from 'lucide-react';

export const PeerSensorCard = () => {
  const peerSensors = [
    { id: 'PS-001', location: 'Sector A-1', status: 'online', signal: 98, lastSync: '2 min ago' },
    { id: 'PS-002', location: 'Sector A-2', status: 'online', signal: 87, lastSync: '1 min ago' },
    { id: 'PS-003', location: 'Sector B-1', status: 'offline', signal: 0, lastSync: '15 min ago' },
    { id: 'PS-004', location: 'Sector B-2', status: 'online', signal: 92, lastSync: '3 min ago' },
    { id: 'PS-005', location: 'Sector C-1', status: 'online', signal: 78, lastSync: '1 min ago' },
  ];

  return (
    <div className="dashboard-card">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Peer Sensor Network</h3>
          <Network className="h-5 w-5 text-primary" />
        </div>

        <div className="space-y-3">
          <div className="text-sm text-muted-foreground">
            Network Status: <span className="text-success">15/16 sensors online</span>
          </div>
          
          {peerSensors.map((sensor) => (
            <div key={sensor.id} className="flex items-center justify-between p-3 bg-card-dark rounded-lg border border-border">
              <div className="flex items-center gap-3">
                {sensor.status === 'online' ? (
                  <Wifi className="h-4 w-4 text-success" />
                ) : (
                  <WifiOff className="h-4 w-4 text-destructive" />
                )}
                <div>
                  <div className="text-sm font-medium text-foreground">{sensor.id}</div>
                  <div className="text-xs text-muted-foreground">{sensor.location}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-foreground">{sensor.signal}%</div>
                <div className="text-xs text-muted-foreground">{sensor.lastSync}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs text-muted-foreground">
          Last Network Sync: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};