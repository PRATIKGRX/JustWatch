import React from 'react'
import SideBar from './component/SideBar'
import Head from './component/Head'
const Dashboard = () => {
  return (
    <>
    <div className='grid grid-cols-[20%_80%]'>
        <div>
          <SideBar/>
        </div>
        <div>
          <Head/>
        </div>
    </div>

    </>
  )
}

export default Dashboard