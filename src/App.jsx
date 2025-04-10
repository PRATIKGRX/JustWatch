import './App.css'
import Home from './Home'
import Loader from './Loader';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardPage from './components/DashboardPage';
import UserManagement from './components/UserManagement';
import Setting from './components/Setting';
import LoginPage from './components/LoginPage';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);
  

  return (
    <>
    {loading ? (
      <Loader />
    ) : (
      <div>
        <Routes>
          <Route path="/movie-app/" element={<Home />} />
          <Route path="/movie-app/dashboard" element={<DashboardPage />} />
          <Route path="/movie-app/login" element={<LoginPage />} />
          <Route path="/movie-app/dashboard/users" element={<UserManagement />} />
          <Route path="/movie-app/dashboard/setting" element={<Setting />} />
        </Routes>
      </div>
    )}
  </>
  )
}

export default App
