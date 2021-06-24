import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../gui/SectionTitle";
import "./about.css"

const About = React.forwardRef((props, ref) => {
    const headerControl = useAnimation();
    const contentControl = useAnimation();
    const [headerRef, headerInView] = useInView();
    const [contentRef, contentInView] = useInView();

    const transition = {
        duration: 1,
        ease: "easeInOut"
    };

    const variants = {
        visible: {
            opacity: 1,
            transition: {duration: 1, delay: 0.2},
        },
        hidden: {
            opacity: 0,
            transition: {duration: 1}
        },
    };

    useEffect(() => {
        if (headerInView) {
            const sequence = async () => {
                await headerControl.start("visible");
                return await contentControl.start("visible");
            };
            sequence();
        }
    }, [headerControl, headerInView, contentControl, contentInView]);

    const icons = document.getElementsByClassName("about-icon");
    if (icons !== null) {
        for (let i = 0; i < icons.length; i++) {
            if (0 === i) {
                icons.item(0).style.fill = "#dc3545";
            } else {
                icons.item(i).style.fill = "white";
            }
        }
    }

    return (
        <Container className="about-container p-5  d-flex flex-column justify-content-center">
            <Row>
                <Col>
                    <motion.div
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
                    <motion.p
                        className="pb-5 pr-1 pl-1"
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
                        Hobbyist game developer who loves making games come to life, reading books, articles and
                        surfing
                        the web. Enjoys implementing software design principles such as SOLID and design patterns
                        to fix commonly occurring problem in software designs. Interested in applying wealth of
                        experience and knowledge to deliver quality and value.
                    </motion.p>
                </Col>
            </Row>
        </Container>
    );
});
export default About;