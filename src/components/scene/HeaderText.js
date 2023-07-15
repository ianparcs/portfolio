import {Text, useAspect} from "drei";
import React, {useRef} from "react"
import {useFrame, useThree} from "react-three-fiber";
import font from "../../assets/font/font.woff"

function HeaderText() {
    const {viewport} = useThree();
    const ref = useRef();
    const ref1 = useRef();

    const letterSpacingLimit = 0.05;
    const scaleLimit = 4;

    const scale = useAspect(
        "cover",
        1024,
        512,
        0
    );
    let transitionDone = false;
    let timeSpeed = 100;
    useFrame((state) => {
        let time = state.clock.getElapsedTime() / timeSpeed;
        if (ref.current.scale.x <= scaleLimit - 1) {
            ref.current.scale.x += 7 * time;
            ref.current.scale.y += 7 * time;
        } else if (ref.current.letterSpacing <= 0.1) {
            ref.current.letterSpacing += 0.1 * time;
        } else if (!transitionDone) {
            transitionDone = true;
            timeSpeed = 400;
            time = 0;
        }

        if (transitionDone) {

        }

    }, transitionDone);

    return (
        <>
            <Text
                ref={ref}
                color={"black"}
                overflowWrap={"break-word"}
                letterSpacing={-0.5}
                textAlign="center"
                position={[-0.05, (viewport.height) / 2.9, 0.0]}
                maxWidth={(viewport.width / 100) * 25}
                scale={scale}
                font={font}
                outlineWidth={0.005}
                outlineColor={"white"}
            >
                The Dark Side of the Moon
            </Text>

        </>
    )
}

export default HeaderText