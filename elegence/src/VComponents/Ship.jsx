import { Checkbox } from '@chakra-ui/checkbox'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import React, { useState } from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'

const Ship = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [address,setAddress] = useState("")
    const [city,setCity] = useState("")
    const [mobile,setMobile] = useState("")
    const [pin,setPin] = useState("")

    const first_name = storedUser.fname
    const last_name = storedUser.lname

    const add = {
        first_name,last_name,address,city,mobile,pin
    }
    localStorage.setItem("user_address",JSON.stringify(add))

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
                        <Input value={storedUser.fname} onChange={(e)=>setFname(e.target.value)} borderRadius={"none"} />
                    </FormControl>
                </Box>
                <Box w={"48%"}>
                    <FormControl isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input value={storedUser.lname} onChange={(e)=>setLname(e.target.value)} borderRadius={"none"} />
                    </FormControl>
                </Box>
            </Flex>

            <Box mb={"16px"}>
                <FormControl isRequired>
                    <FormLabel>Street Address</FormLabel>
                    <Input value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='35 character limit, continue below.' borderRadius={"none"} />
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
                        <Input value={city} onChange={(e)=>setCity(e.target.value)} borderRadius={"none"} />
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
                    <Input value={pin} onChange={(e)=>setPin(e.target.value)} borderRadius={"none"}/>
                    </FormControl>  
                </Box>
                <Box w={"48%"}>
                    <FormControl isRequired>
                        <FormLabel>Mobile Number</FormLabel>
                        <InputGroup>
                            <InputLeftAddon borderRadius={"none"} children='+91' />
                            <Input value={mobile} onChange={(e)=>setMobile(e.target.value)} borderRadius={"none"} type='tel' />
                        </InputGroup>
                    </FormControl>
                </Box>
            </Flex>

        </Box>
    )
}

export default Ship