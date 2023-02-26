import { Box, Grid } from '@chakra-ui/layout';
import React from 'react'
import Card from '../VComponents/Card';
import AddNav from '../VComponents/AddNav';
import AddFooter from '../VComponents/AddFooter';
import POrder from '../VComponents/POrder';

const Pay = () => {
    return (
        <Box>
            <AddNav />
            <Grid templateColumns={{ sm: "100%", md: "100%", lg: "65% 35%" }}>
                <Card />
                <POrder />
            </Grid>
            <AddFooter />
        </Box>

    )
}

export default Pay;