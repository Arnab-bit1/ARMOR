import React, { useState, useEffect } from 'react';
import { DashboardHeader } from './dashboard/DashboardHeader';
import { RiskScoreCard } from './dashboard/RiskScoreCard';
import { RiskMapCard } from './dashboard/RiskMapCard';
import { LiveSensorCard } from './dashboard/LiveSensorCard';
import { AlertsCard } from './dashboard/AlertsCard';
import { PredictiveGraphCard } from './dashboard/PredictiveGraphCard';
import { AlertModal } from './dashboard/AlertModal';
import { SettingsCard } from './dashboard/SettingsCard';
import { PeerSensorCard } from './dashboard/PeerSensorCard';

export const ArmorDashboard = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Show alert after 3 seconds for demo
    const alertTimer = setTimeout(() => {
      setShowAlert(true);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(alertTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-bricolage">
      <DashboardHeader currentTime={currentTime} />
      
      <main className="container mx-auto px-6 py-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6">
            <RiskScoreCard />
            <SettingsCard />
          </div>

          {/* Center Column */}
          <div className="lg:col-span-6 space-y-6">
            <RiskMapCard />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AlertsCard />
              <PredictiveGraphCard />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-6">
            <LiveSensorCard />
            <PeerSensorCard />
          </div>
        </div>
      </main>

      {showAlert && (
        <AlertModal 
          isOpen={showAlert} 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </div>
  );
};