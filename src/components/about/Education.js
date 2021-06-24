import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../gui/SectionTitle";
import "./about.css"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const Education = React.forwardRef((props, ref) => {
    const icons = document.getElementsByClassName("about-icon");
    if (icons !== null) {
        for (let i = 0; i < icons.length; i++) {
            if (3 === i) {
                icons.item(3).style.fill = "#dc3545";
            } else {
                icons.item(i).style.fill = "black";
            }
        }
    }

    const headerControl = useAnimation();
    const headerControl1 = useAnimation();
    const headerControl2 = useAnimation();
    const headerControl3 = useAnimation();

    const contentControl = useAnimation();

    const listControl = useAnimation();
    const jobControl2 = useAnimation();

    const [headerRef, headerInView] = useInView();

    const transition = {
        duration: 0.5,
        ease: "easeInOut"
    };

    const list = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
        hidden: {
            opacity: 0,
        },
    };

    const item = {
        visible: {
            opacity: 1,
            x: 0
        },
        visible0: {
            opacity: 1,
            scale: 1,
            y: 0
        },

        hidden0: {
            opacity: 0,
            scale: 0,
            y: "100%"
        },

        hidden1: {
            opacity: 0,
            x: "100%"
        },
        hidden2: {
            opacity: 0,
            x: "-100%"
        },
        hidden3: {
            opacity: 0,
            x: "100%"
        },
    };
    const variants = {
        visible: {
            opacity: 1,
            x: 0
        },
        hidden: {
            opacity: 0,
            x: "-100%",
            transition: {duration: 1}
        },
    };

    useEffect(() => {
        if (headerInView) {
            const sequence = async () => {
                await headerControl.start("visible");
                await headerControl1.start("visible");
                await headerControl2.start("visible");
                await headerControl3.start("visible");
                return await listControl.start("visible0");
            };
            sequence();
        }

    }, [listControl, jobControl2, headerInView, contentControl, headerControl, headerControl1, headerControl2, headerControl3]);
    return (
        <Container className="about-container p-5 d-flex flex-column justify-content-center">
            <Row ref={headerRef}>
                <Col>
                    <motion.div ref={headerRef}
                                animate={headerControl}
                                initial="hidden"
                                transition={transition}
                                variants={variants}>
                        <SectionTitle title="Education" textColor="text-dark"/>
                    </motion.div>
                    <motion.h5 initial="hidden1"
                               animate={headerControl1}
                               transition={transition}
                               variants={item} className="text-dark">University of Saint Louis, Tuguegarao, Cagayan
                        Valley
                    </motion.h5>
                    <motion.h6 initial="hidden2"
                               animate={headerControl2}
                               transition={transition}
                               variants={item} className="text-dark">Bachelor of Science in Computer Science
                    </motion.h6>
                    <motion.h6 initial="hidden3"
                               animate={headerControl3}
                               transition={transition}
                               variants={item} className="text-dark">April 2017
                    </motion.h6>
                    <motion.ul
                        initial="hidden0"
                        animate={listControl}
                        transition={transition}
                        variants={list}
                        className="text-dark text-center pt-3 pb-3">
                        <motion.li variants={item} className="text-dark"><p className="text-dark">Managed team members
                            of thesis and allocated resources to fit needs of software development, documents and
                            research</p></motion.li>
                        <motion.li variants={item} className="text-dark"><p className="text-dark">Created a <a
                            href="https://github.com/ianparcs/location-finder">Navigation System</a> which navigate user
                            from current location to target location for local school universities.</p></motion.li>
                    </motion.ul>
                </Col>
            </Row>
        </Container>
    );
});
export default Education;