import { Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import Lf1 from '../../assets/images/lifestyle/lf1.jpg';
import Lf2 from '../../assets/images/lifestyle/lf2.jpg';
import Lf3 from '../../assets/images/lifestyle/lf3.jpg';

function LifeStyle() {
  return (
    <div id="lifestyle" className="section">
        <Container>
                <Row>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        spaceBetween={15}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                              width: 640,
                              slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                              width: 768,
                              slidesPerView: 2,
                            },
                          }}
                        >
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf1} alt="lf1-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf2} alt="lf2-image"/>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf3} alt="lf3-image"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={Lf3} alt="lf3-image"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Row>
            </Container>
    </div>
  )
}

export default LifeStyle