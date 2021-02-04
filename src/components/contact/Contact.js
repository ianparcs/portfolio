import React from 'react';
import emailjs from 'emailjs-com';
import {Col, Container, Form, Row} from "react-bootstrap";
import SectionTitle from "../gui/SectionTitle";
import '../../assets/css/contact.css'
import {motion} from "framer-motion";

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_xuoajla', 'template_40cvwds', e.target, 'user_2aZydzTS4Tz3ZwQ4HxCuN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <Container className="contact-container  d-flex flex-column justify-content-center  justify-content-md-center">
            <Row className="pt-5">
                <Col>
                    <div>
                        <SectionTitle title="Contact" textColor="text-white"/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Form className="w-75 m-auto pt-4" onSubmit={sendEmail}>
                    <Container>
                        <Row className="p-2">
                            <input className="w-100 custom-input" type="input" name="sender_name"
                                   placeholder="Name"/>
                        </Row>
                        <Row className="p-2">
                            <input
                                className="w-100 custom-input" type="email" name="sender_email"
                                placeholder="Enter Email"/>
                        </Row>
                        <Row className="p-2">
                            <textarea className="w-100  custom-input" name="sender_message" placeholder="Your Message"
                                      rows={9}/>
                        </Row>
                        <Row className="p-2 d-flex align-items-end">
                            <motion.input
                                whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                                className="custom-input w-25 ml-auto" type="submit" value="Send"/>
                        </Row>
                    </Container>
                </Form>
            </Row>

        </Container>
    );
}