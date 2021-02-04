import React, {useState} from "react"
import {Canvas} from "react-three-fiber"
import LightStars from "./LightStars";
import HeaderText from "./HeaderText";
import RainbowLight from "./Rainbow";
import Pyramid from "./Pyramid";
import Effects from "./Effect";
import "../../assets/css/scene.css"

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
                    <Effects mouseClick={onPress}>
                        <Pyramid/>
                        <LightStars count={2500}/>
                        <RainbowLight/>
                    </Effects>
                </Canvas>


            </div>
        </>
    );
}

export default Scene