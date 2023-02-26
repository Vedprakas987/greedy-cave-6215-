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
import {FaShoppingCart} from 'react-icons/fa'

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
      <Box position={"sticky"} top={0} pl={7} border={"1px solid #dcdcdc"} bg={useColorModeValue('white', 'gray.100')} w={"100%"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'}>
            <Box cursor={"Pointer"} w={"180px"} border={"1px solid #dcdcdc"}>
              <img src={logo} />
            </Box>
            <Box cursor={"Pointer"} w={"180px"} h={16} padding={15} border={"1px solid #dcdcdc"}>
              <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" />
            </Box>
          </HStack>
          <Stack pr={15}>
                        <Stack direction={'row'}>
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
                            <IconButton
                                // bg={useColorModeValue('green.400', 'green.800')}
                                // color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'gray.200',
                                }}
                                aria-label="Search"
                                icon={<FaShoppingCart />}
                            />
                        </Stack>
                    </Stack>

        </Flex>
      </Box>

    </>
  );
}
