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
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./Footer";
import Gcash_2 from "../../assets/img/works/gcash/gcash-2.png";
import Gcash_3 from "../../assets/img/works/gcash/gcash-3.png";
import Gcash_1 from "../../assets/img/works/gcash/gcash-1.png";
import CHITS_1 from "../../assets/img/works/chits/chits-1.png";
import CHITS_2 from "../../assets/img/works/chits/chits-3.png";
import Paiwi_1 from "../../assets/img/works/paiwi/paiwi-1.png";
import Paiwi_2 from "../../assets/img/works/paiwi/paiwi-2.png";
import Inventory_3 from "../../assets/img/works/inventory/inventory_3.png";
import Inventory_1 from "../../assets/img/works/inventory/inventory_1.png";
import Inventory_2 from "../../assets/img/works/inventory/inventory_2.png";
import Portfolio_2 from "../../assets/img/works/portfolio/portfolio_2.png";
import Portfolio_1 from "../../assets/img/works/portfolio/portfolio_1.png";
import Work from "../project/Work";
import ColoredLine from "../gui/Line";


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

    const paiwiDescription = <p className="pt-4">
        Pa-Iwi Mobile is an online android application used by investors of agri-business
        enthusiast to invest their money to livestock farming. Tracks real-time investment assets, status and profit of
        returns.
        (</p>;

    const gcashDescription = <p className="pt-4">
        GCash is a mobile money or “e-money” that allows you to pay bills, send or receive money, buy load, shop online,
        book movie tickets, and more with the use of your smartphone.</p>;

    const chitsDescription = <p className="pt-4">
        CHITS is an electronic medical record system that reduces patient waiting time and improves
        monitoring of patient care through efficient data encoding and records retrieval</p>;

    const posDescription = <p className="pt-4">
        <a href="https://github.com/ianparcs/inventory-sales-system">Inventory Sales System</a>
        &nbsp; is used by retailers to process customer sales, track product
        or stock levels. It has tools to ring sales, count inventory,
        and provide basic reports for sales and product stocks.</p>;

    const portfolioDescription = <p className="pt-4">Personal site showcasing my projects and online resume.</p>;


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
                                <AboutNav skillRef={skillRef} aboutRef={aboutRef} educationRef={educationRef}
                                          workExpRef={workRef}/>
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
                                        <CenterView sectionName="skill" bg="bg-white">
                                            <Skills/>
                                        </CenterView>
                                    </Route>

                                    <Route path="/portfolio/workexperience">
                                        <CenterView sectionName="Work Experience" bg="bg-black">
                                            <WorkExperience/>
                                        </CenterView>
                                    </Route>

                                    <Route path="/portfolio/education">
                                        <CenterView sectionName="education" bg="bg-white">
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
                        <Container className="w-100 pl-3 pr-3" fluid="true">
                            <Container>
                                <Row>
                                    <h1>Work Projects</h1>
                                    <ColoredLine color="white"/>
                                </Row>
                                <Row>
                                    <Work title="GCash Mobile"
                                          skills={<p>Skills: Java, Spring Boot, Rest API, Kafka, and Kubernetes.</p>}
                                          content={gcashDescription}
                                          images={[{path: Gcash_2, alt: "Gcash_1"}, {path: Gcash_3, alt: "Gcash_3"}, {
                                              path: Gcash_1,
                                              alt: "Gcash_2"
                                          }]}
                                          workNumber={1}
                                          direction="100%"/>
                                    <Work title="Health Information Tracking System"
                                          skills={<p>Skills: Java, Spring MVC, Hibernate,MySQL and Ant.</p>}
                                          content={chitsDescription}
                                          images={[{path: CHITS_1, alt: "Chits_1"}, {path: CHITS_2, alt: "CHITS_2"}]}
                                          workNumber={2}
                                          direction="-100%"/>
                                    <Work title="Pa-Iwi Mobile"
                                          skills={<p> Skills: Java, Android, Amazon S3, Firebase and Rest API.</p>}
                                          content={paiwiDescription}
                                          images={[{path: Paiwi_1, alt: "Paiwi mobile"}, {
                                              path: Paiwi_2,
                                              alt: "Paiwi mobile"
                                          }]}
                                          workNumber={3}
                                          direction="100%"/>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <h1>Personal Projects</h1>
                                    <ColoredLine color="white"/>
                                </Row>
                                <Row>
                                    <Work title="RM Home Tiles"
                                          skills={<p>Skills: Java, JavaFX, Spring MVC, Hibernate, MySQL and Maven.</p>}
                                          content={posDescription}
                                          images={[{path: Inventory_3, alt: "Inventory_3"}, {
                                              path: Inventory_1,
                                              alt: "Inventory_1"
                                          }, {path: Inventory_2, alt: "Inventory_2"},]}
                                          workNumber={4}
                                          direction="-100%"/>
                                    <Work title="Portfolio"
                                          skills={<p>Skills: HTML5, CSS3, ReactJS and NodeJS.</p>}
                                          content={portfolioDescription}
                                          images={[{path: Portfolio_2, alt: "Portfolio_2"}, {
                                              path: Portfolio_1,
                                              alt: "Portfolio_1"
                                          }]}
                                          workNumber={5}
                                          direction="100%"/>
                                </Row>
                            </Container>

                            <CenterView sectionName="Project" bg="bg-black">
                                <Footer fixedPos="sticky-bottom"/>
                            </CenterView>
                        </Container>
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
            </Router>
        </>
    )
}
