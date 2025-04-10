import React from 'react'
import Dashboard from '../Dashboard'
const Setting = () => {
    return (

        <>
            <Dashboard>
                <div>
                    <div>
                        <h5 className='text-center font-bold'>Setting</h5>
                        <div>
                            <p> Setings of the Control Panel</p>
                            <div className='grid grid-cols-3 gap-2'>
                                <div className="border-1 px-2 py-2">
                                    <p>orders</p>
                                    <div className="flex justify-between">
                                        <p>70%</p>
                                        <p>1000</p>
                                    </div>
                                    <div className="w-full bg-gray-200 h-1">
                                        <div className="bg-purple-600 h-1 w-[70%]"></div>
                                    </div>
                                </div>
                                <div className="border-1 px-2 py-2">
                                    <p>orders</p>
                                    <div className="flex justify-between">
                                        <p>70%</p>
                                        <p>1000</p>
                                    </div>
                                    <div className="w-full bg-gray-200 h-1">
                                        <div className="bg-blue-600 h-1 w-[70%]"></div>
                                    </div>
                                </div>
                                <div className="border-1 px-2 py-2">
                                    <p>orders</p>
                                    <div className="flex justify-between">
                                        <p>70%</p>
                                        <p>1000</p>
                                    </div>
                                    <div className="w-full bg-gray-200 h-1">
                                        <div className="bg-blue-600 h-1 w-[70%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Dashboard>
        </>
    )
}

export default Setting