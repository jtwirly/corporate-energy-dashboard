import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Building, DollarSign, Leaf, Zap } from 'lucide-react';

const CorporateEnergyDashboard = () => {
  const [energyData] = useState([
    { time: '00:00', consumption: 250, renewable: 50, cost: 275 },
    { time: '04:00', consumption: 200, renewable: 0, cost: 220 },
    { time: '08:00', consumption: 450, renewable: 100, cost: 395 },
    { time: '12:00', consumption: 600, renewable: 200, cost: 440 },
    { time: '16:00', consumption: 550, renewable: 150, cost: 440 },
    { time: '20:00', consumption: 350, renewable: 50, cost: 330 },
    { time: '24:00', consumption: 250, renewable: 0, cost: 275 },
  ]);

  const [facilities] = useState([
    { name: 'Building A', consumption: 2500, renewable: 500 },
    { name: 'Building B', consumption: 1800, renewable: 400 },
    { name: 'Building C', consumption: 3200, renewable: 800 },
  ]);

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Total Facilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-gray-500">Connected Buildings</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Current Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">550 kWh</div>
            <div className="text-sm text-green-500">-12% vs Last Week</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Projected Cost
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$440/hr</div>
            <div className="text-sm text-red-500">+5% vs Baseline</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              Renewable Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">27%</div>
            <div className="text-sm text-green-500">Of Total Energy</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>24-Hour Energy Consumption</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="consumption" 
                    stroke="#8884d8" 
                    name="Total Consumption (kWh)" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="renewable" 
                    stroke="#82ca9d" 
                    name="Renewable Usage (kWh)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Facility Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={facilities}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="consumption" fill="#8884d8" name="Total Usage (kWh)" />
                  <Bar dataKey="renewable" fill="#82ca9d" name="Renewable (kWh)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CorporateEnergyDashboard;
