import { Divider, Flex, Heading, Link, SimpleGrid } from '@chakra-ui/layout';
import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

import { useState, useEffect } from "react";
import { Box, Image, Text, Select, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from "axios";



import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import CartItem from '../VPages/CartItem';

function Basket() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isHover, setIsHover] = useState(false)
  const handleMouseOver = () => {
    setIsHover(true)
  }
  const handleMouseOut = () => {
    setIsHover(false)
  }


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


  const handleDeleteItem = (itemIndex, itemId) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(itemIndex, 1);
    setCartItems(newCartItems);
    axios.delete(`https://elegence-mock-server.onrender.com/api/Cart/${itemId}`);
  }



  return (
    <Box p={"40px"}>
      <Breadcrumb fontSize={"20px"} color={"gray"} pb={"40px"}>
        <BreadcrumbItem>
          <BreadcrumbLink href='#' color={"teal"} fontWeight={"bold"}>Review</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Ship</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justify={"space-between"}>
        <Text fontSize={"24px"} fontWeight={"500"} letterSpacing={"0.1em"}>Basket</Text>
        <Link as={"u"}><Text as={"u"} color={"teal"}><Button as={"text"} onClick={onOpen} fontWeight={"normal"} bg={"transparent"}>Delivery Options</Button>

          <Modal borderRadius={"none"} onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Delivery Options</ModalHeader>
              <Divider />
              <ModalCloseButton />
              <ModalBody>
                <Text>We offer the following shipment options for qualifying items on the "Shipping" page at checkout.</Text>
                <Flex mt={"30px"}>
                  <Box mr={"20px"}>
                    <Image src={"https://cdn-icons-png.flaticon.com/128/679/679720.png"} />
                  </Box>
                  <Box>
                    <Heading mb={"10px"} fontWeight={"700"} as={"h3"} size={"md"} color={"gray.600"}>Standard Shipping Services</Heading>
                    <Text>We offer a number of shipping options to fit your needs. US orders only: AnthroPerks members enjoy 24/7 FREE shipping over $50!</Text>
                  </Box>
                </Flex>
                <Flex mt={"30px"}>
                  <Box mr={"20px"}>
                    <Image boxSize={"40px"} src={"https://cdn-icons-png.flaticon.com/128/819/819865.png"} />
                  </Box>
                  <Box>
                    <Heading mb={"10px"} fontWeight={"700"} as={"h3"} size={"md"} color={"gray.600"}>Anthro At Your Service: Store Pickup</Heading>
                    <Text>Order Online & Pick Up for FREE</Text>
                  </Box>
                </Flex><Flex mt={"30px"} mb={"30px"}>
                  <Box mr={"20px"}>
                    <Image boxSize={"40px"} src={"https://cdn-icons-png.flaticon.com/128/126/126122.png"} />
                  </Box>
                  <Box>
                    <Heading mb={"10px"} fontWeight={"700"} as={"h3"} size={"md"} color={"gray.600"}>Ship to a Collection Point</Heading>
                    <Text>Enjoy delivery to a convenient Collection Point near you!</Text>
                  </Box>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal></Text></Link>
      </Flex>
      <Divider mt={"8px"} />



     

{
  cartItems ? <Box>
  <Table>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th>Item Price</Th>
        <Th>Quantity</Th>
        <Th>Total Price</Th>
        <Th>Delete</Th>
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
              <Text>Size: M</Text>
              <Text>Fit: Standard</Text>
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
          <Td>
                <Button
                  color="teal"
                  bg={"none"}
                  size="sm"
                  onClick={() => handleDeleteItem(index, item.id)}
                >
                  <u>Remove</u>
                 
                </Button>
              </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
</Box>

:  <Flex mt={"20px"} mb={"40px"}>
<Text>Your basket is currently empty. .</Text>
<Link ><Text as={"u"} color={"teal"}> Continue Shopping.</Text></Link>
</Flex>


}






     
      <Divider />
      <Box mt={"80px"}>
        <Text align={"start"} mb={"10px"} fontSize={"19px"} fontWeight={"400"} letterSpacing={"0.05em"}>Saved for Later</Text>
        <Box border={"1px solid #8888"} p={"15px"}>
          <Text align={"start"}>Your saved for later is currently empty. Add items here that you like, but aren't ready to buy.</Text>
        </Box>
      </Box>
      <Box mt={"80px"} mb={"100px"} >
        <Text align={"start"} mb={"10px"} fontSize={"19px"} fontWeight={"400"} letterSpacing={"0.05em"}>You may also like</Text>
        <Divider mt={"8px"} mb={"30px"} />
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} spacing={5}>
          <Box>
            <Image src={isHover ? 'https://images.urbndata.com/is/image/Anthropologie/81480394_011_b16?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640' : 'https://images.ctfassets.net/5de70he6op10/7yrEmAMeP6Kx7XthafpP8b/cb1869eb48809f1b667c1b1262cc8085/473929343-ls_m4c.jpg?w=856&q=80&fm=webp'}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <Text align={"start"} fontSize={"12px"}>By Anthropologie Square-Neck Tiered Dress</Text>
          </Box>
          <Box>
            <Image src={isHover ? 'https://images.urbndata.com/is/image/Anthropologie/4110578570069_010_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640' : 'https://images.urbndata.com/is/image/Anthropologie/4110578570069_010_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640'}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut} />
            <Text align={"start"} fontSize={"12px"}>By Anthropologie Long Ruffled Tunic</Text>
          </Box>
          <Box>
            <Image src={isHover ? 'https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640' : 'https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640'}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}/>
            <Text align={"start"} fontSize={"12px"}>By Anthropologie Eyelet Shirt Dress</Text>
          </Box>
          <Box>
            <Image src={isHover ? 'https://images.urbndata.com/is/image/Anthropologie/4110089540099_010_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640' : 'https://images.urbndata.com/is/image/Anthropologie/4110089540099_010_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640'}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut} />
            <Text align={"start"} fontSize={"12px"}>Pilcro Linen Henley Surf Shirt</Text>
          </Box>
          <Box>
            <Image src={isHover ? 'https://images.urbndata.com/is/image/Anthropologie/4120370060056_009_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640' : 'https://images.urbndata.com/is/image/Anthropologie/4120370060056_009_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640'}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut} />
            <Text align={"start"} fontSize={"12px"}>Pilcro Oversized Poplin Shirt</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>

  )
}

export default Basket;