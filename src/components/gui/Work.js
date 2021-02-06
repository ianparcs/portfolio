import React from 'react';
import SwiperCore, {A11y, Autoplay, EffectCube, Navigation, Pagination, Scrollbar} from 'swiper';

import "../../assets/css/projects.css"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import {Col, Container, Image, Row} from "react-bootstrap";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/components/effect-cube/effect-cube.scss';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Line from "./Line";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube]);

const Work = (props) => {
    const headerControl = useAnimation();
    const contentControl = useAnimation();
    const lineControl = useAnimation();
    const numControl = useAnimation();
    const [headerRef, headerInView] = useInView();

    const transition = {duration: 1, ease: "easeInOut"};
    const variants = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: props.direction, transition: {duration: 1}},
        headerHidden: {opacity: 0, x: "-100%", transition: {duration: 1}},
        headerVisible: {opacity: 1, x: 0, transition: {delay: 0.5, duration: 1}},
        contentHidden: {opacity: 0, transition: {duration: 1}},
        contentVisible: {opacity: 1, x: 0},
        numHidden: {opacity: 0, x: "100%", transition: {duration: 1}},
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
            contentControl.start("contentVisible");
            lineControl.start("visible");
            return await numControl.start("numVisible");
        };
        sequence();
    }

    return (
        <Row className="pt-3">
            <Col className="col-9 col-md-10 col-lg-11 p-3">
                <div className="w-75 m-auto">
                    <motion.p className="w-75 p-2 m-auto white-border"
                              ref={headerRef}
                              animate={headerControl}
                              initial="headerHidden"
                              transition={transition}
                              variants={variants}>
                        {props.title}
                    </motion.p>
                    <motion.div
                        initial="contentHidden"
                        animate={contentControl}
                        transition={transition}
                        variants={variants}>
                        {props.content}
                        {props.skills}
                    </motion.div>
                    <motion.div
                        initial="contentHidden"
                        animate={contentControl}
                        transition={transition}
                        variants={variants}>
                        <Swiper effect="cube"
                                spaceBetween={0}
                                pagination={{clickable: true}}>
                            {imagesList}
                        </Swiper>
                    </motion.div>
                </div>
            </Col>
            <Col className="col-3 col-md-2 col-lg-1 w-100 p-0">
                <Container className="w-100 h-100 p-0 m-0">
                    <Row className="w-100 h-100">
                        <Col className="w-100 h-100 p-1 m-0">
                            <Line animate={lineControl} transition={transition} variants={variants}/>
                        </Col>
                        <Col className="w-100 h-100 pl-1 pr-1 m-0">
                            <motion.img alt={props.workNumber}
                                        src={props.workNumber}
                                        style={{width: 48, height: 48}}
                                        initial="numHidden"
                                        animate={numControl}
                                        transition={transition}
                                        variants={variants}/>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
};
export default Work;
