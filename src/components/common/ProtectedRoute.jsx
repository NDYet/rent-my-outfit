import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();
  const location = useLocation();

  // 1. If no user is logged in, redirect to the appropriate login page
  if (!user) {
    if (requiredRole === 'admin') {
      // If trying to access admin unauthenticated, send to specialized admin login or 404
      return <Navigate to="/admin-login" state={{ from: location }} replace />;
    }
    // Generic unauthenticated goes to standard login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. If a role is required but doesn't match the user's role
  if (requiredRole && user.role !== requiredRole) {
    // A regular user trying to access admin routes gets booted to home
    if (requiredRole === 'admin') {
      return <Navigate to="/" replace />;
    }
    
    // A buyer trying to access seller dashboard gets booted to seller splash/login
    if (requiredRole === 'seller' && user.role === 'buyer') {
      return <Navigate to="/login" replace />; 
    }
  }

  // 3. User is authenticated and has required permissions
  return children;
};

export default ProtectedRoute;
