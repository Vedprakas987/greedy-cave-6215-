import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  Image,
  Divider,
} from '@chakra-ui/react';
import style from "./nav.module.css"


export default function AddNav() {

  return (
      <Box pl={5} pr={8} className={style.nav} boxShadow={"0 2px 2px -2px rgba(0,0,0,.8)"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
          <Link to="/">
             <Image mt={"10px"} w={"150px"} src="logoPay.png"/>
          </Link>
            <Divider orientation="vertical" borderColor="gray.200" borderWidth="2px" height="50px"/>
            <Image src='//images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg'/>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton>
                <BsBag size={"30px"} color={"gray"}/>
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Box>
  );
}