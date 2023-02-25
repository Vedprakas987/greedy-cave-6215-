import logo from './logo.svg';
import './App.css';
import ProductCard from './components/Products/ProductCard';
import ProductList from './components/Products/ProductList';
import ProductPage from './components/Products/ProductPage';
import MainRoutes from './components/MainRoutes';
import { Home } from './components/Homepage/home';

function App() {
  return (
    <div className="App">
      <br />
      <Home />
      <MainRoutes />
    </div>
  );
}

export default App;
