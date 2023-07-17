import {extend, useFrame, useThree} from "react-three-fiber";
import React, {useEffect, useMemo, useRef, useState} from "react"
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer"
import {OutlinePass} from "three/examples/jsm/postprocessing/OutlinePass"
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass"
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass"
import {UnrealBloomPass} from "three/examples/jsm/postprocessing/UnrealBloomPass";
import {SMAAPass} from "three/examples/jsm/postprocessing/SMAAPass";
import {GlitchPass} from "three/examples/jsm/postprocessing/GlitchPass";
import {Vector2} from "three";
import Context from "./HoverContext"

extend({EffectComposer, RenderPass, OutlinePass, ShaderPass, UnrealBloomPass, SMAAPass, GlitchPass});

function Effects({children}) {
    const composer = useRef();
    const {scene, gl, size, camera} = useThree();
    const aspect = useMemo(() => new Vector2(size.width, size.height), [size]);
    const [hovered, set] = useState([]);


    useEffect(() => {
        composer.current.setSize(size.width, size.height);
    });

    useFrame(() => composer.current.render(), 10);
    return (
        <Context.Provider value={set}>
            {children}

            <effectComposer ref={composer} args={[gl]}>
                <renderPass attachArray="passes" scene={scene} camera={camera}/>
                <unrealBloomPass attachArray="passes" args={[aspect, 1, 0.5, 0]}/>
                <sMAAPass attachArray="passes"/>
                <outlinePass
                    attachArray="passes"
                    args={[aspect, scene, camera]}
                    selectedObjects={hovered}
                    visibleEdgeColor="white"
                    edgeStrength={2}
                    edgeGlow={2.5}
                    edgeThickness={1.5}
                />
                <glitchPass attachArray="passes"
                            curF={Object.keys(hovered).length !== 0 ? 0.05 : 0}
                            randX={Object.keys(hovered).length !== 0 ? 0.21 : 0}
                />
            </effectComposer>
        </Context.Provider>
    )
}

export default Effects