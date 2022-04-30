import { createContext, useReducer, useState } from "react";
import userReducer, { InitUser } from "../Reduces/UserReducer";
import {
    apiUrl,
    USER_LOADED_FAIL,
    USER_LOADED_SUCCESS,
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    FIND_USER,
} from "./constants";
import axios from "axios";

export const UserContext = createContext();

const UsersContextProvider = ({ children }) => {
    // State
    const [userState, dispatch] = useReducer(userReducer, InitUser);
    // Get all user
    const getCustomer = async () => {
        try {
            const response = await axios.get(`${apiUrl}/auth/customer`);
            if (response.data.success) {
                dispatch({
                    type: USER_LOADED_SUCCESS,
                    payload: response.data.users,
                });
            }
        } catch (error) {
            dispatch({ type: USER_LOADED_FAIL });
        }
    };
    const getAdmin = async () => {
        try {
            const response = await axios.get(`${apiUrl}/admin`);
            if (response.data.success) {
                dispatch({
                    type: USER_LOADED_SUCCESS,
                    payload: response.data.users,
                });
            }
        } catch (error) {
            dispatch({ type: USER_LOADED_FAIL });
        }
    };

    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`${apiUrl}/auth/${userId}`);
            console.log(response);
            if (response.data.success)
                dispatch({ type: DELETE_USER, payload: userId });
        } catch (error) {
            console.log(error);
        }
    };

    // // Update post
    const updateCustomer = async (updatedCustomer) => {
        try {
            const response = await axios.put(
                `${apiUrl}/auth/update`,
                updatedCustomer
            );
            if (response.data.success) {
                dispatch({ type: UPDATE_USER, payload: response.data.post });
                return response.data;
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Server error" };
        }
    };

    // User context data
    const userContextData = {
        userState,
        getCustomer,
        getAdmin,
        deleteUser,
        updateCustomer,
    };

    return (
        <UserContext.Provider value={userContextData}>
            {children}
        </UserContext.Provider>
    );
};

export default UsersContextProvider;
