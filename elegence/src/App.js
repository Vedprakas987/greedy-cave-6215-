import logo from './logo.svg';
import './App.css';
import ProductCard from './components/Products/ProductCard';
import ProductList from './components/Products/ProductList';
import ProductPage from './components/Products/ProductPage';
import MainRoutes from './components/MainRoutes';
import {useSelector} from "react-redux"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Footer';
import { DesktopNav } from './components/Navbar/DesktopNav';
import Navbar2 from './components/Navbar/Navbar2';
import CartItem from './VPages/CartItem';
import { Box } from '@chakra-ui/react';

// import { Home } from './components/Homepage/Home';

import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();
myEmitter.setMaxListeners(15);
function App() {
  const store = useSelector((store)=>store)
  console.log(store)
  return (
    <div className="App">
    <Box w={"100%"}>
    <Navbar/>
   <Navbar2/>
   <MainRoutes/>
      </Box>  

   <br/>
   <Footer/>
    </div>
  );
}

export default App;
