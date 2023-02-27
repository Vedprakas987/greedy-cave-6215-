import { useState, useEffect } from "react";
import { Box, Image, Text, Select, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from "axios";

function CartItem() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("https://elegence-mock-server.onrender.com/api/Cart").then((response) => {
      setCartItems(response.data);
    });
  }, []);

  const handleQuantityChange = (itemIndex, event) => {
    const newCartItems = [...cartItems];
    newCartItems[itemIndex].quantity = event.target.value;
    setCartItems(newCartItems);
  };

  return (
    <Box>
      <Table>
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Item Price</Th>
            <Th>Quantity</Th>
            <Th>Total Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item, index) => (
            <Tr key={index}>
              <Td display="flex" alignItems="center">
                <Image src={item.image[0]} alt={item.name} w={"100px"} mr={4} />
                <Box>
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text>Style # 4130348690217</Text>
                  <Text>Color: BLACK MOTIF</Text>
                  <Text>Size M</Text>
                  <Text>Fit Standard</Text>
                </Box>
              </Td>
              <Td>${item.price}</Td>
              <Td>
                <Select
                  value={item.quantity}
                  onChange={(event) => handleQuantityChange(index, event)}
                >
                  {[1, 2, 3, 4, 5].map((quantity) => (
                    <option key={quantity} value={quantity}>
                      {quantity}
                    </option>
                  ))}
                </Select>
              </Td>
              <Td>${item.price * (item.quantity || 1)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default CartItem;
