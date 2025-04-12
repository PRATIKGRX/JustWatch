import React, { children } from 'react'
import { useContext,createContext,useState, useEffect} from 'react'
import { jwtVerify, SignJWT } from "jose";
const AuthContext = createContext();
const hardcodedUsers = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user1", password: "user123", role: "user" },
  ];

  const secretKey = new TextEncoder().encode("my_secret_key");
  const createToken = async (payload) => {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secretKey);
  };
  
  // Helper function to verify JWT
  const verifyToken = async (token) => {
    try {
      const { payload } = await jwtVerify(token, secretKey);
      return payload;
    } catch (error) {
      console.error("Token verification failed", error);
      return null;
    }
  };
  
export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      verifyToken(token).then((payload) => {
        if (payload) {
          setUser(payload);
        } else {
          localStorage.removeItem("token");
        }
      });
    }
  }, []);

  const login = async (username, password) => {
    const foundUser = hardcodedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      const token = await createToken({
        username: foundUser.username,
        role: foundUser.role,
      });

      localStorage.setItem("token", token);
      setUser({ username: foundUser.username, role: foundUser.role });
      return { success: true };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () =>{
    return useContext(AuthContext);
}