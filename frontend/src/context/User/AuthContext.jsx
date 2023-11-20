import { createContext, useContext, useState } from "react";
import { loginUser } from "../../helper/LoginHelper";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLogin, setisLogin] = useState(false);
  const [User, setUser] = useState(null);

  // Register
  const handleRegister = async () => {};
  // Log in
  const handleLogin = async (email, password) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data?.email, username: data?.username });
      setisLogin(true);
    }
  };
  // Logout
  const handleLogout = async () => {};

  return (
    <AuthContext.Provider value={{ isLogin, User, handleLogin, handleLogout, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
