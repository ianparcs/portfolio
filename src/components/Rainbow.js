import React from "react";
import {Line} from "drei";

function RainbowLight() {
    return (
        <>
            <Line
                points={[[-0.5, 1, 0], [100, 0, 0]]}
                vertexColors={[[1, 1, 1], [0, 0, 0]]}
                color="red"
                lineWidth={11}
            />
            <Line
                points={[[-0.5, 1, 0], [100, -5, 0]]}
                vertexColors={[[1, 1, 1], [0, 0, 0]]}
                color="orange"
                lineWidth={10}
            />
            <Line
                points={[[-0.5, 1, 0], [100, -10, 0]]}
                vertexColors={[[1, 1, 1], [0, 0, 0]]}
                color="yellow"
                lineWidth={10}
            />
            <Line
                points={[[-0.5, 1, 0], [100, -15, 0]]}
                vertexColors={[[1, 1, 1], [0, 0, 0]]}
                color="green"
                lineWidth={10}
            />
            <Line
                points={[[-0.5, 1, 0], [100, -20, 0]]}
                vertexColors={[[1, 1, 1], [0, 0, 0]]}
                color={"blue"}
                lineWidth={10}
            />
            <Line
                points={[[-0.5, 1, 0], [100, -25, 0]]}
                vertexColors={[[1, 1, 1], [0, 0, 0]]}
                color="indigo"                   // Default
                lineWidth={10}
            />
            <Line
                points={[[-0.5, 1, 0], [100, -30, 0]]}
                vertexColors={[[1, 1, 1], [0, 0, 0]]}
                color="violet"                   // Default
                lineWidth={10}
            />
        </>
    )
}

export default RainbowLight