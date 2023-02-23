import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProductCard from './ProductCard'
import {Link} from "react-router-dom"
export default function ProductList({data}) {
   
  return (

    <SimpleGrid rowGap={"2rem"} columns={{base:1,sm:1,lg:3,md:2,xl:3,'2xl':3}}>
    
      {

data.map((el,i)=>{
            return(    
          <Link to={`/producdetail/${el.id}`}>
              <Box  key={i+1}>
           <ProductCard key={i+1} {...el}/>
                </Box>
              </Link>
            
            )
        })
        }
    </SimpleGrid>
    
  )
}
