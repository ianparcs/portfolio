import React, {useState} from "react"
import {Canvas} from "react-three-fiber"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import RainbowLight from "./components/Rainbow";
import Pyramid from "./components/Pyramid";
import Effects from "./components/Effect";
import Light from "./components/Light";
import "./assets/css/App.css"
import Stars from "./components/Stars";
import HeaderText from "./components/HeaderText";
import Navbar from "./components/Navbar";
import About from "./components/About";


function Scene() {
    const [onPress, setPress] = useState(false);
    return (
        <div className="canvas">
            <Canvas
                pixelRatio={window.devicePixelRatio}
                onPointerUp={() => setPress(false)}
                onPointerDown={() => setPress(true)}>
                <color attach="background" args={['black']}/>
                <HeaderText/>
                <Light/>
                <Stars count={2000}/>
                <RainbowLight/>
                <Effects mouseClick={onPress}>
                    <Pyramid/>
                </Effects>
            </Canvas>
        </div>
    );
}

export default function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Scene/>
                <Switch>
                    <Route exact path="/">
                        <About/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </Router>
        </div>

    )
}
