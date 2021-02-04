import React, {useEffect} from 'react';
import "../about/skills.css"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {Popover} from "react-bootstrap";

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

    progTitleControl.start("hidden");

    function showName() {
        progTitleControl.start("visible");
    }

    function hideName() {
        progTitleControl.start("hidden");
    }

    const popover = (
        <Popover id="popover-basic" className="text-dark" delay={{show: 100, hide: 100}}>
            <Popover.Title as="h3" className="text-dark">{progName}</Popover.Title>
            <Popover.Content>

            </Popover.Content>
        </Popover>
    );
    return (
        <>
            <OverlayTrigger rootClose={true} trigger="click" placement="top" overlay={popover}
                            delay={{show: 100, hide: 100}}>
                <motion.img
                    src={path}
                    onMouseEnter={() => showName()}
                    onMouseLeave={() => hideName()}
                    whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}
                    ref={contentRef}
                    transition={transition}
                    variants={variants}
                    data-bs-toggle="tooltip"
                />
            </OverlayTrigger>

        </>
    )
};


export default Card