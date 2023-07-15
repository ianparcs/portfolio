import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Javascript from "../../assets/img/logo/javascript.svg";
import Kubernetes from "../../assets/img/logo/kubernetes.svg";
import Bootstrap from "../../assets/img/logo/bootstrap.svg";
import Hibernate from "../../assets/img/logo/hibernate.svg";
import ReactLogo from "../../assets/img/logo/react.svg";
import Android from "../../assets/img/logo/android.svg";
import Jquery from "../../assets/img/logo/jquery.svg";
import JavaLogo from "../../assets/img/logo/java.svg";
import Github from "../../assets/img/logo/github.svg";
import Spring from "../../assets/img/logo/spring.svg";
import Gradle from "../../assets/img/logo/gradle.svg";
import Libgdx from "../../assets/img/logo/libgdx.svg";
import MySQL from "../../assets/img/logo/mysql.svg";
import Mongo from "../../assets/img/logo/mongo.svg";
import Linux from "../../assets/img/logo/linux.svg";
import ScalaLogo from "../../assets/img/logo/scala.svg";
import HTML from "../../assets/img/logo/html.svg";
import CSS from "../../assets/img/logo/css3.svg";
import CPlus from "../../assets/img/logo/c.svg";
import Git from "../../assets/img/logo/git.svg";
import "./skills.css"

import Card from "../gui/Card";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../gui/SectionTitle";

const Skill = React.forwardRef((props, ref) => {
    const contentControl = useAnimation();
    const [contentRef, contentInView] = useInView();
    const [visible, setVisible] = useState(false);

    const transitionInfinite = {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity
    };

    const reactAnimation = {
        visible: {
            opacity: 1,
            rotate: 360,
        },
    };

    const transition = {
        duration: 1,
        ease: "easeInOut",
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

    const icons = document.getElementsByClassName("about-icon");
    if (icons !== null) {
        for (let i = 0; i < icons.length; i++) {
            if (1 === i) {
                icons.item(1).style.fill = "#dc3545";
            } else {
                icons.item(i).style.fill = "black";
            }
        }
    }

    useEffect(() => {
        if (contentInView) {
            const sequence = async () => {
                return await contentControl.start("visible");
            };
            sequence()
        }

    }, [icons, contentControl, visible, setVisible, contentInView]);

    return (
        <Container id="skill"
                   fluid={true}
                   className="about-container pb-5 pl-5 pr-5 d-flex flex-column justify-content-start justify-content-sm-start justify-content-md-center justify-content-lg-center">

            <Row className="w-75 m-auto p-2">
                <Col>
                    <motion.div
                        ref={contentRef}
                        animate={contentControl}
                        initial="hidden"
                        transition={transition}
                        variants={fade}>
                        <SectionTitle title="Skills & Tech Interest" textColor="text-dark"/>
                    </motion.div>
                    <motion.ul
                        id="skill-content"
                        ref={contentRef}
                        initial="hidden"
                        animate={contentControl}
                        transition={transition}
                        variants={fade}>
                        <motion.li variants={fade}><Card progName="Java" path={JavaLogo}/></motion.li>
                        <motion.li variants={fade}><Card progName="Scala" path={ScalaLogo}/></motion.li>
                        <motion.li variants={fade}><Card progName="C++" path={CPlus}/></motion.li>
                        <motion.li variants={fade}><Card progName="Android" path={Android}/></motion.li>
                        <motion.li variants={fade}><Card progName="Spring" path={Spring}/></motion.li>
                        <motion.li variants={reactAnimation} transition={transitionInfinite}><Card progName="ReactJS"
                                                                                                   path={ReactLogo}/>
                        </motion.li>
                        <motion.li variants={fade}><Card progName="Kubernetes" path={Kubernetes}/></motion.li>
                        <motion.li variants={fade}><Card progName="MongoDB" path={Mongo}/></motion.li>
                        <motion.li variants={fade}><Card progName="Libgdx" path={Libgdx}/></motion.li>
                        <motion.li variants={fade}><Card progName="Bootstrap" path={Bootstrap}/></motion.li>
                        <motion.li variants={fade}><Card progName="MySQL" path={MySQL}/></motion.li>
                        <motion.li variants={fade}><Card progName="Git" path={Git}/></motion.li>
                        <motion.li variants={fade}><Card progName="Github" path={Github}/></motion.li>
                        <motion.li variants={fade}><Card progName="Javascript" path={Javascript}/></motion.li>
                        <motion.li variants={fade}><Card progName="HTML" path={HTML}/></motion.li>
                        <motion.li variants={fade}><Card progName="CSS3" path={CSS}/></motion.li>
                        <motion.li variants={fade}><Card progName="Hibernate" path={Hibernate}/></motion.li>
                        <motion.li variants={fade}><Card progName="Gradle" path={Gradle}/></motion.li>
                        <motion.li variants={fade}><Card progName="Linux" path={Linux}/></motion.li>
                        <motion.li variants={fade}><Card progName="Jquery" path={Jquery}/></motion.li>
                    </motion.ul>
                </Col>
            </Row>
        </Container>
    )
});
export default Skill;