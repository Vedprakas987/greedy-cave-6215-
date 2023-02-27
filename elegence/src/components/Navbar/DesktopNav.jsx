import { Box, Flex, Popover, PopoverContent, PopoverTrigger, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const DesktopNav = () => {
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
                                to="/Products"
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
                </Flex>
            </Stack>
        </Link>
    );
};