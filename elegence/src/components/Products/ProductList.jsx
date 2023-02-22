import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList() {
    let data = [
        {
            name:"By Anthropologie Strapless Mini Dress",
            image:["https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130326950015_072_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
            price:170.00,
            color_image:["https://images.urbndata.com/is/image/Anthropologie/4130348690217_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349","https://images.urbndata.com/is/image/Anthropologie/4130348690217_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349","https://images.urbndata.com/is/image/Anthropologie/4130348690217_038_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"],
            category:'Dresses'

        },
        {
        name:"By Anthropologie Square-Neck Tiered Dress",
        image:["https://images.urbndata.com/is/image/Anthropologie/4130348690217_009_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130348690217_009_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130348690217_009_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
        price:170.00,
        category:"Dresses",
        color_image:["https://images.urbndata.com/is/image/Anthropologie/4130348690217_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130348690217_009_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130348690217_038_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"]
    },
    {
        name:"Endless Rose Mock-Neck Sleeveless Mini Dress",
        image:["https://images.urbndata.com/is/image/Anthropologie/4130634430017_073_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130634430017_073_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130634430017_073_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
        price:148.00,
        color_image:["https://images.urbndata.com/is/image/Anthropologie/4130634430017_073_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130634430017_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
        category:"Dresses"
    },
    {
        name:"Maeve Sleeveless Flounce Dress",
        image:["https://images.urbndata.com/is/image/Anthropologie/4130607630016_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630016_041_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630016_041_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630016_041_c?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],      
        price:148.00,
        color_image:["https://images.urbndata.com/is/image/Anthropologie/4130607630016_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630016_060_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130607630016_072_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
        category:"Dresses"
    },
    {
        name:"English Factory Layered Sweater Dress",
        image:["https://images.urbndata.com/is/image/Anthropologie/4130368730023_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130368730023_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640","https://images.urbndata.com/is/image/Anthropologie/4130368730023_041_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130368730023_041_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
        price:120.00,
        color_image:["https://images.urbndata.com/is/image/Anthropologie/4130368730023_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640"],
        category:"Dresses"
    },
    {
        name:"The Somerset Eyelet Mini Dress",
        image:["https://images.urbndata.com/is/image/Anthropologie/4130647160167_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130647160167_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130647160167_010_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130647160167_010_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
        price:130.00,
        color_image:["https://images.urbndata.com/is/image/Anthropologie/4130647160167_010_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130647160167_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130647160167_063_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
        category:"Dresses"
    },
    {
        name:"The Somerset Mini Dress",
        image:[
            "https://images.urbndata.com/is/image/Anthropologie/4130646420031_039_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
            "https://images.urbndata.com/is/image/Anthropologie/4130646420031_039_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
            "https://images.urbndata.com/is/image/Anthropologie/4130646420031_039_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
            "https://images.urbndata.com/is/image/Anthropologie/4130646420031_039_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"
        ],
        price:140.00,
        color_image:["https://images.urbndata.com/is/image/Anthropologie/4130646420031_033_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420031_039_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420031_014_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420031_104_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420031_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"], 
        category:"Dresses"
    },
    {
        name:"The Somerset Maxi Dress",
        image:[
            "https://images.urbndata.com/is/image/Anthropologie/4130646420009_043_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_043_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_043_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_043_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"
        ],
        price:180.00,
        color_image:["https://images.urbndata.com/is/image/Anthropologie/4130646420009_085_c?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_008_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_043_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130646420009_079_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
        category:"Dresses"

    },
    {
    name:"Devotion Twins Embroidered Ella Tunic Dress",
    image:["https://images.urbndata.com/is/image/Anthropologie/4130728470001_097_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130728470001_097_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130728470001_097_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130728470001_097_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
    price:297.00 ,
    category:"Dresses",
    color_image:["https://images.urbndata.com/is/image/Anthropologie/4130728470001_017_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130728470001_017_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540","https://images.urbndata.com/is/image/Anthropologie/4130728470001_065_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540"],
}

    ]
  return (

    <SimpleGrid rowGap={"2rem"} columns={{base:1,sm:1,lg:3,md:2,xl:3,'2xl':3}}>
    
      {
        data.map((el,i)=>{

            return(
                <Box key={i+1}>
           <ProductCard key={i+1} {...el}/>
                </Box>
            )
        })
        }
    </SimpleGrid>
    
  )
}
