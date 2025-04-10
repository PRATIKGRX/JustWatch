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
  const { isAuthenticated } = useAuthContext();

  return (
    <Routes>
      <Route path="/movie-app/" element={<Home />} />
      <Route path="/movie-app/login" element={<LoginPage />} />
      <Route path="/movie-app/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/movie-app/login" />} />
      <Route path="/movie-app/dashboard/users" element={isAuthenticated ? <UserManagement /> : <Navigate to="/movie-app/login" />} />
      <Route path="/movie-app/dashboard/setting" element={isAuthenticated ? <Setting /> : <Navigate to="/movie-app/login" />} />
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
