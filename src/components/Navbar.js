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
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 30,
                        damping: 10,
                    }}>
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
        </motion.div>
    )
};
export default Navbar;