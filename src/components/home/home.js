import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import {Col, Container, Form, Row} from "react-bootstrap";
import SectionTitle from "../gui/SectionTitle";
import '../../assets/css/contact.css'
import {motion, useAnimation} from "framer-motion";
import Alert from "react-bootstrap/Alert";
import {useInView} from "react-intersection-observer";
import CenterView from "../gui/CenterView";
import Scene from "../scene/Scene";
import Footer from "../app/Footer";

export default function Home() {
    return (
        <CenterView>
            <Scene/>
            <Footer fixedPos={"fixed-bottom"}/>
        </CenterView>
    );
}