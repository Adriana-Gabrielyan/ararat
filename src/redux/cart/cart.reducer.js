import { cartActionTypes } from "./cart.types.js";
import {addItemToCart} from  "./cart.utils"

const INITIAL_STATE = {
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload),
            };

        default:
            return state;
    }
};

export default cartReducer;
