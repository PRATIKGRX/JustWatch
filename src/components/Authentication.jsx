import React, { children } from 'react'
import { useContext,createContext,useState, useEffect} from 'react'
const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const [isAuthenticated,setisAuthenticated] = useState(false);
    useEffect(()=>{
        const savedUser = localStorage.getItem('username');
        if(savedUser){
            setisAuthenticated(true);
        }
    },[]);
    const login = (username,password) =>{
        if(username === 'pratik' && password === 'password123'){
            localStorage.setItem('username',username);
            setisAuthenticated(true);
            return true;

        }
        else{
            alert("Invaild username");
            return false;
        }
    };
    const logout = () =>{
        localStorage.removeItem('username');
        setisAuthenticated(false);
    }
    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuthContext = () =>{
    return useContext(AuthContext);
}