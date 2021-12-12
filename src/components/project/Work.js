import React from 'react';
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

const Work = (props) => {
    const headerControl = useAnimation();
    const contentControl = useAnimation();
    const [headerRef, headerInView] = useInView();

    const transition = {duration: 1, ease: "easeInOut"};
    const variants = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: props.direction, transition: {duration: 0.5}},
        headerHidden: {opacity: 0, x: "-100%", transition: {duration: 0.5}},
        headerVisible: {opacity: 1, x: 0, transition: {duration: 0.5}},
        contentHidden: {opacity: 0, transition: {duration: 0.5}},
        contentVisible: {opacity: 1, x: 0, transition: {duration: 0.5}},
        numHidden: {opacity: 0, x: "100%", transition: {duration: 0.5}},
        numVisible: {opacity: 1, x: 0}
    };
    const imagesList = props.images.map((image, index) =>
        (<SwiperSlide key={index}>
                <Image src={image.path}
                       alt={image.alt}
                       className="image-content"
                       rounded={true}/>
            </SwiperSlide>
        ));

    if (headerInView) {
        const sequence = async () => {
            await headerControl.start("headerVisible");
            return contentControl.start("contentVisible");
        };
        sequence();
    }

    return (
        <Col className="col-lg-4 col-sm-2 col-md-2 w-100 d-flex text-center">
            <Card className="bg-transparent text-white">
                <Card.Title>
                    <motion.p className="w-100 p-2 white-border"
                              ref={headerRef}
                              animate={headerControl}
                              initial="headerHidden"
                              transition={transition}
                              variants={variants}>
                        {props.title}
                    </motion.p>
                </Card.Title>
                <motion.div
                    initial="contentHidden"
                    animate={contentControl}
                    transition={transition}
                    variants={variants}>
                    <Swiper effect="cube"
                            loop={true}
                            spaceBetween={0}
                            pagination={{clickable: true}}>
                        {imagesList}
                    </Swiper>
                </motion.div>
                <Card.Text as="div">
                    <motion.p
                        className="pt-3 pb-4"
                        initial="contentHidden"
                        animate={contentControl}
                        transition={transition}
                        variants={variants}>
                        {props.content}
                        {props.skills}
                    </motion.p>
                </Card.Text>
            </Card>
        </Col>
    )
};
export default Work;
