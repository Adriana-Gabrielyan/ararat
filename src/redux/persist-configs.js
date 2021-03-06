import sessionStorage from "redux-persist/lib/storage/session";

export const persistConfig = {
    key: "root",
    storage: sessionStorage,
    whitelist: [],
};

export const authPersistConfig = {
    key: "auth",
    storage: sessionStorage,
    blacklist: [],
};
export const cartItemsPersistConfig = {
    key: "cart",
    storage: sessionStorage,
    whitelist: ["cartItems"],
};
