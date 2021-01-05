import {Line} from "drei";
import React, {useRef} from "react"

function Light() {
    const tetrahedron = useRef();
    return (
        <Line
            ref={tetrahedron}
            points={[[-10, -2, 5], [0, 1, 0], [0, 0, 0]]}
            vertexColors={[[1, 1, 1], [0, 0, 0]]}
            color="white"
            lineWidth={12}
        />
    )
}

export default Light