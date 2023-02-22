import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProductList from './ProductList'
import "./productpage.css"
export default function ProductPage() {
  return (
    <div>
        <div className='productpage'>
            <Box>
           <h1>Sidebar</h1>
            </Box>
            <Box>
                <ProductList/>
            </Box>
        </div>
    </div>
  )
}
