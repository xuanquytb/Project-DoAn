import { createContext, useReducer,useEffect } from "react";
import axios from "axios";
import authReducer, { initState } from "../Reduces/AuthReduces";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./Constants";
import setAuthToken from "../utils/setAuthToken";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initState);

  const loadUser = async () => {
    if(localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    try {
      const response = await axios.get(`${apiUrl}/auth`);
      
      if(response.data.success) {
        dispatch({
          type: 'SET_AUTH',
          payload: {isAuthenticated: true, user: response.data.user,roleUser:response.data.role}
        })
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch({type:'SET_AUTH' , payload:{authLoading:true,isAuthenticated: false, user: null,roleUser: null}})
    }
  }

  useEffect(() => loadUser() , [])

  const loginUser = async (userForm) => {
    const response = await axios.post(`${apiUrl}/auth/login`, userForm);
    if (response.data.success) {
      try {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token);
        await loadUser();
        return response.data;
      } catch (error) {
        if (error.response.data) {
          error.response.data;
        } else {
          return { success: false, message: error.message };
        }
      }
    }else{
      return response.data;
    }
  };

  const authContextData = { loginUser,authState };

  //return
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
