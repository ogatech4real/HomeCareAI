import React from 'react';
import { 
  Heart, 
  Pill, 
  Activity, 
  Phone, 
  MessageCircle,
  TrendingUp,
  Calendar,
  AlertTriangle
} from 'lucide-react';

interface DashboardProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  user: any;
}

const Dashboard: React.FC<DashboardProps> = ({ activeTab, onTabChange, user }) => {
  const quickStats = [
    {
      label: 'Medications Today',
      value: '3 of 4',
      icon: Pill,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: '+2 from yesterday'
    },
    {
      label: 'Last BP Reading',
      value: '120/80',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: 'Normal range'
    },
    {
      label: 'Health Score',
      value: '85%',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: '+5% this week'
    }
  ];

  const upcomingTasks = [
    {
      time: '2:00 PM',
      task: 'Take afternoon medication',
      type: 'medication',
      urgent: false
    },
    {
      time: '4:00 PM',
      task: 'Blood pressure check',
      type: 'vitals',
      urgent: false
    },
    {
      time: '6:00 PM',
      task: 'Evening medication',
      type: 'medication',
      urgent: true
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Good afternoon, {user?.name || 'Friend'}! 👋
            </h1>
            <p className="text-blue-100">
              You're doing great with your health routine today.
            </p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Today's Overview</h2>
        <div className="grid gap-4">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">{stat.trend}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming</h2>
          <button className="text-blue-600 text-sm font-medium">View all</button>
        </div>
        <div className="space-y-3">
          {upcomingTasks.map((task, index) => (
            <div key={index} className="card p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-gray-900">{task.time}</span>
                    {task.urgent && (
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{task.task}</p>
                    <p className="text-sm text-gray-500 capitalize">{task.type}</p>
                  </div>
                </div>
                <button className="btn-ghost text-sm">Mark Done</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onTabChange('emergency')}
            className="card p-4 text-center hover:bg-red-50 transition-colors"
          >
            <Phone className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Emergency</span>
          </button>
          <button
            onClick={() => onTabChange('chat')}
            className="card p-4 text-center hover:bg-blue-50 transition-colors"
          >
            <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">AI Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;