import './cart.css';
import { useReducer } from 'react';

// const qntReducer = (state, action) => {
//    switch (action.type) {
//       case 'increment':
//          return state.map((product) => {
//             if (product.name === action.name) {
//                return { ...product, quantity: product.quantity + 1 };
//             }
//             return product;
//          });
//       case 'decrement':
//          return state.map((product) => {
//             if (product.name === action.name) {
//                return { ...product, quantity: product.quantity - 1 };
//             }
//             return product;
//          });
//       default:
//          throw state;
//    }
// };

function Cart({ cart, setCart }) {
   return (
      <div className="cart">
         <h2>Cart</h2>
         <div className="cart-body">
            {cart.length === 0 ? (
               <p style={{ margin: 'auto' }}>your cart is empty!</p>
            ) : (
               cart.map((cartItem) => (
                  <div className="cart-item" key={cartItem.name}>
                     <img src={`/imgs/${cartItem.imgPath}`} />
                     <div className="cart-item-info">
                        <label>{cartItem.name}</label>
                        <div className="cart-quantity">
                           quantity{' '}
                           <button
                           // onClick={() =>
                           //    dispatch({
                           //       type: 'increment',
                           //       name: cartItem.name,
                           //    })
                           // }
                           >
                              -
                           </button>
                           <label>{cartItem.quantity}</label>
                           <button>+</button>
                        </div>
                     </div>
                     <bdi className="price">{cartItem.price} $</bdi>
                     <button
                        className="cart-remove-btn"
                        onClick={() =>
                           setCart((prev) =>
                              prev.filter((item) => item.name !== cartItem.name)
                           )
                        }
                     >
                        x
                     </button>
                  </div>
               ))
            )}
         </div>
      </div>
   );
}

export default Cart;
