import React, {useEffect} from 'react';
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
    const transition = {
        duration: 1.5,
        ease: "easeInOut"
    };

    const list = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.3,
                x: 0,

            },
        },
        hidden: {
            opacity: 0,
            x: "-100%",
            transition: {
                x: "-100%",

                when: "afterChildren",
            },
        },
    };
    const item = {
        visible: {
            opacity: 1,
            x: 0
        },
        hidden: {
            opacity: 0,
            x: "-100%"
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

    const sequence = async () => {
        await headerControl.start("visible");
        return await contentControl.start("visible");
    };
    const icons = document.getElementsByClassName("about-icon");
    useEffect(() => {

        if (headerInView) {
            if (icons !== null) {
                for (let i = 0; i < icons.length; i++) {
                    icons.item(i).style.fill = "black";
                }
            }
            sequence();
        } else {
            if (icons !== null) {
                for (let i = 0; i < icons.length; i++) {
                    icons.item(i).style.fill = "white";
                }
            }
        }
    }, [headerInView, sequence]);

    return (
        <Container ref={ref} id="skill">
            <Row>
                <Col>
                    <motion.div
                        ref={headerRef}
                        animate={headerControl}
                        initial="hidden"
                        transition={transition}
                        variants={variants}
                    >
                        <SectionTitle title="Skills" textColor="text-dark"/>
                    </motion.div>
                </Col>
            </Row>
            <Row className="w-75 m-auto">
                <Col>
                    <motion.ul
                        id="skill-content"
                        className="list-group flex-md-row list-inline"
                        ref={contentRef}
                        initial="hidden"
                        animate={contentControl}
                        transition={transition}
                        variants={list}>
                        <motion.li variants={item}><Card progName="Java" path={JavaLogo}/></motion.li>
                        <motion.li variants={item}><Card progName="C++" path={CPlus}/></motion.li>
                        <motion.li variants={item}><Card progName="Android" path={Android}/></motion.li>
                        <motion.li variants={item}><Card progName="Spring" path={Spring}/></motion.li>
                        <motion.li variants={item}><Card progName="ReactJS" path={ReactLogo}/></motion.li>
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