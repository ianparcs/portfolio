import React, {useRef} from "react";
import ReactGA from 'react-ga';

import CenterView from "../gui/CenterView";
import NavBar from "./NavBar";
import Skills from "../about/Skills";
import Cursor from "../gui/Cursor";
import About from "../about/About";
import Scene from "../scene/Scene";

import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-slider/dist/styles.css';
import "../../assets/css/app.css"

import AwesomeSlider from 'react-awesome-slider';
import {Col, Container, Row} from "react-bootstrap";
import Contact from "../contact/Contact";
import AboutNav from "../about/AboutNav";
import Education from "../about/Education";
import WorkExperience from "../about/WorkExperience";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Footer from "./Footer";

import Projects from "../project/Projects";


export default function App() {

    ReactGA.initialize('UA-187469000-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

    const [count, setCount] = React.useState(0);
    const [transitionEnd, setTransitionEnd] = React.useState(true);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        setCount(currentIndex);
    }, [count, currentIndex, transitionEnd]);

    const educationRef = useRef();
    const workRef = useRef();
    const aboutRef = useRef();
    const skillRef = useRef();

    return (
        <>
            <Cursor/>
            <Router>
                <AwesomeSlider
                    onTransitionStart={(e) => {
                        setCurrentIndex(e.nextSlide);
                        setCount(e.nextSlide);
                        setTransitionEnd(false)
                    }}
                    onTransitionRequest={(e) => {
                        if (currentIndex !== e.currentIndex) {
                            setTransitionEnd(false)

                        }
                    }}
                    onTransitionEnd={(e) => {
                        setCount(e.currentIndex);
                        setCurrentIndex(e.currentIndex);
                        setTransitionEnd(true)
                    }}
                    selected={count}
                    bullets={false}
                    disabled={true}
                    buttons={false}
                    fillParent={true}
                    mobileTouch={false}
                    animation="cubeAnimation"
                    transitionDelay={200}
                >
                    <Container className="h-100 w-100" fluid="false">
                        <NavBar setCount={setCount} count={count} endAnim={transitionEnd} index={currentIndex}
                                navPosition="fixed-top" textStyleHome="text-decoration-underline"/>
                        <CenterView>
                            <Scene/>
                            <Footer fixedPos={"fixed-bottom"}/>
                        </CenterView>
                    </Container>
                    <Container id={"about"} className="h-100 w-100 bg-white" fluid="false">
                        <Row>
                            <Col>
                                <AboutNav/>
                            </Col>
                        </Row>
                        <Row className="m-0 h-0 w-100">
                            <Col className="m-0 h-100 p-0">
                                <NavBar setCount={setCount} count={count} endAnim={transitionEnd} index={currentIndex}
                                        linkColor={"black"} navPosition="sticky-top"
                                        textStyleAbout="text-decoration-underline"/>
                            </Col>
                        </Row>
                        <Row className="m-0 h-100 w-100 test bg-black">
                            <Col>
                                <Switch>
                                    <Route path="/portfolio/about">
                                        <CenterView sectionName="About" bg="bg-black">
                                            <About/>
                                        </CenterView>
                                    </Route>
                                    <Route path="/portfolio/skills">
                                        <CenterView sectionName="Skill" bg="bg-white">
                                            <Skills/>
                                        </CenterView>
                                    </Route>

                                    <Route path="/portfolio/workexperience">
                                        <CenterView sectionName="Work Experience" bg="bg-black">
                                            <WorkExperience/>
                                        </CenterView>
                                    </Route>

                                    <Route path="/portfolio/education">
                                        <CenterView sectionName="Education" bg="bg-white">
                                            <Education/>
                                        </CenterView>
                                    </Route>

                                </Switch>
                            </Col>
                        </Row>
                    </Container>


                    <Container className="w-100 section-container" fluid="true">
                        <NavBar setCount={setCount} count={count} endAnim={transitionEnd} index={currentIndex}
                                navPosition="sticky-top" linkColor={"black"} textStyleWork="text-decoration-underline"/>
                        <Projects/>
                    </Container>

                    <Container className="w-100 section-container" fluid="false">
                        <NavBar setCount={setCount} count={count} endAnim={transitionEnd} index={currentIndex}
                                navPosition="sticky-top" linkColor={"black"}
                                textStyleContact="text-decoration-underline"/>
                        <CenterView sectionName="contact" bg="bg-black">
                            <Contact/>
                        </CenterView>
                        <CenterView sectionName="contact" bg="bg-black">
                            <Footer fixedPos="sticky-bottom"/>
                        </CenterView>
                    </Container>
                </AwesomeSlider>
                <Redirect exact from="/" to="/portfolio" />
            </Router>
        </>
    )
}
