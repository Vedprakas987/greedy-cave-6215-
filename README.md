# Anthropologie-clone

installation 
1) npm install @mui/material @mui/styled-engine-sc styled-components
2) npm install @mui/material @emotion/react @emotion/styled
3) npm i @fortawesome/react-fontawesome
4) npm i @fortawesome/free-regular-svg-icons
5) npm i @fortawesome/free-solid-svg-icons
6) 

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    ring,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

export default function Sections() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>


            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel, subLabel1, subLabel2, subLabel3, subLabel4, subLabel5, subLabel6, subLabel7 }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box textAlign={'left'}>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    {/* {children &&
              children.map((child) => (
                <Text fontSize={'sm'} key={child.subLabel} py={2} >
                  {child.subLabel}
                </Text>
              ))} */}
                    <Text fontSize={'sm'}>{subLabel}</Text>
                    <Text fontSize={'sm'}>{subLabel1}</Text>
                    <Text fontSize={'sm'}>{subLabel2}</Text>
                    <Text fontSize={'sm'}>{subLabel3}</Text>
                    <Text fontSize={'sm'}>{subLabel4}</Text>
                    <Text fontSize={'sm'}>{subLabel5}</Text>
                    <Text fontSize={'sm'}>{subLabel6}</Text>
                    <Text fontSize={'sm'}>{subLabel7}</Text>

                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    // pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

//   interface NavItem {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }

