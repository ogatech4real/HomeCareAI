import React, { useState } from 'react';
import { Plus, Clock, Check, AlertCircle } from 'lucide-react';

const Medications: React.FC = () => {
  const [medications] = useState([
    {
      id: 1,
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      time: '8:00 AM',
      taken: true,
      nextDue: null
    },
    {
      id: 2,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      time: '8:00 AM, 8:00 PM',
      taken: true,
      nextDue: '8:00 PM'
    },
    {
      id: 3,
      name: 'Vitamin D3',
      dosage: '1000 IU',
      frequency: 'Once daily',
      time: '2:00 PM',
      taken: false,
      nextDue: '2:00 PM'
    },
    {
      id: 4,
      name: 'Aspirin',
      dosage: '81mg',
      frequency: 'Once daily',
      time: '6:00 PM',
      taken: false,
      nextDue: '6:00 PM'
    }
  ]);

  const handleMarkTaken = (id: number) => {
    // Handle marking medication as taken
    console.log('Marking medication as taken:', id);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Medications</h1>
          <p className="text-gray-600">Track your daily medications</p>
        </div>
        <button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Med
        </button>
      </div>

      {/* Progress Summary */}
      <div className="card p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Today's Progress</h3>
          <span className="text-2xl font-bold text-green-600">2/4</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-600 h-2 rounded-full" style={{ width: '50%' }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">2 medications taken, 2 remaining</p>
      </div>

      {/* Medications List */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Your Medications</h3>
        {medications.map((med) => (
          <div key={med.id} className="card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  med.taken ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  {med.taken ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Clock className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{med.name}</h4>
                  <p className="text-sm text-gray-600">{med.dosage} • {med.frequency}</p>
                  <p className="text-xs text-gray-500">Scheduled: {med.time}</p>
                </div>
              </div>
              <div className="text-right">
                {med.nextDue && !med.taken && (
                  <div className="flex items-center text-orange-600 mb-2">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm">Due {med.nextDue}</span>
                  </div>
                )}
                {!med.taken && (
                  <button
                    onClick={() => handleMarkTaken(med.id)}
                    className="btn-primary text-sm"
                  >
                    Mark Taken
                  </button>
                )}
                {med.taken && (
                  <span className="text-sm text-green-600 font-medium">✓ Taken</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Medication Reminder */}
      <div className="card p-4 bg-blue-50 border-blue-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Plus className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Add New Medication</h4>
            <p className="text-sm text-gray-600">Keep track of all your medications in one place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medications;