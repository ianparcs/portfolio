import React, {useEffect} from 'react';
import "../assets/css/skills.css"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import JavaLogo from "../assets/img/java.svg";
import CPlus from "../assets/img/c.svg";
import CSS from "../assets/img/css3.svg";
import HTML from "../assets/img/html.svg";
import Jquery from "../assets/img/jquery.svg";
import MySQL from "../assets/img/mysql.svg";
import ReactLogo from "../assets/img/react.svg";
import Mongo from "../assets/img/mongo.svg";
import Javascript from "../assets/img/javascript.svg";
import Git from "../assets/img/git.svg";
import Github from "../assets/img/github.svg";
import Spring from "../assets/img/spring.svg";
import Bootstrap from "../assets/img/bootstrap.svg";
import Hibernate from "../assets/img/hibernate.svg";
import Android from "../assets/img/android.svg";
import Gradle from "../assets/img/gradle.svg";
import Libgdx from "../assets/img/libgdx.svg";
import Linux from "../assets/img/linux.svg";

import Card from "./Card";

const Skill = () => {
    const headerControl = useAnimation();
    const contentControl = useAnimation();
    const [headerRef, headerInView] = useInView();
    const [contentRef, contentInView] = useInView();

    const transition = {
        duration: 2,
        ease: "easeInOut"
    };

    const list = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",

                when: "beforeChildren",
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
    }

    const item = {
        visible: {
            opacity: 1,
            x: 0
        },
        hidden: {
            opacity: 0,
            x: "-100%"
        },
    }

    const sequence = async () => {
        await headerControl.start("visible");
        return await contentControl.start("visible");
    };

    useEffect(() => {
        if (headerInView) {
            sequence();
        } else {
            headerControl.start("hidden");
            contentControl.start("hidden");
        }
    }, [headerControl, headerInView, contentControl, contentInView]);

    return (
        <div id={"skill"}>
            <div id={"skill-container"}>
                <motion.div
                    id={"header-skill"}
                    ref={headerRef}
                    animate={headerControl}
                    initial="hidden"
                    transition={transition}
                    variants={{
                        visible: {
                            opacity: 1,
                            x: 0
                        },
                        hidden: {
                            opacity: 0,
                            x: "-100%",
                            transition: {duration: 1}
                        },
                    }}
                >
                    <h1>
                        SKILLS
                        <p className={"linebreak"}>
                            <hr/>
                        </p>
                    </h1>
                </motion.div>
                <motion.ul
                    id={"skill-content"}
                    ref={contentRef}
                    initial="hidden"
                    animate={contentControl}
                    transition={transition}
                    variants={list}>
                    <motion.li variants={item}><Card progName="Java" path={JavaLogo}/></motion.li>
                    <motion.li variants={item}><Card progName="C++" path={CPlus}/></motion.li>
                    <motion.li variants={item}><Card progName="Android" path={Android}/></motion.li>
                    <motion.li variants={item}><Card progName="Spring" path={Spring}/></motion.li>
                    <motion.li variants={item}><Card progName="Javascript" path={Javascript}/></motion.li>
                    <motion.li variants={item}><Card progName="HTML" path={HTML}/></motion.li>
                    <motion.li variants={item}><Card progName="CSS3" path={CSS}/></motion.li>
                    <motion.li variants={item}><Card progName="ReactJS" path={ReactLogo}/></motion.li>
                    <motion.li variants={item}><Card progName="MongoDB" path={Mongo}/></motion.li>
                    <motion.li variants={item}><Card progName="Libgdx" path={Libgdx}/></motion.li>
                    <motion.li variants={item}><Card progName="Bootstrap" path={Bootstrap}/></motion.li>
                    <motion.li variants={item}><Card progName="MySQL" path={MySQL}/></motion.li>
                    <motion.li variants={item}><Card progName="Git" path={Git}/></motion.li>
                    <motion.li variants={item}><Card progName="Github" path={Github}/></motion.li>
                    <motion.li variants={item}><Card progName="Hibernate" path={Hibernate}/></motion.li>
                    <motion.li variants={item}><Card progName="Gradle" path={Gradle}/></motion.li>
                    <motion.li variants={item}><Card progName="Linux" path={Linux}/></motion.li>
                    <motion.li variants={item}><Card progName="Jquery" path={Jquery}/></motion.li>
                </motion.ul>
            </div>
        </div>
    )
};
export default Skill;