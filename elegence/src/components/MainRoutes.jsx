import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../AdminPages/AdminDashboard'
import Products from '../AdminPages/AdminProducts'
import Cart from '../VPages/Cart'
import Checkout from '../VPages/Checkout'
import Pay from '../VPages/Pay'
import { Home } from './Homepage/Home'
import ProductDetail from './Products/ProductDetail'
import ProductPage from './Products/ProductPage'

export default function MainRoutes() {
  return (
   <Routes>
    <Route path="Products" element={<ProductPage/>}/>
    <Route path="productdetail/:id/:colorEl/:boolean/:state" element={<ProductDetail/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/pay" element={<Pay/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path='/Admindashboad'  element={<AdminDashboard/>}/>
    <Route path = '/Adminproducts' element = {<Products/>}/>
    <Route path = '/Users' element= {<adminUser/>}/>
   </Routes>
  )
}

