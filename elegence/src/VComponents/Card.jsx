import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Image,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

const Card = () => {
    return (

        <Box p={"40px"} mb={"50px"}>

            
<Breadcrumb fontSize={"20px"} color={"gray"} pb={"40px"}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Review</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#' >Ship</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#' color={"teal"} fontWeight={"bold"}>Payment</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>

            <Flex justify={"start"} mb={"18px"}>
                <Text fontSize={"24px"} fontWeight={"500"} letterSpacing={"0.1em"}>Payment Method</Text>
            </Flex>
            <Box>
                <RadioGroup defaultValue='1' mb={"20px"} >
                    <Stack spacing={10} direction='column' border={"1px solid black"} padding={"30px"} >
                        
                            <Box>
                                <Flex>
                                    <Text fontSize={"20px"} fontWeight={"500"} letterSpacing={"0.1em"}>Credit Card</Text>
                                </Flex>
                            </Box>
                            <Box mb={"16px"} mt={"15px"}>
                                <FormControl isRequired>
                                    <FormLabel>Card Number</FormLabel>
                                    <Input placeholder='XXXX XXXX XXXX XXXX' borderRadius={"none"} />
                                </FormControl>
                            </Box>
                            <Flex justify={"space-between"} mb={"16px"}>
                                <Box w={"200%"}>
                                    <FormControl isRequired>
                                        <FormLabel>Expiration Date</FormLabel>
                                        <Input borderRadius={"none"} />
                                    </FormControl>
                                </Box>
                                <Box w={"48%"} >
                                    <FormControl isRequired>
                                        <FormLabel>CVV</FormLabel>
                                        <Box display={"flex"}>
                                            <Input borderRadius={"none"} />
                                            <Popover>
                                                <PopoverTrigger>

                                                    <AiOutlineQuestionCircle tabIndex='0'
                                                        role='button'
                                                        aria-label='Some box'
                                                        p={5}
                                                        w='120px'
                                                        bg='gray.300'
                                                        children='Click' />
                                                </PopoverTrigger>
                                                <PopoverContent bg='#4B5666' color='white'>
                                                    <PopoverHeader fontWeight='semibold'>CVV</PopoverHeader>
                                                    <PopoverArrow bg='#4B5666' />
                                                    <PopoverCloseButton bg='#4B5666' />
                                                    <PopoverBody>
                                                        The CID/Security Code is the 3-digit number printed by the signature line on the back of the card; for American Express cards, it's the 4-digit number on the front of the card above the account number.
                                                    </PopoverBody>
                                                </PopoverContent>
                                            </Popover>
                                        </Box>
                                    </FormControl>
                                </Box>
                            </Flex>
                            <Box>
                                <FormLabel>Billing Address</FormLabel>
                                <Box>
                                    {/* Address will come here */}
                                </Box>
                                <Box display={"flex"} justify={"center"}>
                                <Link align={"start"} as={"u"}><Text as={"u"} color={"teal"}>Change</Text></Link>
                                </Box>
                                
                            </Box>

                        <Radio value='2' mt={"60px"} border={"2px solid gray"}>
                            <Image w={"100px"} src="data:image/png;base64,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"/>
                        </Radio>
                        <Radio value='3' border={"2px solid gray"} disabled>
                            <Box  display={"flex"} justify={"center"} align={"center"}> 
                                <Image opacity={".5"} w={"60px"} mr={"10px"} src="https://www.anthropologie.com/static/v3/images/klarna-logo-ea32669636986d0317f95f0c04fdcb6d.svg"/>
                                <Text fontSize={"12px"} opacity={".5"} mr={"10px"}>Klarna is only available to ship to certain countries.</Text>
                                <AiOutlineQuestionCircle tabIndex='0'
                                                        opacity={".5"}
                                                        role='button'
                                                        aria-label='Some box'
                                                        p={5}
                                                        w='120px'
                                                        bg='gray.300'
                                                        children='Click' />
                            </Box>
                        </Radio>
                    </Stack>
                </RadioGroup>
            </Box>
        </Box>
    )
}

export default Card;