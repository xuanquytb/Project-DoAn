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
    const deleteEmployee = async (employeeId) => {
        try {
            const response = await axios.delete(
                `${apiUrl}/admin/${employeeId}`
            );
            console.log(response);
            if (response.data.success)
                dispatch({ type: DELETE_USER, payload: employeeId });
        } catch (error) {
            console.log(error);
        }
    };

    // // Update user
    const updateCustomer = async (updatedCustomer) => {
        try {
            const response = await axios.put(
                `${apiUrl}/auth/update/${updatedCustomer.id}`,
                updatedCustomer
            );
            if (response.data.success) {
                dispatch({ type: UPDATE_USER, payload: response.data.users });
                return response.data;
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Server error" };
        }
    };
    // Update employee
    const updateEmployee = async (updatedEmployee) => {
        try {
            const response = await axios.put(
                `${apiUrl}/auth/update/${updatedEmployee.id}`,
                updatedEmployee
            );
            if (response.data.success) {
                dispatch({
                    type: UPDATE_USER,
                    payload: response.data.employees,
                });
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
        getAdmin,
        getCustomer,
        deleteEmployee,
        deleteUser,
        updateEmployee,
        updateCustomer,
    };

    return (
        <UserContext.Provider value={userContextData}>
            {children}
        </UserContext.Provider>
    );
};

export default UsersContextProvider;
