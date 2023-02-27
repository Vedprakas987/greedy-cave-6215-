import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { AddProducttoServer } from './api'
import { ProType } from './constant'
export default function AddProduct() {
   const initialData = {
    name:"",
    brand:"",
    image:[],
    price:0,
    
   }
  const [product,SetProduct] = useState(initialData)
     const handleChange=(e)=>{
      const {name,value} = e.target
      SetProduct((prev)=>({...prev,[name]:value}))
     }
     const handleSubmit=(e)=>{
       e.preventDefault()
       const newData={
        ...product,price:+product.price
       }
      AddProducttoServer(newData)
      SetProduct(initialData)
     }
    console.log(product) 
  return (
    <div>
      <form onSubmit={handleSubmit}>
     <input name='name' onChange={(e)=>handleChange(e)} type="text" placeholder="name" value={product.name} />
     <input name='price' onChange={(e)=>handleChange(e)} type="number" placeholder="price" value={product.price} />
     <input name='brand' onChange={(e)=>handleChange(e)} type="text" placeholder="brand"  value={product.brand}/>
     <input name='image' onChange={(e)=>handleChange(e)} type="text" placeholder="image" value={product.image}/>
     <button>ADD Products</button>
      </form>
    </div>
  )
}




