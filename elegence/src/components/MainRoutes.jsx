import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../VPages/Cart'
import Checkout from '../VPages/Checkout'
import Pay from '../VPages/Pay'
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
   </Routes>
  )
}
