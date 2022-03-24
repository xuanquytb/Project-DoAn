import { createContext, useReducer } from "react";
import axios from "axios";
import authReducer, { initState } from "../Reduces/AuthReduces";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./Constants";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initState);

  const loginUser = async (userForm) => {
    const response = await axios.post(`${apiUrl}/auth/login`, userForm);
    console.log(response.data.success);
    if (response.data.success) {
      try {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token);
        return response.data;
      } catch (error) {
        if (error.response.data) {
          error.response.data;
        } else {
          return { success: false, message: error.message };
        }
      }
    }
  };

  const authContextData = { loginUser };

  //return
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
