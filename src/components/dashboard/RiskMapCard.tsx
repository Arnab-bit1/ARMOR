import React, { useState } from 'react';
import { Map, Layers } from 'lucide-react';
import openPitMine from '@/assets/open-pit-mine.png';
import MineViewer from '../MineViewer'; // <-- 1. IMPORT YOUR 3D VIEWER

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
              <option value="3d">3D Terrain</option> {/* This will now trigger the 3D model */}
              <option value="satellite">Satellite View</option>
            </select>
          </div>
        </div>

        <div className="relative h-80 bg-card-dark rounded-lg border border-border overflow-hidden">
          
          {/* --- 2. CONDITIONAL RENDERING LOGIC --- */}
          
          {/* Show the 2D Risk map when mapView is 'risk' */}
          {mapView === 'risk' && (
            <>
              {/* Real Mine Pit Background */}
              <div className="absolute inset-0">
                <img src={openPitMine} alt="Open-pit mine aerial background" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-background/40"></div>
                
                {/* Your existing Risk Zone Overlays, Sensor locations, etc. */}
                <div className="absolute top-16 left-20 w-16 h-16 bg-risk-low/60 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-risk-low">A1</div>
                <div className="absolute top-32 left-48 w-16 h-16 bg-risk-moderate/60 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-risk-moderate">A2</div>
                <div className="absolute top-20 right-20 w-16 h-16 bg-risk-high/60 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-risk-high animate-pulse">A3</div>
                {/* ... (all your other 2D elements) ... */}
              </div>

              {/* Map overlay info */}
              <div className="absolute bottom-4 left-4 bg-background/90 rounded px-3 py-2 text-xs">
                <div className="text-foreground font-medium">Sector A-3</div>
                <div className="text-risk-high">High Risk Detected</div>
              </div>
            </>
          )}

          {/* Show the 3D Model when mapView is '3d' */}
          {mapView === '3d' && (
            <MineViewer />
          )}

          {/* You can add a placeholder for the satellite view */}
          {mapView === 'satellite' && (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Satellite View Coming Soon
            </div>
          )}
          
          {/* Zoom controls (you may want to hide these in 3D view) */}
          {mapView !== '3d' && (
            <div className="absolute top-4 right-4 flex flex-col gap-1">
              <button className="w-8 h-8 bg-background/80 hover:bg-background text-foreground rounded flex items-center justify-center text-lg font-bold">+</button>
              <button className="w-8 h-8 bg-background/80 hover:bg-background text-foreground rounded flex items-center justify-center text-lg font-bold">-</button>
            </div>
          )}

        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Last Updated: {new Date().toLocaleTimeString()}</span>
          <span>Rockfall Probability: 82%</span>
        </div>
      </div>
    </div>
  );
};