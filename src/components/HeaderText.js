import {Text} from "drei";
import React, {useRef} from "react"
import {useFrame, useThree} from "react-three-fiber";
import font from "../assets/font/font.woff"

function HeaderText() {
    const {viewport} = useThree();
    /*   const fontSize = useControl("fontSize", {type: "number", value: 0, min: 0.1, max: 1})
       const maxWidth = useControl("maxWidth", {type: "number", value: 1, min: 1, max: 100})
       const lineHeight = useControl("lineHeight", {type: "number", value: 1.45, min: 0.1, max: 10})
       const posX = useControl("posX", {type: "number", value: -0.73, min: -5, max: 5})
       const posY = useControl("posY", {type: "number", value: 0.45, min: -5, max: 5})
       const posZ = useControl("posZ", {type: "number", value: 0.80, min: -1, max: 1})*/

    let ref = useRef()
    let ref2 = useRef();

    let fontSizeLimit = (viewport.width / 100.0) * 2.5;
    let fontSizeLimit2 = (viewport.width / 100) * 2;

    let letterSpacingLimit = 0.10;
    let posXLimit = (viewport.width / 100) * -4;

    let refDone = false;
    useFrame((state, delta) => {
        if (ref.current.fontSize <= fontSizeLimit) {
            ref.current.fontSize += 0.25 * delta;
        }

        if (ref.current.fontSize >= fontSizeLimit) {
            if (ref.current.letterSpacing <= letterSpacingLimit) {
                ref.current.letterSpacing += 0.25 * delta;
            } else {
                refDone = true;
            }
        }
        if (refDone) {
            ref2.current.visible = true;
            if (ref2.current.fontSize <= fontSizeLimit2) {
                ref2.current.fontSize += 0.1 * delta;
            }
            if (ref2.current.letterSpacing <= letterSpacingLimit) {
                ref2.current.letterSpacing += 0.2 * delta;
                refDone = true;
            }
        }else{
            ref2.current.visible = false;
        }

    });

    return (
        <>
            <Text
                ref={ref}
                overflowWrap={true}
                color={"#79edf5"}
                fontSize={0}
                maxWidth={(window.width / 100.0) * 10.0}
                lineHeight={1.45}
                letterSpacing={-0.4}
                textAlign="justify"
                position={[-0.05, (viewport.height / 100.0) * 30, 0]}
                outlineWidth={0.002}

                outlineColor={"blue"}
                font={font}
            >
                HELLO, I'M IAN.
            </Text>
            <Text
                ref={ref2}
                color={"white"}
                fontSize={0}
                overflowWrap={true}
                maxWidth={(window.width / 100.0) * 10.0}
                lineHeight={1.45}
                letterSpacing={-0.4}
                textAlign="justify"
                position={[-0.05, (viewport.height / 100.0) * 24, 0]}
                outlineWidth={0.005}
                outlineColor={"red"}
                font={font}
            >
                A Software Developer & Hobbyist Game Developer.
            </Text>
        </>
    )
}

export default HeaderText