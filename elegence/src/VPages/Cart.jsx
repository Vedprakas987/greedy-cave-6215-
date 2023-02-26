import { Box, Flex, Grid, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import AddFooter from '../VComponents/AddFooter'
import AddNav from '../VComponents/AddNav'
import Ship from '../VComponents/Ship'
import Basket from '../VComponents/Basket'
import Order from '../VComponents/Order'

const Cart = () => {
  return (
    <Box>
      <AddNav />
      <Flex >
        <Grid templateColumns={{ sm: "100%", md: "100%", lg: "65% 35%" }}>
          <Basket border={"1px solid red"} w="80%" />
          <Order />
        </Grid>
      </Flex>
      <AddFooter />
    </Box>
  )
}

export default Cart