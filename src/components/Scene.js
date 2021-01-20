import React, {useState} from "react"
import {Canvas} from "react-three-fiber"
import LightStars from "./LightStars";
import HeaderText from "./HeaderText";
import RainbowLight from "./Rainbow";
import Pyramid from "./Pyramid";
import Light from "./Light";
import Effects from "./Effect";
import "../assets/css/scene.css"
import LinkedIn from "../assets/img/logo/linkedin.svg"

function Scene() {
    const [onPress, setPress] = useState(false);

    return (
        <>
            <div id="canvas">
                <Canvas
                    pixelRatio={window.devicePixelRatio}
                    onPointerUp={() => setPress(false)}
                    onPointerDown={() => setPress(true)}>
                    <color attach="background" args={['black']}/>
                    <HeaderText/>
                    <Light/>
                    <LightStars count={3500}/>
                    <RainbowLight/>
                    <Effects mouseClick={onPress}>
                        <Pyramid/>
                    </Effects>
                </Canvas>


            </div>
        </>
    );
}

export default Scene