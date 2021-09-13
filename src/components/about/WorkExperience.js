import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../gui/SectionTitle";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import "./workexp.css"

const WorkExperience = React.forwardRef((props, ref) => {
    const headerControl = useAnimation();
    const contentControl1 = useAnimation();
    const contentControl2 = useAnimation();
    const contentControl3 = useAnimation();

    const jobControl1 = useAnimation();
    const jobControl2 = useAnimation();
    const jobControl3 = useAnimation();

    const [contentRef1] = useInView();
    const [contentRef2] = useInView();
    const [contentRef3] = useInView();

    const [jobRef1] = useInView();
    const [jobRef2] = useInView();
    const [jobRef3] = useInView();

    const [headerRef, headerInView] = useInView();

    const icons = document.getElementsByClassName("about-icon");
    if (icons !== null) {
        for (let i = 0; i < icons.length; i++) {
            if (2 === i) {
                icons.item(2).style.fill = "#dc3545";
            } else {
                icons.item(i).style.fill = "white";
            }
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
                await jobControl1.start("visible");
                await contentControl1.start("visible");
                await jobControl2.start("visible");
                await contentControl2.start("visible");
                await jobControl3.start("visible");
                return await contentControl3.start("visible");
            };
            sequence();
        }

    }, [jobControl1, jobControl2, jobControl3, contentControl1, contentControl2, contentControl3, headerInView, headerControl]);
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
                        ref={jobRef1}
                        initial="hidden"
                        animate={jobControl1}
                        transition={transition}
                        variants={list}
                    >
                        <h4 className="text-red">Software Developer</h4>
                        <h5>Collabera (GCash)</h5>
                        <h6>FEBRUARY 2021 – PRESENT</h6>
                    </motion.div>
                </Col>
                <Col className="col-12 col-lg-8">
                    <motion.ul className="text-left pt-3"
                               ref={contentRef1}
                               initial="hidden"
                               animate={contentControl1}
                               transition={transition}
                               variants={list}
                    >
                        <motion.li variants={item}><p>Worked with an Agile team to meet sprint goals with the expected
                            code quality</p></motion.li>
                        <motion.li variants={item}><p>Developed software solutions by studying information needs;
                            studying systems flow, data usage, and work processes; investigating problem areas;
                            following the software development lifecycle</p></motion.li>
                        <motion.li variants={item}><p>Tests, debugs, analyzes and fixes application problems/issues.
                            Works closely with stakeholders to fix issues in a timely fashion.</p></motion.li>
                        <motion.li variants={item}><p>Develop unit test to weed out defects at an early stage and
                            promote safe refactoring in the test-driven development (TDD) approach</p></motion.li>

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
                        <h4 className="text-red">Software Developer</h4>
                        <h5>Philippine General Hospital</h5>
                        <h6>MARCH 2019 – MARCH 2020</h6>
                    </motion.div>
                </Col>
                <Col className="col-12 col-lg-8">
                    <motion.ul className="text-left pt-3"
                               ref={contentRef2}
                               initial="hidden"
                               animate={contentControl2}
                               transition={transition}
                               variants={list}
                    >
                        <motion.li variants={item}><p>Delivered a price portal management module for medical drug
                            items.</p></motion.li>
                        <motion.li variants={item}><p>Collaborated with senior developer about development of the
                            projects and timelines
                            for new version releases.</p></motion.li>
                        <motion.li variants={item}><p>Identified the root cause of unstable bugs from the feedback of
                            users, fixed the underlying issues that resulted a satisfied users.</p></motion.li>
                    </motion.ul>
                </Col>
            </Row>
            <Row>
                <Col className="pt-4 col-12 col-lg-4 d-flex flex-column justify-content-center">
                    <motion.div
                        ref={jobRef3}
                        initial="hidden"
                        animate={jobControl3}
                        transition={transition}
                        variants={list}
                    >
                        <h4 className="text-red">Software Developer</h4>
                        <h5>Codegum Incorporated</h5>
                        <h6>OCTOBER 2017 – NOVEMBER 2018</h6>
                    </motion.div>
                </Col>
                <Col className="col-12 col-lg-8 pb-5">
                    <motion.ul className="text-left pt-3"
                               ref={contentRef3}
                               initial="hidden"
                               animate={contentControl3}
                               transition={transition}
                               variants={list}
                    >
                        <motion.li variants={item}><p>Authenticated user AWS credentials to make request from Amazon
                            S3.</p></motion.li>
                        <motion.li variants={item}><p>Added real time notification feature using Firebase Cloud
                            Messaging.</p></motion.li>
                        <motion.li variants={item}><p>Implemented Amazon S3 for the project to save and retrieve data
                            from cloud.</p></motion.li>
                        <motion.li variants={item}><p>Integrated Facebook login and Google Sign-In function for use of
                            social media login.</p></motion.li>
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