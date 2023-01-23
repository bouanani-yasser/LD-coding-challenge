import './products.css';
import ProductItem from './productItem';
import { useSelector } from 'react-redux';
function ProductsList() {
   const products = useSelector((state) => state.products);
   return (
      <div className="productsList">
         <h2 className="title">Products</h2>
         {products &&
            products.map((product) => (
               <ProductItem key={product.id} product={product} />
            ))}
      </div>
   );
}

export default ProductsList;
