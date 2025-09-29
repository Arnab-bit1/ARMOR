import React from 'react';
import { AlertTriangle, X, Navigation, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-destructive">
        <DialogHeader className="pb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-destructive animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-medium text-destructive bg-destructive/20 px-2 py-1 rounded">
                  STATUS: HIGH ALERT
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Alert Details */}
          <div className="space-y-4">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-destructive mb-2">HIGH-RISK ALERT: Sector A-3</h3>
              <p className="text-sm text-foreground">
                Potential rockfall detected. Suggested Action: Evacuate personnel and reroute 
                equipment immediately.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Rockfall Probability:</span>
                <div className="text-lg font-bold text-destructive">82%</div>
              </div>
              <div>
                <span className="text-muted-foreground">Last Updated:</span>
                <div className="text-foreground">27 Sep 2025, 10:30 AM</div>
              </div>
            </div>
          </div>

          {/* Active Alerts */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Active Alerts</h4>
            
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-3 bg-card-dark rounded border border-border">
                <AlertTriangle className="h-4 w-4 text-destructive mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">
                    HIGH RISK: Sector A-3 Potential detected
                  </div>
                  <div className="text-xs text-muted-foreground">5 minutes ago</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Suggested Action: Evacuate, reroute approach inspection drone.
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  View Details
                </Button>
              </div>

              <div className="flex items-start gap-3 p-3 bg-card-dark rounded border border-border">
                <AlertTriangle className="h-4 w-4 text-destructive mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">
                    HIGH RISK: Sector A - Potential
                  </div>
                  <div className="text-xs text-muted-foreground">5 minutes ago</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Suggested Action: Evacuate personnel, dispatch inspection drone.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Actions */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Emergency Response</h4>
            
            <div className="grid grid-cols-3 gap-2">
              <Button className="flex items-center gap-2 text-xs bg-destructive hover:bg-destructive/90">
                <Navigation className="h-3 w-3" />
                Evacuate
              </Button>
              <Button variant="outline" className="flex items-center gap-2 text-xs">
                <Phone className="h-3 w-3" />
                Call Team
              </Button>
              <Button variant="outline" className="flex items-center gap-2 text-xs">
                <Mail className="h-3 w-3" />
                Send Alert
              </Button>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Recent Notifications</h4>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Heavy Rainfall (Simulated)</span>
                <span className="text-xs text-muted-foreground">2 min ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Historical Instability (Simulated)</span>
                <span className="text-xs text-muted-foreground">5 min ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Data Feed Updated (10:20 AM)</span>
                <span className="text-xs text-muted-foreground">10 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};