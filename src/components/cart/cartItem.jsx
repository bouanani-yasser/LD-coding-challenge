import { useDispatch } from 'react-redux';
import { memo, useCallback } from 'react';
import {
   removeFromCart,
   incrementQuantity,
   decrementQuantity,
} from '../../store/actions/cart';

const CartItem = memo(({ cartItem, hasDiscount }) => {
   const dispatch = useDispatch();

   const dispatchHandler = useCallback(
      (type, cartItem) => {
         type === 'inc'
            ? dispatch(incrementQuantity(cartItem))
            : dispatch(decrementQuantity(cartItem));
      },
      [dispatch]
   );

   return (
      <div className="cart-item">
         <img src={`/imgs/${cartItem.imgPath}`} />
         <div className="cart-item-info">
            <label className="item-name">{cartItem.name}</label>
            <div className="cart-quantity">
               quantity
               <button onClick={() => dispatchHandler('dec', cartItem)}>
                  -
               </button>
               <label>{cartItem.quantity}</label>
               <button onClick={() => dispatchHandler('inc', cartItem)}>
                  +
               </button>
            </div>
         </div>
         <div className="price">
            <div className="subtotal">
               {(cartItem.price * cartItem.quantity).toFixed(2)} $
            </div>
            {hasDiscount[cartItem.name] && (
               <div className="total">
                  {(
                     cartItem.price * cartItem.quantity -
                     hasDiscount[cartItem.name]
                  ).toFixed(2)}{' '}
                  $
               </div>
            )}
         </div>
         <button
            className="cart-remove-btn"
            onClick={() => dispatch(removeFromCart(cartItem))}
         >
            x
         </button>
      </div>
   );
});
export default CartItem;
