import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-700'>
        <div className='border-2 px-10 py-10 bg-blue-100 rounded-lg'>
            <form action="" className='flex flex-col text-lg font-bold'>
                <div className='flex flex-col gap-2'>
                <label htmlFor="username"><p>User Name or Email :</p></label>
                <input className='focus:outline-none px-2 py-1 rounded-lg bg-gray-300' type="email" id='username' />
                </div>
                <div className='flex flex-col gap-2'>
                <label htmlFor="userpass"><p>Password :</p></label>
                <input className='focus:outline-none px-2 py-1 rounded-lg bg-gray-300' type="password" id='userpass' />
                </div>
                <button className=' py-1'>Login</button>
            </form>

        </div>
    </div>
  )
}

export default LoginPage