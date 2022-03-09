/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Testplant({ ...props }) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials } = useGLTF('/testplant.glb')

  
  useFrame((state, delta) => (group.current.rotation.y += 0.001))

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.pot.geometry} material={nodes.pot.material} />
      <mesh
        geometry={nodes.branch1.geometry}
        material={nodes.branch1.material}
        position={[-0.05, 0.01, 0]}
        rotation={[0, 0, -0.12]}
      />
      <mesh
        geometry={nodes.branch2.geometry}
        material={nodes.branch2.material}
        position={[0.08, -0.09, 0]}
        rotation={[0, 0, -0.12]}
        scale={[-1, 1, 1]}
      />
      <mesh geometry={nodes.leaves.geometry} material={nodes.leaves.material} position={[0, 2.67, 0]} />
    </group>
  )
}

useGLTF.preload('/testplant.glb')
