import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import Ship from '../Checkout/Ship'
import Basket from './Basket'
import Order from './Order'

const Cart = () => {
  return (
    <Box>
      <Flex>
        <Basket/>
        <Order/>
      </Flex>
    </Box>
  )
}

export default Cart