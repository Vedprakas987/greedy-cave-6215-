import logo from './logo.svg';
import './App.css';
import ProductCard from './components/Products/ProductCard';
import ProductList from './components/Products/ProductList';
import ProductPage from './components/Products/ProductPage';
import MainRoutes from './components/MainRoutes';
import {useSelector} from "react-redux"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer';

// import { Home } from './components/Homepage/Home';


function App() {
  const store = useSelector((store)=>store)
  console.log(store)
  return (
    <div className="App">
    
   <Navbar/>
   <MainRoutes/>
   <br/>
   <Footer/>
    </div>
  );
}

export default App;
