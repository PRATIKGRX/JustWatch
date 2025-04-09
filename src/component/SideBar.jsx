import React from 'react'

const SideBar = () => {
    return (
        <>
            <div className='h-screen overflow-y-auto'>
                <div className='h-[200px] flex justify-center items-center'>
                    <div>
                        <p className='text-2xl font-bold'>Demo Logo</p>
                    </div>

                </div>
                <div className='px-4 py-4  '>
                    <div className='flex flex-col gap-4 text-xl'>
                        <div className='bg-blue-200 h-12 rounded-lg flex items-center px-2'>
                            <p>Dashboard</p>
                        </div>
                        <div className='bg-blue-200 h-12 rounded-lg flex items-center px-2'>
                            <p>Sales</p>
                        </div>
                        <div className='bg-blue-200 h-12 rounded-lg flex items-center px-2'>
                            <p>Customer / Customer Care</p>
                        </div>
                        <div className='bg-blue-200 h-12 rounded-lg flex items-center px-2'>
                            <p>HR / Staff Management</p>
                        </div>
                        <div className='bg-blue-200 h-12 rounded-lg flex items-center px-2'>
                            <p>Boardcast</p>
                        </div>
                        <div className='bg-blue-200 h-12 rounded-lg flex items-center px-2'>
                            <p>Permission Assignment</p>
                        </div>
                        <div className='bg-blue-200 h-12 rounded-lg flex items-center px-2'>
                            <p>Product Management</p>
                        </div>
                        <div className='bg-blue-200 h-12 rounded-lg flex items-center px-2'>
                            <p>Extras</p>
                        </div>
                        <div className='bg-blue-200 h-12 rounded-lg flex items-center px-2'>
                            <p>Billing</p>
                        </div>
                        <div className='bg-blue-200 h-12 rounded-lg flex items-center px-2'>
                            <p>Settings</p>
                        </div>
                        <div className='bg-blue-200 h-12 rounded-lg flex items-center px-2'>
                            <p>Logout</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SideBar