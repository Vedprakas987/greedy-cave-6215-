import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Image, Input } from '@chakra-ui/react'
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiErrorWarningLine } from 'react-icons/ri';
import { Button } from '@chakra-ui/button';

const SOrder = () => {
    return (
        <Box p={"40px"}>
            <Flex justify={"space-between"} align={"center"} mb={"20px"}>
                <Text fontSize={"24px"} fontWeight={"500"} letterSpacing={"0.1em"}>Order Summary</Text>
                <Link as={"u"}><Text as={"u"} color={"teal"}>800.309.2500</Text></Link>
            </Flex>
            <Box border={"1px solid #8888"} p={"30px"} color={"gray.600"}>
                <Flex justify={"space-between"} align={"center"}>
                    <Text>Subtotal</Text>
                    <Text>$0.00</Text>
                </Flex>
                <Flex justify={"space-between"} align={"center"}>
                    <Text>Shipping</Text>
                    <Text>TBD</Text>
                </Flex>
                <Flex justify={"space-between"} align={"center"}>
                    <Text>Estimated Tax</Text>
                    <Text>$0.00</Text>
                </Flex>
                <Flex fontWeight={"700"} color={"blackAlpha.800"} justify={"space-between"} align={"center"}>
                    <Text>Total</Text>
                    <Text>$0.00</Text>
                </Flex>
                <Box display={"grid"} mt={"15px"}>
                    <Button mb={"15px"} bg={"#4B5666"} p={"25px"} letterSpacing={"0.06em"} color={"white"} borderRadius={"none"} disabled><Link to={"/pay"}>SHIP TO THIS ADDRESS</Link></Button>
                </Box>
                <Box mb={"18px"}>
                    <Accordion mt={"20px"} allowMultiple>



                        <AccordionItem>
                            <h2>
                                <AccordionButton pt={"15px"} pb={"15px"}>
                                    <Box as="span" flex='1' textAlign='left' _hover={{ color: "teal" }}>
                                        Promo Code
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} display={"flex"}>
                                <Input border={"1px solid gray"} mr={"10px"} borderRadius={"none"} bg={"transparent"} />
                                <Button border={"1px solid #4B5666"} color={"#4B5666"} fontWeight={"400"} fontSize={"14px"} letterSpacing={".15em"} borderRadius={"none"} bg={"transparent"}>APPLY</Button>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    )
}

export default SOrder;