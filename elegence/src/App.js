import logo from './logo.svg';
import './App.css';
import ProductCard from './components/Products/ProductCard';
import ProductList from './components/Products/ProductList';
import ProductPage from './components/Products/ProductPage';
import MainRoutes from './components/MainRoutes';
import Basket from './VPages/Cart/Basket';
import Cart from './VPages/Cart/Cart';
import Checkout from './VPages/Checkout/Checkout';
import Pay from './VPages/Payment/Pay';

function App() {
  return (
    <div className="App">
      <br/>
      <MainRoutes/>
      <Cart/>
      <Checkout/>
      <Pay/>
    </div>
  );
}

export default App;
