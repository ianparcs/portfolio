import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {motion} from "framer-motion";
import HouseIcon from "../../assets/img/icon/house.svg"
import CodingTag from "../../assets/img/icon/coding.svg"
import Send from "../../assets/img/icon/send.svg"
import User from "../../assets/img/icon/user.svg"
import "../../assets/css/navbar.css"
import {Link, useHistory} from "react-router-dom";

const NavBar = (props) => {

    function transitionFinish(count, url) {
        window.history.pushState('about', 'Find Ian', "/portfolio" + url);
        props.setCount(count);
    }

    const history = useHistory();

    function handleClick(url) {
        history.push("/portfolio" + url);
    }


    const classStyle = "link-container w-100 " + props.navPosition;
    return (
        <Navbar id="navbar" className={classStyle} style={{backgroundColor: props.linkColor}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav"
                             className="link-container d-flex flex-row justify-content-end align-items-center">
                <Nav className="text-center p-1 p-md-2">
                    <motion.div
                        className={"link-container mr-2 ml-2 align-items-center " + props.textStyleHome}
                        onClick={() => {
                            transitionFinish(0, "/")
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img src={HouseIcon} className="mr-1" alt="home"/>
                        Home
                        <Nav.Link className="disable-link p-0"/>
                    </motion.div>
                    <motion.div
                        className={"link-container mr-2 ml-2 align-items-center " + props.textStyleAbout}
                        onClick={() => {
                            transitionFinish(1, "/about");
                            handleClick("/about");
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img src={User} className="mr-1" alt="about"/>
                        <Link to="portfolio/about">
                            About
                        </Link>
                        <Nav.Link className="disable-link p-0">
                        </Nav.Link>
                    </motion.div>
                    <motion.div
                        className={"link-container mr-2 ml-2 align-items-center " + props.textStyleWork}
                        onClick={() => {
                            transitionFinish(2, "/projects")
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img src={CodingTag} className="mr-1" alt="projects"/>
                        Projects
                        <Nav.Link className="disable-link p-0"/>
                    </motion.div>
                    <motion.div
                        className={"link-container mr-2 ml-2 align-items-center " + props.textStyleContact}
                        onClick={() => {
                            transitionFinish(3, "/contact")
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img src={Send} className="mr-1" alt="contact"/>
                        Contact
                        <Nav.Link className="disable-link p-0"/>
                    </motion.div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
export default NavBar;
