function ProductItem({ cart, setCart, product }) {
   return (
      <div className="product-item">
         <img src={`/imgs/${product.imgPath}`} />
         <div className="product-details">
            <label className="name">{product.name}</label>
            <p className="desc">{product.desc}</p>
         </div>
         <div className="product-info">
            <div>
               <img src="/imgs/dummy-rating-stars.png" />
            </div>
            <bdi className="price">{product.price} $</bdi>
            <button
               onClick={() =>
                  !cart.some((item) => item.name === product.name) &&
                  setCart((prev) => [...prev, { ...product, quantity: 0 }])
               }
            >
               Add to Cart
            </button>
         </div>
      </div>
   );
}

export default ProductItem;
