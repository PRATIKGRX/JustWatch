import React, { useState } from 'react';
import { useAuthContext } from './Authentication';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate hook

const LoginPage = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate(); // ✅ Initialize navigate
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/movie-app/dashboard'); 
    } else {
      setError('Invalid username or password'); 
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-700'>
      <div className='border-2 px-10 py-10 bg-blue-100 rounded-lg'>
        <form onSubmit={handleLogin} className='flex flex-col text-lg font-bold gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="username">User Name or Email:</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='focus:outline-none px-2 py-1 rounded-lg bg-gray-300'
              type="text"
              id='username'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="userpass">Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='focus:outline-none px-2 py-1 rounded-lg bg-gray-300'
              type="password"
              id='userpass'
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button className='py-1 bg-blue-500 text-white rounded-lg' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
