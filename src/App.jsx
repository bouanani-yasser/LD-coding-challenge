import './App.css';
import { useState } from 'react';
import ProductsList from './components/products/productsList';
import Cart from './components/cart/cart';

function App() {
   const [cart, setCart] = useState([]);

   return (
      <div className="app">
         <ProductsList setCart={setCart} cart={cart} />
         <Cart cart={cart} setCart={setCart} />
      </div>
   );
}

export default App;
