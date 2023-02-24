import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './Products/ProductDetail'
import ProductPage from './Products/ProductPage'

export default function MainRoutes() {
  return (
   <Routes>
    <Route path="Products" element={<ProductPage/>}/>
    <Route path="productdetail/:id/:colorEl/:boolean/:state" element={<ProductDetail/>}/>

   </Routes>
  )
}
