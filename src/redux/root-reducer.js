import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import productsReducer from "./products/products.reducer";
import { persistConfig, authPersistConfig, cartItemsPersistConfig } from "./persist-configs";

// COMMON
import authReducer from "./auth/auth.reducer.js";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    cart: persistReducer(cartItemsPersistConfig, cartReducer),
    products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);
