import './products.css';
import { products } from '../../../util/_DATA';
import ProductItem from './productItem';
function ProductsList() {
   return (
      <div className="productsList">
         <h2 className="title">Products</h2>
         {products.map((product) => (
            <ProductItem
               key={product.name}
               path={product.imgPath}
               name={product.name}
               desc={product.desc}
               price={product.price}
            />
         ))}
      </div>
   );
}

export default ProductsList;
