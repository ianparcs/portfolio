import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import {Col, Container, Form, Row} from "react-bootstrap";
import SectionTitle from "../gui/SectionTitle";
import '../../assets/css/contact.css'
import {motion, useAnimation} from "framer-motion";
import Alert from "react-bootstrap/Alert";
import {useInView} from "react-intersection-observer";

export default function Contact() {
    const [show, setShow] = useState(false);

    const contentControl = useAnimation();
    const headerControl = useAnimation();
    const [headerRef, headerInView] = useInView();
    const [visible, setVisible] = useState(false);

    const variants = {
        headerVisible: {
            transition: {duration: 1.5, delay: 0.2},
            opacity: 1,
            x: 0
        },
        visible: {
            transition: {duration: 1},
            opacity: 1,
            x: 0
        },
        hidden: {
            opacity: 0,
            x: "-100%",
            transition: {duration: 1}
        },
    };
    const list = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
        hidden: {
            opacity: 0,
            y: "-100%"
        },
    };

    useEffect(() => {
        if (headerInView) {
            const sequence = async () => {
                await headerControl.start("headerVisible");
                return await contentControl.start("visible");
            };
            sequence()
        }

    }, [headerInView, contentControl, headerControl, visible, setVisible]);

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_xuoajla', 'template_40cvwds', e.target, 'user_2aZydzTS4Tz3ZwQ4HxCuN')
            .then((result) => {
                setShow(true)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    function AlertDismissibleExample() {

        if (show) {
            return (
                <Alert variant="success" className="custom-alert w-75 p-3 m-auto" onClose={() => setShow(false)}
                       dismissible>
                    <Alert.Heading>Message Successfully Sent</Alert.Heading>
                    <p className="m-auto w-100">
                        Thank you for getting in touch,
                        I'll be in touch soon. Have a great day!
                        <br/>
                    </p>
                    <p>
                        <i>- &nbsp;"We are what we think. All that we are arises with our thoughts. With our thoughts,
                            we
                            make the world".</i>
                    </p>
                </Alert>
            );
        }
        return <></>
    }

    return (
        <Container className="vh-100 p-5 w-100 d-flex flex-column justify-content-center">
            <AlertDismissibleExample/>
            <Row className="pt-5 w-100" ref={headerRef}>
                <Col>
                    <motion.div
                        ref={headerRef}
                        animate={headerControl}
                        initial="hidden"
                        variants={variants}>
                        <SectionTitle title="Contact Me" textColor="text-white"/>
                    </motion.div>
                </Col>
            </Row>
            <Row className="w-100">
                <motion.div
                    className="w-100 m-auto"
                    initial="hidden"
                    animate={contentControl}
                    variants={list}>
                    <Form className="w-75 m-auto pt-4" onSubmit={sendEmail}>
                        <Container>
                            <Row className="p-2">
                                <motion.input variants={variants}
                                              className="w-100 custom-input" type="input"
                                              name="sender_name"
                                              placeholder="Your Name"/>
                            </Row>
                            <Row className="p-2">
                                <motion.input variants={variants}
                                              className="w-100 custom-input" type="email" name="sender_email"
                                              placeholder="Your Email"/>
                            </Row>
                            <Row className="p-2">
                                <motion.textarea variants={variants}
                                                 className="w-100 custom-input" name="sender_message"
                                                 placeholder="Your Message" rows={9}/>
                            </Row>
                            <Row className="p-2">
                                <motion.input variants={variants}
                                              whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                                              className="custom-input w-25 ml-auto" type="submit" value="Send"/>
                            </Row>
                        </Container>
                    </Form>
                </motion.div>
            </Row>
            <Row className="w-100 p-5">
                <p className="w-100 custom-alert">
                    <i>- &nbsp;"We are what we think. All that we are arises with our thoughts. With our thoughts,
                        we
                        make the world".</i>
                </p>
            </Row>
        </Container>
    );
}