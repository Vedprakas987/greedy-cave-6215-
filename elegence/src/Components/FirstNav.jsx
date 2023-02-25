import {
    Box,
    Flex,
    Button,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import Account from './Account';


export default function FirstNav() {
    return (
        <Box >
            <Flex
                bg={useColorModeValue('gray.100')}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
            >
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                </Flex>
                <Account />
                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    pr={"20px"}
                    direction={'row'}
                    spacing={6}>
                    {/* w={20} */}
                    <Button
                        mt={1}
                        as={'a'}
                        h={"20px"}
                        fontSize={'sm'}
                        fontWeight={400}
                        href={'#'}>
                        Sign In / Sign Up
                    </Button>
                </Stack>
            </Flex>
        </Box>
    );
}
