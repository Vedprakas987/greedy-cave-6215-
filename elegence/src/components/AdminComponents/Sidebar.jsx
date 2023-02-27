import React from "react";
import { Text, Box, Image, Button } from "@chakra-ui/react";
import logo from "./assets/logo.png";
import  {Link} from "react-router-dom";
import { FaDelicious, FaLayerGroup, FaShoppingCart, FaUserAlt} from "react-icons/fa"

const Sidebar = () => {
  return (
    <>
      <Box bg="white" boxShadow="lg" pos="fixed" w="20%" h="100%" border={"none"}>
        <Text pos="fixed">
          <Image  pt="4" src={logo} w="50%" ml="5" mt={-20}></Image>
        </Text>
        <Text pos={"relative"} >
        <Image  pt="4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMktSigPKpXycm45rkpiiGmZcHoAXHMFI_wg&usqp=CAU" w="50%" h="50%" ml="70" mt="30%"></Image>
        <Text mt={-5} fontWeight={"bold"} color={"black"}>Admin1111</Text>
        </Text>
        <Box mt="-30%">
        <Box  pos="fixed" w="11%"  mt="10%" ml="4%">
          <Link to="/dashboard"><Button w="100%"  bg={"#BC72A7"} color={"white"} _hover={{color:"#5D68A1", bg:"gray.300"}}>
           <FaDelicious/> <Text pl="2">Dashboard</Text>
          </Button></Link>{" "}
        </Box>
        <Box  pos="fixed" mt="15%" ml="4%" w="11%"  >
        
          <Link to="/users">  <Button w="100%" bg={"#BC72A7"} color={"white"} _hover={{color:"#5D68A1", bg:"gray.300"}}>
          <FaUserAlt/><Text pl="2">Users</Text> 
          </Button></Link>{" "}
        </Box>
        <Box  pos="fixed" w="11%" mt="20%" ml="4%">
          {" "}
          <Link to="/orders"><Button w="100%" bg={"#BC72A7"} color={"white"} _hover={{color:"#5D68A1", bg:"gray.300"}}>
          <FaShoppingCart/><Text pl="2">Orders</Text> 
          </Button></Link>
        </Box>
        <Box  pos="fixed" w="11%" mt="25%" ml="4%">
          {" "}
          <Link to="/products"><Button w="100%" bg={"#BC72A7"} color={"white"} _hover={{color:"#5D68A1", bg:"gray.300"}} >
          <FaLayerGroup/><Text pl="2">Products</Text> 
          </Button></Link>
          
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;

