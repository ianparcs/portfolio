import {Text, useAspect} from "drei";
import React, {useRef} from "react"
import {useFrame, useThree} from "react-three-fiber";
import font from "../assets/font/font.woff"

function HeaderText() {
    const {viewport} = useThree();
    let ref = useRef();
    let ref2 = useRef();

    let fontSizeLimit2 = (viewport.width / 100);

    let letterSpacingLimit = 0;

    let refDone = false;
    const scale1 = useAspect(
        "cover",
        1024,
        1024,
        0.4
    )

    const scale2 = useAspect(
        "cover",
        512,
        512,
        0.15
    );
    useFrame((state) => {
        let time = state.clock.getElapsedTime() / 150;
        let time2 = state.clock.getElapsedTime() / 500;

        if (ref.current.letterSpacing <= letterSpacingLimit && !refDone) {
            ref.current.letterSpacing += 0.25 * time;
            time2 = 0;
        } else {
            refDone = true;
        }
        if (refDone) {
            ref2.current.visible = true;
            if (ref2.current.fontSize <= fontSizeLimit2) {
                ref2.current.fontSize += 0.1 * time2;
            }
            if (ref2.current.letterSpacing <= letterSpacingLimit) {
                ref2.current.letterSpacing += 0.2 * time2;
                refDone = true;
            }
        } else {
            ref2.current.visible = false;
        }

    }, []);

    return (
        <>
            <Text
                ref={ref}
                color={"#79edf5"}
                lineHeight={1.45}
                letterSpacing={-1}
                textAlign="justify"
                position={[-0.05, (viewport.height) / 3, 0]}
                outlineWidth={0.005}
                scale={scale1}
                outlineColor={"blue"}
                font={font}
            >
                HELLO, I'M IAN.
            </Text>
            <Text
                ref={ref2}
                color={"white"}
                letterSpacing={-1}
                textAlign="justify"
                position={[-0.05, (viewport.height) / 3.75, 0]}
                outlineWidth={0.005}
                outlineColor={"red"}
                scale={scale2}
                font={font}
            >
                A Software Developer & Hobbyist Game Developer.
            </Text>
        </>
    )
}

export default HeaderText