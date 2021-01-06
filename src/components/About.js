import React from 'react';
import {motion} from "framer-motion"
import "../../src/assets/css/Navbar.css"

const About = () => {
    return (
        <motion.div id="navbar"
                    transition={{
                        type: "spring",
                        stiffness: 30,
                        damping: 10,
                    }}>
            <a href="#contact">Contact</a>
            <a href="#project">Portfolio</a>
            <a href="#about">About</a>
            <a href="#home">Home</a>
        </motion.div>
    )
};
export default About;