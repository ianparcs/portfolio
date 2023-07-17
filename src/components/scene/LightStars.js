import * as THREE from 'three/src/Three'
import React, {useMemo, useRef} from 'react'
import {useFrame} from 'react-three-fiber'
import myInitObject from './Global'

function LightStars({count}) {
  let group = useRef();

  useFrame((state) => {
    const r = 1.5 * Math.sin(THREE.Math.degToRad((myInitObject.theta += 0.05)));
    const s = Math.cos(THREE.Math.degToRad(myInitObject.theta * 1.5));
    group.current.rotation.set(r, r, r);
    group.current.scale.set(s, s, s);

  });

  const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(0.4, 15, 15);
    const mat = new THREE.MeshBasicMaterial(
        {color: new THREE.Color('#ffffff')});

    const coords = new Array(count).fill().map(
        i => [Math.random() * 800 - 400, Math.random() * 800 - 400,
          Math.random() * 800 - 400]);
    return [geo, mat, coords]
  }, [count]);
  return (
      <group ref={group}>
        {coords.map(([p1, p2, p3], i) => (
            <mesh key={i} geometry={geo} material={mat}
                  position={[p1, p2, p3]}/>
        ))}
      </group>
  )
}

export default LightStars