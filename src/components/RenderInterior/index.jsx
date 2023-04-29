import { Container, Row } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import DpImage from '../../assets/images/render-interior/dormitorio-principal.jpg';
import SeImage from '../../assets/images/render-interior/sala-estar.jpg';
import LcImage from '../../assets/images/render-interior/living-comedor.jpg';
import D1Image from '../../assets/images/render-interior/dormitorio1.jpg';

function RenderInterior() {
    return (
        <div id="render-interior">
            <Container>
                <Row>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={15}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            // when window width is >= 490px
                            490: {
                              width: 490,
                              slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                              width: 768,
                              slidesPerView: 2,
                            }
                          }}
                        >
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={DpImage} alt="dp-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>DORMITORIO PRINCIPAL</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={SeImage} alt="se-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>SALA DE ESTAR</h3>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={LcImage} alt="lc-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>LIVING COMEDOR</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{position:'relative', height:'220px'}}>
                                <img style={{position:'absolute', width:'100%', height:'100%'}} src={D1Image} alt="d1-image"/>
                                <h3 style={{ paddingTop:'5px',paddingBottom:'5px', width:'100%',position:'absolute', bottom:0, textAlign:'center', marginBottom:0, backgroundColor:'rgba(0,0,0,0.35)', fontSize:'16px'}}>DORMITORIO</h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Row>
            </Container>
        </div>
    )
}
export default RenderInterior
