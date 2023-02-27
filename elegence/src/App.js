// import logo from './logo.svg';
import './App.css';
import ProductCard from './components/Products/ProductCard';
import ProductList from './components/Products/ProductList';
import ProductPage from './components/Products/ProductPage';
import MainRoutes from './components/MainRoutes';
import { Home } from './components/Homepage/home';
import AdminProducts from "./AdminPages/AdminProducts"

import AdminUsers from './AdminPages/AdminUsers'
import AdminDashboard from './AdminPages/AdminDashboard';
import AdminOrder from './AdminPages/AdminOrder';
import AdminRoutes from './AdminRoutes';
function App() {
  return (
    <div className="App">

      {/* <Home /> */}
      {/* <AdminProducts/> */}
      
      {/* <AdminUsers/> */}
      {/* <MainRoutes /> */}
      {/* <AdminDashboard/> */}
      {/* <AdminOrder/> */}
      <AdminRoutes/>
    </div>
  );
}

export default App;
