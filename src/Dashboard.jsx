import React from 'react';
import Sidebar from './components/Sidebar';
import Head from './components/Head';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
const Dashboard = () => {
  return (
    <>
    <div className='grid grid-cols-[25%_75%]'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Head/>
            <div className='p-4'>
            <Routes>
            <Route path='*' element={<DashboardPage />} />
            </Routes>
          </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard
