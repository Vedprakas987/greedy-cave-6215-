import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";



const Products = () => {
  const dispatch = useDispatch(); 

  const {products , isLoading } = useSelector((store) => store) 
 

  useEffect(() => {
    dispatch(getData);
    console.log("called");
  }, []);
  

  const renderData = () => {
    dispatch(getData);
  };
    console.log(products)
  // if (isLoading) return <Loader />;
  

  return (
    <Box>
      <Box m="auto" bg="whiteAlpha.800" border="2px solid whitesmoke">
        <Text align="center" fontSize="40px">
          Products
        </Text>
      </Box>
      
    </Box>
  );
};

export default Products;

