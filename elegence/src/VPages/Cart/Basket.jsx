import { Image } from '@chakra-ui/image';
import { Box, Divider, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/layout';
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

function Basket() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box w={"65%"} p={"40px"}>
        <Flex justify={"space-between"}>
            <Text fontSize={"24px"} fontWeight={"500"} letterSpacing={"0.1em"}>Basket</Text>
            <Link as={"u"}><Text as={"u"} color={"teal"}><Button as={"text"} onClick={onOpen} fontWeight={"normal"} bg={"transparent"}>Delivery Options</Button>

<Modal borderRadius={"none"} onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Delivery Options</ModalHeader>
    <Divider/>
    <ModalCloseButton />
    <ModalBody>
        <Text>We offer the following shipment options for qualifying items on the "Shipping" page at checkout.</Text>
        <Flex mt={"30px"}>
            <Box mr={"20px"}>
                <Image src={"https://cdn-icons-png.flaticon.com/128/679/679720.png"}/>
            </Box>
            <Box>
                <Heading mb={"10px"} fontWeight={"700"} as={"h3"} size={"md"} color={"gray.600"}>Standard Shipping Services</Heading>
                <Text>We offer a number of shipping options to fit your needs. US orders only: AnthroPerks members enjoy 24/7 FREE shipping over $50!</Text>
            </Box>
        </Flex>
        <Flex mt={"30px"}>
            <Box mr={"20px"}>
                <Image boxSize={"40px"} src={"https://cdn-icons-png.flaticon.com/128/819/819865.png"}/>
            </Box>
            <Box>
                <Heading mb={"10px"} fontWeight={"700"} as={"h3"} size={"md"} color={"gray.600"}>Anthro At Your Service: Store Pickup</Heading>
                <Text>Order Online & Pick Up for FREE</Text>
            </Box>
        </Flex><Flex mt={"30px"} mb={"30px"}>
            <Box mr={"20px"}>
                <Image boxSize={"40px"} src={"https://cdn-icons-png.flaticon.com/128/126/126122.png"}/>
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
        <Divider mt={"8px"}/>
        <Flex mt={"20px"} mb={"40px"}>
            <Text>Your basket is currently empty. .</Text>
            <Link ><Text as={"u"} color={"teal"}> Continue Shopping.</Text></Link>
        </Flex>
        <Divider/>
        <Box  mt={"80px"}> 
            <Text align={"start"} mb={"10px"} fontSize={"19px"} fontWeight={"400"} letterSpacing={"0.05em"}>Saved for Later</Text>
            <Box border={"1px solid #8888"} p={"15px"}> 
             <Text align={"start"}>Your saved for later is currently empty. Add items here that you like, but aren't ready to buy.</Text>
            </Box>
        </Box>
        <Box  mt={"80px"} mb={"100px"} > 
            <Text align={"start"} mb={"10px"} fontSize={"19px"} fontWeight={"400"} letterSpacing={"0.05em"}>You may also like</Text>
            <Divider mt={"8px"} mb={"30px"}/>
            <SimpleGrid columns={{sm:1,md:2,lg:5}} spacing={5}>
              <Box>
                <Image src={'https://images.urbndata.com/is/image/Anthropologie/4130348690217_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349'}/>
                <Text align={"start"} fontSize={"12px"}>By Anthropologie Square-Neck Tiered Dress</Text>
              </Box>
              <Box>
                <Image src='https://images.urbndata.com/is/image/Anthropologie/4110578570069_010_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640'/>
                <Text align={"start"} fontSize={"12px"}>By Anthropologie Long Ruffled Tunic</Text>
              </Box>
              <Box>
                <Image src='https://images.urbndata.com/is/image/Anthropologie/4130916210140_010_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640'/>
                <Text align={"start"} fontSize={"12px"}>By Anthropologie Eyelet Shirt Dress</Text>
              </Box>
              <Box>
                <Image src='https://images.urbndata.com/is/image/Anthropologie/4110095140065_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640'/>
                <Text align={"start"} fontSize={"12px"}>Pilcro Linen Henley Surf Shirt</Text>
              </Box>
              <Box>
                <Image src='https://images.urbndata.com/is/image/Anthropologie/4110318350061_010_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640'/>
                <Text align={"start"} fontSize={"12px"}>Pilcro Oversized Poplin Shirt</Text>
              </Box>
            </SimpleGrid>
        </Box>
    </Box>
    
  )
}

export default Basket;