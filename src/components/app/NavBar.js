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

    const history = useHistory();

    function transitionFinish(count, url) {
        props.setCount(count);
    }

   /* function handleClick(url) {
        history.push("/portfolio" + url);
    }
*/

    const classStyle = "link-container w-100 p-2 " + props.navPosition;
    return (
        <Navbar id="navbar" className={classStyle} style={{backgroundColor: props.linkColor}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav"
                             className="link-container d-flex flex-row  justify-content-center justify-content-md-end align-items-center">
                <Nav className="text-center">
                    <motion.div
                        className={"d-flex flex-column justify-content-center align-items-center  link-container mr-2 ml-2 align-items-center " + props.textStyleHome}
                        onClick={() => {
                            transitionFinish(0, "/")
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <Link to="/portfolio">
                        <img src={HouseIcon} className="mr-1" alt="home"/>
                            <p className="nav-name-link p-0 m-0"> About</p>
                        </Link>
                        <Nav.Link className="disable-link p-0"/>
                    </motion.div>
                    <motion.div
                        className={"d-flex flex-column justify-content-center align-items-center  link-container mr-2 ml-2 align-items-center " + props.textStyleHome}
                        onClick={() => {
                            transitionFinish(1, "/about");
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <Link to="/portfolio/about">
                        <img src={User} className="mr-1" alt="about"/>
                            <p className="nav-name-link p-0 m-0"> About</p>
                        </Link>
                        <Nav.Link className="disable-link p-0">
                        </Nav.Link>
                    </motion.div>
                    <motion.div
                        className={"d-flex flex-column justify-content-center align-items-center  link-container mr-2 ml-2 align-items-center " + props.textStyleHome}
                        onClick={() => {
                            transitionFinish(2, "/projects")
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <Link to="/portfolio/projects">
                        <img src={CodingTag} className="mr-1" alt="projects"/>
                            <p className="nav-name-link p-0 m-0">Projects</p>
                        </Link>
                        <Nav.Link className="disable-link p-0"/>
                    </motion.div>
                    <motion.div
                        className={"d-flex flex-column justify-content-center align-items-center  link-container mr-2 ml-2 align-items-center " + props.textStyleHome}
                        onClick={() => {
                            transitionFinish(3, "/contact")
                        }}
                        whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <Link to="/portfolio/contact">
                        <img src={Send} className="mr-1" alt="contact"/>
                            <p className="nav-name-link p-0 m-0">Contact</p>
                        </Link>
                        <Nav.Link className="disable-link p-0"/>
                    </motion.div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
export default NavBar;
