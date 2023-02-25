import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Img, Text } from "@chakra-ui/react";



export function SliderTopCompanies(props) {
  const { data } = props;
  const settings = {
    //   dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  // console.log(data, "sliderTOpCompanies")
  return (
    <div  style={{ width: "77%", margin: "auto" }} >
      <Slider {...settings}>
        {data && data.map((item) => {
          return <Container centerContent overflow={"hidden"} maxW={"fit-content"} key={item.title}>
            <Box alignContent={"center"} justifyContent={"center"} >
               <Img width={"100%"} src={item.image1} alt={item.alt} />
              <Text
                align={"start"}
                fontFamily="Avenir Medium, sans-serif"
                paddingY="8px"
                fontSize={"14px"}
              >{item.title}</Text>
            </Box>
          </Container>
        })}
      </Slider >
    </ div >
  );
}
