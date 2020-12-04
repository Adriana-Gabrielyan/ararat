import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import { persistConfig, authPersistConfig } from "./persist-configs";

// COMMON
import authReducer from "./auth/auth.reducer.js";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
