import React, {useState} from "react"
import {Canvas} from "react-three-fiber"
import LightStars from "./LightStars";
import HeaderText from "./HeaderText";
import RainbowLight from "./Rainbow";
import Pyramid from "./Pyramid";
import Light from "./Light";
import Effects from "./Effect";

function Scene() {
    const [onPress, setPress] = useState(false);

    return (
        <div className="canvas" style={{
            width: "100%",
            height: "100vh"
        }}>
            <Canvas
                pixelRatio={window.devicePixelRatio}
                onPointerUp={() => setPress(false)}
                onPointerDown={() => setPress(true)}>
                <color attach="background" args={['black']}/>
                <HeaderText/>
                <Light/>
                <LightStars count={4000}/>
                <RainbowLight/>
                <Effects mouseClick={onPress}>
                    <Pyramid/>
                </Effects>
            </Canvas>
        </div>
    );
}

export default Scene