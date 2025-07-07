import React, { useState } from 'react';
import { Phone, MapPin, User, AlertTriangle, Clock } from 'lucide-react';

const Emergency: React.FC = () => {
  const [emergencyContacts] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      relationship: 'Primary Doctor',
      phone: '(555) 123-4567',
      type: 'medical'
    },
    {
      id: 2,
      name: 'John Smith',
      relationship: 'Son',
      phone: '(555) 987-6543',
      type: 'family'
    },
    {
      id: 3,
      name: 'Emergency Services',
      relationship: '911',
      phone: '911',
      type: 'emergency'
    },
    {
      id: 4,
      name: 'Mary Johnson',
      relationship: 'Daughter',
      phone: '(555) 456-7890',
      type: 'family'
    }
  ]);

  const handleEmergencyCall = (phone: string, name: string) => {
    if (phone === '911') {
      // Special handling for emergency services
      window.location.href = `tel:${phone}`;
    } else {
      // Regular contact call
      window.location.href = `tel:${phone}`;
    }
  };

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'medical': return '🏥';
      case 'family': return '👨‍👩‍👧‍👦';
      case 'emergency': return '🚨';
      default: return '📞';
    }
  };

  const getContactColor = (type: string) => {
    switch (type) {
      case 'medical': return 'bg-blue-50 border-blue-200';
      case 'family': return 'bg-green-50 border-green-200';
      case 'emergency': return 'bg-red-50 border-red-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Emergency Contacts</h1>
        <p className="text-gray-600">Quick access to your important contacts</p>
      </div>

      {/* Emergency Button */}
      <button
        onClick={() => handleEmergencyCall('911', 'Emergency Services')}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-4 rounded-2xl flex items-center justify-center space-x-3 text-xl shadow-lg"
      >
        <Phone className="w-8 h-8" />
        <span>Call 911 - Emergency</span>
      </button>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="card p-4 text-center hover:bg-gray-50">
          <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">Share Location</span>
        </button>
        <button className="card p-4 text-center hover:bg-gray-50">
          <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">Medical Info</span>
        </button>
      </div>

      {/* Emergency Contacts */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Your Contacts</h3>
        {emergencyContacts.map((contact) => (
          <div key={contact.id} className={`card p-4 ${getContactColor(contact.type)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">
                  {getContactIcon(contact.type)}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{contact.name}</h4>
                  <p className="text-sm text-gray-600">{contact.relationship}</p>
                  <p className="text-sm text-gray-500">{contact.phone}</p>
                </div>
              </div>
              <button
                onClick={() => handleEmergencyCall(contact.phone, contact.name)}
                className={`p-3 rounded-full ${
                  contact.type === 'emergency' 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                }`}
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Medical Information Card */}
      <div className="card p-4 bg-yellow-50 border-yellow-200">
        <h4 className="font-medium text-gray-900 mb-2">⚕️ Medical Information</h4>
        <div className="space-y-1 text-sm text-gray-600">
          <p><strong>Blood Type:</strong> O+</p>
          <p><strong>Allergies:</strong> Penicillin</p>
          <p><strong>Conditions:</strong> Hypertension, Diabetes Type 2</p>
          <p><strong>Emergency Medications:</strong> Insulin, Nitroglycerin</p>
        </div>
      </div>

      {/* Safety Tips */}
      <div className="card p-4 bg-blue-50 border-blue-200">
        <h4 className="font-medium text-gray-900 mb-2">🛡️ Safety Reminder</h4>
        <p className="text-sm text-gray-600">
          In case of emergency, stay calm and provide your location clearly. 
          Your medical information is automatically shared with emergency contacts.
        </p>
      </div>
    </div>
  );
};

export default Emergency;