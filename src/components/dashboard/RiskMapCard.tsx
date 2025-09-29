import React, { useState, useEffect } from 'react';
import { Map, Layers } from 'lucide-react';
import openPitMine from '@/assets/open-pit-mine.png';

export const RiskMapCard = () => {
  const [mapView, setMapView] = useState('risk');

  return (
    <div className="dashboard-card">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Interactive Mine Risk Map</h3>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            <select 
              value={mapView} 
              onChange={(e) => setMapView(e.target.value)}
              className="bg-secondary text-secondary-foreground text-sm rounded px-2 py-1 border border-border"
            >
              <option value="risk">Risk Analysis</option>
              <option value="3d">3D Terrain</option>
              <option value="satellite">Satellite View</option>
            </select>
          </div>
        </div>

        <div className="relative h-80 bg-card-dark rounded-lg border border-border overflow-hidden">
          {/* Real Mine Pit Background */}
          <div className="absolute inset-0">
            <img src={openPitMine} alt="Open-pit mine aerial background" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-background/40"></div>
            
            {/* Risk Zone Overlays */}
            <div className="absolute top-16 left-20 w-16 h-16 bg-risk-low/60 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-risk-low">
              A1
            </div>
            <div className="absolute top-32 left-48 w-16 h-16 bg-risk-moderate/60 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-risk-moderate">
              A2
            </div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-risk-high/60 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-risk-high animate-pulse">
              A3
            </div>
            <div className="absolute bottom-20 left-20 w-16 h-16 bg-risk-low/60 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-risk-low">
              C1
            </div>
            <div className="absolute bottom-24 left-40 w-16 h-16 bg-risk-moderate/60 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-risk-moderate">
              B1
            </div>
            <div className="absolute bottom-16 right-24 w-16 h-16 bg-risk-high/60 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-risk-high">
              B2
            </div>
            
            {/* Sensor locations */}
            <div className="absolute top-24 left-28 w-3 h-3 bg-primary rounded-full animate-ping shadow-lg"></div>
            <div className="absolute top-40 left-56 w-3 h-3 bg-primary rounded-full animate-ping shadow-lg"></div>
            <div className="absolute top-28 right-28 w-3 h-3 bg-primary rounded-full animate-ping shadow-lg"></div>
            <div className="absolute bottom-28 left-28 w-3 h-3 bg-primary rounded-full animate-ping shadow-lg"></div>
            <div className="absolute bottom-32 left-48 w-3 h-3 bg-primary rounded-full animate-ping shadow-lg"></div>
            <div className="absolute bottom-24 right-32 w-3 h-3 bg-primary rounded-full animate-ping shadow-lg"></div>
            
            {/* Warning indicators for high risk areas */}
            <div className="absolute top-12 right-12 w-6 h-6 text-risk-high animate-bounce text-xl">
              ⚠️
            </div>
            <div className="absolute bottom-8 right-16 w-6 h-6 text-warning animate-bounce text-xl">
              ⚠️
            </div>
          </div>

          {/* Map overlay info */}
          <div className="absolute bottom-4 left-4 bg-background/90 rounded px-3 py-2 text-xs">
            <div className="text-foreground font-medium">Sector A-3</div>
            <div className="text-risk-high">High Risk Detected</div>
          </div>

          {/* Zoom controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-1">
            <button className="w-8 h-8 bg-background/80 hover:bg-background text-foreground rounded flex items-center justify-center text-lg font-bold">+</button>
            <button className="w-8 h-8 bg-background/80 hover:bg-background text-foreground rounded flex items-center justify-center text-lg font-bold">-</button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Last Updated: {new Date().toLocaleTimeString()}</span>
          <span>Rockfall Probability: 82%</span>
        </div>
      </div>
    </div>
  );
};