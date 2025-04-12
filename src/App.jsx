import './App.css';
import Home from './Home';
import Loader from './Loader';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
import UserManagement from './components/UserManagement';
import Setting from './components/Setting';
import LoginPage from './components/LoginPage';
import { AuthProvider, useAuthContext } from './components/Authentication';

function AppRoutes() {
  const { user } = useAuthContext();

  const isAdmin = user?.role === 'admin';

  return (
    <Routes>
      <Route path="/movie-app/" element={<Home />} />
      <Route path="/movie-app/login" element={user ? <Navigate to="/movie-app/dashboard" /> : <LoginPage />} />

      {/* Routes accessible to both admin and user */}
      <Route
        path="/movie-app/dashboard"
        element={user ? <DashboardPage /> : <Navigate to="/movie-app" />} // All users can access the main dashboard page
      />
      
      {/* Admin-only routes */}
      <Route
        path="/movie-app/dashboard/users"
        element={user ? <UserManagement /> : <Navigate to="/movie-app/dashboard" />} // Admin can access user management
      />
      <Route
        path="/movie-app/dashboard/setting"
        element={isAdmin ? <Setting /> : <Navigate to="/movie-app/dashboard" />} // Admin can access settings
      />
    </Routes>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AuthProvider>
      {loading ? <Loader /> : <AppRoutes />}
    </AuthProvider>
  );
}

export default App;
