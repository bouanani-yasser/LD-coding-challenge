export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';

export const addToCart = (product) => ({
   type: ADD_TO_CART,
   product,
});

export const removeFromCart = (product) => ({
   type: REMOVE_FROM_CART,
   product,
});

export const incrementQuantity = (product) => ({
   type: INCREMENT_QUANTITY,
   product,
});
export const decrementQuantity = (product) => ({
   type: DECREMENT_QUANTITY,
   product,
});
export const updateTotal = (subtotal, discount) => ({
   type: UPDATE_TOTAL,
   total: subtotal - discount,
   subtotal,
   discount,
});
