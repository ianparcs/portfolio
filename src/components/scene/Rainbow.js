import React, {useRef} from "react";
import {Line} from "drei";
import {useFrame} from "react-three-fiber";

function RainbowLight() {
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let ref5 = useRef();
  let ref6 = useRef();
  let ref7 = useRef();
  const colorLight = [1,1,1]
  useFrame((state) => {
    let time = state.clock.getElapsedTime() / 10;
    ref1.current.position.z = time * -4;
    ref2.current.position.z = time * -4;
    ref3.current.position.z = time * -4;
    ref4.current.position.z = time * -4;
    ref5.current.position.z = time * -4;
    ref6.current.position.z = time * -4;
    ref7.current.position.z = time * -4;
    ref1.current.position.y = time ;
    ref2.current.position.y = time ;
    ref3.current.position.y = time ;
    ref4.current.position.y = time ;
    ref5.current.position.y = time ;
    ref6.current.position.y = time ;
    ref7.current.position.y = time ;
    ref1.current.rotation.x = time;
    ref2.current.rotation.x = time;
    ref3.current.rotation.x = time;
    ref4.current.rotation.x = time;
    ref5.current.rotation.x = time;
    ref6.current.rotation.x = time;
    ref7.current.rotation.x = time;
  });
  return (
      <>
        <Line
            points={[[-500, -100.5, 50], [0, 0.7, 0.5], [0, 0, 0]]}
            vertexColors={[[5, 5, 5], [0, 0, 0]]}
            color="white"
            lineWidth={20}
        />
        <Line
            ref={ref1}
            points={[[0, 1.2, 0], [100, -10, 0]]}
            vertexColors={[colorLight, [0, 0, 0]]}
            color="red"
            lineWidth={10}
        />
        <Line
            ref={ref2}
            points={[[0, 1.2, 0], [100, -15, 0]]}
            vertexColors={[colorLight, [0, 0, 0]]}
            color="orange"
            lineWidth={10}
        />
        <Line
            ref={ref3}
            points={[[0, 1.2, 0], [100, -20, 0]]}
            vertexColors={[colorLight, [0, 0, 0]]}
            color="yellow"
            lineWidth={10}
        />
        <Line
            ref={ref4}
            points={[[0, 1.2, 0], [100, -25, 0]]}
            vertexColors={[colorLight, [0, 0, 0]]}
            color="green"
            lineWidth={10}
        />
        <Line
            ref={ref5}
            points={[[0, 1.2, 0], [100, -30, 0]]}
            vertexColors={[colorLight, [0, 0, 0]]}
            color={"blue"}
            lineWidth={10}
        />
        <Line
            ref={ref6}
            points={[[0, 1.2, 0], [100, -35, 0]]}
            vertexColors={[[1, 1, 1], [0, 0, 0]]}
            color="indigo"                   // Default
            lineWidth={10}
        />
        <Line
            ref={ref7}
            points={[[0, 1.2, 0], [100, -40, 0]]}
            vertexColors={[[1, 1, 1], [0, 0, 0]]}
            color="violet"                   // Default
            lineWidth={10}
        />
      </>
  )
}

export default RainbowLight