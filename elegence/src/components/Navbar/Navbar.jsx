
import React, { useEffect, useState } from 'react'
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { useSession, signIn, signOut } from "next-auth/react"
import {Link} from "react-router-dom"
    import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  TabList,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  Heading,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Search2Icon
} from '@chakra-ui/icons';

import { BsFillCartFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import FirstNav from './FirstNav';
import Navbar1 from './Navbar1';

function SearchItemBox({data}){

  console.log('we are in search', data)
  return (
    <Box overflow={'scroll'} w={'100%'} top='40px' p={'20px'}  h='450px' borderRadius={'8px'} zIndex={'10000'} position={'absolute'} bg='gray.100'>
    
    </Box>
  )
}

  const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
 
  const [searchBox, setSearchBox] = useState(true);
  const dispatch = useDispatch();
  const [map, setmap] = useState([]);
  


   const product = useSelector(state=>state?.navdata) || [];
  
     return (
    <>
    <Box zIndex={'1000'}  width={'100%'}>
    
      <Box >
      <SimpleSlider/>
      </Box>
      <Navbar1/>
      <Flex w={'90%'} m='auto' justifyContent='left'>
        <Tabs variant='enclosed-colored'>


        <TabPanels>
        <TabPanel>
          <Flex display={{ base: 'none', md: 'flex' }} >
            <DesktopNav NAV_ITEMS={NAV_ITEMS1}/>
          </Flex>
        </TabPanel>
        <TabPanel>
        <Flex display={{ base: 'none', md: 'flex' }} >
            <DesktopNav NAV_ITEMS={NAV_ITEMS2}/>
          </Flex>
        </TabPanel>

      </TabPanels>

        </Tabs>
      </Flex>
      
      
    </Box>
    
    </>
  )
}



  const DesktopNav = ({NAV_ITEMS}) => {
  const ChakraLinkColor = useColorModeValue('gray.600', 'gray.200');
  const ChakraLinkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <ChakraLink
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={ChakraLinkColor}
                _hover={{
                  textDecoration: 'none',
                  color: ChakraLinkHoverColor,
                }}>
                  <Link to='/Products'>
                  {navItem.label}
                  </Link>
              </ChakraLink>
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
  const DesktopSubNav = ({ label, href, subLabel, subOption }) => {
  const ChakraLinkColor = useColorModeValue('gray.600', 'gray.200');
  const ChakraLinkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  return (
    <Box
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
   <Box>
          <Popover trigger={'hover'} placement={'bottom-start'}>
        
            <PopoverTrigger>

   <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
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

            </PopoverTrigger>
            {subOption && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {subOption.length && subOption.map((child, ind) => (
                    <DesktopSubOption key={ind} option={child} href={href} />
                  ))}
                </Stack>

              </PopoverContent>

            )}
          </Popover>
</Box>





    </Box>
  );
};


   const DesktopSubOption = ({ option, href }) => {
  return (
    <Flex alignItems={'center'} role={'group'}
    display={'block'}
    p={2}
    rounded={'md'}
    _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}  direction={'row'} align={'center'}>
        <Link to={href}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
              {option}
            
          </Text>
        </Box>
          </Link>
      </Flex>
  );
};





  const  NAV_ITEMS1 = [
  {
    label: 'New!',
    children: [
      {
        label: 'Shop by Category',
        subLabel: 'Accessories, Beauty & Wellness, Clothing',
        subOption:[
          'Accessories,Beauty & Wellness','Clothing','Dresses','Home & Furniture','Jewelry','Petites',
        ],
        href: '/clothing',
      },
      {
        label: 'Featured',
        subLabel: 'Bold & Bright Dresses, Shirt Dresses',
        subOption:[
          '{Spring}Time to Celebrate','Trending: Citrus Shades',
          'Spring 2023: Sculpture + Shape',
          'Trending: Utility',
          'Trending: The Bubble',
          'Denim: Every Way, Every Day',
        ],
        href: '/clothing',
      },
    ],
  },
  {
    label: 'Dresses',
    children: [
      {
        label: 'Shop by Category',
        subLabel: 'Shop All Dresses, New! Top Rated Dresses',
        subOption:[
          'Shop All Dresses',
          'New!',
          'Top Rated Dresses',
          'Bridesmaid Dresse',
        ],
        href: '/dresses',
      },
      {
        label: 'Featured Shops',
        subLabel: 'Bold & Bright Dresses, Shirt Dresses',
        subOption:[
          'Bold & Bright Dresses',
          'Shirt Dresses',
          'Trending: Tulle',
          'Little Black Dresses'
        ],
        href: 'dresses',
      },
    ],
  },
  {
    label: 'Shoes',
    href: '#',
  },
  {
    label: 'Accessories',
    href: '#',
  },
  {
    label: 'Weddings',
    href: '#',
  },
  {
    label: 'Home & Furniture  ',
    href: '#',
  },
  {
    label: 'Beauty & Wellness',
    href: '#',
  },
];
const NAV_ITEMS2 = [
  {
    label: 'New!',
    children: [
      {
        label: 'Shop by Category',
        subLabel: 'Shop All New!, Bath, Bedding, Candles',
        subOption:[
          'Shop All New!',
          'Bath',
          'Bedding',
          'Candles',
          'Décor',
        ],
        href: '#',
      },
      {
        label: 'Furniture',
        subLabel: 'Easter Gifting & Entertaining, Spring 2023:Sculpture + Shape',
        subOption:[
          'Easter Gifting & Entertaining',
          'Spring 2023: Sculpture + Shape',
          'Spring 2023: Color + Character',
          'Spring 2023: Pattern + Texture',
        ],
        href: '#',
      },
    ],
  },
  {
    label: 'Furniture',
    children: [
      {
        label: 'Shop by Category',
        subLabel: 'Explore All Furniture, Shop All Furniture, Chairs',
        subOption:[
          'Explore All Furniture',
          'Shop All Furniture',
          'Chairs',
          'Storage Furniture & Consoles'
        ],
        href: '#',
      },
      {
        label: 'Decor',
        subLabel: 'Living Room, Bedroom, Kitchen, Dining Room',
        subOption:[
          'Living Room',
          'Bedroom',
          'Kitchen & Dining Room',
          'Modular Seating',
          'Seating Collections',
        ],
        href: '#',
      },
    ],
  },
  {
    label: 'Kitchen & Dining',
    href: '#',
  },
  {
    label: 'Candles',
    href: '#',
  },
  {
    label: 'Bedding',
    href: '#',
  },
  {
    label: 'Bath',
    href: '#',
  },
  {
    label: 'Outdoor',
    href: '#',
  },
  {
    label: 'Kids',
    href: '#',
  },
  {
    label: 'Gifts',
    href: '#',
  },
];


 function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div/>
  );
}

 function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div/>
  );
}


  export  class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    return (
      <div >
        <Slider {...settings}>
          <Box bg={'red.200'}>
            <Center>meet our most valuable layers Tees, Please! shop them all</Center>
          </Box>
          <Box bg={'red.200'}>
            <Center>crochet, ruffles, eyelet, lace... White shop little white dresses
            </Center>
          </Box>
        </Slider>
      </div>
    );
  }
}


  function BasicUsage() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
       {/* ( */}
        <Input
        placeholder={'Search Elegance Fashion'}
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        border={0}
        _focus={{
            bg: 'whiteAlpha.300',
        }}
    />


        
        <Button
          as={"a"}
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"pink.400"}
          href={"#"}
          _hover={{
            bg: "pink.300",
          }}
          onClick={onOpen}
        >
          <Flex justifyContent='space-around' alignItems={"center"} w='100%'>
            <svg
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
            >
              <path d='M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z' />
            </svg>
            <Text pl={"7px"}>Sign In/Sign Up</Text>
          </Flex>
        </Button>
      {/* )} */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />

          <Text w={"90%"} m='auto' fontSize={"11px"}>
            Sign in so you can save items to your wishlists, track your orders,
            and check out faster!
          </Text>
          <ModalBody>
            <Text mt={"10px"}>Email*</Text>
            <Input placeholder='Email' size='md' />
            <Checkbox mt='10px' defaultChecked>
              <Text fontSize={"14px"}>Keep me signed in</Text>
            </Checkbox>
            <br />
            <Button
              mt='22px'
              colorScheme='blue'
              width={"100%"}
              onClick={onClose}
            >
              Next
            </Button>
            <br />
            <Button
              mt='15px'
              colorScheme='blue'
              width={"100%"}
              variant='outline'
            >
              USE MOBILE NUMBER INSTEAD
            </Button>
          </ModalBody>

          <ModalFooter>
            <hr />
            <Flex w={"100%"} direction='column'>
              <Text fontSize={"19px"} fontWeight='semibold'>
                Sign Up
              </Text>
              <Text fontSize={"11px"} mt='9px'>
                Welcome! It's quick and easy to set up an account
              </Text>
              <Button mt='15px' variant='outline'>
                CREATE AN ACCOUNT
              </Button>

              <Text> Or sing up with</Text>
              <button className="btn btn-link btn-floating-mx-1"
              type='button'
              >
                this is me
              </button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );

}


export default Navbar