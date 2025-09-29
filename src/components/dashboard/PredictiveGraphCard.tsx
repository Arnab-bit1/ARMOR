import React, { useState, useEffect } from 'react';
import { TrendingUp, Database, Brain, BarChart3 } from 'lucide-react';

export const PredictiveGraphCard = () => {
  const [graphData, setGraphData] = useState<number[]>([]);

  useEffect(() => {
    // Initialize graph data
    const initialData = Array.from({ length: 12 }, (_, i) => 
      30 + Math.sin(i * 0.5) * 15 + Math.random() * 10
    );
    setGraphData(initialData);

    // Update graph periodically
    const interval = setInterval(() => {
      setGraphData(prev => {
        const newData = [...prev.slice(1)];
        const lastValue = prev[prev.length - 1];
        const newValue = Math.max(20, Math.min(80, lastValue + (Math.random() - 0.5) * 10));
        newData.push(newValue);
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const maxValue = Math.max(...graphData);
  const minValue = Math.min(...graphData);

  return (
    <div className="dashboard-card">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Predictive Trends</h3>
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>

        <div className="text-sm text-muted-foreground">
          Sector A-3 Rockfall Probability
        </div>

        {/* Graph Container */}
        <div className="relative h-32 bg-card-dark rounded border border-border p-4">
          <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="25" height="20" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Graph line */}
            <polyline
              points={graphData.map((value, index) => {
                const x = (index / (graphData.length - 1)) * 300;
                const y = 100 - ((value - minValue) / (maxValue - minValue)) * 100;
                return `${x},${y}`;
              }).join(' ')}
              fill="none"
              stroke="hsl(var(--destructive))"
              strokeWidth="2"
              className="animate-pulse"
            />
            
            {/* Data points */}
            {graphData.map((value, index) => {
              const x = (index / (graphData.length - 1)) * 300;
              const y = 100 - ((value - minValue) / (maxValue - minValue)) * 100;
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="2"
                  fill="hsl(var(--destructive))"
                />
              );
            })}
          </svg>
          
          {/* Y-axis labels */}
          <div className="absolute left-1 top-1 text-xs text-muted-foreground">100</div>
          <div className="absolute left-1 bottom-1 text-xs text-muted-foreground">0</div>
        </div>

        {/* Time labels */}
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1hr</span>
          <span>6hr</span>
          <span>12hr</span>
          <span>Now</span>
        </div>

        {/* Process Flow */}
        <div className="border-t border-border pt-4">
          <div className="text-sm font-medium text-foreground mb-3">
            Multi-Source Data Fusion Process
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <div className="flex flex-col items-center gap-1 text-muted-foreground">
              <Database className="h-6 w-6 text-primary" />
              <span>Data Ingestion</span>
            </div>
            
            <div className="flex-1 border-t border-dashed border-border mx-2"></div>
            
            <div className="flex flex-col items-center gap-1 text-muted-foreground">
              <BarChart3 className="h-6 w-6 text-warning" />
              <span>Sensor Fusion</span>
            </div>
            
            <div className="flex-1 border-t border-dashed border-border mx-2"></div>
            
            <div className="flex flex-col items-center gap-1 text-muted-foreground">
              <Brain className="h-6 w-6 text-success" />
              <span>AI Engine</span>
            </div>
          </div>
          
          <div className="text-center text-xs text-muted-foreground mt-2">
            Rockfall Probability Detection
          </div>
          
          <div className="text-center text-xs text-primary mt-1">
            (YOLO + XGBoost Algorithm)
          </div>
        </div>
      </div>
    </div>
  );
};