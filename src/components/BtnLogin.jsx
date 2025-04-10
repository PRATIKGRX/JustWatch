
import { useNavigate } from 'react-router-dom';

const BtnLogin = () => {
  const navigate = useNavigate(); 

  const goToLogin = () => {
    navigate('/movie-app/login'); 
  };

  return (
    <button onClick={goToLogin} className="bg-[#3A3A3A] rounded-sm px-4">Sign In</button>
  );
};

export default BtnLogin;
