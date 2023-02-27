import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/AdminComponents/Sidebar";
import { getData } from "../Redux/action";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getData);
    console.log("called");
  },[]);

  // const renderData = () => {
  //   dispatch(getData);
  // };
  console.log(products);
  // if (isLoading) return <Loader />;

  return (
    <>
    <Sidebar />
    <Box w="100%" bg={"#A1A2A0"}>
    <Box >
      <Box m="auto" bg="#BC72A7" border="2px solid whitesmoke">
        <Text align="center" ml={"50px"} fontSize="40px" fontFamily={"Goudy Bookletter 1911"}>
          Products
        </Text>
      </Box>
      {products.map((item) => (
        
        <Box p={'8'} key={item.id} justifyContent="center">
         
          <Box ><Text style={{fontSize:"20px"}}>Category:-{item.category}</Text>
          <Text >Name:-{item.name}</Text>
          <Text  >Price:- ${item.price}</Text></Box>
          

          <Flex justifyContent={"center"} gap="20px">
            <Text>Images</Text>
            {item.image.map((img) => (
              <Image width={"150px"} src={`${img}`} alt="My Image" />
            ))}
          </Flex>

          <Flex  justifyContent={"center"} gap="20px">
            <Text>Colors Available</Text>
            {item.color_image.map((img) => (
              <Image width={"150px"} src={`${img}`} alt="My Image" />
            ))}
          </Flex>
        </Box>
      ))}
    </Box>
    
    
    </Box>
    </>
  );
};

export default Products;
