import { cartActionTypes } from "./cart.types";
// import authApi from "./auth.api.js";

export const addItemToCart = (cartItem) => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: cartItem,
});
