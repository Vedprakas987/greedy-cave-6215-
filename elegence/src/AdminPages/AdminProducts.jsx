import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../AdminRedux/action";
import Loader from "../Components/AdminComponents/Loader";
import Row from "../Components/AdminComponents/Row";



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
  if (isLoading) return <Loader />;
  

  return (
    <Box>
      <Box m="auto" bg="whiteAlpha.800" border="2px solid whitesmoke">
        <Text align="center" fontSize="40px">
          Products
        </Text>
      </Box>
      
      
      {products.length > 0 &&
        products?.reverse().map((item, id) => {
          return (
            <Row key={id} data={item} rowID={id} renderData={renderData} />
          );
        })}
    </Box>
  );
};

export default Products;

