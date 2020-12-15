import { cartActionTypes } from "./cart.types.js";
import { addItemToCart, incrimentItemQuantity, decrimentItemQuantity } from "./cart.utils";

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
        case cartActionTypes.DELETE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => cartItem.id !== payload.id),
            };
        case cartActionTypes.INCRIMENT_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: incrimentItemQuantity(state.cartItems, payload),
            };
        case cartActionTypes.DECRIMENT_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: decrimentItemQuantity(state.cartItems, payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
