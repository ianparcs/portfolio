import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion"
import {NavHashLink} from "react-router-hash-link";
import "../assets/css/navbar.css"

const NavBar = (props) => {
    console.log(props)
    const controls = useAnimation();

    useEffect(() => {
        const navbar = document.getElementById("navbar");
        const canvas = document.getElementById("canvas");
        window.onscroll = function () {
            console.log(canvas);
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
        };
    });

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
                <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                    <NavHashLink
                        smooth to="#contact"
                        activeClassName="selected"
                        activeStyle={{color: '#ff293a'}}>Contact</NavHashLink>
                </motion.li>
                <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                    <NavHashLink
                        onClick={() => props.setCount(2)}
                        smooth to="#portfolio"
                        activeClassName="selected"
                        activeStyle={{color: '#ff293a'}}>Porfolio</NavHashLink>
                </motion.li>
                <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                    <NavHashLink
                        onClick={() => props.setCount(1)}
                        smooth to="#about"
                        activeClassName="selected"
                        activeStyle={{color: '#ff293a'}}>About</NavHashLink>
                </motion.li>
                <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                    <NavHashLink
                        onClick={() => props.setCount(0)}
                        smooth to="#"
                        activeClassName="selected"
                        activeStyle={{
                            color: '#ff293a'
                        }}>Home</NavHashLink>
                </motion.li>
            </ul>
        </motion.div>
    )
};
export default NavBar;