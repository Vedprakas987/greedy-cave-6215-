import { Box, Grid } from '@chakra-ui/layout';
import React from 'react'
import AddFooter from '../VComponents/AddFooter';
import AddNav from '../VComponents/AddNav';
import Ship from '../VComponents/Ship';
import SOrder from '../VComponents/SOrder';

const Checkout = () => {
  return (
    <Box>
      <AddNav />
      <Grid templateColumns={{ sm: "100%", md: "100%", lg: "65% 35%" }}>
        <Ship />
        <SOrder />
      </Grid>
      <AddFooter />
    </Box>
  )
}

export default Checkout;
