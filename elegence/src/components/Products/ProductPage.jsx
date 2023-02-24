import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductList from './ProductList'
import "./productpage.css"
import axios from "axios"
export default function ProductPage() {
let addElem =  {
  id:999,
  name:"Devotion Twins Opalios Blouse",
  image:["https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
  price:280.00,
  category:"Dresses",
  color_image:["https://images.urbndata.com/is/image/Anthropologie/4110728470007_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4110728470009_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"]
}
const [DressesData1,setDress1] = useState([])
const [DressesData2,setDress2] = useState([])
useEffect(() => {
axios.get("http://localhost:8080/Dresses?Section=1").then((res)=>setDress1(res.data))
}, [])
useEffect(() => {
    axios.get("http://localhost:8080/Dresses?Section=2").then((res)=>setDress2(res.data))
    }, [])

  return (
    <div>
        <div className='productpage'>
            <Box>
           <h1>Sidebar</h1>
            </Box>
            <Box>
                <ProductList data={DressesData1} />
                <Flex  justifyContent={"center"} className='Add'  gridTemplateColumns={"70% 20%"} mt={"3rem"}>
             
            <Image className='Addimg' h={{base:"100%",sm:"100%",lg:"86%"}} ml={"1rem"}  w={{base:"100%",sm:"100%",lg:"64.5%"}} src='https://images.ctfassets.net/5de70he6op10/6QOf9TDaIjOyrwNScJNEZv/6b6801edc04c30b0f6c1df088e48a06d/11_Vacation_Dresses_2x.jpg?w=1440&q=80&fm=webp' alt='prof-pis'/>   
            <ProductCard {...addElem} />
            
                </Flex>
                <br/>
                <Box className='produc'>
                <ProductList data={DressesData2}/>
                </Box>
            </Box>
          
        </div>
    </div>
  )
}
