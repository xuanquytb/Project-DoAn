import { createContext, useReducer, useState } from "react";
import cardReducer, { InitCard } from "../Reduces/CardReducer";
import { apiUrl, DELETE_PRODUCT_CARD, ADD_PRODUCT_CARD } from "./Constants";
import axios from "axios";

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  // State
  const [cardState, dispatch] = useReducer(cardReducer, InitCard);
  // Get all PRODUCT
  const getCard = async () => {
    try {
      const response = await axios.get(`${apiUrl}/card/allCard`);
      console.log(response.data);
      if (response.data.success) {
        dispatch({
          type: ADD_PRODUCT_CARD,
          payload: response.data.card,
        });
      }
    } catch (error) {}
  };

  const deleteCard = async (productId) => {
    try {
      const response = await axios.delete(`${apiUrl}/product/${productId}`);
      console.log(response);
      if (response.data.success)
        dispatch({ type: DELETE_PRODUCT, payload: productId });
    } catch (error) {
      console.log(error);
    }
  };

  const createCard = async (itemCard) => {
    const item = {
      idCard: itemCard.idCard,
      idProduct: itemCard.idProduct,
      idCoupon: "",
      dongia: itemCard.dongia,
      quantity: itemCard.quantity,
      sumMoney: "",
    };
    const response = await axios.post(`${apiUrl}/card/addCardItem`, item);
    console.log(response);
    if (response.data.success) {
      dispatch({
        type: "ADD_PRODUCT_CARD",
        payload: {
          cards: response.data.card,
        },
      });
      return response.data;
    } else {
      return response.data;
    }
  };

  // // Update user
  //   const updateCard = async (updatedProduct) => {
  //     try {
  //       const response = await axios.put(
  //         `${apiUrl}/product/updateproduct/${updatedProduct.id}`,
  //         updatedProduct
  //       );
  //       if (response.data.success) {
  //         dispatch({
  //           type: UPDATE_PRODUCT,
  //           payload: response.data.products,
  //         });
  //         return response.data;
  //       }
  //     } catch (error) {
  //       return error.response.data
  //         ? error.response.data
  //         : { success: false, message: "Server error" };
  //     }
  //   };

  // Product context data
  const cardContextData = {
    cardState,
    getCard,
    // deleteCard,
    createCard,
    // updateCard,
  };

  return (
    <CardContext.Provider value={cardContextData}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
