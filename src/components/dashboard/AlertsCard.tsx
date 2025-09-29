import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Alert {
  id: string;
  type: 'urgent' | 'moderate';
  area: string;
  message: string;
  timestamp: Date;
}

export const AlertsCard = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'urgent',
      area: 'Area B-2',
      message: 'Urgent low task detected',
      timestamp: new Date(Date.now() - 5 * 60000)
    },
    {
      id: '2',
      type: 'moderate',
      area: 'Area C-4',
      message: 'Moderate sensor anomaly',
      timestamp: new Date(Date.now() - 15 * 60000)
    }
  ]);

  useEffect(() => {
    // Simulate new alerts
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const newAlert: Alert = {
          id: Date.now().toString(),
          type: Math.random() > 0.6 ? 'urgent' : 'moderate',
          area: `Area ${String.fromCharCode(65 + Math.floor(Math.random() * 4))}-${Math.floor(Math.random() * 5) + 1}`,
          message: Math.random() > 0.5 ? 'Ground instability detected' : 'Sensor readings elevated',
          timestamp: new Date()
        };
        setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getTimeAgo = (timestamp: Date) => {
    const minutes = Math.floor((Date.now() - timestamp.getTime()) / 60000);
    if (minutes < 1) return 'Just now';
    return `${minutes} min ago`;
  };

  return (
    <div className="dashboard-card">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Alerts and Actions</h3>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-light">
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {alerts.map((alert) => (
            <div 
              key={alert.id}
              className="p-3 rounded border border-border bg-card-dark hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle 
                  className={`h-4 w-4 mt-0.5 ${
                    alert.type === 'urgent' ? 'text-destructive' : 'text-warning'
                  }`} 
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {alert.area}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {getTimeAgo(alert.timestamp)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{alert.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Quick Actions</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              Monitor All
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              Clear All
            </Button>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          Historical Data: 2023-10-26 14:28
        </div>
      </div>
    </div>
  );
};