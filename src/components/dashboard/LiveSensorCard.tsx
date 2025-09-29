import React, { useState, useEffect } from 'react';
import { Activity, AlertTriangle, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SensorData {
  normal: number;
  elevated: number;
  groundMovement: boolean;
  porePressure: boolean;
}

export const LiveSensorCard = () => {
  const [sensorData, setSensorData] = useState<SensorData>({
    normal: 65,
    elevated: 85,
    groundMovement: false,
    porePressure: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        normal: Math.max(60, Math.min(80, prev.normal + (Math.random() - 0.5) * 10)),
        elevated: Math.max(75, Math.min(95, prev.elevated + (Math.random() - 0.5) * 8)),
        groundMovement: Math.random() > 0.7,
        porePressure: Math.random() > 0.6,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const CircularGauge = ({ value, label, color, isWarning = false }: { 
    value: number; 
    label: string; 
    color: string;
    isWarning?: boolean;
  }) => {
    const radius = 35;
    const strokeWidth = 6;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${(value / 100) * circumference} ${circumference}`;

    return (
      <div className="flex flex-col items-center space-y-2">
        <div className="relative">
          <svg className="w-20 h-20 transform -rotate-90" width="80" height="80">
            <circle
              cx="40"
              cy="40"
              r={normalizedRadius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              fill="transparent"
              className="text-muted"
            />
            <circle
              cx="40"
              cy="40"
              r={normalizedRadius}
              stroke={color}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className={cn(
                "transition-all duration-500",
                isWarning && "animate-pulse"
              )}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={cn(
              "text-sm font-bold",
              isWarning ? "text-warning" : "text-foreground"
            )}>
              {Math.round(value)}%
            </span>
          </div>
        </div>
        <span className="text-xs text-muted-foreground text-center">{label}</span>
      </div>
    );
  };

  return (
    <div className="dashboard-card">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Live Sensor Data</h3>
          <Activity className="h-5 w-5 text-primary animate-pulse" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <CircularGauge 
            value={sensorData.normal} 
            label="Normal" 
            color="hsl(var(--success))"
          />
          <CircularGauge 
            value={sensorData.elevated} 
            label="Elevated" 
            color="hsl(var(--warning))"
            isWarning={sensorData.elevated > 90}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-card-dark rounded border border-border">
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Ground Movement</span>
            </div>
            <div className={cn(
              "flex items-center gap-1",
              sensorData.groundMovement ? "text-warning" : "text-success"
            )}>
              {sensorData.groundMovement && <AlertTriangle className="h-4 w-4" />}
              <span className="text-sm font-medium">
                {sensorData.groundMovement ? "Detected" : "Stable"}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-card-dark rounded border border-border">
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Pore Pressure</span>
            </div>
            <div className={cn(
              "flex items-center gap-1",
              sensorData.porePressure ? "text-destructive" : "text-success"
            )}>
              {sensorData.porePressure && <AlertTriangle className="h-4 w-4" />}
              <span className="text-sm font-medium">
                {sensorData.porePressure ? "Critical" : "Normal"}
              </span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-card-dark rounded border border-border">
          <h4 className="text-sm font-medium text-foreground mb-2">Peer Sensor Data</h4>
          <div className="text-xs text-muted-foreground">
            Network Status: 12/15 sensors online
          </div>
          <div className="text-xs text-muted-foreground">
            Last Sync: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};