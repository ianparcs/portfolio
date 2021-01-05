import {Text} from "drei";
import React, {useRef} from "react"
import {useFrame, useThree} from "react-three-fiber";


function HeaderText() {
    const {viewport} = useThree();
    /*   const fontSize = useControl("fontSize", {type: "number", value: 0, min: 0.1, max: 1})
       const maxWidth = useControl("maxWidth", {type: "number", value: 1, min: 1, max: 100})
       const lineHeight = useControl("lineHeight", {type: "number", value: 1.45, min: 0.1, max: 10})
       const posX = useControl("posX", {type: "number", value: -0.73, min: -5, max: 5})
       const posY = useControl("posY", {type: "number", value: 0.45, min: -5, max: 5})
       const posZ = useControl("posZ", {type: "number", value: 0.80, min: -1, max: 1})*/

    let ref = useRef();
    let fontSizeLimit = 0.40;
    let letterSpacingLimit = 0.10;
    useFrame((state, delta) => {
        if (ref.current.fontSize <= fontSizeLimit) {
            ref.current.fontSize += 0.1 * delta;
        }

        if (ref.current.fontSize >= fontSizeLimit) {
            if (ref.current.letterSpacing <= letterSpacingLimit) {
                ref.current.letterSpacing += 0.2 * delta;
            } else if (ref.current.position.x >= -0.73) {
                ref.current.position.x -= 0.3 * delta;
            }
        }

    });

    return (
        <Text
            ref={ref}
            color={"#42a5f5"}
            fontSize={0}
            maxWidth={(viewport.width / 100)}
            lineHeight={1.45}
            letterSpacing={-0.5}
            textAlign="justify"
            position={[0, 0.45, 0.80]}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        >
            HELLO, I'M IAN PARCON. I'M A JAVA DEVELOPER.
        </Text>
    )
}

export default HeaderText