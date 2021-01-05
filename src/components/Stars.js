import * as THREE from 'three/src/Three'
import React, {useMemo, useRef} from 'react'
import {useFrame} from 'react-three-fiber'

function Stars({count}) {
    let group = useRef()
    let theta = 0
    useFrame(() => {
        // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
        const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.05)))
        const s = Math.cos(THREE.Math.degToRad(theta * 1.5))
        group.current.rotation.set(r, r, r)
        group.current.scale.set(s, s, s)
    })
    const [geo, mat, coords] = useMemo(() => {
        const geo = new THREE.SphereBufferGeometry(0.8, 10, 10)
        const mat = new THREE.MeshBasicMaterial({color: new THREE.Color('lightblue' || 'yellow')})
        const coords = new Array(count).fill().map(i => [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400])
        return [geo, mat, coords]
    }, [])
    return (
        <group ref={group}>
            {coords.map(([p1, p2, p3], i) => (
                <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]}/>
            ))}
        </group>
    )
}

export default Stars