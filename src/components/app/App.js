import React, {useRef} from "react";
import ReactGA from 'react-ga';

import CenterView from "../gui/CenterView";
import Project from "../project/Project";
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
import {Container} from "react-bootstrap";
import Contact from "../contact/Contact";
import AboutNav from "../about/AboutNav";

ReactGA.initialize('G-GPBY7PPYCR');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {
    const [count, setCount] = React.useState(0);
    const [transitionEnd, setTransitionEnd] = React.useState(true);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        setCount(currentIndex);
    }, [count, currentIndex, transitionEnd]);

    const aboutRef = useRef();
    const skillRef = useRef();

    return (
        <>
            <Cursor/>
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
                mobileTouch={true}
                animation="cubeAnimation"
                transitionDelay={100}
            >
                <Container className="h-100 w-100" fluid="false">
                    <NavBar setCount={setCount} count={count} endAnim={transitionEnd} index={currentIndex}/>
                    <CenterView>
                        <Scene/>
                    </CenterView>
                </Container>

                <Container className="h-100 w-100 bg-white" fluid="false">
                    <NavBar setCount={setCount} count={count} endAnim={transitionEnd} index={currentIndex}
                            linkColor={"black"}/>
                    <AboutNav skillRef={skillRef} aboutRef={aboutRef}/>
                    <CenterView sectionName="about" bg="bg-black">
                        <About ref={aboutRef}/>
                    </CenterView>
                    <CenterView sectionName="skill" bg="bg-white">
                        <Skills ref={skillRef}/>
                    </CenterView>
                </Container>

                <Container className="h-100 w-100 bg-white" fluid="false">
                    <NavBar setCount={setCount} count={count} endAnim={transitionEnd} index={currentIndex}/>
                    <CenterView sectionName="projects" bg="bg-black">
                        <Project/>
                    </CenterView>
                </Container>

                <Container className="h-100 w-100 bg-white" fluid="false">
                    <NavBar setCount={setCount} count={count} endAnim={transitionEnd} index={currentIndex}/>
                    <CenterView sectionName="contact" bg="bg-black">
                        <Contact/>
                    </CenterView>
                </Container>
            </AwesomeSlider>
        </>
    )
}
