import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../gui/SectionTitle";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import "./workexp.css"

const WorkExperience = React.forwardRef((props, ref) => {
    const contentControl = useAnimation();
    const [contentRef] = useInView();

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
        if (contentRef) {
            const sequence = async () => {
                await contentControl.start("visible");
            };
            sequence();
        }

    }, [ contentControl, contentRef]);
    return (
        <Container className="about-container p-5 d-flex flex-column justify-content-start w-75" fluid={true}>
            <Row className="pt-3" ref={contentRef}>
                <Col>
                    <motion.div
                        ref={contentRef}
                        animate={contentControl}
                        initial="hidden"
                        transition={transition}
                        variants={fade}>
                        <SectionTitle title="Work Experience" textColor="text-white"/>
                    </motion.div>
                </Col>
            </Row>
            <Row>
                <Col className="pt-4 col-12 col-lg-4 d-flex flex-column justify-content-center">
                    <motion.div
                        ref={contentRef}
                        initial="hidden"
                        animate={contentControl}
                        transition={transition}
                        variants={fade}
                    >
                        <h4 className="text-red">Java Engineer</h4>
                        <h5>ING Bank</h5>
                        <h6>Jun 2023 – Present</h6>
                    </motion.div>
                </Col>
                <Col className="col-12 col-lg-8">
                    <motion.ul className="text-left pt-3"
                               ref={contentRef}
                               initial="hidden"
                               animate={contentControl}
                               transition={transition}
                               variants={fade}>
                        <motion.li><p>Working in a Data Analytic System</p></motion.li>
                    </motion.ul>
                </Col>
            </Row>
            <Row>
                <Col className="pt-4 col-12 col-lg-4 d-flex flex-column justify-content-center">
                    <motion.div
                        ref={contentRef}
                        initial="hidden"
                        animate={contentControl}
                        transition={transition}
                        variants={fade}
                    >
                        <h4 className="text-red">Backend Developer</h4>
                        <h5>Renren Giantly Philippines, Inc</h5>
                        <h6>Dec 2022 – Mar 2023</h6>
                    </motion.div>
                </Col>
                <Col className="col-12 col-lg-8">
                    <motion.ul className="text-left pt-3"
                               ref={contentRef}
                               initial="hidden"
                               animate={contentControl}
                               transition={transition}
                               variants={fade}
                    >
                        <motion.li ><p>Contributed to the development of a transportation management platform that provided real‑time information to truck drivers</p></motion.li>
                        <motion.li ><p>Utilized CI/CD tools such as Jenkins and Kubernetes to efficiently deploy application features and ensure seamless integration
                            with existing systems</p></motion.li>

                    </motion.ul>
                </Col>
            </Row>
            <Row>
                <Col className="pt-4 col-12 col-lg-4 d-flex flex-column justify-content-center">
                    <motion.div
                        ref={contentRef}
                        initial="hidden"
                        animate={contentControl}
                        transition={transition}
                        variants={fade}
                    >
                        <h4 className="text-red">Backend Developer</h4>
                        <h5>Collabera</h5>
                        <h6>Feb 2021 – Sep 2022</h6>
                    </motion.div>
                </Col>
                <Col className="col-12 col-lg-8">
                    <motion.ul className="text-left pt-3"
                               ref={contentRef}
                               initial="hidden"
                               animate={contentControl}
                               transition={transition}
                               variants={fade}
                    >
                        <motion.li ><p>Developed an asynchronous microservice from the ground up that enabled users to access their transaction histories. The microservice was
                            optimized to handle a high volume of transactions, accommodating up to 20‑50 million API request per day</p></motion.li>
                        <motion.li ><p>Deployed several services utilizing AWS EC2, Docker, Kubernetes, and GitLab CI/CD for deployment automation</p></motion.li>
                        <motion.li><p>Created APIs for users to view and purchase vouchers directly from the application</p></motion.li>
                        <motion.li><p>Implemented a reliable and efficient service using Spring Batch that retrieves and saves data of user’s interests on a daily basis at a specific
                            time. This data is then used to display targeted advertisements based on the user’s interests</p></motion.li>
                        <motion.li><p>Performed performance testing on several services using Apache JMeter to tune the efficiency of the application</p></motion.li>

                    </motion.ul>
                </Col>
            </Row>
            <Row>
                <Col className="pt-4 col-12 col-lg-4 d-flex flex-column justify-content-center">
                    <motion.div
                        ref={contentRef}
                        initial="hidden"
                        animate={contentControl}
                        transition={transition}
                        variants={fade}
                    >
                        <h4 className="text-red">Java Developer</h4>
                        <h5>Philippine General Hospital</h5>
                        <h6>Mar 2019 – Mar 2020</h6>
                    </motion.div>
                </Col>
                <Col className="col-12 col-lg-8">
                    <motion.ul className="text-left pt-3"
                               ref={contentRef}
                               initial="hidden"
                               animate={contentControl}
                               transition={transition}
                               variants={fade}
                    >
                        <motion.li><p>Maintained and debugged an electronic medical record system, ensuring the system’s smooth operation, and resolved any issues that occurred.
                            The application was deployed using Apache Tomcat Server</p></motion.li>
                        <motion.li><p>Implemented a price portal feature on the system, allowing physicians and patients to conveniently view and purchase a wide range of available
                            medical items from our partnered pharmacy stores</p></motion.li>
                    </motion.ul>
                </Col>
            </Row>
            <Row>
                <Col className="pt-4 col-12 col-lg-4 d-flex flex-column justify-content-center">
                    <motion.div
                        ref={contentRef}
                        initial="hidden"
                        animate={contentControl}
                        transition={transition}
                        variants={fade}
                    >
                        <h4 className="text-red">Software Developer</h4>
                        <h5>Codegum Incorporated</h5>
                        <h6>Oct 2017 – Nov 2018</h6>
                    </motion.div>
                </Col>
                <Col className="col-12 col-lg-8 pb-5">
                    <motion.ul className="text-left pt-3"
                               ref={contentRef}
                               initial="hidden"
                               animate={contentControl}
                               transition={transition}
                               variants={fade}
                    >
                        <motion.li><p>Authenticated user AWS credentials to make request from Amazon
                            S3.</p></motion.li>
                        <motion.li><p>Added real time notification feature using Firebase Cloud
                            Messaging.</p></motion.li>
                        <motion.li><p>Implemented Amazon S3 for the project to save and retrieve data
                            from cloud.</p></motion.li>
                        <motion.li><p>Integrated Facebook login and Google Sign-In function for use of
                            social media login.</p></motion.li>
                        <motion.li><p>Provide technical leadership, training, guidance, feedback, and
                            coaching to internships and new developers.</p></motion.li>
                        <motion.li><p>Suggest and implement process improvement plans, tracks progress,
                            and achieves objectives.</p></motion.li>
                    </motion.ul>
                </Col>

            </Row>
        </Container>
    );
});
export default WorkExperience;