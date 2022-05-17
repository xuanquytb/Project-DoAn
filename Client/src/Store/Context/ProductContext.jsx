import { createContext, useReducer, useState } from "react";
import productReducer, { InitProduct } from "../Reduces/ProductReducer";
import {
    apiUrl,
    PRODUCT_LOADED_FAIL,
    PRODUCT_LOADED_SUCCESS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    FIND_PRODUCT,
} from "./Constants";
import axios from "axios";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    // State
    const [productState, dispatch] = useReducer(productReducer, InitProduct);
    // Get all PRODUCT
    const getProduct = async () => {
        try {
            const response = await axios.get(`${apiUrl}/product/allProduct`);
            if (response.data.success) {
                dispatch({
                    type: PRODUCT_LOADED_SUCCESS,
                    payload: response.data.products,
                });
            }
        } catch (error) {
            dispatch({ type: PRODUCT_LOADED_FAIL });
        }
    };

    const deleteProduct = async (productId) => {
        try {
            const response = await axios.delete(
                `${apiUrl}/product/${productId}`
            );
            console.log(response);
            if (response.data.success)
                dispatch({ type: DELETE_PRODUCT, payload: productId });
        } catch (error) {
            console.log(error);
        }
    };

    const createProduct = async (Product) => {
        const product = {
            nameProduct: Product.nameProduct,
            description: Product.description,
            warranty: Product.warranty,
            quantity: Product.quantity,
            promotional: Product.promotional,
            status: Product.status,
            image: Product.image,
            idCategory: Product.idCategory,
            idUnit: Product.idUnit,
            idManufacturer: Product.idManufacturer,
            idOrigin: Product.idOrigin,
            price: Product.price,
        };
        const response = await axios.post(
            `${apiUrl}/product/addProduct`,
            product
        );
        console.log(response);
        if (response.data.success) {
            return response.data;
        } else {
            return response.data;
        }
    };

    // // Update user
    const updateProduct = async (updatedProduct) => {
        try {
            const response = await axios.put(
                `${apiUrl}/product//updateProduct/${updatedProduct.id}`,
                updatedProduct
            );
            if (response.data.success) {
                dispatch({
                    type: UPDATE_PRODUCT,
                    payload: response.data.users,
                });
                return response.data;
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Server error" };
        }
    };

    // Product context data
    const productContextData = {
        productState,
        getProduct,
        deleteProduct,
        createProduct,
        updateProduct,
    };

    return (
        <ProductContext.Provider value={productContextData}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
