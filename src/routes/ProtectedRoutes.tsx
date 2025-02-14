import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ element }: { element: JSX.Element }) {
  const isAuthenticated = !!localStorage.getItem('authToken');
  const location = useLocation();

  return isAuthenticated ? element : <Navigate to="/login" replace state={{ from: location.pathname }} />;
}
