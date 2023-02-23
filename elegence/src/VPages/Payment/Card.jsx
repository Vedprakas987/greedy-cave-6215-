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
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <Box w={"65%"} p={"40px"}>
            <Flex justify={"start"} mb={"30px"}>
                <Text fontSize={"24px"} fontWeight={"500"} letterSpacing={"0.1em"}>Payment Method</Text>
            </Flex>
            <Box>
                <RadioGroup defaultValue='1'>
                    <Stack spacing={4} direction='column' border={"1px solid gray"} padding={"20px"}>
                        <Radio value='1' border={"1px solid gray"}>
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
                                <Box w={"40%"}>
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

                        </Radio>
                        <Radio value='2'>Radio 2</Radio>
                        <Radio value='3'>Radio 3</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
        </Box>
    )
}

export default Card;