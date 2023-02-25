import { Checkbox } from '@chakra-ui/checkbox'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

const Ship = () => {
    return (
        <Box p={"40px"}>


<Breadcrumb fontSize={"20px"} color={"gray"} pb={"40px"}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Review</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#' color={"teal"} fontWeight={"bold"}>Ship</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>



            <Flex justify={"start"} mb={"30px"}>
                <Text fontSize={"24px"} fontWeight={"500"} letterSpacing={"0.1em"}>Shipping Address</Text>
            </Flex>

            <Box mb={"16px"}>
                <FormLabel>Country/Region</FormLabel>
                <Select w={"48%"} borderRadius={"none"} >
                    <option>India</option>
                    <option>U.S.A</option>
                    <option>Australia</option>
                    <option>Germany</option>
                    <option>Spain</option>
                    <option>France</option>
                </Select>
            </Box>

            <Flex justify={'space-between'} mb={"16px"}>
                <Box w={"48%"}>
                    <FormControl isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input borderRadius={"none"} />
                    </FormControl>
                </Box>
                <Box w={"48%"}>
                    <FormControl isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input borderRadius={"none"} />
                    </FormControl>
                </Box>
            </Flex>

            <Box mb={"16px"}>
                <FormControl isRequired>
                    <FormLabel>Street Address</FormLabel>
                    <Input placeholder='35 character limit, continue below.' borderRadius={"none"} />
                </FormControl>
            </Box>

            <Box mb={"16px"}>
                <FormLabel>Address 2</FormLabel>
                <Input placeholder='Building, Suite or Aparnment Number' borderRadius={"none"} />
            </Box>

            <Flex mb={"16px"}>
                <Checkbox defaultChecked>PO Box</Checkbox>
            </Flex>

            <Flex justify={"space-between"} mb={"16px"}>
                <Box w={"48%"}>
                    <FormControl isRequired>
                        <FormLabel>City</FormLabel>
                        <Input borderRadius={"none"} />
                    </FormControl>
                </Box>
                <Box w={"48%"}>
                    <FormLabel>Province or Region</FormLabel>
                    <Input borderRadius={"none"}/>
                </Box>
            </Flex>

            <Flex justify={"space-between"} mb={"16px"}>
                <Box w={"48%"}>
                <FormControl isRequired>
                    <FormLabel>Postcode</FormLabel>
                    <Input borderRadius={"none"}/>
                    </FormControl>  
                </Box>
                <Box w={"48%"}>
                    <FormControl isRequired>
                        <FormLabel>Mobile Number</FormLabel>
                        <InputGroup>
                            <InputLeftAddon borderRadius={"none"} children='+91' />
                            <Input borderRadius={"none"} type='tel' />
                        </InputGroup>
                    </FormControl>
                </Box>
            </Flex>

        </Box>
    )
}

export default Ship