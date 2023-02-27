import { Box, Text, Image,  } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Sidebar from "../components/AdminComponents/Sidebar";

  const getOrders = async () => {
    let res = await axios.get("http://localhost:8080/orders");
    let data = await res.data;
    return data;
  };
  const Orders=()=> {
    
    const [order, setOrder] = useState([]);
    useEffect(() => {
      getOrders().then((r) => {
        setOrder(r);
        console.log(r)
      });
    }, []);
  
  return (
    <>
    <Sidebar />
    <Box w="100%" bg={"#A1A2A0"}>
    <Box >
      <Box m="auto" bg="#BC72A7" border="2px solid whitesmoke">
        <Text align="center" ml={"50px"} fontSize="40px" fontFamily={"Goudy Bookletter 1911"}>
          Orders
        </Text>
      </Box>

      {order.map((item) => (
        
        <Box p={'8'} key={item.id} justifyContent="center">
         
          <Box >
            <Text><Image width={"150px"} ml="650px" src={item.image} alt="img"/></Text>
          <Text >User ID:-{item.id}</Text>
          <Text >Name:-{item.Uname}</Text>
          <Text >Email:-{item.email}</Text></Box>
          <Text >Contact:-{item.contact}</Text>
          <Text >Address:-{item.address}</Text>
          <Text >Category:-{item.category}</Text>
          <Text >Name:-{item.name}</Text>
          <Text >Price:-{item.price}</Text>
          </Box>
          ))}
          </Box>
         </Box> 
           </>
  );
};

export default Orders;
