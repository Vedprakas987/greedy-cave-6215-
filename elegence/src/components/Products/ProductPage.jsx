import { Box, Flex, Image, Select, SimpleGrid, Spinner, Text, textDecoration } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductList from './ProductList'
import './styles/productstyle.css'
import './styles/productstyle.css'
import axios from "axios"
import Loaders from '../../Loaders/Loader'
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
axios.get("https://elegence-mock-server.onrender.com/api/Dresses?Section=1").then((res)=>setDress1(res.data))
}, [])
useEffect(() => {
    axios.get("https://elegence-mock-server.onrender.com/api/Dresses?Section=2").then((res)=>setDress2(res.data))
    }, [])
let arr1 = ['Cocktail & Party Dresses','Lounge & Casual Dresses','Little Black Dresses','Little White Dresses','Maxi Dresses','Midi Dresses','Mini & Tunic Dresses','Jumpsuits','Wedding Guest Dresses','Black Tie Wedding','Cocktail Wedding','Beach Wedding']
  console.log(DressesData1,DressesData2)
return (
    <div>
        <div className='productpage'>
          
            <Box w={{sm:"100%"}} mt={"1rem"} padding={"1.3rem"} mb={"2rem"} textAlign={"start"} fontSize={"small"}>
              <h2>Browsed By</h2>
              <hr/>
             {
              arr1.map((el)=>{
                return(
                  <Text _hover={{textDecoration:"underline"}} mt={"7px"} fontSize={"small"}>{el}</Text>
                )
              })
             }
             <br/>
             <h2>Filter By:</h2>
             <hr style={{marginTop:"5px"}}/>
             <Select w={{lg:"98%"}} mt={"8px"}>
              <option>Color</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Pink</option>
             </Select>

             <Select w={{lg:"98%"}} mt={"8px"}>
              <option>Price</option>
              <option>500-1000</option>
              <option>100-200</option>
              <option>200-300</option>
              <option>400-500</option>
              <option>600-700</option>
             </Select>


             <Select w={{lg:"98%"}} mt={"8px"}>
              <option>Brand</option>
              <option>AG Jeans</option>
              <option>AGolds</option>
              <option>A.j Morgon</option>
              <option>AMUR</option>
              <option>Pink</option>
             </Select>




             <Select w={{lg:"98%"}} mt={"8px"}>
              <option>Style</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Pink</option>
             </Select>




             <Select w={{lg:"98%"}} mt={"8px"}>
              <option>Color</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Pink</option>
             </Select>


             <Select w={{lg:"98%"}} mt={"8px"}>
              <option>Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>2XL</option>
             </Select>
            </Box>
            <Box>
                {
                  DressesData1.length>0?<ProductList data={DressesData1} />:<Loaders/>

            }
                <Flex  justifyContent={"center"} className='Add'  gridTemplateColumns={"70% 20%"} mt={"3rem"}>
             
            <Image className='Addimg' h={{base:"100%",sm:"100%",lg:"86%"}} ml={"1rem"}  w={{base:"100%",sm:"100%",lg:"64.5%"}} src='https://images.ctfassets.net/5de70he6op10/6QOf9TDaIjOyrwNScJNEZv/6b6801edc04c30b0f6c1df088e48a06d/11_Vacation_Dresses_2x.jpg?w=1440&q=80&fm=webp' alt='prof-pis'/>   
            <ProductCard {...addElem} />
            
                </Flex>
                <br/>
                <Box className='produc'>
             {  DressesData2.length>0?<ProductList data={DressesData2}/>:<
             Loaders/>

          }
                </Box>
            </Box>
          
        </div>
    </div>
  )
}
