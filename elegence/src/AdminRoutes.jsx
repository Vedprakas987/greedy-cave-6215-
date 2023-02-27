import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './AdminPages/AdminDashboard'
import Orders from './AdminPages/AdminOrder'
import Products from './AdminPages/AdminProducts'
import Users from './AdminPages/AdminUsers'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
    </Routes>
  )
}

export default AdminRoutes