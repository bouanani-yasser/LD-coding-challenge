import './cart.css';
import { useEffect, useState, memo, useCallback } from 'react';
import { useEffect, useState, memo, useCallback } from 'react';
import CartItem from './cartItem';
import { useSelector, useDispatch } from 'react-redux';
import { updateTotal } from '../../store/actions/cart';

const Cart = memo(() => {
   const Cart = memo(() => {
      const dispatch = useDispatch();
      const { cart, subtotal, discount, total } = useSelector(
         (state) => state.cart
      );

      const [hasDiscount, setHasDiscount] = useState({});

      useEffect(() => {
         calcTotalAndDiscount(cart);
      }, [cart]);

      const calcTotalAndDiscount = useCallback((cart) => {
         let discount = 0;
         const calcTotalAndDiscount = useCallback((cart) => {
            let disMilk = 0;
            let disBread = 0;
            let breadAt50 = 0;
            setHasDiscount({});
            // check for bread discount availability
            cart.forEach((cartItem) => {
               if (cartItem.name === 'butter' && cartItem.quantity >= 2) {
                  breadAt50 = 1;
               }
            });

            let subtotal = cart.reduce((subtotal, product) => {
               switch (product.name) {
                  case 'milk':
                     // check for milk discount availability
                     if (product.quantity >= 4) {
                        const freeMilk = Math.floor(product.quantity / 4);
                        disMilk += freeMilk * product.price;
                        setHasDiscount((prev, name = product.name) => ({
                           ...prev,
                           [name]: disMilk,
                        }));
                     }
                     subtotal += product.quantity * product.price;
                     break;
                  case 'butter':
                     subtotal += product.quantity * product.price;
                     break;
                  case 'bread':
                     if (breadAt50) {
                        disBread += 0.5 * product.price;
                        setHasDiscount((prev, name = product.name) => ({
                           ...prev,
                           [name]: disBread,
                        }));
                     }
                     subtotal += product.quantity * product.price;

                     break;
                  default:
                     subtotal += product.quantity * product.price;
               }
               return subtotal;
            }, 0);

            dispatch(updateTotal(subtotal, discount));
         }, []);
         dispatch(updateTotal(subtotal, disBread + disMilk));
      }, []);

      return (
         <div className="cart">
            <h2>Cart</h2>
            <div className="cart-body">
               {cart?.length === 0 ? (
                  <p style={{ margin: 'auto' }}>your cart is empty!</p>
               ) : (
                  cart?.map((cartItem) => (
                     <CartItem
                        cartItem={cartItem}
                        key={cartItem.id}
                        hasDiscount={hasDiscount}
                     />
                  ))
               )}
            </div>
            <div className="cart-footer">
               <div className="cart-subtotal">
                  <label>Subtotal</label>
                  <bdi>{subtotal.toFixed(2)} $</bdi>
               </div>
               <div className="cart-discount">
                  <label>Discount</label>
                  <bdi>{discount.toFixed(2)} $</bdi>
               </div>
               <div className="cart-total">
                  <label>Total</label>
                  <bdi>{total.toFixed(2)} $</bdi>
               </div>
            </div>
         </div>
      );
   });
});

export default Cart;
