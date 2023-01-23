import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cart';

function ProductItem({ product }) {
   const dispatch = useDispatch();
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
            <button onClick={() => dispatch(addToCart(product))}>
               Add to Cart
            </button>
         </div>
      </div>
   );
}

export default ProductItem;