const NAV_ITEMS = [
    {
        label: 'New !',
        children: [
            {
                label: 'Shop by Category',
                subLabel: 'Accessories',
                subLabel1: 'Beauty & Wellness',
                subLabel2: 'Clothing',
                subLabel3: 'Dresses',
                subLabel4: 'Home & Furniture',
                subLabel5: 'Beauty & Wellness',
                subLabel6: 'Jewelry',
                subLabel7: 'BHLDN Weddings',
                href: '#',
            },
            {
                label: 'Featured',
                subLabel: '{Spring}Time to Celebrate',
                subLabel1: 'Trending: Citrus Shades',
                subLabel2: 'Spring 2023: Sculpture + Shape',
                subLabel3: 'Trending: The Bubble',
                subLabel4: 'Denim: Every Way, Every Day',
                subLabel5: 'New Today: Clothing & Accessories',
                subLabel6: 'Trending: Utility',
                subLabel7: '10 Steps to Spring-Forward Your Home',
                href: '#',
            },
        ],
    },
    {
        label: 'Dresses',
        children: [
            {
                label: 'Featured Shops',
                subLabel: 'Shop All Dresses',
                subLabel1: 'New!',
                subLabel2: 'Top Rated Dresses',
                subLabel3: 'Bridesmaid Dresses',
                subLabel4: 'Formal Dresses',
                subLabel5: 'Jumpsuits',
                subLabel6: 'Lounge & Casual Dresses',
                subLabel7: 'Maxi Dresses',
                href: '#',
            },
            {
                label: 'What To Wear',
                subLabel: 'A Special Occasion',
                subLabel1: 'Prom Dresses',
                subLabel2: 'At-Work Style',
                subLabel3: 'Vacation Ready',
                subLabel4: 'Bridal Shower Chic',
                subLabel5: 'Date Nights, Defined',
                href: '#',
            },
        ],
    },
    {
        label: 'Clothing',
        children: [
            {
                label: 'Explore Jeans',
                subLabel: 'Shop All Dresses',
                subLabel1: 'New!',
                subLabel2: 'Top Rated Dresses',
                subLabel3: 'Bridesmaid Dresses',
                subLabel4: 'Formal Dresses',
                subLabel5: 'Jumpsuits',
                subLabel6: 'Lounge & Casual Dresses',
                subLabel7: 'Maxi Dresses',
                href: '#',
            },
            {
                label: 'What To Wear',
                subLabel: 'A Special Occasion',
                subLabel1: 'Prom Dresses',
                subLabel2: 'At-Work Style',
                subLabel3: 'Vacation Ready',
                subLabel4: 'Bridal Shower Chic',
                subLabel5: 'Date Nights, Defined',
                href: '#',
            },
        ],
    },
    {
        label: 'Shoes',
        children: [
            {
                label: 'Featured ',
                subLabel: 'Shop All Dresses',
                subLabel1: 'Trending: Citrus Shades',
                subLabel2: 'Spring 2023: Sculpture + Shape',
                subLabel3: 'Trending: The Bubble',
                subLabel4: 'Denim: Every Way, Every Day',
                subLabel5: 'New Today: Clothing & Accessories',
                subLabel6: 'Trending: Utility',
                subLabel7: '10 Steps to Spring-Forward Your Home',
                href: '#',
            },
        ],
    },
    {
        label: 'Accessories',
        children: [
            {
                label: 'Shop by Category',
                subLabel: 'Accessories',
                subLabel1: 'Beauty & Wellness',
                subLabel2: 'Clothing',
                subLabel3: 'Dresses',
                subLabel4: 'Home & Furniture',
                subLabel5: 'Beauty & Wellness',
                subLabel6: 'Jewelry',
                subLabel7: 'BHLDN Weddings',
                href: '#',
            },
            {
                label: 'What To Wear',
                subLabel: 'A Special Occasion',
                subLabel1: 'Prom Dresses',
                subLabel2: 'At-Work Style',
                subLabel3: 'Vacation Ready',
                subLabel4: 'Bridal Shower Chic',
                subLabel5: 'Date Nights, Defined',
                href: '#',
            },
        ],
    },
    {
        label: 'Weddings',
        children: [
            {
                label: 'Featured Shops',
                subLabel: 'Shop All Dresses',
                subLabel1: 'New!',
                subLabel2: 'Top Rated Dresses',
                subLabel3: 'Bridesmaid Dresses',
                subLabel4: 'Formal Dresses',
                subLabel5: 'Jumpsuits',
                subLabel6: 'Lounge & Casual Dresses',
                subLabel7: 'Maxi Dresses',
                href: '#',
            },
            {
                label: 'What To Wear',
                subLabel: 'A Special Occasion',
                subLabel1: 'Prom Dresses',
                subLabel2: 'At-Work Style',
                subLabel3: 'Vacation Ready',
                subLabel4: 'Bridal Shower Chic',
                subLabel5: 'Date Nights, Defined',
                href: '#',
            },
            {
                label: 'What To Wear',
                subLabel: 'A Special Occasion',
                subLabel1: 'Prom Dresses',
                subLabel2: 'At-Work Style',
                subLabel3: 'Vacation Ready',
                subLabel4: 'Bridal Shower Chic',
                subLabel5: 'Date Nights, Defined',
                href: '#',
            },
        ],
    },
    {
        label: 'Home & Furniture',
        children: [
            {
                label: 'Exclusively For Anthro: Artist Collaborations',
                subLabel: 'Lauren McIntosh for Anthropologie',
                subLabel1: 'Sarah Gordon for Anthropologie',
                subLabel2: 'Furniture',
                subLabel3: 'Stationery',
                subLabel4: 'Matilda Goad & Co.',
                subLabel5: 'Explore Artist Collaborations',
                subLabel6: 'Lounge & Casual Dresses',
                subLabel7: 'Maxi Dresses',
                href: '#',
            },
            {
                label: 'What To Wear',
                subLabel: 'A Special Occasion',
                subLabel1: 'Prom Dresses',
                subLabel2: 'At-Work Style',
                subLabel3: 'Vacation Ready',
                subLabel4: 'Bridal Shower Chic',
                subLabel5: 'Date Nights, Defined',
                href: '#',
            },
        ],
    },
    {
        label: 'Beauty & Wellness',
        children: [
            {
                label: 'Brands We Love',
                subLabel: 'Shop All Dresses',
                subLabel1: 'New!',
                subLabel2: 'Top Rated Dresses',
                subLabel3: 'Bridesmaid Dresses',
                subLabel4: 'Formal Dresses',
                subLabel5: 'Jumpsuits',
                subLabel6: 'Lounge & Casual Dresses',
                subLabel7: 'Maxi Dresses',
                href: '#',
            },
            {
                label: 'What To Wear',
                subLabel: 'A Special Occasion',
                subLabel1: 'Prom Dresses',
                subLabel2: 'At-Work Style',
                subLabel3: 'Vacation Ready',
                subLabel4: 'Bridal Shower Chic',
                subLabel5: 'Date Nights, Defined',
                href: '#',
            },
        ],
    },
    {
        label: 'Garden & Outdoor',
        children: [
            {
                label: 'Shop by Category',
                subLabel: 'Shop All Dresses',
                subLabel1: 'New!',
                subLabel2: 'Top Rated Dresses',
                subLabel3: 'Bridesmaid Dresses',
                subLabel4: 'Formal Dresses',
                subLabel5: 'Jumpsuits',
                subLabel6: 'Lounge & Casual Dresses',
                subLabel7: 'Maxi Dresses',
                href: '#',
            },
            {
                label: 'What To Wear',
                subLabel: 'A Special Occasion',
                subLabel1: 'Prom Dresses',
                subLabel2: 'At-Work Style',
                subLabel3: 'Vacation Ready',
                subLabel4: 'Bridal Shower Chic',
                subLabel5: 'Date Nights, Defined',
                href: '#',
            },
        ],
    },
    {
        label: 'Gifts & Candles',
        href: '#',
    },
    {
        label: 'Sale',
        href: '#',
    },
];