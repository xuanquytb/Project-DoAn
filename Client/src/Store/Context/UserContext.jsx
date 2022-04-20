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
    // Get all posts
    const getUsers = async () => {
        try {
            const response = await axios.get(`${apiUrl}/auth/users`);
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

    // Add user
    // const addPost = async newPost => {
    // 	try {
    // 		const response = await axios.post(`${apiUrl}/user`, newPost)
    // 		if (response.data.success) {
    // 			dispatch({ type: ADD_POST, payload: response.data.post })
    // 			return response.data
    // 		}
    // 	} catch (error) {
    // 		return error.response.data
    // 			? error.response.data
    // 			: { success: false, message: 'Server error' }
    // 	}
    // }

    // // Delete user
    // const deletePost = async postId => {
    // 	try {
    // 		const response = await axios.delete(`${apiUrl}/posts/${postId}`)
    // 		if (response.data.success)
    // 			dispatch({ type: DELETE_POST, payload: postId })
    // 	} catch (error) {
    // 		console.log(error)
    // 	}
    // }

    // // Find post when user is updating post
    // const findPost = postId => {
    // 	const post = postState.posts.find(post => post._id === postId)
    // 	dispatch({ type: FIND_POST, payload: post })
    // }

    // // Update post
    // const updatePost = async updatedPost => {
    // 	try {
    // 		const response = await axios.put(
    // 			`${apiUrl}/posts/${updatedPost._id}`,
    // 			updatedPost
    // 		)
    // 		if (response.data.success) {
    // 			dispatch({ type: UPDATE_POST, payload: response.data.post })
    // 			return response.data
    // 		}
    // 	} catch (error) {
    // 		return error.response.data
    // 			? error.response.data
    // 			: { success: false, message: 'Server error' }
    // 	}
    // }

    // Post context data
    const userContextData = {
        userState,
        getUsers,
    };

    return (
        <UserContext.Provider value={userContextData}>
            {children}
        </UserContext.Provider>
    );
};

export default UsersContextProvider;
