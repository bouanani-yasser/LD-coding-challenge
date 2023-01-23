export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export const addToCart = (product) => ({
   type: ADD_TO_CART,
   product,
});

export const removeFromCart = (productID) => ({
   type: REMOVE_FROM_CART,
   productID,
});

export const incrementQuantity = (cartItemID) => ({
   type: INCREMENT_QUANTITY,
   cartItemID,
});
export const decrementQuantity = (cartItemID) => ({
   type: DECREMENT_QUANTITY,
   cartItemID,
});
