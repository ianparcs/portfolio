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

    const contentControl = useAnimation();
    const [contentRef,contentView] = useInView();

    const transition = {
        duration: 0.5,
        ease: "easeInOut"
    };

    const fade = {
        visible: {
            opacity: 1,
            transition: {duration: 1, delay: 0.5},
        },
        hidden: {
            opacity: 0,
            transition: {duration: 1}
        },
    };


    useEffect(() => {
        if (contentView) {
            const sequence = async () => {
                return await contentControl.start("visible");
            };
            sequence();
        }

    }, [contentView, contentControl]);
    return (
        <Container className="about-container p-5 d-flex flex-column justify-content-center">
            <Row ref={contentRef()}>
                <Col>
                    <motion.div ref={contentRef}
                                animate={contentControl}
                                initial="hidden"
                                transition={transition}
                                variants={fade}>
                        <SectionTitle title="Education" textColor="text-dark"/>
                    </motion.div>
                    <motion.h5 initial="hidden"
                               animate={contentControl}
                               transition={transition}
                               variants={fade} className="text-dark">University of Saint Louis, Tuguegarao, Cagayan
                        Valley
                    </motion.h5>
                    <motion.h6 initial="hidden"
                               animate={contentControl}
                               transition={transition}
                               variants={fade} className="text-dark">Bachelor of Science in Computer Science
                    </motion.h6>
                    <motion.h6 initial="hidden"
                               animate={contentControl}
                               transition={transition}
                               variants={fade} className="text-dark">April 2017
                    </motion.h6>
                    <motion.ul
                        initial="hidden"
                        animate={contentControl}
                        transition={transition}
                        variants={fade}
                        className="text-dark text-center pt-3 pb-3">
                        <motion.li variants={fade} className="text-dark"><p className="text-dark">Managed team members
                            of thesis and allocated resources to fit needs of software development, documents and
                            research</p></motion.li>
                        <motion.li variants={fade} className="text-dark"><p className="text-dark">Created a <a
                            href="https://github.com/ianparcs/location-finder">Navigation System</a> which navigate user
                            from current location to target location for local school universities.</p></motion.li>
                    </motion.ul>
                </Col>
            </Row>
        </Container>
    );
});
export default Education;