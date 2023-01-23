import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import {
   removeFromCart,
   incrementQuantity,
   decrementQuantity,
} from '../../store/actions/cart';

function Cart() {
   const { cart } = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   return (
      <div className="cart">
         <h2>Cart</h2>
         <div className="cart-body">
            {cart?.length === 0 ? (
               <p style={{ margin: 'auto' }}>your cart is empty!</p>
            ) : (
               cart?.map((cartItem) => (
                  <div className="cart-item" key={cartItem.id}>
                     <img src={`/imgs/${cartItem.imgPath}`} />
                     <div className="cart-item-info">
                        <label className="item-name">{cartItem.name}</label>
                        <div className="cart-quantity">
                           quantity
                           <button
                              onClick={() =>
                                 dispatch(decrementQuantity(cartItem.id))
                              }
                           >
                              -
                           </button>
                           <label>{cartItem.quantity}</label>
                           <button
                              onClick={() =>
                                 dispatch(incrementQuantity(cartItem.id))
                              }
                           >
                              +
                           </button>
                        </div>
                     </div>
                     <bdi className="price">{cartItem.price} $</bdi>
                     <button
                        className="cart-remove-btn"
                        onClick={() => dispatch(removeFromCart(cartItem.id))}
                     >
                        x
                     </button>
                  </div>
               ))
            )}
         </div>
         <div className="cart-footer">
            <div className="cart-subtotal">
               <label>Subtotal</label>
               <bdi> 1 $</bdi>
            </div>
            <div className="cart-discount">
               <label>Discount</label>
               <bdi> 1 $</bdi>
            </div>
            <div className="cart-total">
               <label>Total</label>
               <bdi> 1 $</bdi>
            </div>
         </div>
      </div>
   );
}

export default Cart;
