import React, { useState, useEffect } from 'react';
import { TrendingUp, CheckCircle } from 'lucide-react';

export const RiskScoreCard = () => {
  const [riskScore, setRiskScore] = useState(7.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setRiskScore(prev => {
        const variation = (Math.random() - 0.5) * 0.2;
        return Math.max(6.0, Math.min(9.0, prev + variation));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-card">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Overall Mine Risk Score</h3>
          <TrendingUp className="h-5 w-5 text-warning" />
        </div>

        <div className="text-center space-y-2">
          <div className="text-4xl font-bold text-warning">
            {riskScore.toFixed(1)}/10
          </div>
          <div className="text-sm text-muted-foreground">
            Current Risk Level
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Index
            </h4>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-risk-high rounded-sm"></div>
                <span className="text-muted-foreground">High Risk/Unstable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-risk-moderate rounded-sm"></div>
                <span className="text-muted-foreground">Moderate Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-risk-low rounded-sm"></div>
                <span className="text-muted-foreground">Low Risk/Stable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};