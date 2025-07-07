import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('carepal_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    // Simulate login - in real app, this would handle actual authentication
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com'
    };
    
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('carepal_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('carepal_user');
  };

  return {
    user,
    isAuthenticated,
    login,
    logout
  };
};