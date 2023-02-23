import { Box } from '@chakra-ui/layout';
import React from 'react'
import SOrder from '../Checkout/SOrder';
import Card from './Card';

const Pay = () => {
    return (
        <Box display={"flex"}>
            <Card />
            <SOrder />
        </Box>
    )
}

export default Pay;