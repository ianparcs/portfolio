import React, {useEffect} from 'react';
import "../assets/css/skills.css"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const Card = ({path, progName}) => {

    const [contentRef, contentInView] = useInView();
    const contentControl = useAnimation();
    const progTitleControl = useAnimation();

    useEffect(() => {
        if (contentInView) {
            contentControl.start("visible")
        } else {
            contentControl.start("hidden");
        }
    }, [contentControl, contentInView]);

    const transition = {
        duration: 0.1,
        ease: "easeIn"
    };

    const variants = {
        visible: {
            opacity: 1,
            x: 0
        },
        hidden: {
            opacity: 0,
            x: "100%",
            transition: {duration: 1}
        },
    };
    const titleVariants = {
        visible: {
            opacity: 1,
            y: 0
        },
        hidden: {
            opacity: 0,
            y: "100%",
            transition: {duration: 1}
        },
    };

    progTitleControl.start("hidden");

    function showName() {
        progTitleControl.start("visible");
    }

    function hideName() {
        progTitleControl.start("hidden");
    }

    return (
        <>
            <motion.p
                id="prog-title"
                animate={progTitleControl}
                variants={titleVariants}>
                {progName}
            </motion.p>
            <motion.img
                src={path}
                onMouseEnter={() => showName()}
                onMouseLeave={() => hideName()}
                onMouse={() => showName()}
                whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}
                ref={contentRef}
                transition={transition}
                variants={variants}
            />
        </>
    )
};


export default Card