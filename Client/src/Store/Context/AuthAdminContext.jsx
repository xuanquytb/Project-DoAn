import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import authReducer, { initState } from "../Reduces/AuthReduces";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./Constants";
import setAuthToken from "../utils/setAuthToken";

export const AuthAdminContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [authAdminState, dispatch] = useReducer(authReducer, initState);

    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
        }
        try {
            const response = await axios.get(`${apiUrl}/admin`);
            if (response.data.success) {
                dispatch({
                    type: "SET_AUTH",
                    payload: {
                        isAuthenticated: true,
                        user: response.data.user,
                        roleUser: response.data.role,
                    },
                });
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            setAuthToken(null);
            dispatch({
                type: "SET_AUTH",
                payload: {
                    authLoading: true,
                    isAuthenticated: false,
                    user: null,
                    roleUser: null,
                },
            });
        }
    };

    useEffect(() => loadUser(), []);

    const loginAdmin = async (userForm) => {
        const response = await axios.post(`${apiUrl}/admin/login`, userForm);
        if (response.data.success) {
            try {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.token
                );
                await loadUser();
                return response.data;
            } catch (error) {
                if (error.response.data) {
                    error.response.data;
                } else {
                    return { success: false, message: error.message };
                }
            }
        } else {
            return response.data;
        }
    };

    const logout = (stateUser) => {
        if (stateUser === true) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            setAuthToken(null);
            dispatch({
                type: "SET_AUTH",
                payload: {
                    authLoading: true,
                    isAuthenticated: false,
                    user: null,
                    roleUser: null,
                },
            });
            return true;
        } else {
            return false;
        }
    };

    const authContextData = {
        authAdminState,
        loginAdmin,
        loadUser,
        logout,
    };

    //return
    return (
        <AuthAdminContext.Provider value={authContextData}>
            {children}
        </AuthAdminContext.Provider>
    );
};

export default AuthContextProvider;
