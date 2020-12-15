export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const incrimentItemQuantity = (cartItems, cartId) => {
    const itemsCopy = [...cartItems];
    const selectedItemIdx = cartItems.findIndex((cartItem) => cartItem.id === cartId);
    const item = itemsCopy[selectedItemIdx];
    itemsCopy[selectedItemIdx] = {...item, quantity: item.quantity + 1};
    return itemsCopy;
};

export const decrimentItemQuantity = (cartItems, cartId) => {
    const itemsCopy = [...cartItems];
    const selectedItemIdx = cartItems.findIndex((cartItem) => cartItem.id === cartId);
    const item = itemsCopy[selectedItemIdx];
    if (item.quantity > 1) {
        itemsCopy[selectedItemIdx] = {...item, quantity: item.quantity - 1};
    }
    return itemsCopy;
};
