import { useDispatch } from 'react-redux';
import {
   removeFromCart,
   incrementQuantity,
   decrementQuantity,
} from '../../store/actions/cart';

function CartItem({ cartItem, hasDiscount }) {
   const dispatch = useDispatch();

   console.log(hasDiscount);
   return (
      <div className="cart-item">
         <img src={`/imgs/${cartItem.imgPath}`} />
         <div className="cart-item-info">
            <label className="item-name">{cartItem.name}</label>
            <div className="cart-quantity">
               quantity
               <button onClick={() => dispatch(decrementQuantity(cartItem))}>
                  -
               </button>
               <label>{cartItem.quantity}</label>
               <button onClick={() => dispatch(incrementQuantity(cartItem))}>
                  +
               </button>
            </div>
         </div>
         <div className="price">
            <div className="subtotal">
               {(cartItem.price * cartItem.quantity).toFixed(2)} $
            </div>
            {hasDiscount[cartItem.id] && (
               <div className="total">
                  {(
                     cartItem.price * cartItem.quantity -
                     hasDiscount[cartItem.id]
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
}

export default CartItem;
