import React from 'react';
import { AlertTriangle, Circle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  currentTime: Date;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ currentTime }) => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">ARMOR</h1>
            </div>
            <span className="text-muted-foreground text-sm hidden md:block">
              Automated Rockfall Monitoring & Operational Response
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Circle className="h-3 w-3 text-success fill-current animate-pulse" />
              <span className="text-sm text-foreground font-medium">System Status: Online</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              {currentTime.toLocaleDateString()} | {currentTime.toLocaleTimeString()}
            </div>

            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};