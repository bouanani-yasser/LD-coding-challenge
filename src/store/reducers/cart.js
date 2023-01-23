import {
   ADD_TO_CART,
   REMOVE_FROM_CART,
   INCREMENT_QUANTITY,
   DECREMENT_QUANTITY,
} from '../actions/cart';

const initialState = { cart: [] };
export default function cartReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_TO_CART:
         if (state.cart.find((cartItem) => cartItem.id === action.product.id)) {
            return state;
         } else {
            return {
               cart: [...state.cart, { ...action.product, quantity: 1 }],
            };
         }
      case REMOVE_FROM_CART:
         return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.productID),
         };
      case INCREMENT_QUANTITY:
         return {
            ...state,
            cart: state.cart.map((product) => {
               if (product.id === action.cartItemID) {
                  return { ...product, quantity: product.quantity + 1 };
               }
               return product;
            }),
         };
      case DECREMENT_QUANTITY:
         return {
            ...state,
            cart: state.cart.map((product) => {
               if (product.id === action.cartItemID) {
                  return {
                     ...product,
                     quantity: product.quantity > 1 ? product.quantity - 1 : 1,
                  };
               }
               return product;
            }),
         };
      default:
         return state;
   }
}
