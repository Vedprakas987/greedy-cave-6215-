import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './Products/ProductPage'

export default function MainRoutes() {
  return (
   <Routes>
    <Route path="Products" element={<ProductPage/>}/>
   </Routes>
  )
}
