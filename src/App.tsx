import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Heart, Shield, Users, Zap } from 'lucide-react';

// Components
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Dashboard from './components/pages/Dashboard';
import Medications from './components/pages/Medications';
import Vitals from './components/pages/Vitals';
import Emergency from './components/pages/Emergency';
import Chat from './components/pages/Chat';
import Profile from './components/pages/Profile';
import PWAInstallPrompt from './components/common/PWAInstallPrompt';
import LoadingScreen from './components/common/LoadingScreen';

// Hooks
import { useAuth } from './hooks/useAuth';
import { usePWA } from './hooks/usePWA';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const { user, isAuthenticated, login, logout } = useAuth();
  const { isInstallable, installApp, isStandalone } = usePWA();

  useEffect(() => {
    // Handle PWA shortcuts
    const handlePWAShortcut = (event: CustomEvent) => {
      const { tab, chat, action } = event.detail;
      if (tab) setActiveTab(tab);
      if (chat) setActiveTab('chat');
      if (action === 'emergency') setActiveTab('emergency');
    };

    window.addEventListener('pwaShortcut', handlePWAShortcut as EventListener);
    
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('pwaShortcut', handlePWAShortcut as EventListener);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* PWA Install Prompt */}
        {isInstallable && !isStandalone && (
          <PWAInstallPrompt onInstall={installApp} />
        )}

        {/* Header */}
        <Header 
          user={user}
          isAuthenticated={isAuthenticated}
          onLogin={login}
          onLogout={logout}
        />

        {/* Main Content */}
        <main className="pb-20 pt-16">
          <Routes>
            <Route path="/" element={
              <Dashboard 
                activeTab={activeTab}
                onTabChange={setActiveTab}
                user={user}
              />
            } />
            <Route path="/medications" element={<Medications />} />
            <Route path="/vitals" element={<Vitals />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile user={user} />} />
          </Routes>
        </main>

        {/* Bottom Navigation */}
        <Navigation 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Welcome Message for New Users */}
        {!isAuthenticated && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Welcome to CarePal
              </h2>
              <p className="text-gray-600 mb-6">
                Your caring health companion for medication tracking, vitals monitoring, and wellness support.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2 text-green-600" />
                  Privacy-first & secure
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2 text-blue-600" />
                  Connect with caregivers
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Zap className="w-4 h-4 mr-2 text-purple-600" />
                  AI-powered assistance
                </div>
              </div>
              <button
                onClick={login}
                className="btn-primary w-full mt-6"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;