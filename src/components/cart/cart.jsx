import './cart.css';
function Cart({ cart }) {
   return (
      <div className="cart">
         <h2>Cart</h2>
         <div className="cart-body">
            {cart.length === 0 ? (
               <p style={{ margin: 'auto' }}>your cart is empty!</p>
            ) : (
               cart.map((cartItem) => (
                  <div className="cart-item" key={cartItem.name}>
                     <img src={`/imgs/${cartItem.imgPath}`} width="100" />
                     <div className="cart-item-info">
                        <h4>{cartItem.name}</h4>
                        <div className="cart-quantity">quantity 1</div>
                     </div>
                     <bdi className="price">{cartItem.price} $</bdi>
                  </div>
               ))
            )}
         </div>
      </div>
   );
}

export default Cart;
