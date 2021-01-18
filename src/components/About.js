import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import "../assets/css/about.css"
const About = () => {
    const headerControl = useAnimation();
    const contentControl = useAnimation();
    const [headerRef, headerInView] = useInView();
    const [contentRef, contentInView] = useInView();

    const transition = {
        duration: 2,
        ease: "easeInOut"
    };

    const variants = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
            transition: {duration: 1}
        },
    };



    useEffect(() => {
        const sequence = async () => {
            await headerControl.start("visible");
            return await contentControl.start("visible");
        };

        if (headerInView) {
            sequence();
        }
    }, [headerControl, headerInView, contentControl, contentInView]);

    return (
        <Container className="w-75">
            <Row>
                <Col>
                    <motion.div id={"header"}
                                ref={headerRef}
                                animate={headerControl}
                                initial="hidden"
                                transition={transition}
                                variants={variants}>
                        <SectionTitle title="About" textColor="text-white"/>
                    </motion.div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <motion.p className="lead"
                              ref={contentRef}
                              id="content"
                              initial="hidden"
                              animate={contentControl}
                              transition={transition}
                              variants={variants}>
                        A passionate Software Developer having an experience of building Web and
                        Mobile applications with
                        Java
                        / Spring Boot / Android and some other cool libraries and frameworks.
                        A hobbyist game developer who loves making a game come to life, reading books, articles and
                        surfing
                        the web. Codes should be short and concise and Design
                        Patterns are not to be force but only use to fix commonly occurring problem in software designs.
                    </motion.p>
                </Col>
            </Row>
        </Container>
    )
};
export default About;