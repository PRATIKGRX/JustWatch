import React, { useContext } from 'react';
import { useAuthContext } from './Authentication';

const Logout = () => {
  const { logout } = useAuthContext(); 

  return (
    <div>
      <button onClick={logout}>Logout</button> 
    </div>
  );
};

export default Logout;
