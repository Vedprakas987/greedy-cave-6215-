import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Box, Button, Image, SimpleGrid, Tag, Text } from '@chakra-ui/react';

export const Home = () => {

    const [data, setData] = useState();

    const getData = () => {
        return axios.get("https://beautyskin-api.onrender.com/Anthropology_home")
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //  console.log(data)
    useEffect(() => {
        getData();
    }, [])

    return <div>
        <img width={"76%"} style={{ margin: "auto" }} src={data?.banner} alt="banner" />
        <Button bottom={"20"} paddingX="25px" borderRadius={"0%"} fontWeight="250" fontSize="14px">shop dresses</Button>


        <SimpleGrid border={"2px solid blue"} columns={[1, 2, 3]} width={"76%"} margin="auto" spacing={"20px"} >
            {
                data && data.section_2.map((el) => {
                    return <Box position={'relative'} border={"1px solid yellow"}>
                        < Image width={"100%"} src={el.image} alt="title" />
                        <Button bottom={"20"} paddingX="25px" borderRadius={"0%"}>{el.title}</Button>
                    </Box >
                })
            }
        </SimpleGrid>


        <SimpleGrid border={"2px solid blue"} columns={[1, 2, 2]} width={"76%"} margin="auto" spacing={"20px"} >
            {
                data && data.section_3.map((el) => {
                    return <Box position={'relative'} border={"1px solid yellow"}>
                        < Image width={"100%"} src={el.image} alt="title" />
                        <Button bottom={"20"} paddingX="25px" borderRadius={"0%"}>{el.title}</Button>
                    </Box >
                })
            }
        </SimpleGrid>

        <SimpleGrid border={"2px solid blue"} columns={[1, 2, 3]} width={"76%"} margin="auto" spacing={"20px"} >
            {
                data && data.section_4.map((el) => {
                    return <Box position={'relative'} border={"1px solid yellow"}>
                        < Image width={"100%"} src={el.image} alt="title" />
                        <Button bottom={"20"} paddingX="25px" borderRadius={"0%"}>{el.title}</Button>
                    </Box >
                })
            }
        </SimpleGrid>

        <img width={"76%"} style= {{ margin: "auto" }} src={data?.section_5.image} alt="image" />
        <Button bottom={"20"} paddingX="25px" borderRadius={"0%"}>{data?.section_5.title}</Button>

        <h3>Top-Rated Picks</h3>

        <SimpleGrid border={"2px solid blue"} columns={[1, 2, 4]} width={"76%"} margin="auto" spacing={"20px"} >
            {
                data && data.top_rated_picks.map((el) => {
                    return <Box position={'relative'} border={"1px solid yellow"}>
                        < Image width={"100%"} src={el.image} alt="title" />
                        <Text>CUSTOMER FAVORITE</Text>
                        <Text>{el.title}</Text>
                        <Text>★★★★★</Text>
                        <Text>{el.description}</Text>
                    </Box >
                })
            }
        </SimpleGrid>

       
        {
            data && data.you_may_also_like.map((el) => {
                return <> {<img src={el.image1} alt="title" />}
                    {<img src={el.image2} alt="title" />}
                    {el.title}</>
            })
        }
        {
            data && data.recently_viewed.map((el) => {
                return <> {<img src={el.image1} alt="title" />}
                    {<img src={el.image2} alt="title" />}
                    {el.title}</>
            })
        }
        {
            data && data.more_to_explore.map((el) => {
                return <> {<img src={el.image} alt="title" />}{el.title} {el.description}</>
            })
        }

    </div >
}
