import './App.css';
import ProductsList from './components/products/productsList';
import Cart from './components/cart/cart';

function App() {
   return (
      <div className="app">
         <ProductsList />
         <Cart />
      </div>
   );
}

export default App;
