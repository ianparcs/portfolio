import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../gui/SectionTitle";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import "./workexp.css"

const WorkExperience = React.forwardRef((props, ref) => {
    const headerControl = useAnimation();
    const contentControl = useAnimation();
    const contentControl2 = useAnimation();

    const jobControl = useAnimation();
    const jobControl2 = useAnimation();

    const [contentRef] = useInView()
    const [contentRef2] = useInView();

    const [jobRef] = useInView()
    const [jobRef2] = useInView();

    const [headerRef, headerInView] = useInView();

    const icons = document.getElementsByClassName("about-icon");
    if (icons !== null) {
        for (let i = 0; i < icons.length; i++) {
            icons.item(i).style.fill = "white";
        }
    }
    const transition = {
        duration: 1,
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
            scale: 1,
            y: 0
        },

        hidden: {
            opacity: 0,
            scale: 0,
            y: "100%"
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

        hiddenHeader: {
            opacity: 0,
            y: "-100%",
            transition: {duration: 1}
        },
        visibleHeader: {
            opacity: 1,
            y: 0
        }
    };

    useEffect(() => {
        if (headerInView) {
            const sequence = async () => {
                await headerControl.start("visible");
                await jobControl.start("visible");
                await contentControl.start("visible");
                await jobControl2.start("visible");
                return await contentControl2.start("visible");
            };
            sequence();
        } else {
            headerControl.start("hidden");
            jobControl.start("hidden");
            contentControl.start("hidden");
            jobControl2.start("hidden");
            contentControl2.start("hidden");
        }

    }, [sequence, jobControl, jobControl2, headerInView, contentControl, headerControl, contentControl2]);
    return (
        <Container className="about-container p-5 d-flex flex-column justify-content-start">
            <Row className="pt-3" ref={headerRef}>
                <Col>
                    <motion.div
                        ref={headerRef}
                        animate={headerControl}
                        initial="hidden"
                        transition={transition}
                        variants={variants}>
                        <SectionTitle title="Work Experience" textColor="text-white"/>
                    </motion.div>
                </Col>
            </Row>
            <Row>
                <Col className="pt-4 col-12 col-lg-4 d-flex flex-column justify-content-center">
                    <motion.div
                        ref={jobRef}
                        initial="hidden"
                        animate={jobControl}
                        transition={transition}
                        variants={list}
                    >
                        <h4 className="text-red">Jr. Software Developer</h4>
                        <h5>Philippine General Hospital</h5>
                        <h6>MARCH 2019 – MARCH 2020</h6>
                    </motion.div>
                </Col>
                <Col className="col-12 col-lg-8">
                    <motion.ul className="text-left pt-3"
                               ref={contentRef}
                               initial="hidden"
                               animate={contentControl}
                               transition={transition}
                               variants={list}
                    >
                        <motion.li variants={item}><p>Delivered a price portal management module for medical drug
                            items.</p></motion.li>
                        <motion.li variants={item}><p>Collaborated with senior developer about development of the
                            projects and timelines
                            for new version releases.</p></motion.li>
                        <motion.li variants={item}><p>Identified the root cause of unstable bugs from the feedback of
                            users, fix the underlying issues that resulted a satisfied users.</p></motion.li>
                    </motion.ul>
                </Col>
            </Row>
            <Row>
                <Col className="pt-4 col-12 col-lg-4 d-flex flex-column justify-content-center">
                    <motion.div
                        ref={jobRef2}
                        initial="hidden"
                        animate={jobControl2}
                        transition={transition}
                        variants={list}
                    >
                        <h4 className="text-red">Jr. Software Developer</h4>
                        <h5>Codegum Incorporated</h5>
                        <h6>OCTOBER 2017 – NOVEMBER 2018</h6>
                    </motion.div>
                </Col>
                <Col className="col-12 col-lg-8 pb-5">
                    <motion.ul className="text-left pt-3"
                               ref={contentRef2}
                               initial="hidden"
                               animate={contentControl2}
                               transition={transition}
                               variants={list}
                    >
                        <motion.li variants={item}><p>Authenticated user AWS credentials to make request from Amazon
                            S3.</p></motion.li>
                        <motion.li variants={item}><p>Added real time notification feature using Firebase Cloud
                            Messaging.</p></motion.li>
                        <motion.li variants={item}><p>Implemented Amazon S3 for the project to save and retrieve data
                            from cloud.</p></motion.li>
                        <motion.li variants={item}><p>Integrated Facebook login function using Facebook API for android.
                            User can login via Facebook account.</p></motion.li>
                        <motion.li variants={item}><p>Integrated Google Sign-In function using Google API for android.
                            User can login via Google account.</p></motion.li>
                        <motion.li variants={item}><p>Provide technical leadership, training, guidance, feedback, and
                            coaching to internships and new developers.</p></motion.li>
                        <motion.li variants={item}><p>Suggest and implement process improvement plans, tracks progress,
                            and achieves objectives.</p></motion.li>
                    </motion.ul>
                </Col>

            </Row>
        </Container>
    );
});
export default WorkExperience;