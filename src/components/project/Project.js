import React from 'react';
import "../../assets/css/portfolio.css"
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar} from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import {Container} from "react-bootstrap";
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Project = () => {
    return (
        <Container id="project" className="w-100 p-5">
            {/*       <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 align-items-center">
                <Col>
                    <p className="lead">
                        An online android application which tracks real-time investment assets and status.
                    </p>
                </Col>
                <Col>
                    <Swiper
                        autoplay={true}
                        spaceBetween={0}
                        height={0}
                        slidesPerView={1}
                        pagination={{clickable: true}}
                    >
                        <SwiperSlide><Image alt="test" className="img-fluid image-content" src={Paiwi_1}/></SwiperSlide>
                        <SwiperSlide><Image alt="test" className="img-fluid image-content" src={Paiwi_2}/></SwiperSlide>
                        <SwiperSlide><Image alt="test" className="img-fluid image-content" src={Paiwi_3}/></SwiperSlide>
                        <SwiperSlide><Image alt="test" className="img-fluid image-content" src={Paiwi_4}/></SwiperSlide>
                        <SwiperSlide><Image alt="test" className="img-fluid image-content" src={Paiwi_5}/></SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
            <Row className="row-cols-2 row-cols-md-2 p-2 align-items-center">
                <Col>
                    teest
                </Col>
                <Col>
                    <Swiper
                        autoplay={true}
                        spaceBetween={0}
                        height={0}
                        slidesPerView={1}
                        pagination={{clickable: true}}
                    >
                        <SwiperSlide><Image alt="test" className="img-fluid image-content" src={CHITS_1}/></SwiperSlide>
                        <SwiperSlide><Image alt="test" className="img-fluid image-content" src={CHITS_2}/></SwiperSlide>
                        <SwiperSlide><Image alt="test" className="img-fluid image-content" src={CHITS_2}/></SwiperSlide>
                        <SwiperSlide><Image alt="test" className="img-fluid image-content" src={CHITS_2}/></SwiperSlide>
                    </Swiper>
                </Col>
            </Row>*/}
        </Container>

    )
};
export default Project;