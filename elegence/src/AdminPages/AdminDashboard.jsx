import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/AdminComponents/Sidebar'

const AdminDashboard = () => {
  return (
    <>
    <Sidebar />
    <Box w="100%" bg={"#A1A2A0"}>
    <Box >
      <Box m="auto" bg="#BC72A7" border="2px solid whitesmoke">
        <Text align="center" ml={"50px"} fontSize="40px" fontFamily={"Goudy Bookletter 1911"}>
         Dashboard
        </Text>
      </Box>
         <Box p={'8'} border="5px solid white" justifyContent={"center"}  >
         
          <Text style={{fontWeight:"bolder", fontSize:"30px"}}>800+ Products</Text>
          </Box>

          <Box p={'8'} border="5px solid white" justifyContent={"center"}  >
         
          <Text style={{fontWeight:"bolder", fontSize:"30px"}}>600+ Users</Text>
          </Box>

          <Box p={'8'} border="5px solid white" justifyContent={"center"}  >
         
          <Text style={{fontWeight:"bolder", fontSize:"30px"}}>400+ Active Users</Text>
          </Box>
          <Box p={'8'} border="5px solid white" justifyContent={"center"}  >
         
          <Text style={{fontWeight:"bolder", fontSize:"30px"}}>1000+ Orders</Text>
          </Box>
          <Box p={'8'} border="5px solid white" justifyContent={"center"}  >
         
         <Text style={{fontWeight:"bolder", fontSize:"30px"}}>500+  Daily Orders</Text>
         </Box>
          
         </Box> 
    </Box>
    </>
  )
}

export default AdminDashboard
