import React, {useEffect} from 'react';
import "../assets/css/navbar.css"
import {Nav, Navbar} from "react-bootstrap";
import {motion} from "framer-motion";
import HouseIcon from "../assets/img/icon/house.svg"
import CodingTag from "../assets/img/icon/coding.svg"
import Send from "../assets/img/icon/send.svg"
import User from "../assets/img/icon/user.svg"

const NavBar = (props) => {

    useEffect(() => {
        const navbar = document.getElementById("navbar");
        const canvas = document.getElementById("skill");
        window.addEventListener("scroll", function () {
            console.log("test")
            if (canvas != null && window.pageYOffset >= canvas.clientHeight) {
                navbar.classList.add("sticky")
            }
        });
    });

    function transitionFinish(count) {
        if (props.endAnim) {
            props.setCount(count)
        }
    }

    return (
        <Navbar id="navbar" className="d-flex align-items-end text-center" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <motion.Container
                        className="p-2"
                        onClick={() => {
                            transitionFinish(0)
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img width={32} height={32} src={HouseIcon}/>
                        <Nav.Link
                            className={"lead links"}
                            onClick={() => {
                                transitionFinish(0)
                            }}
                            whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}
                            href="#home">
                            Home
                        </Nav.Link>
                    </motion.Container>

                    <motion.Container
                        className="p-2"
                        onClick={() => {
                            transitionFinish(1)
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img width={32} height={32} src={User}/>
                        <Nav.Link
                            className={"lead links"}
                            href="#about">
                            About
                        </Nav.Link>
                    </motion.Container>
                    <motion.Container
                        className="p-2"
                        onClick={() => {
                            transitionFinish(2)
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img width={32} height={32} src={CodingTag}/>
                        <Nav.Link
                            className={"lead links"}
                            href="#project">
                            Projects
                        </Nav.Link>
                    </motion.Container>

                    <motion.Container
                        className="p-2"
                        onClick={() => {
                            transitionFinish(3)
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img width={32} height={32} src={Send}/>
                        <Nav.Link
                            className={"lead links"}
                            href="#contact">
                            Contact
                        </Nav.Link>
                    </motion.Container>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
};
export default NavBar;
/*


<ul>
    <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
        <a
            href="#contact"
            className="lead links"
            onClick={() => {
                transitionFinish(3)
            }}>
            Contact
        </a>
    </motion.li>
    <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
        <img className="p-2" width={48} height={48} src={CodingTag}/>
        <a
            href="#project"
            className="lead links"
            onClick={() => {
                transitionFinish(2)
            }}>
            Projects
        </a>
    </motion.li>
    <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
        <img className="p-2" width={48} height={48} src={User}/>
        <motion.a
            href="#about"
            className="lead links"
            onClick={() => {
                transitionFinish(1)
            }}>
            About
        </motion.a>
    </motion.li>
    <motion.li whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
        <img className="p-2" width={48} height={48} src={HouseIcon}/>
        <a
            href="#"
            className="lead links p-1"
            onClick={() => {
                transitionFinish(0)
            }}>
            Home
        </a>
    </motion.li>
</ul>*/
