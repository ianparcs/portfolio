import {BrowserRouter as Router} from "react-router-dom"
import {Container} from "react-bootstrap";
import CenterView from "./components/CenterView";
import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Scene from "./components/Scene";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/app.css"
import React from "react";
import ReactGA from 'react-ga';

export default function App() {
    ReactGA.initialize('G-GPBY7PPYCR');
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    return (
        <Container className="h-100" fluid>
            <Cursor/>
            <Router>
                <NavBar/>
            </Router>

            <CenterView>
                <Scene/>
            </CenterView>
            <CenterView sectionName="about" bg="bg-black">
                <About/>
            </CenterView>
            <CenterView sectionName="skill" bg="bg-white">
                <Skills/>
            </CenterView>
      {/*      <CenterView sectionName="portfolio" bg="bg-black">
                <Portfolio/>
            </CenterView>*/}
        </Container>
    )
}
