import logo from "../Navbar/logo.png"
import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  Stack,
  useColorModeValue,
  ListHeader,
  Heading,
} from '@chakra-ui/react';
import FirstNav from '../Navbar/FirstNav';
import Section from "../Navbar/Section";
import { useToast } from '@chakra-ui/react'
import {BiSearch,} from 'react-icons/bi';
import {FaShoppingBag, FaShoppingCart} from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function Navbar1() {
  const toast = useToast({
    position: 'top',
    title: 'Item Search Successfully!',
    containerStyle: {
        width: '50%',
        maxWidth: '100%',
    },
})
  return (
    <>
      <FirstNav />
      <Box padding={"4px"} position={"sticky"} top={0} pl={7} border={"1px solid #dcdcdc"} bg={useColorModeValue('white', 'gray.100')} w={"100%"}>
        <Flex flexWrap={"wrap"} h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'}>
            <Box cursor={"Pointer"} w={"180px"} border={"1px solid #dcdcdc"}>
             <Link to="/"> <img src={logo} /></Link>
            </Box>
            <Box cursor={"Pointer"} w={"180px"} h={16} padding={15} border={"1px solid #dcdcdc"}>
              <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" />
            </Box>
          </HStack>
          <Stack jus m={"1.2rem"} pr={15}>
                        <Stack ml={"2rem"} direction={'row'}>
                            <Input
                                placeholder={'Search Elegance Fashion'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                _hover={{
                                    bg: 'gray.200',
                                }}
                                onClick={() => {
                                    toast()
                                }}
                                aria-label="Search"
                                icon={<BiSearch />}
                            />
                            <Link to={"/cart"}>
                            <IconButton
                                // bg={useColorModeValue('green.400', 'green.800')}
                                // color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'gray.200',
                                }}
                                aria-label="Search"
                                icon={<FaShoppingBag />}
                            />
                            </Link>
                           
                        </Stack>
                    </Stack>

        </Flex>
      </Box>

    </>
  );
}
