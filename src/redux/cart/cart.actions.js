import { cartActionTypes } from "./cart.types";
// import authApi from "./auth.api.js";

export const addItemToCart = (cartItem) => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: cartItem,
});

export const deleteItemFromCart = (cartItem) => ({
    type: cartActionTypes.DELETE_ITEM_FROM_CART,
    payload: cartItem,
});

export const incrimentItemQuantity = (cartItemId) => ({
    type: cartActionTypes.INCRIMENT_ITEM_QUANTITY,
    payload: cartItemId,
});
export const decrimentItemQuantity = (cartItemId) => ({
    type: cartActionTypes.DECRIMENT_ITEM_QUANTITY,
    payload: cartItemId,
});
