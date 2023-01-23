import './products.css';
import { products } from '../../../util/_DATA';
import ProductItem from './productItem';
function ProductsList({ setCart, cart }) {
   return (
      <div className="productsList">
         <h2 className="title">Products</h2>
         {products.map((product) => (
            <ProductItem
               key={product.name}
               product={product}
               setCart={setCart}
               cart={cart}
            />
         ))}
      </div>
   );
}

export default ProductsList;
