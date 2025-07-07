import React, { useState } from 'react';
import { Download, X } from 'lucide-react';

interface PWAInstallPromptProps {
  onInstall: () => void;
}

const PWAInstallPrompt: React.FC<PWAInstallPromptProps> = ({ onInstall }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-4 right-4 bg-blue-600 text-white rounded-lg p-4 shadow-lg z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Download className="w-5 h-5" />
          <div>
            <p className="font-medium">Install CarePal</p>
            <p className="text-sm text-blue-100">Get quick access from your home screen</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onInstall}
            className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium"
          >
            Install
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-blue-700 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;