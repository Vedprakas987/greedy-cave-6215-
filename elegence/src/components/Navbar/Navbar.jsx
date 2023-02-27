import React, { useEffect, useState } from 'react'
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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



export  class SiderUpper extends Component {
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
          <Box bg={'blue.200'}>
            <Center>The e-commerce platform that cares</Center>
          </Box>
          <Box bg={'blue.200'}>
            <Center>We Cater To Your Style.
            </Center>
          </Box>
        </Slider>
      </div>
    );
  }
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
      <SiderUpper/>
      </Box>
      <Navbar1/>
      <Flex w={'90%'} m='auto' justifyContent='left'>
        <Tabs variant='enclosed-colored'>
        <TabPanels>
      </TabPanels>
        </Tabs>
      </Flex>    
    </Box>   
    </>
  )
}
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
export default Navbar