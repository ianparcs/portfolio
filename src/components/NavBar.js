import React from 'react';
import "../assets/css/navbar.css"
import {Nav, Navbar} from "react-bootstrap";
import {motion} from "framer-motion";
import HouseIcon from "../assets/img/icon/house.svg"
import CodingTag from "../assets/img/icon/coding.svg"
import Send from "../assets/img/icon/send.svg"
import User from "../assets/img/icon/user.svg"


const NavBar = (props) => {

    function transitionFinish(count, url) {
        const a = document.getElementById("links");
        if (props.endAnim) {
            props.setCount(count);
            if (a !== null) {
                a.href = url;
            }
        }
    }

    return (
        <Navbar id="navbar" style={{backgroundColor: props.linkColor}} className="d-flex align-items-end text-center"
                fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto mr-md-0">
                    <motion.div
                        className=" link-container"
                        onClick={() => {
                            transitionFinish(0, "#home")
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img src={HouseIcon}/>
                        <Nav.Link
                            href="#home">
                            Home
                        </Nav.Link>
                    </motion.div>
                    <motion.div
                        className="link-container"
                        onClick={() => {
                            transitionFinish(1, "#about")
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img src={User}/>
                        <Nav.Link
                            href="#about">
                            About
                        </Nav.Link>
                    </motion.div>
                    <motion.div
                        className=" link-container"
                        onClick={() => {
                            transitionFinish(2, "#project")
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img src={CodingTag}/>

                        <Nav.Link
                            href="#project">
                            Projects
                        </Nav.Link>
                    </motion.div>
                    <motion.div
                        className=" link-container"
                        onClick={() => {
                            transitionFinish(3, "#contact")
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img src={Send}/>
                        <Nav.Link
                            href="#contact">
                            Contact
                        </Nav.Link>
                    </motion.div>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
};
export default NavBar;
