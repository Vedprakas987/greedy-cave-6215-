import { border, Box, Button, Container, Flex, HStack, Image, Select, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import { color } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postToCart } from '../../Redux/action'
import { useDispatch } from 'react-redux'
import GameShower from './GameShower'
import ProductCard from './ProductCard'
import ProductPage from './ProductPage'
import "./productpage.css"
import Spiwer from './Swiper';
export default function ProductDetail() {
    const dispatch = useDispatch()
    const [data,setdata] = useState({})
    const {boolean,id,colorEl,state} = useParams()
    console.log(boolean,id,colorEl,state)
    const [DressesData1,setDress1] = useState([])
const [DressesData2,setDress2] = useState([])
useEffect(() => {
axios.get("https://elegence-mock-server.onrender.com/api/Dresses?Section=1").then((res)=>setDress1(res.data))
}, [])
useEffect(() => {
    axios.get("https://elegence-mock-server.onrender.com/api/Dresses?Section=2").then((res)=>setDress2(res.data))
    }, [])

    React.useEffect(() => {
     axios.get(`https://elegence-mock-server.onrender.com/api/Dresses/${id}`).then((res)=>setdata(res.data))
    }, [])
    console.log(data)
    console.log(data.image,state)
    const [pic,setPic] = useState("")
    const HandleColorImage =()=>{

    }
    let arr = Array(10).fill(0)
    let Fit = ["Standard","Petite",'plus']
  return (
    <>
    <div className='Parent_Box'>
<div className='Child1'>

            <div >
      {
        data.image && data.image.map((el)=>(
            <img className='sametypeimage'      onClick={()=>setPic(el)}   src={el} alt="prof" />
        ))
      }
          </div>

            <div>
       { data.image && <Image margin={"auto"}  w={"100%"} height={"52%"}  src={pic||data.image[0]} alt="prof"/> }
            </div>
        
 </div>


<Box display={"flex"} gap={{lg:"2%",xl:"5%"} }  className='child2'>
  <Box w={{base:"68%",sm:"98%",lg:"65%",md:"65%",xl:"65%"}}>
  <Flex gap={"9px"} direction={"column"} justifyContent={"start"}>
    <h2 style={{fontSize:"22px",fontWeight:"400px"}}>{data.name}</h2>
    <Text style={{color:"#23395d"}} textDecoration={"underline"}>Maeve</Text>
    <Image  width={"15%"} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Star_rating_3.5_of_5.png/800px-Star_rating_3.5_of_5.png?20160511144412' alt='prof'/>
    <p style={{fontSize:"10px"}}>Or 4 interest-free installments of $20.00 with Klarna orAfterpay 
</p>
<Box mt={"0.5rem"}>
<hr/>
</Box>
<Text fontSize={"sm"}>${data.price}</Text>
<Text fontSize={"sm"}>Color</Text>
  {
    <HStack   justifyContent={"start"}>
      {
          data.color_image && data.color_image.map((el)=>(
              <Image  _hover={{border:"1px solid whitesmoke"}} mt={"3px"} w={"15%"}  onClick={()=>setPic(el)}   src={el} alt="prof" />
          ))
        }
   
            </HStack>
  }
<Text mb={"14px"} fontSize={"sm"}>Fit*</Text>
 
<Flex  gap={"4px"}>
   { 
   
    Fit.map((el,i)=>
      <button style={{padding:"4px"}} className='btn-box'>{el}</button>
    )
   

   }
  </Flex>
 
  <Text mt={"1rem"} mb={"14px"} fontSize={"sm"}>Size</Text>
   
  <Flex  gap={"3px"}>
   { 
   
    arr.map((el,i)=>
      <button style={{padding:"4px"}} className='btn-box'>{i+25}</button>
    )
   

   }
  </Flex>
  <Text mt={"1.5rem"} fontSize={"sm"} style={{color:"#23395d"}} textDecoration={"underline"}>Size Guide</Text>
  <select>
  <option value="">1</option>
  <option value="">2</option>
  <option value="">3</option>
  <option value="">4</option>
  <option value="">5</option>
  </select>
   </Flex>
   <Button onClick={()=>dispatch(postToCart(data))}  padding={{base:"2px",sm:"7px"}} color={"white"} backgroundColor={"#536872"} ml={{base:"1rem",lg:"1rem",sm:"2rem"}} borderRadius={"0px"}  w={{base:"80%",sm:"90%",md:"80%",lg:"70%",xl:"70%"}}  fontSize={"sm"} fontWeight={"md"} mt={"1rem"}>

  ADD TO BASKET
</Button>

<HStack justifyContent={"start"} mt={"1rem"} ml={"1rem"}>
<Text  fontSize={"sm"} style={{color:"#23395d"}} textDecoration={"underline"}>Add to registry</Text>
<Text   fontSize={"sm"} style={{color:"#23395d"}} textDecoration={"underline"}>Add to widh list</Text>
</HStack>

<Button  color={"white"} backgroundColor={"#536872"} borderRadius={"0px"}  fontSize={"sm"} fontWeight={"md"} w={{base:"80%",sm:"90%",md:"80%",lg:"70%",xl:"70%"}} ml={{base:"1rem",lg:"1rem",sm:"2rem"}} mt={"1rem"}>

  SHOP THE COLLECTION
</Button>


  </Box>
  
  <Box width={"20%"} backgroundColor={"whitesmoke"} h={{lg:"120vh"}}>
  <div style={{margin:"auto"}} >
    <p style={{textAlign:"center"}}>You may <br/>Also Like</p>
      {
        data.color_image && data.color_image.map((el)=>(
            <Image _hover={{border:"1px solid black"}} className='sametypeimage'      onClick={()=>setPic(el)}   src={el} alt="prof" />
        ))
      }
          </div>
  </Box>
</Box>

            </div>
            <h2   style={{textAlign:"start",marginLeft:"14px",fontWeight:"medium",marginBottom:"8px"}}>Recommended For You</h2>
            
            <hr style={{width:"98%",margin:"auto"}}/>
           <Box mt={"2rem"}>
           <Spiwer  products={DressesData2}  v1={3} v2={4}  v3={2} v4={1} v5={2} />
           </Box>
            </>

  )
}
