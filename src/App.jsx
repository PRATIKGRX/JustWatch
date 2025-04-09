import './App.css'
import Home from './Home'
import Loader from './Loader';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

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
          <Route path="/movie-app/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    )}
  </>
  )
}

export default App
