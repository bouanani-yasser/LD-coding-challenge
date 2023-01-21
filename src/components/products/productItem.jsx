function ProductItem({ path, name, desc, price }) {
   return (
      <div className="product-item">
         <img src={`/imgs/${path}`} />
         <div className="product-details">
            <label className="name">{name}</label>
            <p className="desc">{desc}</p>
         </div>
         <div className="product-info">
            <div>
               <img src="/imgs/dummy-rating-stars.png" />
            </div>
            <bdi className="price">{price} $</bdi>
            <button>Add to Cart</button>
         </div>
      </div>
   );
}

export default ProductItem;
