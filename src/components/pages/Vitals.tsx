import React, { useState } from 'react';
import { Plus, TrendingUp, TrendingDown, Activity } from 'lucide-react';

const Vitals: React.FC = () => {
  const [vitals] = useState([
    {
      id: 1,
      type: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      status: 'normal',
      timestamp: '2 hours ago',
      trend: 'stable'
    },
    {
      id: 2,
      type: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      status: 'normal',
      timestamp: '2 hours ago',
      trend: 'down'
    },
    {
      id: 3,
      type: 'Blood Sugar',
      value: '95',
      unit: 'mg/dL',
      status: 'normal',
      timestamp: '4 hours ago',
      trend: 'up'
    },
    {
      id: 4,
      type: 'Weight',
      value: '165',
      unit: 'lbs',
      status: 'normal',
      timestamp: '1 day ago',
      trend: 'stable'
    },
    {
      id: 5,
      type: 'Temperature',
      value: '98.6',
      unit: '°F',
      status: 'normal',
      timestamp: '1 day ago',
      trend: 'stable'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-600 bg-green-50';
      case 'high': return 'text-red-600 bg-red-50';
      case 'low': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Health Vitals</h1>
          <p className="text-gray-600">Monitor your health measurements</p>
        </div>
        <button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Reading
        </button>
      </div>

      {/* Quick Summary */}
      <div className="card p-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Overall Health Status</h3>
            <p className="text-green-600 font-medium">All readings within normal range</p>
            <p className="text-sm text-gray-600">Last updated 2 hours ago</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Activity className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Vitals List */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Recent Readings</h3>
        {vitals.map((vital) => (
          <div key={vital.id} className="card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{vital.type}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      {vital.value}
                    </span>
                    <span className="text-sm text-gray-600">{vital.unit}</span>
                    {getTrendIcon(vital.trend)}
                  </div>
                  <p className="text-xs text-gray-500">{vital.timestamp}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(vital.status)}`}>
                  {vital.status.charAt(0).toUpperCase() + vital.status.slice(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Reading Reminder */}
      <div className="card p-4 bg-blue-50 border-blue-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Plus className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Track Your Health</h4>
            <p className="text-sm text-gray-600">Regular monitoring helps maintain better health</p>
          </div>
        </div>
      </div>

      {/* Health Tips */}
      <div className="card p-4 bg-purple-50 border-purple-200">
        <h4 className="font-medium text-gray-900 mb-2">💡 Health Tip</h4>
        <p className="text-sm text-gray-600">
          Take your blood pressure at the same time each day for more consistent readings. 
          Rest for 5 minutes before measuring.
        </p>
      </div>
    </div>
  );
};

export default Vitals;