import './App.css';
import { useState } from 'react';
import ProductsList from './components/products/productsList';
import Cart from './components/cart/cart';

function App() {
   const [cart, setCart] = useState([]);

   return (
      <div className="app">
         <ProductsList setCart={setCart} />
         <Cart cart={cart} />
      </div>
   );
}

export default App;
