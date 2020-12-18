import PRODUCTS_DATA from "./products.data";

const INITIAL_STATE = {
    products: PRODUCTS_DATA,
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productsReducer;
