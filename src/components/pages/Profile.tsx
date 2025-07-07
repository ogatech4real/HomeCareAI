import React from 'react';
import { User, Settings, Shield, Bell, HelpCircle, LogOut } from 'lucide-react';

interface ProfileProps {
  user: any;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const menuItems = [
    {
      icon: User,
      label: 'Personal Information',
      description: 'Update your profile details',
      action: () => console.log('Personal Info')
    },
    {
      icon: Bell,
      label: 'Notifications',
      description: 'Manage your notification preferences',
      action: () => console.log('Notifications')
    },
    {
      icon: Shield,
      label: 'Privacy & Security',
      description: 'Control your privacy settings',
      action: () => console.log('Privacy')
    },
    {
      icon: Settings,
      label: 'App Settings',
      description: 'Customize your app experience',
      action: () => console.log('Settings')
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      description: 'Get help and contact support',
      action: () => console.log('Help')
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Profile Header */}
      <div className="card p-6 text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-10 h-10 text-blue-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {user?.name || 'Welcome to CarePal'}
        </h2>
        <p className="text-gray-600 mb-4">
          {user?.email || 'Your health companion'}
        </p>
        <div className="flex justify-center space-x-4 text-sm">
          <div className="text-center">
            <p className="font-semibold text-gray-900">12</p>
            <p className="text-gray-600">Days Active</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900">85%</p>
            <p className="text-gray-600">Health Score</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900">4</p>
            <p className="text-gray-600">Medications</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={item.action}
              className="w-full card p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* App Info */}
      <div className="card p-4 bg-blue-50 border-blue-200">
        <h4 className="font-medium text-gray-900 mb-2">About CarePal</h4>
        <p className="text-sm text-gray-600 mb-2">
          Version 1.0.0 - Your caring health companion
        </p>
        <p className="text-xs text-gray-500">
          Built with ❤️ for better health management
        </p>
      </div>

      {/* Sign Out */}
      <button className="w-full card p-4 text-left hover:bg-red-50 transition-colors border-red-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <LogOut className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h3 className="font-medium text-red-600">Sign Out</h3>
            <p className="text-sm text-gray-600">Sign out of your account</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Profile;