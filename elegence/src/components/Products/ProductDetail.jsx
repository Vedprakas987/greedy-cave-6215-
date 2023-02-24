import { Box, Container, Image, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./productpage.css"
export default function ProductDetail() {
    const [data,setdata] = useState({})
    const {boolean,id,colorEl,state} = useParams()
    console.log(boolean,id,colorEl,state)
    React.useEffect(() => {
     axios.get(`http://localhost:8080/Dresses/${id}`).then((res)=>setdata(res.data))
    }, [])
    console.log(data.image,state)
    const [pic,setPic] = useState("")
  return (
    <Box >
    <div className='parent'>
    <Box className='box1'>
    <SimpleGrid   className='ProductDetail'>
    <Box   border={"1px solid red"}>
      {
        data.image && data.image.map((el)=>(
            <Image onClick={()=>setPic(el)} _hover={{border:"2px solid black"}} margin={"5px"} w={"90%"}   src={el} alt="prof" />
        ))
      }
    </Box>
    <Box   border={"1px solid blue"}>
        
            <Box>
       { data.image && <Image  w={"80%"}   src={pic||data.image[0]} alt="prof"/> }
            </Box>
        
  
    </Box>
    </SimpleGrid>     
    </Box>
    <Box border={"1px solid green"} className='box2'>

    </Box>
    </div>
    </Box>  

  )
}
