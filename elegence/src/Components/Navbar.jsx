import logo from "./Images/logo.png"
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import FirstNav from './FirstNav';



export default function Navbar() {
  return (
    <>
      <FirstNav />
      <Box pl={7} border={"1px solid #dcdcdc"} bg={useColorModeValue('white', 'gray.100')} w={"100%"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'}>
            <Box cursor={"Pointer"} w={"180px"} border={"1px solid #dcdcdc"}>
              <img src={logo} />
            </Box>
            <Box cursor={"Pointer"} w={"180px"} h={16} padding={15} border={"1px solid #dcdcdc"}>
              <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" />
            </Box>
          </HStack>
          <Flex alignItems={'center'}>
            
          </Flex>
        </Flex>
      </Box>

      
    </>
  );
}