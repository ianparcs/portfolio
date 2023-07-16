import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../../assets/css/footer.css"
import LinkedIn from "../../assets/img/logo/linkedin.svg"
import Github from "../../assets/img/icon/github.svg"
import Youtube from "../../assets/img/logo/youtube.svg"
import StackOverFlow from "../../assets/img/logo/stackoverflow.svg"
import Instagram from "../../assets/img/logo/instagram.svg"

import {motion} from 'framer-motion'

export default function Footer(props) {
    const year = new Date().getFullYear();

    function openLink(url) {
        window.open(url, '_blank');
    }

    return (
        <Container className={props.color + " p-2 w-100 border-top " + props.fixedPos} fluid="true">
            <Row>
                <Col>
                    <motion.img src={Instagram} className="contact-logo"
                                whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}
                                onClick={() => openLink("https://www.instagram.com/ianparcs/")}/>
                    <motion.img src={Youtube} className="contact-logo"
                                whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}
                                onClick={() => openLink("https://www.youtube.com/channel/UCkBnZZHNqeVQBvS9_NLVtFQ")}/>
                    <motion.img src={LinkedIn} className="contact-logo"
                                whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}
                                onClick={() => openLink("https://www.linkedin.com/in/ianparcs/")}/>
                    <motion.img src={Github} className="contact-logo"
                                whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}
                                onClick={() => openLink("https://github.com/ianparcs")}/>
                    <motion.img src={StackOverFlow} className="contact-logo"
                                whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}
                                onClick={() => openLink("https://stackoverflow.com/users/3863156/sparcsky?tab=profile")}/>
                </Col>
            </Row>
            <Row className="pb-2">
                <Col>
                    <p className="text-white p-0 m-0">
                        Built with React | v1.5.3
                        <br/>
                    </p>
                    <div>
                        <p className="text-red p-0 m-0" style={{display: "inline-block"}}>
                            © {year}
                        </p>
                        &nbsp;
                        <p className="text-white p-0 m-0" style={{display: "inline-block"}}>
                            Ian Parcon
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}
