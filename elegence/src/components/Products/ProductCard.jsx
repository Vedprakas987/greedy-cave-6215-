import { border, Box, Button, Container, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({name,image,price,category,color_image,id}) {

    const [state,setState] = useState(0)
    const [boolean,setboolean] = useState(true)
    const [colorEl,setcolorEl] = useState("not")
    console.log(colorEl)

    const HandleColorImage = (el)=>{
        setboolean(false)
        setcolorEl(el)
    }
     return (
    <Container  fontSize={"md"} fontFamily={"monospace"} cursor={"pointer"}>
         <Box>
         <Link to={`/productdetail/${id}/${colorEl}/${boolean}/${state}`}>

        <Image width={"98%"}  margin={"auto"}  src={boolean?image[state]:colorEl}
onMouseOut={()=>setState(0)}
    
    onMouseMoveCapture={()=>(
        setState((prev)=>{
           if(prev<image.length-1){
              return prev+1
           }else{
              return prev-image.length+1
           }
       }
      
           )
     )} 

     onTouchMove={()=>(
        setState((prev)=>{
           if(prev<image.length-1){
              return prev+1
           }else{
              return prev-image.length+1
           }
       }
      
           )
     )} 

     onTouchEnd={()=>setState(0)}
    alt="prof"/>
        </Link>

    <Text fontSize={"sm"} width={"98%"}  margin={"auto"} mt={"4px"} noOfLines={"1"} textAlign={'start'} as={'h2'}>{name}</Text>
    <Text fontSize={"sm"} width={"98%"}  margin={"auto"} mt={"4px"} textAlign={'start'} as={'h2'}> ${price}</Text>
    <Box fontSize={"sm"} width={"98%"}  margin={"auto"} mt={"4px"} justifyContent={"space-between"} display={"grid"} gridTemplateColumns={"repeat(2,1fr)"}>
   
    <Box fontSize={"sm"} width={"98%"}  margin={"auto"} mt={"4px"} display={"inline-flex"} gap={"8px"}>
    
    {
    color_image.map((el,i)=>{
        return(
                     <Image h={"40px"} borderRadius={"50%"} onClick={()=>HandleColorImage(el)} borderInlineEndColor={"white"}   _hover={{border:"1px solid black"}} aria-selected={"true"} w={"20%"} border={"2px solid white"}  src={el}></Image>  
         )
    })    
    }
    </Box>
    <Box textAlign={"End"}>
    <Text mt={"0.6rem"} mr={"1rem"}>
        {color_image.length} color
    </Text>
    </Box>
  
    </Box>
   
   
        </Box>      
    </Container>
  )
}
