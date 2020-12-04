import { cartActionTypes } from "./cart.types.js";

const INITIAL_STATE = {
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, payload],
            };

        default:
            return state;
    }
};

export default cartReducer;
