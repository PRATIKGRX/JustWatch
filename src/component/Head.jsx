import React from 'react'

const Head = () => {
    return (
        <div>
            <div className='px-4 py-5 text-2xl flex justify-between font-bold items-center border-b-3 border-red-100'>
                <div>
                    <h1>Demo's somethings here and here</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <button>Darkmode</button>
                    <button>bell</button>
                    <button className='h-10 w-10 rounded-full bg-red-200'></button>
                </div>
            </div>
        </div>
    )
}

export default Head