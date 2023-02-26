import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import {Link} from "react-router-dom"
// Import Swiper styles
import 'swiper/css';

const  Spiwer=({products=[],v1,v2,v3,v4,v5,height}) => {
  console.log(products)
  return (
    <Swiper
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // when window width is >= 640px
        300: {
          width: 300,
          slidesPerView: 1,
        },
        640: {
          width: 640,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
    >
      {
        products.map((el)=>(
          <SwiperSlide>
              <Link to={`/Products/${el.id}`}>
             <ProductCard nots={"YES"} {...el}/>
            </Link>
           
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
export default Spiwer