import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion"
import "../assets/css/navbar.css"

const NavBar = (props) => {
    const controls = useAnimation();


    useEffect(() => {
        const navbar = document.getElementById("navbar");
        const canvas = document.getElementById("skill");
        window.addEventListener("scroll", function () {
            console.log("test")
            if (canvas != null && window.pageYOffset >= canvas.clientHeight) {
                navbar.classList.add("sticky")
                controls.start({
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 1000,
                        damping: 100,
                        duration: 2,
                    }
                });
            } else {
                controls.start({
                    y: -navbar.clientHeight,
                    transition: {
                        type: "spring",
                        stiffness: 1000,
                        damping: 100,
                        duration: 1,
                    },
                    transitionEnd: {
                        y: 0,
                        opacity: 0,
                        visibility: false
                    }
                }).then(value => {
                    navbar.classList.remove("sticky");
                    controls.start({
                        opacity: 1,
                        visibility: true,
                        transition: {
                            type: "spring",
                            stiffness: 1000,
                            damping: 100,
                            duration: 2,
                        }
                    })
                });
            }
        }, false);

    });



    function transitionFinish(count) {
        if (props.endAnim) {
            props.setCount(count)
        }
    }

    return (
        <motion.div id="navbar"
                    initial={{y: 0}}
                    transition={{
                        type: "spring",
                        stiffness: 30,
                        damping: 10,
                        delay: 7,
                        repeatType: "loop"
                    }}
        >
            <ul>
                <li>
                    <motion.a
                        href="#contact"
                        className="lead links"
                        onClick={() => {
                            transitionFinish(3)
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        Contact
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#project"
                        className="lead links"
                        onClick={() => {
                            transitionFinish(2)
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        Projects
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#about"
                        className="lead links"
                        onClick={() => {
                            transitionFinish(1)
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        About
                    </motion.a>
                </li>
                <li>
                    <motion.a
                        href="#"
                        className="lead links"
                        onClick={() => {
                            transitionFinish(0)
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        Home
                    </motion.a>
                </li>
            </ul>
        </motion.div>
    )
};
export default NavBar;