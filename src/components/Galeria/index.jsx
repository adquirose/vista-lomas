// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import Img1 from '../../assets/thumbs/thumb1.jpg'
import Img2 from '../../assets/thumbs/thumb2.jpg'

// Import Swiper styles
import 'swiper/css';
 
const Galeria = () => {
  return (
    <div style={{width:'100%',maxWidth:'620px',minWidth:'360px', alignSelf:'end', justifySelf:'start', overflow:'hidden'}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide><img style={{display: 'block', width: '100%', height: '100%', objectFfit:'cover'}} src={Img1} alt="img1"/></SwiperSlide>
        <SwiperSlide><img style={{display: 'block', width: '100%', height: '100%', objectFfit:'cover'}} src={Img2} alt="img2"/></SwiperSlide>
        <SwiperSlide><img style={{display: 'block', width: '100%', height: '100%', objectFfit:'cover'}} src={Img1} alt="img3"/></SwiperSlide>
        <SwiperSlide><img style={{display: 'block', width: '100%', height: '100%', objectFfit:'cover'}} src={Img2} alt="img4"/></SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Galeria