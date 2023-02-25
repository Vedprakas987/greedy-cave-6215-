import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Box, Button, Divider, HStack, Image, SimpleGrid, Tag, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import style from "../styles/home.module.css"
import { SliderTopCompanies } from './Slider';

export const Home = () => {

    const [data, setData] = useState();

    //Slider
    const imageSlider = [
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4130647160161_001_b2?$an-category$&qlt=80&fit=constrain",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4130370060123_011_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "By Anthropologie Lace-Trim A-Line Dress"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4130370060133_018_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4130370060133_018_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "The Silverlake Flutter-Sleeve Dress"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4130916210113_065_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4130916210113_065_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "The Marais Printed Chiffon Mini Dress"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4130635560014_061_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4130635560014_061_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "S/W/F Open-Back Dress"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4130638280257_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4130638280257_049_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "Farm Rio Smocked-Waist Dress"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4130464030219_066_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4130464030219_066_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "Hutch V-Neck High-Low Gown"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4110578570069_010_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4110578570069_010_b3?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "By Anthropologie Long Ruffled Tunic"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4130607630013_026_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4130607630013_026_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "The Maya Ruched Cowl-Neck Dress"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4130647160164_001_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4130647160164_001_c?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "By Anthropologie Squareneck Slip Dress"
        }
    ]

    // you_may_also_like

    const like = [
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4123650590131_001_b16?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4123650590131_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "The Colette Cropped Wide-Leg Pants"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/58028085_001_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/58028085_001_a?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "Capri Blue Volcano Matte Black Jar Candle"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4111916210042_015_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4111916210042_015_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "Pilcro Spliced Henley Top"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/76124932_266_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/76124932_266_a?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720",
            "title": "Capri Blue Pink Shimmer Jar Candle"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/52733375_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/52733375_011_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960",
            "title": "Capri Blue Capiz Jar Candle"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/D48088652_901_b20?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/D48088652_901_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960",
            "title": "Tiled Margot Monogram Mug"
        },
        {
            "image1": "https://images.urbndata.com/is/image/Anthropologie/4130578570023_041_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960",
            "image2": "https://images.urbndata.com/is/image/Anthropologie/4130578570023_041_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=960",
            "title": "The Somerset Maxi Dress: Embroidered Edition"
        }
    ]


    const getData = () => {
        return axios.get("https://beautyskin.onrender.com/Anthropology_home")
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    console.log(data)
    useEffect(() => {
        getData();
    }, [])

    return <div>
        {/* <Box width={"76%"}> */}
        <SimpleGrid columns={[4]} width={"76%"} border="2px solid red" boxSizing="border-box" margin="auto" marginBottom={"40px"}>
            <Image src="https://images.ctfassets.net/5de70he6op10/2nrwWxJ7TQjvhycNGHksLK/51645a9e392800577d6200a92a1edc88/473929279-ls_m0_banner_g.jpg?w=630&q=80&fm=webp" alt="img" />
            <Image src="https://images.ctfassets.net/5de70he6op10/7tbbE9vPj5JLvxgKHE5RbB/e0bc77c5fbc266e63294817e82ead70e/473929272-ls_m0_banner_d.jpg?w=630&q=80&fm=webp" alt='img' />
            <Image src="https://images.ctfassets.net/5de70he6op10/5AHOqJRlFibi2rOS0C77aP/3e8dc2dfc62dd089f2cb2e53357a78d3/473929274-ls_m0_banner_e.jpg?w=630&q=80&fm=webp" alt='img' />
            <Image src="https://images.ctfassets.net/5de70he6op10/1yCt23d6XxdmkjGohde5ev/97f13874f53c019005210e6a690f3836/473929257-ls_m0_banner_a.jpg?w=630&q=80&fm=webp" alt='img' />
        </SimpleGrid>
        {/* </Box> */}
        <img width={"76%"} style={{ margin: "auto" }} src={data?.banner} alt="banner" />
        <Button
            bg="white"
            bottom={"20"}
            paddingX="25px"
            borderRadius={"0%"}
            fontWeight="120"
            fontSize="14px"
            fontFamily="Arial, sans-serif"
            color={"#1A202C"}
            textDecoration="none solid rgb(26, 32, 44)"
        >
            shop dresses
        </Button>


        <SimpleGrid border={"2px solid blue"} columns={[1, 2, 3]} width={"76%"} margin="auto" spacing={"20px"} >
            {
                data && data.section_2.map((el) => {
                    return <Box position={'relative'} border={"1px solid yellow"}>
                        < Image width={"100%"} src={el.image} alt="title" />
                        <Button
                            bg="white"
                            bottom={"20"}
                            paddingX="25px"
                            borderRadius={"0%"}
                            fontWeight="120"
                            fontSize="14px"
                            fontFamily="Arial, sans-serif"
                            color={"#1A202C"}
                            textDecoration="none solid rgb(26, 32, 44)"
                        >{el.title}</Button>
                    </Box >
                })
            }
        </SimpleGrid>


        <SimpleGrid border={"2px solid blue"} columns={[1, 2, 2]} width={"76%"} margin="auto" spacing={"20px"} >
            {
                data && data.section_3.map((el) => {
                    return <Box position={'relative'} border={"1px solid yellow"}>
                        < Image width={"100%"} src={el.image} alt="title" />
                        <Button
                            bg="white"
                            bottom={"20"}
                            paddingX="25px"
                            borderRadius={"0%"}
                            fontWeight="120"
                            fontSize="14px"
                            fontFamily="Arial, sans-serif"
                            color={"#1A202C"}
                            textDecoration="none solid rgb(26, 32, 44)"
                        >{el.title}</Button>
                    </Box >
                })
            }
        </SimpleGrid>

        <SimpleGrid border={"2px solid blue"} columns={[1, 2, 3]} width={"76%"} margin="auto" spacing={"20px"} >
            {
                data && data.section_4.map((el) => {
                    return <Box position={'relative'} border={"1px solid yellow"}>
                        < Image width={"100%"} src={el.image} alt="title" />
                        <Button
                            bg="white"
                            bottom={"20"}
                            paddingX="25px"
                            borderRadius={"0%"}
                            fontWeight="120"
                            fontSize="14px"
                            fontFamily="Arial, sans-serif"
                            color={"#1A202C"}
                            textDecoration="none solid rgb(26, 32, 44)"
                        >{el.title}</Button>
                    </Box >
                })
            }
        </SimpleGrid>

        <img width={"76%"} style={{ margin: "auto" }} src={data?.section_5.image} alt="image" />
        <Button
            bg="white"
            bottom={"20"}
            paddingX="25px"
            borderRadius={"0%"}
            fontWeight="120"
            fontSize="14px"
            fontFamily="Arial, sans-serif"
            color={"#1A202C"}
            textDecoration="none solid rgb(26, 32, 44)">{data?.section_5.title}</Button>

        <Text
            color={"#26262C"}
            width={"76%"}
            align="start"
            marginLeft={"240px"}
            fontFamily={"Avenir Medium, sans-serif"}
            fontWeight="400"
            lineHeight={"23.4px"}
            fontSize={"18px"}>
            Top-Rated Picks
        </Text>
        <Divider width={"76%"} margin="auto" color={"gray"} />
        <br />
        <SimpleGrid border={"2px solid blue"} columns={[1, 2, 4]} width={"76%"} margin="auto" spacing={"20px"} >

            {

                data && data.top_rated_picks.map((el) => {
                    return <Box position={'relative'} border={"1px solid yellow"}>
                        < Image width={"100%"} src={el.image} alt="title" />
                        <Text

                            align={"start"}
                            fontFamily={"Courier, monospace"}
                            color="#26262C"
                            lineHeight={"23.4px"}
                            fontWeight="400"
                            paddingY="10px"
                        >
                            CUSTOMER FAVORITE</Text>
                        <Text
                            align={"start"}
                            fontSize={"22px"}
                            lineHeight="33px"
                            fontWeight={"400"}
                            color="#26262C"
                            paddingY="10px"
                            fontFamily={"Spectral Extra Light,serif"}
                        >{el.title}</Text>
                        <Text
                            align={"start"}
                            color="#26262C"
                            fontSize={"14px"}
                            lineHeight="14px"
                            fontWeight={"500"}
                            paddingY="10px"

                        >★★★★★</Text>
                        <Text
                            align={"start"}
                            color={'#26262C'}
                            fontSize="14px"
                            lineHeight={"21px"}
                            fontWeight="400"
                            letterSpacing={"0.6px"}
                            paddingY="10px"
                            fontFamily={"Avenir Book, sans-serif"}>{el.description}</Text>
                        <a>shop now</a>
                    </Box >
                })
            }
        </SimpleGrid>




        {/* <Slider/> */}
        <Text
            color={"#26262C"}
            width={"76%"}
            align="start"
            marginLeft={"240px"}
            fontFamily={"Avenir Medium, sans-serif"}
            fontWeight="500"
            lineHeight={"23.4px"}
            fontSize={"18px"}
            marginTop="14px"
        >Trending Now
        </Text>
        <Divider width={"76%"} margin="auto" color={"gray"} />
        <br />
        <SliderTopCompanies data={imageSlider} />

        <Text
            color={"#26262C"}
            width={"76%"}
            align="start"
            marginLeft={"240px"}
            fontFamily={"Avenir Medium, sans-serif"}
            fontWeight="500"
            lineHeight={"23.4px"}
            fontSize={"18px"}
            marginTop="14px"
        >
            You May Also Like
        </Text>

        <Divider width={"76%"} margin="auto" color={"gray"} />
        <br />
        <SliderTopCompanies data={like} />

        {/* ------------- */}

        <Text
            fontFamily="Spectral Extra Light, serif"
            fontWeight="400"
            color='#26262C'
            align="center"
            fontSize="22px"
            margin="0px 0px 10px"
            paddingTop={"12px"}
        >
            More to Explore
        </Text>

        <Divider width={"76%"} border="0.5px solid" margin="auto" color={"#383739"} marginBottom="22px" />
        <SimpleGrid border={"2px solid blue"} columns={[1, 2, 3]} width={"76%"} margin="auto" spacing={"20px"} >
            {
                data && data.more_to_explore.map((el) => {
                    return <Box position={'relative'} border={"1px solid yellow"}>
                        < Image width={"100%"} src={el.image} alt="title" />
                        <Text
                            fontFamily={"Spectral Extra Light, serif"}
                            color="#26262C"
                            fontSize={"22px"}
                            fontWeight="400"
                            align={"start"}
                            paddingY="2"
                        >{el.title}</Text>
                        <Text
                            paddingY="2"
                            color={"#26262C"}
                            fontFamily={"Avenir Book, sans-serif"}
                            fontWeight="400"
                            align={"start"}
                        >{el.description}</Text>
                    </Box >
                })
            }
        </SimpleGrid>

        <Divider width={"76%"} border="1px solid" margin="auto" color={"#383739"} marginTop="42px" marginBottom={"22px"} />
        <Text
            color={"#26262C"}
            width={"76%"}
            align="start"
            marginLeft={"240px"}
            fontFamily={"Avenir Medium, sans-serif"}
            fontWeight="400"
            lineHeight={"23.4px"}
            fontSize={"18px"}
            marginBottom="10px"
            >

            About Us
        </Text>

        <Text
            fontFamily={"Avenir Medium, sans-serif"}
            width={"76%"}
            margin="auto"
            color={"#26262C"}
            fontWeight="400"
            align={"start"}
            letterSpacing="0.6px"
        >Our mission at Anthropologie has always been to surprise and delight you with unexpected, distinctive finds for your closet and home. We source and craft all of our products with care, ensuring that any treasure you find at Anthropologie is unique, just like you. Explore our dresses shop to find styles and fits perfect for any occasion, from cocktail party dresses to wedding guest dresses to casual daytime silhouettes. Shop BHLDN and take a look at our selection of wedding dresses and bridesmaids dresses. Browse party skirts, wide-leg pants and jeans, and blouses that will turn heads. Complete your look with uncommon accessories—think only-here slides and head-turning totes. Discover our expansive home collections, from furniture to curtains, decorative pillows to duvets, wall art to Moroccan-inspired rugs. Looking for a housewarming gift? Try a coffee table book, original glassware or a set of coasters.</Text>

    </div >
}
