import React from "react";
import ReactGA from 'react-ga';

import CenterView from "../gui/CenterView";
import NavBar from "./NavBar";
import Skills from "../about/Skills";
import Cursor from "../gui/Cursor";
import About from "../about/About";

import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-slider/dist/styles.css';
import "../../assets/css/app.css"

import AwesomeSlider from 'react-awesome-slider';
import {Col, Container, Row} from "react-bootstrap";
import Contact from "../contact/Contact";
import Education from "../about/Education";
import WorkExperience from "../about/WorkExperience";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Footer from "./Footer";

import Projects from "../project/Projects";
import Home from "../home/home";

export default function App() {

  ReactGA.initialize('UA-187469000-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [count, setCount] = React.useState(0);
  const [transitionEnd, setTransitionEnd] = React.useState(true);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    setCount(currentIndex);
  }, [count, currentIndex, transitionEnd]);

  return (
      <>
        <BrowserRouter basename="/portfolio"/>.
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
              transitionDelay={200}>

            <Container className="h-100 w-100" fluid="true">
              <NavBar setCount={setCount} count={count} endAnim={transitionEnd}
                      index={currentIndex}
                      navPosition="fixed-top"
                      textStyleHome="text-decoration-underline"/>

              <Home/>
            </Container>

            <Container className="w-100 h-100 section-container" fluid="true" >
              <NavBar setCount={setCount} count={count} endAnim={transitionEnd}
                      index={currentIndex}
                      navPosition="fixed-top"
                      textStyleHome="text-decoration-underline"/>
              <CenterView bg="bg-black">
                <About/>
              </CenterView>
              <CenterView bg="bg-white">
                <Skills/>
              </CenterView>
              <CenterView bg="bg-black">
                <WorkExperience/>
              </CenterView>
              <CenterView bg="bg-white">
                <Education/>
              </CenterView>
            </Container>


            <Container className="h-100 w-100 section-container" fluid="true">
              <NavBar setCount={setCount} count={count} endAnim={transitionEnd}
                      index={currentIndex}
                      navPosition="sticky-top" linkColor={"black"}
                      textStyleWork="text-decoration-underline"/>
              <Projects/>
            </Container>

            <Container className="h-100 w-100 section-container" fluid="true">
              <NavBar setCount={setCount} count={count} endAnim={transitionEnd}
                      index={currentIndex}
                      navPosition="sticky-top" linkColor={"black"}
                      textStyleContact="text-decoration-underline"/>
              <CenterView sectionName="contact" bg="bg-black" height="h-100">
                <Contact/>
                <Footer fixedPos="sticky-bottom"/>
              </CenterView>
            </Container>
          </AwesomeSlider>
        </Router>
      </>
  )
}
