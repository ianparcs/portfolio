import React, {useEffect} from 'react';
import "../assets/css/about.css"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const About = () => {
    const headerControl = useAnimation();
    const [headerRef, headerInView] = useInView();
    const [contentRef, contentInView] = useInView();

    const contentControl = useAnimation();
    const transition = {
        duration: 2,
        ease: "easeInOut"
    };

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
        <div id={"about"}>
            <div>
                <motion.div
                    id={"header"}
                    ref={headerRef}
                    animate={headerControl}
                    initial="hidden"
                    transition={transition}
                    variants={{
                        visible: {
                            opacity: 1,
                        },
                        hidden: {
                            opacity: 0,
                            transition: {duration: 1}
                        },
                    }}
                >
                    <h1>
                        ABOUT ME
                        <p className={"linebreak"}>
                            <hr/>
                        </p>
                    </h1>
                </motion.div>
                <motion.p
                    id={"content"}
                    ref={contentRef}
                    animate={contentControl}
                    transition={transition}
                    initial="hidden"
                    variants={{
                        visible: {
                            opacity: 1,
                        },
                        hidden: {
                            opacity: 0,
                            transition: {duration: 1}
                        },
                    }}

                > A passionate Software Developer having an experience of building Web and Mobile applications with Java
                    / Spring Boot / Android and some other cool libraries and frameworks.
                    A hobbyist game developer who loves making a game come to life, reading books, articles and surfing
                    the web. When
                    coding codes should be short and concise and Design
                    Patterns are not to be force but only use for fixing commonly occurring problem in software design.
                </motion.p>
            </div>
        </div>
    )
};
export default About;