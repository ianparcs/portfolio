import React from "react";
import ReactGA from 'react-ga';

import CenterView from "./components/CenterView";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Cursor from "./components/Cursor";
import About from "./components/About";
import Scene from "./components/Scene";

import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-slider/dist/styles.css';
import "./assets/css/app.css"

import AwesomeSlider from 'react-awesome-slider';
import {BrowserRouter} from "react-router-dom";
import {Container} from "react-bootstrap";

ReactGA.initialize('G-GPBY7PPYCR');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (count > 1) {
            document.title = 'Threshold of over 1 reached.';
        } else {
            document.title = 'No threshold reached.';
        }
    }, [count]);


    return (
        <>
            <BrowserRouter>
                <NavBar setCount={setCount}/>
            </BrowserRouter>
            <Cursor/>

            <AwesomeSlider
                selected={count}
                bullets={false}
                fillParent={true}
                mobileTouch={true}
                organicArrows={true}
                animation="cubeAnimation"
            >
                <Container className="h-100 w-100" fluid>
                    <CenterView>
                        <Scene/>
                    </CenterView>
                </Container>

                <Container className="h-100 w-100" fluid>
                    <CenterView sectionName="about" bg="bg-black">
                        <About/>
                        <Skills/>
                    </CenterView>
                </Container>

                <Container>
                    <CenterView sectionName="portfolio" bg="bg-black">
                        <Portfolio/>
                    </CenterView>
                </Container>
            </AwesomeSlider>
        </>
    )
}
