import React, { useState } from 'react';
import { Settings, ToggleLeft, Monitor, Layout, Bell } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

export const SettingsCard = () => {
  const [settings, setSettings] = useState({
    liveUpdates: true,
    alertSounds: false,
    darkThresholds: true,
    miniLayout: false,
    riskThresholds: true,
    mineLiveSelection: true,
    preferences: false
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="dashboard-card">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Settings</h3>
        </div>

        <div className="space-y-4">
          {/* Live Updates */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Live Updates</span>
            </div>
            <Switch 
              checked={settings.liveUpdates}
              onCheckedChange={() => toggleSetting('liveUpdates')}
            />
          </div>

          {/* Alert Sounds */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Alert Sounds</span>
            </div>
            <Switch 
              checked={settings.alertSounds}
              onCheckedChange={() => toggleSetting('alertSounds')}
            />
          </div>

          {/* Dark Thresholds */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ToggleLeft className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Dark Thresholds</span>
            </div>
            <Switch 
              checked={settings.darkThresholds}
              onCheckedChange={() => toggleSetting('darkThresholds')}
            />
          </div>

          {/* Mini Layout */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layout className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Mini Layout Selection</span>
            </div>
            <Switch 
              checked={settings.miniLayout}
              onCheckedChange={() => toggleSetting('miniLayout')}
            />
          </div>
        </div>

        {/* Configuration Options */}
        <div className="border-t border-border pt-4 space-y-3">
          <div className="bg-card-dark rounded p-3 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Settings className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Risk Thresholds</span>
            </div>
            <Switch 
              checked={settings.riskThresholds}
              onCheckedChange={() => toggleSetting('riskThresholds')}
            />
          </div>

          <div className="bg-card-dark rounded p-3 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Monitor className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Mine Layout Selection</span>
            </div>
            <Switch 
              checked={settings.mineLiveSelection}
              onCheckedChange={() => toggleSetting('mineLiveSelection')}
            />
          </div>

          <div className="bg-card-dark rounded p-3 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Settings className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Preferences</span>
            </div>
            <Switch 
              checked={settings.preferences}
              onCheckedChange={() => toggleSetting('preferences')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};