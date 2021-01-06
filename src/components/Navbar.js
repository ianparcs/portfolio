import React, {useEffect} from 'react';
import {motion} from "framer-motion"
import "../../src/assets/css/Navbar.css"

const Navbar = () => {
    document.body.style.cursor = "pointer";

    useEffect(() => {
        const navbar = document.getElementById("navbar");
        const sticky = navbar.offsetTop;
        window.onscroll = function () {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        };
    });

    return (
        <motion.div id="navbar"
                    animate={{y: 100}}
                    transition={{
                        type: "spring",
                        stiffness: 30,
                        damping: 10,
                        delay: 8
                    }}>
            <a href="#contact">Contact</a>
            <a href="#project">Portfolio</a>
            <a href="#about">About</a>
            <a href="#home">Home</a>
        </motion.div>
    )
};
export default Navbar;