import React, {useCallback, useContext, useRef, useState} from "react"
import Context from "./HoverContext"

function useHover() {
    const ref = useRef()
    const setHovered = useContext(Context);
    const onPointerOver = useCallback(() => setHovered(state => [...state, ref.current]), []);
    const onPointerOut = useCallback(() => setHovered(state => state.filter(mesh => mesh !== ref.current)), []);
    return {ref, onPointerOver, onPointerOut}
}

function Pyramid() {
    const [onPress, setPress] = useState(false);

    return (
        <mesh
            visible
            rotation={[0.5, -0.5, -0.25]}
            position={[0, -1, 0]}
            scale={[2.5, 2.5, 2.5]}
            onClick={() => setPress(!onPress)}
            userData={onPress}
            {...useHover()}
        >
            <tetrahedronBufferGeometry attach="geometry"/>
            <meshStandardMaterial
                opacity={0.1}
                attach="material"
                color="gray"
                roughness={0.2}
                metalness={1}/>
        </mesh>
    )
}

export default Pyramid