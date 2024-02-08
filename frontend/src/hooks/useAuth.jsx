import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useLocalStorage("userData", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUserData(data);
    //navigate("/profile");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUserData(null);
    navigate("/logout", { replace: true });
  };

  const value = useMemo(
    () => ({
      userData,
      login,
      logout,
    }),
    [userData]
  );
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
