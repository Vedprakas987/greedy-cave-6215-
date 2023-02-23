import { Box } from '@chakra-ui/layout';
import React from 'react'
import Ship from './Ship';
import SOrder from './SOrder';

const Checkout = () => {
  return (
    <Box display={"flex"}>
        <Ship/>
        <SOrder/>
    </Box>
  )
}

export default Checkout;
