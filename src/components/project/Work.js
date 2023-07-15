import React, {useEffect} from 'react';
import SwiperCore, {A11y, Autoplay, EffectCube, Navigation, Pagination, Scrollbar} from 'swiper';
import Card from 'react-bootstrap/Card'

import "../../assets/css/projects.css"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import {Col, Image} from "react-bootstrap";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/components/effect-cube/effect-cube.scss';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube]);

function getImages(props) {
    return props.images.map((image, index) =>
        (<SwiperSlide key={index}>
                <Image src={image.path}
                       alt={image.alt}
                       fluid={true}
                       className="image-content"
                       rounded={true}/>
            </SwiperSlide>
        ))
}

const Work = (props) => {

    return (
        <Col className={"col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center"}>
            <Card className="bg-transparent text-white">
                <Card.Title>
                    <h5 className="w-100 p-2 white-border">
                        {props.title}
                    </h5>
                </Card.Title>
                <div>
                    <Swiper effect={"slide"}
                            loop={true}
                            spaceBetween={0}
                            passiveListeners={true}
                            preloadImages={false}
                            pagination={{clickable: true}}>
                        {getImages(props)}
                    </Swiper>
                </div>
                <Card.Text as="div">
                    <p className="pt-3">
                        {props.content}
                    </p>
                    <p className="pb-4">
                        {props.skills}
                    </p>
                </Card.Text>
            </Card>
        </Col>
    )
};
export default Work;
