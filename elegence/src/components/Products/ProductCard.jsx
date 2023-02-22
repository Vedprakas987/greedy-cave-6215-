import { border, Box, Button, Container, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function ProductCard({name,image,price,category,color_image}) {

    const [state,setState] = useState(0)
    const [boolean,setboolean] = useState(true)
    const [colorEl,setcolorEl] = useState("")
    console.log(colorEl)

    const HandleColorImage = (el)=>{
        setboolean(false)
        setcolorEl(el)
    }
     return (
    <Container  fontSize={"md"} fontFamily={"monospace"} cursor={"pointer"}>
         <Box>
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
    alt="prof"/>
    <Text  width={"98%"}  margin={"auto"} mt={"4px"} noOfLines={"1"} textAlign={'start'} as={'h2'}>{name}</Text>
    <Text  width={"98%"}  margin={"auto"} mt={"4px"} textAlign={'start'} as={'h2'}> ${price}</Text>
    <Box  width={"98%"}  margin={"auto"} mt={"4px"} justifyContent={"space-between"} display={"grid"} gridTemplateColumns={"repeat(2,1fr)"}>
    <Box  width={"98%"}  margin={"auto"} mt={"4px"} display={"flex"} gap={"8px"}>
    
    {
    color_image.map((el,i)=>{
        return(
         <Image  onClick={()=>HandleColorImage(el)}  _hover={{border:"1px solid white"}} aria-selected={"true"} w={"16%"}  border={"1px solid black"} borderRadius={"50%"} src={el}></Image>  
         )
    })    
    }
    </Box>
    <Box textAlign={"end"}>
    <Text >
        {color_image.length} color
    </Text>
    </Box>
  
    </Box>
   
   
        </Box>      
    </Container>
  )
}
