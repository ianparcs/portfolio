import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Javascript from "../../assets/img/logo/javascript.svg";
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
import HTML from "../../assets/img/logo/html.svg";
import CSS from "../../assets/img/logo/css3.svg";
import CPlus from "../../assets/img/logo/c.svg";
import Git from "../../assets/img/logo/git.svg";
import "./skills.css"

import Card from "../gui/Card";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "../gui/SectionTitle";

const Skill = React.forwardRef((props, ref) => {
    const headerControl = useAnimation();
    const contentControl = useAnimation();
    const [headerRef, headerInView] = useInView();
    const [contentRef] = useInView();
    const [visible, setVisible] = useState(false);

    const transition = {
        duration: 1,
        ease: "easeInOut",
    };

    const transitionInfinite = {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity
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

    const reactAnimation = {
        visible: {
            opacity: 1,
            rotate: 360,
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
        if (headerInView) {
            const sequence = async () => {
                await headerControl.start("visible");
                return await contentControl.start("visible");
            };
            sequence()
        }

    }, [headerInView, icons, contentControl, headerControl, visible, setVisible]);

    return (
        <Container id="skill"
                   className="about-container pb-5 pl-5 pr-5 d-flex flex-column justify-content-start justify-content-sm-start  justify-content-md-center justify-content-lg-center">

            <Row className="w-100 m-auto p-2">
                <Col>
                    <motion.div
                        ref={headerRef}
                        animate={headerControl}
                        initial="hidden"
                        transition={transition}
                        variants={variants}>
                        <SectionTitle title="Skills" textColor="text-dark"/>
                    </motion.div>
                    <motion.ul
                        id="skill-content"
                        className="list-group flex-md-row list-inline p-1
                        "
                        ref={contentRef}
                        initial="hidden"
                        animate={contentControl}
                        transition={transition}
                        variants={list}>
                        <motion.li variants={item}><Card progName="Java" path={JavaLogo}/></motion.li>
                        <motion.li variants={item}><Card progName="C++" path={CPlus}/></motion.li>
                        <motion.li variants={item}><Card progName="Android" path={Android}/></motion.li>
                        <motion.li variants={item}><Card progName="Spring" path={Spring}/></motion.li>
                        <motion.li variants={reactAnimation} transition={transitionInfinite}><Card progName="ReactJS"
                                                                                                   path={ReactLogo}/>
                        </motion.li>
                        <motion.li variants={item}><Card progName="MongoDB" path={Mongo}/></motion.li>
                        <motion.li variants={item}><Card progName="Libgdx" path={Libgdx}/></motion.li>
                        <motion.li variants={item}><Card progName="Bootstrap" path={Bootstrap}/></motion.li>
                        <motion.li variants={item}><Card progName="MySQL" path={MySQL}/></motion.li>
                        <motion.li variants={item}><Card progName="Git" path={Git}/></motion.li>
                        <motion.li variants={item}><Card progName="Github" path={Github}/></motion.li>
                        <motion.li variants={item}><Card progName="Javascript" path={Javascript}/></motion.li>
                        <motion.li variants={item}><Card progName="HTML" path={HTML}/></motion.li>
                        <motion.li variants={item}><Card progName="CSS3" path={CSS}/></motion.li>
                        <motion.li variants={item}><Card progName="Hibernate" path={Hibernate}/></motion.li>
                        <motion.li variants={item}><Card progName="Gradle" path={Gradle}/></motion.li>
                        <motion.li variants={item}><Card progName="Linux" path={Linux}/></motion.li>
                        <motion.li variants={item}><Card progName="Jquery" path={Jquery}/></motion.li>
                    </motion.ul>
                </Col>
            </Row>
        </Container>
    )
});
export default Skill;