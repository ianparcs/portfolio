import React from 'react';
import {motion} from "framer-motion";

const Line = (props) => {
    return (
        <motion.svg
            viewBox="0 0 14.707 14.707"
            preserveAspectRatio="none"
            width="20%" height="100%"
            initial="hidden"
            animate={props.animate}
            transition={props.transition}
            variants={props.variants}>
            <g>
                <rect x="6.275" y="0" fill="white" width="5" height="100%"/>
            </g>
        </motion.svg>
    )
};
export default Line;