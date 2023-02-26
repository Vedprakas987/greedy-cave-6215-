import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function AddFooter() {
    return (
      <Box
      py={5}
        bg={"#f8f8f8"}
        borderTop={"2px solid gray"}
        color={"blackAlpha.100"}>
        <Container
          as={Stack}
          maxW={{sm:"auto",md:"auto",lg:"90%"}}
          fontSize={"13px"}
          py={4}
          color={"teal"}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={2}>
            <Link href={'#'}>Store Locator</Link>
            <Box>|</Box>
            <Link href={'#'}>Return & Exchange</Link>
            <Box>|</Box>
            <Link href={'#'}>Customer Service</Link>
          </Stack>
          <Box display={"flex"}>
            <Text mr={"5px"} color={'black'} fontSize={"15px"}>Questions? </Text>
            <Link><u>Contact Us</u></Link>
          </Box>
          
        </Container>
        <Container
          as={Stack}
          maxW={{sm:"auto",md:"auto",lg:"90%"}}
          color={"teal"}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          fontSize={"13px"}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={2}>
            <Link href={'#'}>Privacy Policy</Link>
            <Box>|</Box>
            <Link href={'#'}>Term of Use</Link>
            <Box>|</Box>
            <Link href={'#'}>CA Transparency</Link>
            <Box>|</Box>
            <Link href={'#'}>Accesibility</Link>
          </Stack>
          <Text>© 2022 Elegance Fashion. All rights reserved</Text>
        </Container>
      </Box>
    );
  }