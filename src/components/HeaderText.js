import {Text, useAspect} from "drei";
import React, {useRef} from "react"
import {useFrame, useThree} from "react-three-fiber";
import font from "../assets/font/font.woff"

function HeaderText() {
    const {viewport} = useThree();
    const ref = useRef();
    const letterSpacingLimit = 0;
    const scaleLimit = 5;

    const scale = useAspect(
        "cover",
        1024,
        512,
        0
    );

    useFrame((state) => {
        let time = state.clock.getElapsedTime() / 300;
        if (ref.current.scale.x <= scaleLimit) {
            ref.current.scale.x += 7 * time;
            ref.current.scale.y += 7 * time;
        } else if (ref.current.letterSpacing <= letterSpacingLimit) {
            ref.current.letterSpacing += 0.1 * time;
        }
    });

    return (
        <>
            <Text
                ref={ref}
                color={"black"}
                overflowWrap={"break-word"}
                letterSpacing={-0.5}
                textAlign="center"
                position={[-0.05, (viewport.height) / 3.5, 0]}
                maxWidth={(viewport.width / 100) * 15}
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