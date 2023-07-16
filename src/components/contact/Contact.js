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
    const [contentRef, contentView] = useInView();
    const [visible, setVisible] = useState(false);

    const transition = {
        duration: 1.5,
        ease: "easeInOut"
    };

    const fade = {
        visible: {
            opacity: 1,
            transition: {duration: 1, delay: 0.5},
        },
        hidden: {
            opacity: 0,
            transition: {duration: 1}
        },
    };

    useEffect(() => {
        if (contentView) {
            const sequence = async () => {
                return await contentControl.start("visible");
            };
            sequence();
        }
    }, [contentControl, contentRef, contentView]);

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
                </Alert>
            );
        }
        return <></>
    }

    return (
        <Container className="d-flex flex-column justify-content-center w-100" ref={contentRef}>
            <AlertDismissibleExample/>
            <Row className="pt-5">
                <Col>
                    <motion.div
                        animate={contentControl}
                        initial="hidden"
                        transition={transition}
                        variants={fade}>
                        <SectionTitle title="Contact Me" textColor="text-white"/>
                    </motion.div>
                </Col>
            </Row>
            <Row>
                <motion.div
                    className="w-100"
                    initial="hidden"
                    transition={transition}
                    animate={contentControl}
                    variants={fade}>
                    <Form className="w-75 m-auto pt-4" onSubmit={sendEmail}>
                        <Container>
                            <Row className="p-2">
                                <motion.input variants={fade}
                                              className="w-100 custom-input" type="input"
                                              name="sender_name"
                                              placeholder="Name"/>
                            </Row>
                            <Row className="p-2">
                                <motion.input variants={fade}
                                              className="w-100 custom-input" type="email" name="sender_email"
                                              placeholder="Email"/>
                            </Row>
                            <Row className="p-2">
                                <motion.textarea variants={fade}
                                                 className="w-100 custom-input" name="sender_message"
                                                 placeholder="Message" rows={9}/>
                            </Row>
                            <Row className="p-2">
                                <motion.input variants={fade}
                                              whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                                              className="custom-input w-25 ml-auto" type="submit" value="Send"/>
                            </Row>
                        </Container>
                    </Form>
                </motion.div>
            </Row>
            <Row className="w-100 p-5">
                <motion.p className="w-100 custom-alert"
                          animate={contentControl}
                          initial="hidden"
                          transition={transition}
                          variants={fade}>
                    <i>&nbsp;"We are what we think. All that we are arises with our thoughts. With our thoughts,
                        we
                        make the world."</i>
                </motion.p>
            </Row>
        </Container>
    );
}