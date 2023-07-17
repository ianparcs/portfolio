import React, {useState} from "react"
import {Canvas} from "react-three-fiber"
import LightStars from "./LightStars";
import HeaderText from "./HeaderText";
import RainbowLight from "./Rainbow";
import Pyramid from "./Pyramid";
import Effects from "./Effect";
import "../../assets/css/scene.css"

function Scene() {

    return (
        <>
            <div id="canvas">
                <Canvas
                    pixelRatio={window.devicePixelRatio}>
                    <color attach="background" args={['black']}/>
                    <HeaderText/>

                    <Effects>
                        <Pyramid/>
                        <LightStars count={4000}/>
                        <RainbowLight/>

                    </Effects>

                </Canvas>


            </div>
        </>
    );
}

export default Scene