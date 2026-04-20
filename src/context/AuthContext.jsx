import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the Auth Context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Simulate checking for a stored session token on mount
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('rentMyFit_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Keep localStorage synced with state
  useEffect(() => {
    if (user) {
      localStorage.setItem('rentMyFit_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('rentMyFit_user');
    }
  }, [user]);

  // Login function
  const login = (role, email) => {
    const mockUser = {
      id: Math.random().toString(36).substr(2, 9),
      email: email,
      role: role, // 'buyer', 'seller', or 'admin'
      token: `mock_jwt_token_${role}_${Date.now()}`
    };
    setUser(mockUser);
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier consumer usage
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
