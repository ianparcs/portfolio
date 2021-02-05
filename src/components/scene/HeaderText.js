import {Text, useAspect} from "drei";
import React, {useRef} from "react"
import {useFrame, useThree} from "react-three-fiber";
import font from "../../assets/font/font.woff"

function HeaderText() {
    const {viewport} = useThree();
    const ref = useRef();
    const ref1 = useRef();

    const letterSpacingLimit = 0.05;
    const scaleLimit = 5;

    const scale = useAspect(
        "cover",
        1024,
        512,
        0
    );
    let transitionDone = false;
    let timeSpeed = 300;
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
            if (ref1.current.scale.x <= scaleLimit - 2) {
                ref1.current.scale.x += 7 * time;
                ref1.current.scale.y += 7 * time;
            } else if (ref1.current.letterSpacing <= letterSpacingLimit) {
                ref1.current.letterSpacing += 0.1 * time;
            }
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
                Hello! I'm Ian.
            </Text>
            <Text
                ref={ref1}
                color={"black"}
                overflowWrap={"break-word"}
                letterSpacing={-0.5}
                textAlign="center"
                position={[-0.05, (viewport.height) / 3.9, 0.0]}
                maxWidth={(viewport.width / 100) * 30}
                scale={scale}
                font={font}
                outlineWidth={0.005}
                outlineColor={"white"}
            >
                I'm a software developer & hobbyist game developer.
            </Text>
        </>
    )
}

export default HeaderText